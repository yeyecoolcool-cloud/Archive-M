from pathlib import Path
from PIL import Image, ImageOps

SRC_DIR = Path("images")
OUT_DIR = Path("thumbs")
MAX_SIZE = (96, 128)  # timeline thumbnails; adjust to (120,160) if too blurry

VALID_EXTS = {".png", ".jpg", ".jpeg", ".webp"}


def save_png_optimized(img: Image.Image, out_path: Path) -> None:
    # Keep transparency if it exists; otherwise use RGB for smaller PNGs.
    if img.mode in ("RGBA", "LA") or (img.mode == "P" and "transparency" in img.info):
        img = img.convert("RGBA")
    else:
        img = img.convert("RGB")
    out_path.parent.mkdir(parents=True, exist_ok=True)
    img.save(out_path, format="PNG", optimize=True, compress_level=9)


def main() -> None:
    if not SRC_DIR.exists():
        raise SystemExit(f"未找到 {SRC_DIR.resolve()}。请把脚本放在和 images 文件夹同一级的项目根目录运行。")

    files = [p for p in SRC_DIR.rglob("*") if p.suffix.lower() in VALID_EXTS]
    if not files:
        raise SystemExit("images 文件夹里没有找到 png/jpg/webp 图片。")

    count = 0
    for src in files:
        rel = src.relative_to(SRC_DIR)
        out = OUT_DIR / rel.with_suffix(".png")
        try:
            with Image.open(src) as im:
                im = ImageOps.exif_transpose(im)
                im.thumbnail(MAX_SIZE, Image.Resampling.LANCZOS)
                save_png_optimized(im, out)
            count += 1
        except Exception as exc:
            print(f"跳过 {src}: {exc}")

    print(f"完成：生成 {count} 张缩略图到 {OUT_DIR.resolve()}")


if __name__ == "__main__":
    main()
