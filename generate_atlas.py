from pathlib import Path
from PIL import Image, ImageOps
import json

# 生成 sprite atlas：把 3000+ 张缩略图合并成少量 atlas 图片，减少网页请求数量。
# 放在项目根目录运行。优先读取 thumbs/，如果没有 thumbs/，则读取 images/ 并自动缩小。

SRC_DIR = Path("thumbs") if Path("thumbs").exists() else Path("images")
OUT_DIR = Path("atlas")
MAX_TILE = (96, 128)          # 单张广告缩略图最大尺寸；想更清晰可改成 (120, 160)
ATLAS_SIZE = 2048             # 单张 atlas 尺寸；2048 兼容性好
PADDING = 2                   # 每张图之间留 2px，避免边缘串色
WEBP_QUALITY = 72             # 质量；越高越清晰、越大
VALID_EXTS = {".png", ".jpg", ".jpeg", ".webp"}


def make_thumb(src: Path):
    with Image.open(src) as im:
        im = ImageOps.exif_transpose(im)
        im.thumbnail(MAX_TILE, Image.Resampling.LANCZOS)
        # 用白底合成，避免透明图在深色背景上边缘异常
        bg = Image.new("RGB", im.size, "white")
        if im.mode in ("RGBA", "LA") or (im.mode == "P" and "transparency" in im.info):
            bg.paste(im.convert("RGBA"), mask=im.convert("RGBA").split()[-1])
        else:
            bg.paste(im.convert("RGB"))
        return bg


def flush_atlas(atlas, index):
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    filename = f"atlas-{index}.webp"
    atlas.save(OUT_DIR / filename, format="WEBP", quality=WEBP_QUALITY, method=6)
    return filename


def main():
    if not SRC_DIR.exists():
        raise SystemExit("未找到 thumbs/ 或 images/。请把脚本放在项目根目录运行。")

    files = sorted([p for p in SRC_DIR.rglob("*") if p.suffix.lower() in VALID_EXTS])
    if not files:
        raise SystemExit(f"{SRC_DIR} 中没有找到图片。")

    # 重新生成，避免旧 atlas 残留
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for old in OUT_DIR.glob("atlas-*.webp"):
        old.unlink()

    manifest = {
        "atlasSize": ATLAS_SIZE,
        "padding": PADDING,
        "source": str(SRC_DIR),
        "items": {}
    }

    atlas_index = 0
    atlas = Image.new("RGB", (ATLAS_SIZE, ATLAS_SIZE), "white")
    x = PADDING
    y = PADDING
    row_h = 0
    current_file = f"atlas-{atlas_index}.webp"

    count = 0
    for src in files:
        try:
            thumb = make_thumb(src)
        except Exception as exc:
            print(f"跳过 {src}: {exc}")
            continue

        w, h = thumb.size
        if x + w + PADDING > ATLAS_SIZE:
            x = PADDING
            y += row_h + PADDING
            row_h = 0

        if y + h + PADDING > ATLAS_SIZE:
            flush_atlas(atlas, atlas_index)
            atlas_index += 1
            current_file = f"atlas-{atlas_index}.webp"
            atlas = Image.new("RGB", (ATLAS_SIZE, ATLAS_SIZE), "white")
            x = PADDING
            y = PADDING
            row_h = 0

        atlas.paste(thumb, (x, y))

        # id 用文件名去扩展名；保持和 CSV 图片编号一致
        item_id = src.stem
        manifest["items"][item_id] = {
            "file": current_file,
            "x": x,
            "y": y,
            "w": w,
            "h": h,
            "atlasW": ATLAS_SIZE,
            "atlasH": ATLAS_SIZE
        }

        x += w + PADDING
        row_h = max(row_h, h)
        count += 1

    flush_atlas(atlas, atlas_index)
    with open(OUT_DIR / "atlas-manifest.json", "w", encoding="utf-8") as f:
        json.dump(manifest, f, ensure_ascii=False, separators=(",", ":"))

    print(f"完成：{count} 张图片 → {atlas_index + 1} 张 atlas，输出到 {OUT_DIR.resolve()}")
    print("请把整个 atlas/ 文件夹上传到 OSS 根目录。")


if __name__ == "__main__":
    main()
