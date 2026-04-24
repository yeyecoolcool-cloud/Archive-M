const TAG_DEFS = [
  { code: "Aa1", label: "手写书法" }, { code: "Aa2", label: "宋体" }, { code: "Aa3", label: "无衬线" }, { code: "Aa4", label: "美术/装饰" },
  { code: "Ab1", label: "竖排" }, { code: "Ab2", label: "横排" }, { code: "Ab3", label: "混合" },
  { code: "Ac1", label: "写实" }, { code: "Ac2", label: "变形" }, { code: "Ad1", label: "绘图" }, { code: "Ad2", label: "摄影" },
  { code: "Ba1", label: "传统女性" }, { code: "Ba2", label: "新女性" }, { code: "Bb1", label: "传统男性" }, { code: "Bb2", label: "新男性" },
  { code: "Ca1", label: "科学词" }, { code: "Ca2", label: "科学依据" }, { code: "Cb1", label: "品牌名称" }, { code: "Cb2", label: "商标图形" }, { code: "Cb3", label: "注册商标" }, { code: "Cb4", label: "新创/谐音" },
  { code: "Da", label: "场景" }, { code: "Db", label: "语言" }, { code: "Dc", label: "地理" },
  { code: "Ea1", label: "纯商业" }, { code: "Ea2", label: "科普" }, { code: "Ea3", label: "爱国" }
];

const TAG_GROUPS = [
  { key: "visual", label: "视觉形式", codes: ["Aa1", "Aa2", "Aa3", "Aa4", "Ab1", "Ab2", "Ab3", "Ac1", "Ac2", "Ad1", "Ad2"] },
  { key: "identity", label: "身份与性别", codes: ["Ba1", "Ba2", "Bb1", "Bb2"] },
  { key: "text", label: "文本与话语", codes: ["Ca1", "Ca2", "Cb1", "Cb2", "Cb3", "Cb4"] },
  { key: "global", label: "全球符号", codes: ["Da", "Db", "Dc"] },
  { key: "social", label: "社会现代性", codes: ["Ea1", "Ea2", "Ea3"] }
];
const TAG_DEF_MAP = new Map(TAG_DEFS.map(tag => [tag.code, tag]));

const INDUSTRY_COLORS = {
  "纺织": "#ccb1de",
  "日化": "#a7ecb0",
  "橡胶": "#9bc9ae",
  "医药": "#efe7b9",
  "食品": "#ffc39b",
  "电器": "#d680ab",
  "塑料": "#95bcde",
  "搪瓷": "#f1d4a4",
  "油漆": "#c6b6e3",
  "纸业": "#b6dfd0",
  "化工": "#f5ea91",
  "钢铁": "#e4b8ae",
  "火柴": "#cad3a5",
  "其他": "#ddd4c8",
  "未知": "#cbc6bc"
};

const IMAGE_BASE_URL = "https://archive-m-images.oss-cn-hongkong.aliyuncs.com/images/";

const TIMELINE_MIN_SCALE = 0.22;
const TIMELINE_MAX_SCALE = 4.8;
const TIMELINE_SIDE_MARGIN = 18;
const TIMELINE_VERTICAL_MARGIN = 6;
const TIMELINE_STAGE_BOTTOM_PAD = 1;
const TIMELINE_AD_BAR_H = 3;
const TIMELINE_AD_IMG_H = 25;
const GRAPH_CENTER_RING_RADIUS = 66;
const GRAPH_CENTER_RING_STROKE_WIDTH = 1;
const GRAPH_CENTER_CIRCLE_RADIUS = 56;
const GRAPH_CENTER_CIRCLE_STROKE_WIDTH = 2;
const GRAPH_NODE_STROKE_WIDTH = 1.2;
const GRAPH_AD_MAX_W = 132;
const GRAPH_AD_MAX_H = 132;
const GRAPH_AD_FALLBACK_W = 76;
const GRAPH_AD_FALLBACK_H = 104;
const adImageMetaCache = new Map();

const state = {
  allAds: [],
  issues: [],
  issueIndexMap: new Map(),
  tagsSelected: new Set(),
  openTagGroups: new Set(),
  openIndustries: new Set(),
  pairsSelected: new Set(),
  viewMenuOpen: false,
  mode: "timeline",
  graphFocus: { industry: null, product: null, issueKey: null },
  detailAd: null,
  cameras: {
    timeline: { x: 0, y: 0, scale: 1 },
    graph: { x: 0, y: 0, scale: 1 }
  },
  timelineLayout: null,
  interaction: {
    suppressClickUntil: {
      timeline: 0,
      graph: 0
    }
  },
  graphSim: null,
  graphWorldBounds: null,
  graphRootEl: null
};

const refs = {
  tagRail: document.getElementById("tagRail"),
  resetBtn: document.getElementById("resetBtn"),
  clearTagBtn: document.getElementById("clearTagBtn"),
  viewSwitch: document.getElementById("viewSwitch"),
  viewToggleBtn: document.getElementById("viewToggleBtn"),
  viewMenuPanel: document.getElementById("viewMenuPanel"),
  timelineView: document.getElementById("timelineView"),
  graphView: document.getElementById("graphView"),
  timelineStage: document.getElementById("timelineStage"),
  timelineContainer: document.getElementById("timelineContainer"),
  timelineAxisOverlay: document.getElementById("timelineAxisOverlay"),
  industryList: document.getElementById("industryList"),
  graphSvg: document.getElementById("graphSvg"),
  graphCrumb: document.getElementById("graphCrumb"),
  graphBackBtn: document.getElementById("graphBackBtn"),
  statAds: document.getElementById("statAds"),
  statIssues: document.getElementById("statIssues"),
  statIndustries: document.getElementById("statIndustries"),
  statProducts: document.getElementById("statProducts"),
  tooltip: document.getElementById("tooltip"),
  detailModal: document.getElementById("detailModal"),
  closeModalBtn: document.getElementById("closeModalBtn"),
  detailImg: document.getElementById("detailImg"),
  detailTitle: document.getElementById("detailTitle"),
  detailMeta: document.getElementById("detailMeta"),
  detailTags: document.getElementById("detailTags"),
  similarRow: document.getElementById("similarRow"),
  detailFoot: document.getElementById("detailFoot"),
  focusInGraphBtn: document.getElementById("focusInGraphBtn")
};
const graphTextMeasureContext = document.createElement("canvas").getContext("2d");

init();

async function init() {
  bindGlobalEvents();
  syncViewMenu();
  renderTagRail();
  initPanZoomControllers();
  await loadCsv();
  buildDataIndexes();
  renderSidebar();
  renderAll();
}

function bindGlobalEvents() {
  document.querySelectorAll(".mode-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      setMode(btn.dataset.mode || "timeline");
    });
  });

  refs.viewToggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    state.viewMenuOpen = !state.viewMenuOpen;
    syncViewMenu();
  });

  refs.clearTagBtn.addEventListener("click", () => {
    state.tagsSelected.clear();
    renderTagRail();
    renderAll();
  });

  refs.resetBtn.addEventListener("click", () => {
    state.tagsSelected.clear();
    state.openTagGroups.clear();
    state.openIndustries.clear();
    state.pairsSelected.clear();
    state.viewMenuOpen = false;
    state.graphFocus = { industry: null, product: null, issueKey: null };
    resetCameras();
    syncViewMenu();
    renderTagRail();
    renderSidebar();
    renderAll();
  });

  refs.graphBackBtn.addEventListener("click", stepGraphBack);
  refs.closeModalBtn.addEventListener("click", closeDetailModal);
  refs.detailModal.addEventListener("click", (e) => {
    if (e.target === refs.detailModal) closeDetailModal();
  });

  refs.focusInGraphBtn.addEventListener("click", () => {
    if (!state.detailAd) return;
    state.graphFocus = {
      industry: state.detailAd.industry,
      product: state.detailAd.product,
      issueKey: state.detailAd.issueKey
    };
    setMode("graph");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDetailModal();
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".filter-groups") && state.openTagGroups.size) {
      state.openTagGroups.clear();
      renderTagRail();
    }
    if (!e.target.closest(".view-switch") && state.viewMenuOpen) {
      state.viewMenuOpen = false;
      syncViewMenu();
    }
  });

  window.addEventListener("resize", () => {
    enforceCameraBounds("timeline");
    enforceCameraBounds("graph");
    renderTimelineAxis();
  });
}

function syncViewMenu() {
  refs.viewSwitch.classList.toggle("open", state.viewMenuOpen);
  refs.viewToggleBtn.setAttribute("aria-expanded", state.viewMenuOpen ? "true" : "false");
}

function initPanZoomControllers() {
  setupPanZoom({
    viewport: refs.timelineContainer,
    modeKey: "timeline",
    ignoreTarget: () => false,
    isInteractiveTarget: (target) => !!target.closest(".ad-point"),
    minScale: TIMELINE_MIN_SCALE,
    maxScale: TIMELINE_MAX_SCALE,
    getScaleBounds: () => getTimelineScaleBounds()
  });

  setupPanZoom({
    viewport: refs.graphView,
    modeKey: "graph",
    ignoreTarget: (target) => !!target.closest(".graph-header"),
    isInteractiveTarget: (target) => !!target.closest(".graph-node, .graph-center-node"),
    minScale: 0.35,
    maxScale: 3.8,
    getScaleBounds: () => getGraphScaleBounds()
  });
}

function setupPanZoom(opts) {
  const viewport = opts.viewport;
  const modeKey = opts.modeKey;
  const ignoreTarget = opts.ignoreTarget;
  const isInteractiveTarget = opts.isInteractiveTarget || (() => false);
  let dragging = false;
  let moved = false;
  let startX = 0;
  let startY = 0;
  let lastX = 0;
  let lastY = 0;
  let activePointerId = null;

  viewport.addEventListener("pointerdown", (e) => {
    if (refs.detailModal.classList.contains("open")) return;
    if (ignoreTarget(e.target)) return;
    if (e.pointerType === "mouse" && e.button !== 0) return;
    if (isInteractiveTarget(e.target)) return;
    dragging = true;
    moved = false;
    startX = e.clientX;
    startY = e.clientY;
    lastX = e.clientX;
    lastY = e.clientY;
    activePointerId = e.pointerId;
    viewport.classList.add("dragging");
    if (viewport.setPointerCapture) viewport.setPointerCapture(e.pointerId);
  });

  viewport.addEventListener("pointermove", (e) => {
    if (!dragging || (activePointerId !== null && e.pointerId !== activePointerId)) return;
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    lastX = e.clientX;
    lastY = e.clientY;
    if (Math.abs(e.clientX - startX) + Math.abs(e.clientY - startY) > 6) moved = true;

    const cam = state.cameras[modeKey];
    cam.x += dx;
    cam.y += dy;
    applyCamera(modeKey);
  });

  const endDrag = (e) => {
    if (!dragging) return;
    if (activePointerId !== null && e && e.pointerId !== activePointerId) return;
    dragging = false;
    activePointerId = null;
    viewport.classList.remove("dragging");
    if (moved) state.interaction.suppressClickUntil[modeKey] = Date.now() + 120;
    if (e && viewport.releasePointerCapture && viewport.hasPointerCapture && viewport.hasPointerCapture(e.pointerId)) {
      viewport.releasePointerCapture(e.pointerId);
    }
  };

  viewport.addEventListener("pointerup", endDrag);
  viewport.addEventListener("pointercancel", endDrag);

  viewport.addEventListener("wheel", (e) => {
    if (ignoreTarget(e.target)) return;
    e.preventDefault();

    const bounds = getScaleBounds(opts);
    const isZoomGesture = e.ctrlKey || e.metaKey || e.altKey;
    if (isZoomGesture) {
      const factor = Math.exp(-e.deltaY * 0.0025);
      zoomAt(viewport, modeKey, factor, e.clientX, e.clientY, bounds.min, bounds.max);
      return;
    }

    const cam = state.cameras[modeKey];
    cam.x -= e.deltaX;
    cam.y -= e.deltaY;
    applyCamera(modeKey);
  }, { passive: false });

  viewport.addEventListener("dblclick", (e) => {
    if (ignoreTarget(e.target)) return;
    const bounds = getScaleBounds(opts);
    zoomAt(viewport, modeKey, 1.25, e.clientX, e.clientY, bounds.min, bounds.max);
  });
}

function getScaleBounds(opts) {
  let min = opts.minScale;
  let max = opts.maxScale;
  if (opts.getScaleBounds) {
    const dynamic = opts.getScaleBounds();
    if (dynamic) {
      if (Number.isFinite(dynamic.min)) min = dynamic.min;
      if (Number.isFinite(dynamic.max)) max = dynamic.max;
    }
  }
  if (max < min) max = min;
  return { min, max };
}

function zoomAt(viewport, modeKey, factor, clientX, clientY, minScale, maxScale) {
  const cam = state.cameras[modeKey];
  const rect = viewport.getBoundingClientRect();
  const px = clientX - rect.left;
  const py = clientY - rect.top;
  const worldX = (px - cam.x) / cam.scale;
  const worldY = (py - cam.y) / cam.scale;
  const nextScale = clamp(cam.scale * factor, minScale, maxScale);
  cam.scale = nextScale;
  cam.x = px - worldX * nextScale;
  cam.y = py - worldY * nextScale;
  applyCamera(modeKey);
}

function resetCameras() {
  state.cameras.timeline.x = 0;
  state.cameras.timeline.y = 0;
  state.cameras.timeline.scale = 1;
  state.cameras.graph.x = 0;
  state.cameras.graph.y = 0;
  state.cameras.graph.scale = 1;
  applyCamera("timeline");
  applyCamera("graph");
}

function applyCamera(modeKey) {
  const cam = state.cameras[modeKey];
  enforceCameraBounds(modeKey);
  const tf = "translate(" + cam.x + "px, " + cam.y + "px) scale(" + cam.scale + ")";
  if (modeKey === "timeline") refs.timelineStage.style.transform = tf;
  if (modeKey === "graph") {
    const rootEl = state.graphRootEl;
    if (rootEl) {
      rootEl.setAttribute("transform", "translate(" + cam.x + "," + cam.y + ") scale(" + cam.scale + ")");
      refs.graphSvg.style.transform = "";
    } else {
      refs.graphSvg.style.transform = tf;
    }
  }
  if (modeKey === "timeline") renderTimelineAxis();
}

function clamp(v, lo, hi) {
  return Math.min(hi, Math.max(lo, v));
}

function shouldSuppressClick(modeKey) {
  return Date.now() < state.interaction.suppressClickUntil[modeKey];
}

function getTimelineScaleBounds() {
  const layout = state.timelineLayout;
  if (!layout) return { min: TIMELINE_MIN_SCALE, max: TIMELINE_MAX_SCALE };
  const vh = Math.max(1, refs.timelineContainer.clientHeight - layout.axisOverlayH);
  const contentTopY = Number.isFinite(layout.contentTopY) ? layout.contentTopY : 0;
  const contentBottomY = Number.isFinite(layout.contentBottomY) ? layout.contentBottomY : layout.totalH;
  const contentH = Math.max(1, contentBottomY - contentTopY);
  const fitY = Math.max(0.01, (vh - TIMELINE_VERTICAL_MARGIN * 2) / contentH);
  return { min: clamp(fitY, TIMELINE_MIN_SCALE, 1), max: TIMELINE_MAX_SCALE };
}

function getGraphScaleBounds() {
  const b = state.graphWorldBounds;
  if (!b) return { min: 0.005, max: 3.8 };
  const vw = Math.max(1, refs.graphView.clientWidth);
  const vh = Math.max(1, refs.graphView.clientHeight);
  const pad = 56;
  const bw = Math.max(1, (b.maxX - b.minX) + pad * 2);
  const bh = Math.max(1, (b.maxY - b.minY) + pad * 2);
  const fit = Math.min(vw / bw, vh / bh);
  const minScale = clamp(fit * 0.98, 0.005, 0.35);
  return { min: minScale, max: 3.8 };
}

function enforceCameraBounds(modeKey) {
  const cam = state.cameras[modeKey];
  if (modeKey === "timeline") {
    const layout = state.timelineLayout;
    if (!layout) return;
    const bounds = getTimelineScaleBounds();
    cam.scale = clamp(cam.scale, bounds.min, bounds.max);
    const vw = Math.max(1, refs.timelineContainer.clientWidth);
    const vh = Math.max(1, refs.timelineContainer.clientHeight - layout.axisOverlayH);
    const contentLeftX = Number.isFinite(layout.contentLeftX) ? layout.contentLeftX : 0;
    const contentRightX = Number.isFinite(layout.contentRightX) ? layout.contentRightX : layout.totalW;
    const contentW = Math.max(1, contentRightX - contentLeftX);
    const scaledContentW = contentW * cam.scale;
    const contentTopY = Number.isFinite(layout.contentTopY) ? layout.contentTopY : 0;
    const contentBottomY = Number.isFinite(layout.contentBottomY) ? layout.contentBottomY : layout.totalH;
    const contentH = Math.max(1, contentBottomY - contentTopY);
    const scaledContentH = contentH * cam.scale;
    if (scaledContentW <= vw) {
      cam.x = (vw - (contentLeftX + contentRightX) * cam.scale) / 2;
    } else {
      const minX = vw - contentRightX * cam.scale - TIMELINE_SIDE_MARGIN;
      const maxX = TIMELINE_SIDE_MARGIN - contentLeftX * cam.scale;
      cam.x = clamp(cam.x, minX, maxX);
    }
    if (scaledContentH <= vh) {
      cam.y = (vh - (contentTopY + contentBottomY) * cam.scale) / 2;
    } else {
      const minY = vh - contentBottomY * cam.scale - TIMELINE_VERTICAL_MARGIN;
      const maxY = TIMELINE_VERTICAL_MARGIN - contentTopY * cam.scale;
      cam.y = clamp(cam.y, minY, maxY);
    }
    return;
  }

  const vw = Math.max(1, refs.graphView.clientWidth);
  const vh = Math.max(1, refs.graphView.clientHeight);
  const b = state.graphWorldBounds;
  if (!b) {
    const cw = vw * cam.scale;
    const ch = vh * cam.scale;
    const m = 180;
    if (cw <= vw) cam.x = (vw - cw) / 2;
    else cam.x = clamp(cam.x, vw - cw - m, m);
    if (ch <= vh) cam.y = (vh - ch) / 2;
    else cam.y = clamp(cam.y, vh - ch - m, m);
    return;
  }

  const m = 160;
  const bw = (b.maxX - b.minX) * cam.scale;
  const bh = (b.maxY - b.minY) * cam.scale;
  if (bw <= vw) {
    cam.x = (vw - (b.maxX + b.minX) * cam.scale) / 2;
  } else {
    const minX = vw - b.maxX * cam.scale - m;
    const maxX = -b.minX * cam.scale + m;
    cam.x = clamp(cam.x, minX, maxX);
  }
  if (bh <= vh) {
    cam.y = (vh - (b.maxY + b.minY) * cam.scale) / 2;
  } else {
    const minY = vh - b.maxY * cam.scale - m;
    const maxY = -b.minY * cam.scale + m;
    cam.y = clamp(cam.y, minY, maxY);
  }
}

function getAdaptiveTickStep(pxPerIssue) {
  const targetPx = 72;
  const raw = targetPx / Math.max(1, pxPerIssue);
  const p = Math.pow(10, Math.floor(Math.log10(raw)));
  const base = raw / p;
  let unit = 1;
  if (base > 1) unit = 2;
  if (base > 2) unit = 5;
  if (base > 5) unit = 10;
  return Math.max(1, Math.ceil(unit * p));
}

function renderTimelineAxis() {
  const overlay = refs.timelineAxisOverlay;
  const layout = state.timelineLayout;
  overlay.innerHTML = "";
  if (!layout || !state.issues.length) return;

  const cam = state.cameras.timeline;
  const viewW = Math.max(1, refs.timelineContainer.clientWidth);
  const pxPerIssue = layout.gapX * cam.scale;
  const step = getAdaptiveTickStep(pxPerIssue);
  const yearLabelRanges = [];

  const main = document.createElement("div");
  main.className = "axis-mainline";
  overlay.appendChild(main);

  let lastYear = null;
  let lastYearX = -9999;

  for (let i = 0; i < state.issues.length; i += 1) {
    const it = state.issues[i];
    const worldX = layout.leftPad + i * layout.gapX;
    const sx = cam.x + worldX * cam.scale;
    if (sx < -90 || sx > viewW + 90) continue;
    if (it.year === lastYear) continue;
    if (sx - lastYearX < 56) continue;
    const yl = document.createElement("div");
    yl.className = "axis-year-label";
    yl.style.left = sx + "px";
    yl.textContent = String(it.year);
    overlay.appendChild(yl);
    const yearHalfW = measureAxisLabelHalfWidth(it.year, 11, 500, 0.8, 18);
    yearLabelRanges.push({
      minX: sx - yearHalfW,
      maxX: sx + yearHalfW
    });
    lastYear = it.year;
    lastYearX = sx;
  }

  for (let i = 0; i < state.issues.length; i += step) {
    const it = state.issues[i];
    const worldX = layout.leftPad + i * layout.gapX;
    const sx = cam.x + worldX * cam.scale;
    if (sx < -70 || sx > viewW + 70) continue;

    const tick = document.createElement("div");
    tick.className = "axis-tick";
    tick.style.left = sx + "px";
    overlay.appendChild(tick);

    const issueHalfW = measureAxisLabelHalfWidth(it.issue, 10, 400, 0.8, 0);
    const overlapsYear = yearLabelRanges.some(range =>
      (sx - issueHalfW) <= range.maxX && (sx + issueHalfW) >= range.minX
    );
    if (overlapsYear) continue;

    const issueLabel = document.createElement("div");
    issueLabel.className = "axis-issue-label";
    issueLabel.style.left = sx + "px";
    issueLabel.textContent = String(it.issue);
    overlay.appendChild(issueLabel);
  }
}

async function loadCsv() {
  const text = await fetch("data3.csv").then(r => r.text());
  const rows = parseCsv(text);
  state.allAds = rows.map((row, idx) => normalizeRow(row, idx)).filter(Boolean);
}

function parseCsv(text) {
  const rows = [];
  let cur = "";
  let inQuote = false;
  const matrix = [];
  let row = [];

  for (let i = 0; i < text.length; i += 1) {
    const c = text[i];
    if (c === "\"") {
      if (inQuote && text[i + 1] === "\"") {
        cur += "\"";
        i += 1;
      } else {
        inQuote = !inQuote;
      }
      continue;
    }
    if (c === "," && !inQuote) {
      row.push(cur);
      cur = "";
      continue;
    }
    if ((c === "\n" || c === "\r") && !inQuote) {
      if (c === "\r" && text[i + 1] === "\n") i += 1;
      row.push(cur);
      cur = "";
      if (row.length > 1 || (row[0] || "").trim()) matrix.push(row);
      row = [];
      continue;
    }
    cur += c;
  }

  if (cur.length || row.length) {
    row.push(cur);
    matrix.push(row);
  }

  const headers = (matrix.shift() || []).map(h => (h || "").trim().replace(/^\uFEFF/, ""));
  matrix.forEach(cols => {
    const r = {};
    headers.forEach((h, idx) => {
      r[h] = (cols[idx] || "").trim();
    });
    rows.push(r);
  });
  return rows;
}

function normalizeRow(row, index) {
  const id = (row["图片编号"] || "").trim();
  if (!id) return null;
  const parts = id.split("-");
  const year = parseInt(parts[0], 10);
  const issue = parseInt(parts[1], 10);
  if (!Number.isFinite(year) || !Number.isFinite(issue)) return null;
  const tagList = TAG_DEFS.filter(t => (row[t.code] || "").trim() === "1").map(t => t.code);
  const industry = (row["industry"] || "其他").trim() || "其他";
  const product = (row["product"] || "未知").trim() || "未知";
  return {
    index,
    id,
    year,
    issue,
    issueKey: year + "-" + issue,
    industry,
    product,
    color: INDUSTRY_COLORS[industry] || INDUSTRY_COLORS["其他"],
    tagList,
    imgSrc: IMAGE_BASE_URL + id + ".png"
  };
}

function buildDataIndexes() {
  const issueMap = new Map();
  const stackMap = new Map();
  state.allAds.forEach(ad => {
    if (!issueMap.has(ad.issueKey)) {
      issueMap.set(ad.issueKey, { key: ad.issueKey, year: ad.year, issue: ad.issue });
    }
    const stack = stackMap.get(ad.issueKey) || 0;
    ad.stackIndex = stack;
    stackMap.set(ad.issueKey, stack + 1);
  });
  state.issues = Array.from(issueMap.values()).sort((a, b) => a.year - b.year || a.issue - b.issue);
  state.issueIndexMap = new Map(state.issues.map((obj, idx) => [obj.key, idx]));
}

function renderTagRail() {
  refs.tagRail.innerHTML = "";
  TAG_GROUPS.forEach((group) => {
    const selectedCodes = group.codes.filter(code => state.tagsSelected.has(code));
    const selectedLabels = selectedCodes
      .map(code => TAG_DEF_MAP.get(code))
      .filter(Boolean)
      .map(tag => tag.label);

    const groupEl = document.createElement("div");
    groupEl.className = "filter-group"
      + (state.openTagGroups.has(group.key) ? " open" : "")
      + (selectedCodes.length ? " has-active" : "");

    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "filter-group-trigger";
    trigger.setAttribute("aria-expanded", state.openTagGroups.has(group.key) ? "true" : "false");

    const title = document.createElement("span");
    title.className = "filter-group-title";
    title.textContent = group.label;

    const summary = document.createElement("span");
    summary.className = "filter-group-summary";
    summary.textContent = getTagGroupSummary(selectedLabels);

    const arrow = document.createElement("span");
    arrow.className = "filter-group-arrow";
    arrow.textContent = "▾";

    trigger.appendChild(title);
    trigger.appendChild(summary);
    trigger.appendChild(arrow);
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      if (state.openTagGroups.has(group.key)) state.openTagGroups.delete(group.key);
      else state.openTagGroups.add(group.key);
      renderTagRail();
    });

    const panel = document.createElement("div");
    panel.className = "filter-group-panel" + (group.codes.length <= 6 ? " compact" : "");
    panel.addEventListener("click", (e) => e.stopPropagation());

    const grid = document.createElement("div");
    grid.className = "filter-group-grid" + (group.codes.length <= 6 ? " single-column" : "");

    group.codes.forEach((code) => {
      const tag = TAG_DEF_MAP.get(code);
      if (!tag) return;
      const option = document.createElement("button");
      option.type = "button";
      option.className = "filter-option" + (state.tagsSelected.has(code) ? " active" : "");
      option.textContent = tag.label;
      option.addEventListener("click", (e) => {
        e.stopPropagation();
        if (state.tagsSelected.has(code)) state.tagsSelected.delete(code);
        else state.tagsSelected.add(code);
        renderTagRail();
        renderAll();
      });
      grid.appendChild(option);
    });

    panel.appendChild(grid);
    groupEl.appendChild(trigger);
    groupEl.appendChild(panel);
    refs.tagRail.appendChild(groupEl);
  });
}

function getTagGroupSummary(selectedLabels) {
  if (!selectedLabels.length) return "全部";
  if (selectedLabels.length <= 2) return selectedLabels.join(" / ");
  return "已选 " + selectedLabels.length + " 项";
}

function renderSidebar() {
  const map = groupByIndustryProduct(state.allAds);
  refs.industryList.innerHTML = "";
  const industries = Array.from(map.keys()).sort((a, b) => {
    const ac = sumCounts(map.get(a));
    const bc = sumCounts(map.get(b));
    return bc - ac;
  });

  industries.forEach((industry) => {
    const products = map.get(industry);
    const total = sumCounts(products);
    const isOpen = state.openIndustries.has(industry);
    const block = document.createElement("div");
    block.className = "industry-block" + (isOpen ? " open" : "");
    const blockInner = document.createElement("div");
    blockInner.className = "industry-block-inner";

    const head = document.createElement("div");
    head.className = "industry-head";
    const industryColor = INDUSTRY_COLORS[industry] || "#e7e3da";
    head.style.setProperty("--industry-head-bg", industryColor);
    head.style.setProperty("--industry-head-ink", isDarkHex(industryColor) ? "#ffffff" : "#000000");
    head.innerHTML = "<div class=\"industry-head-inner\"><div class=\"left\"><span>" + escapeHtml(industry) + "</span></div><span>" + total + "</span></div>";
    const body = document.createElement("div");
    body.className = "industry-products" + (isOpen ? " open" : "");
    head.addEventListener("click", () => {
      if (state.openIndustries.has(industry)) state.openIndustries.delete(industry);
      else state.openIndustries.add(industry);
      renderSidebar();
    });

    Array.from(products.entries()).sort((a, b) => b[1] - a[1]).forEach(([product, count]) => {
      const key = industry + "|" + product;
      const row = document.createElement("div");
      row.className = "product-item" + (state.pairsSelected.has(key) ? " active" : "");
      row.innerHTML = "<div class=\"product-item-inner\"><span>" + escapeHtml(product) + "</span><span>" + count + "</span></div>";
      row.addEventListener("click", () => {
        if (state.pairsSelected.has(key)) state.pairsSelected.delete(key);
        else state.pairsSelected.add(key);
        renderSidebar();
        renderAll();
      });
      body.appendChild(row);
    });

    blockInner.appendChild(head);
    blockInner.appendChild(body);
    block.appendChild(blockInner);
    refs.industryList.appendChild(block);
  });
}

function setMode(mode) {
  state.mode = mode;
  state.viewMenuOpen = false;
  syncViewMenu();
  document.querySelectorAll(".mode-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.mode === mode);
  });
  refs.timelineView.classList.toggle("active", mode === "timeline");
  refs.graphView.classList.toggle("active", mode === "graph");
  renderAll();
}

function renderAll() {
  const filtered = getFilteredAds();
  updateStats(filtered);
  renderTimeline(filtered);
  renderGraph(filtered);
}

function getFilteredAds() {
  const hasPair = state.pairsSelected.size > 0;
  const hasTag = state.tagsSelected.size > 0;
  return state.allAds.filter(ad => {
    const pairOk = !hasPair || state.pairsSelected.has(ad.industry + "|" + ad.product);
    const tagOk = !hasTag || Array.from(state.tagsSelected).every(t => ad.tagList.includes(t));
    return pairOk && tagOk;
  });
}

function updateStats(filtered) {
  const issueSet = new Set(filtered.map(d => d.issueKey));
  const industrySet = new Set(filtered.map(d => d.industry));
  const productSet = new Set(filtered.map(d => d.product));
  refs.statAds.textContent = filtered.length;
  refs.statIssues.textContent = issueSet.size;
  refs.statIndustries.textContent = industrySet.size;
  refs.statProducts.textContent = productSet.size;
}

function renderTimeline(filtered) {
  const stage = refs.timelineStage;
  stage.innerHTML = "";
  primeTimelineAdImageMeta();
  const gapX = 34;
  const leftPad = 74;
  const topPad = 24;
  const rowH = 31;
  const adH = TIMELINE_AD_IMG_H + TIMELINE_AD_BAR_H;
  const axisOverlayH = 72;
  const timelineAdSizes = state.allAds.map(ad => getTimelineAdSize(ad));

  const maxStack = state.allAds.reduce((m, a) => Math.max(m, a.stackIndex), 0);
  const totalW = Math.max(1100, state.issues.length * gapX + 160);
  const maxHalfW = timelineAdSizes.reduce((m, size) => Math.max(m, size.w * 0.5), 11);
  const contentLeftX = leftPad - maxHalfW;
  const contentRightX = leftPad + Math.max(0, state.issues.length - 1) * gapX + maxHalfW;
  const contentTopY = topPad;
  const contentBottomY = topPad + maxStack * rowH + adH;
  const totalH = contentBottomY + TIMELINE_STAGE_BOTTOM_PAD;
  stage.style.width = totalW + "px";
  stage.style.height = totalH + "px";

  state.timelineLayout = {
    totalW,
    totalH,
    leftPad,
    gapX,
    axisOverlayH,
    contentLeftX,
    contentRightX,
    contentTopY,
    contentBottomY
  };

  const filteredSet = new Set(filtered.map(d => d.id));
  state.allAds.forEach((ad, adIndex) => {
    const idx = state.issueIndexMap.get(ad.issueKey);
    if (idx == null) return;
    const adSize = timelineAdSizes[adIndex];
    const x = leftPad + idx * gapX - adSize.w / 2;
    const y = topPad + (maxStack - ad.stackIndex) * rowH;
    const el = document.createElement("div");
    el.className = "ad-point" + (filteredSet.has(ad.id) ? "" : " dimmed");
    el.style.left = x + "px";
    el.style.top = y + "px";
    el.style.width = adSize.w + "px";
    el.style.height = adH + "px";
    el.style.borderBottomColor = ad.color;

    const img = document.createElement("img");
    img.src = ad.imgSrc;
    img.alt = ad.id;
    el.appendChild(img);

    el.addEventListener("mouseenter", (e) => showTooltip(e, ad));
    el.addEventListener("mousemove", moveTooltip);
    el.addEventListener("mouseleave", hideTooltip);
    el.addEventListener("pointerdown", (e) => e.stopPropagation());
    el.addEventListener("click", () => {
      if (shouldSuppressClick("timeline")) return;
      if (!filteredSet.has(ad.id)) return;
      openDetailModal(ad);
    });
    stage.appendChild(el);
  });

  applyCamera("timeline");
}

function getTimelineAdSize(ad) {
  const meta = ad && ad.imgSrc ? adImageMetaCache.get(ad.imgSrc) : null;
  const sourceW = meta && Number.isFinite(meta.w) && meta.w > 0 ? meta.w : GRAPH_AD_FALLBACK_W;
  const sourceH = meta && Number.isFinite(meta.h) && meta.h > 0 ? meta.h : GRAPH_AD_FALLBACK_H;
  const scale = TIMELINE_AD_IMG_H / Math.max(1, sourceH);
  return {
    w: Math.max(10, sourceW * scale),
    h: TIMELINE_AD_IMG_H
  };
}

function primeTimelineAdImageMeta() {
  const pending = state.allAds
    .map(ad => ensureAdImageMeta(ad.imgSrc))
    .filter(Boolean);
  if (!pending.length) return;
  Promise.all(pending).then(() => {
    if (state.mode !== "timeline") return;
    renderTimeline(getFilteredAds());
  }).catch(() => {});
}

function renderGraph(filtered) {
  const svgEl = refs.graphSvg;
  const w = svgEl.clientWidth || 900;
  const h = svgEl.clientHeight || 600;
  if (state.graphSim) {
    state.graphSim.stop();
    state.graphSim = null;
  }

  if (typeof d3 === "undefined") {
    state.graphRootEl = null;
    svgEl.innerHTML = "";
    drawSvgText(svgEl, w / 2, h / 2, "未加载到 d3.js", 16, "#000000");
    return;
  }

  const svg = d3.select(svgEl);
  svg.selectAll("*").remove();
  state.graphRootEl = null;
  if (!filtered.length) {
    state.graphWorldBounds = null;
    drawSvgText(svgEl, w / 2, h / 2, "当前筛选下暂无数据", 16, "#000000");
    refs.graphCrumb.textContent = "图谱层级：无结果";
    applyCamera("graph");
    return;
  }

  primeGraphAdImageMeta(filtered, state.graphFocus);

  const model = buildGraphModel(filtered, state.graphFocus, w, h);
  refs.graphCrumb.textContent = model.crumb;
  const hasGraphSelection = !!(state.graphFocus.industry || state.graphFocus.product || state.graphFocus.issueKey);

  const root = svg.append("g").attr("class", "graph-root");
  state.graphRootEl = root.node();
  const linkLayer = root.append("g").attr("class", "graph-link-layer");
  const nodeLayer = root.append("g").attr("class", "graph-node-layer");
  const centerLayer = root.append("g").attr("class", "graph-center-layer");

  const adjacency = new Map(model.nodes.map(n => [n.id, new Set()]));
  model.links.forEach(l => {
    adjacency.get(l.source).add(l.target);
    adjacency.get(l.target).add(l.source);
  });

  const linkSel = linkLayer.selectAll("path.graph-link")
    .data(model.links, d => d.id)
    .join("path")
    .attr("class", "graph-link");

  const barNodes = model.nodes.filter(n => !n.isCenter);
  const centerNodes = model.nodes.filter(n => n.isCenter);
  centerNodes.forEach((n) => {
    n.linkRadius = hasGraphSelection
      ? (GRAPH_CENTER_RING_RADIUS + GRAPH_CENTER_RING_STROKE_WIDTH * 0.5)
      : (GRAPH_CENTER_CIRCLE_RADIUS + GRAPH_CENTER_CIRCLE_STROKE_WIDTH * 0.5);
  });
  let hoverClearTimer = null;
  const isGraphNodeTarget = (el) => !!(el && el.closest && el.closest(".graph-node, .graph-center-node"));

  const nodeSel = nodeLayer.selectAll("g.graph-node")
    .data(barNodes, d => d.id)
    .join(enter => {
      const g = enter.append("g")
        .attr("class", d => {
          let cls = "graph-node";
          if (d.isTruncated) cls += " truncated";
          if (d.kind === "ad") cls += " ad-node";
          return cls;
        })
        .style("--node-fill", d => d.fillColor || null)
        .style("--node-fill-truncated", d => d.fillColor || null)
        .style("--node-stroke", d => d.strokeColor || null)
        .style("--node-text", d => d.textColor || null)
        .style("--node-subtext", d => d.subtextColor || null)
        .on("click", (event, d) => {
          event.stopPropagation();
          if (shouldSuppressClick("graph")) return;
          handleGraphNodeClick(d);
        })
        .on("mouseenter", (event, d) => {
          if (hoverClearTimer) {
            clearTimeout(hoverClearTimer);
            hoverClearTimer = null;
          }
          setGraphHover(d);
          showGraphNodeTooltip(event, d);
        })
        .on("mousemove", moveTooltip)
        .on("mouseleave", (event) => {
          if (isGraphNodeTarget(event.relatedTarget)) return;
          if (hoverClearTimer) clearTimeout(hoverClearTimer);
          hoverClearTimer = setTimeout(() => {
            clearGraphHover();
            hoverClearTimer = null;
          }, 56);
          hideTooltip();
        });
      const body = g.append("g").attr("class", "graph-node-body");
      const nonAdBody = body.filter(d => d.kind !== "ad");
      nonAdBody.append("rect")
        .attr("class", "graph-node-rect")
        .attr("x", d => -d.w / 2)
        .attr("y", d => -d.h / 2)
        .attr("width", d => d.w)
        .attr("height", d => d.h)
        .attr("rx", d => Math.min(18, d.h / 2))
        .attr("ry", d => Math.min(18, d.h / 2));
      nonAdBody.append("text")
        .attr("class", "graph-node-text")
        .attr("x", 0)
        .attr("y", d => d.subtext ? -4 : 5)
        .text(d => d.displayLabel);
      nonAdBody.filter(d => !!d.subtext)
        .append("text")
        .attr("class", "graph-node-subtext")
        .attr("x", 0)
        .attr("y", 14)
        .text(d => d.subtext);

      const adBody = body.filter(d => d.kind === "ad");
      adBody.filter(d => !!(d.payload && d.payload.imgSrc))
        .append("image")
        .attr("class", "graph-ad-image")
        .attr("x", d => -d.w / 2)
        .attr("y", d => -d.h / 2)
        .attr("width", d => d.w)
        .attr("height", d => d.h)
        .attr("preserveAspectRatio", "xMidYMid meet")
        .attr("href", d => d.payload.imgSrc);
      adBody.append("rect")
        .attr("class", "graph-ad-hitbox")
        .attr("x", d => -d.w / 2)
        .attr("y", d => -d.h / 2)
        .attr("width", d => d.w)
        .attr("height", d => d.h);
      adBody.filter(d => !(d.payload && d.payload.imgSrc))
        .append("text")
        .attr("class", "graph-node-text")
        .attr("x", 0)
        .attr("y", 5)
        .text(d => trimLabel(d.label, 12));
      return g;
    });

  const centerSel = centerLayer.selectAll("g.graph-center-node")
    .data(centerNodes, d => d.id)
    .join(enter => {
      const g = enter.append("g")
        .attr("class", "graph-center-node")
        .style("--center-fill", d => d.fillColor || null)
        .style("--center-stroke", d => d.strokeColor || null)
        .style("--center-text", d => d.textColor || null)
        .style("--center-subtext", d => d.subtextColor || null)
        .on("mouseenter", (event, d) => {
          if (hoverClearTimer) {
            clearTimeout(hoverClearTimer);
            hoverClearTimer = null;
          }
          setGraphHover(d);
          showGraphNodeTooltip(event, d);
        })
        .on("mousemove", moveTooltip)
        .on("mouseleave", (event) => {
          if (isGraphNodeTarget(event.relatedTarget)) return;
          if (hoverClearTimer) clearTimeout(hoverClearTimer);
          hoverClearTimer = setTimeout(() => {
            clearGraphHover();
            hoverClearTimer = null;
          }, 56);
          hideTooltip();
        });
      const body = g.append("g").attr("class", "graph-center-body");
      body.append("circle")
        .attr("class", "graph-center-ring")
        .attr("r", GRAPH_CENTER_RING_RADIUS);
      body.append("circle")
        .attr("class", "graph-center-circle")
        .attr("r", GRAPH_CENTER_CIRCLE_RADIUS);
      body.append("text")
        .attr("class", "graph-center-text")
        .attr("x", 0)
        .attr("y", -4)
        .text(d => trimLabel(d.label, 12));
      body.append("text")
        .attr("class", "graph-center-subtext")
        .attr("x", 0)
        .attr("y", 18)
        .text(d => d.count + "条");
      return g;
    })
    .classed("selected", () => hasGraphSelection);

  svg.on("click", () => {
    if (hoverClearTimer) {
      clearTimeout(hoverClearTimer);
      hoverClearTimer = null;
    }
    clearGraphHover();
    hideTooltip();
  });

  model.nodes.forEach(n => {
    n.x = n.tx;
    n.y = n.ty;
  });

  const simulation = d3.forceSimulation(model.nodes)
    .force("link", d3.forceLink(model.links).id(d => d.id).distance(d => d.distance).strength(d => d.strength))
    .force("x", d3.forceX(d => d.tx).strength(d => d.isCenter ? 0.2 : 0.1))
    .force("y", d3.forceY(d => d.ty).strength(d => d.isCenter ? 0.24 : 0.14))
    .force("charge", d3.forceManyBody().strength(d => d.isCenter ? -500 : -180))
    .force("collide", d3.forceCollide().radius(d => graphNodePadding(d)).iterations(2))
    .velocityDecay(0.62)
    .alpha(1)
    .alphaDecay(0.06)
    .stop();

  for (let i = 0; i < 220; i += 1) simulation.tick();

  updateGraphLinkPositions(linkSel);
  nodeSel.attr("transform", d => "translate(" + d.x + "," + d.y + ")");
  centerSel.attr("transform", d => "translate(" + d.x + "," + d.y + ")");
  updateGraphWorldBoundsFromRoot(root, model.nodes);
  applyGraphDefaultView(model, w, h);

  state.graphSim = simulation;
  applyCamera("graph");

  function setGraphHover(activeNode) {
    const nbr = adjacency.get(activeNode.id) || new Set();
    const isHot = (id) => id === activeNode.id || nbr.has(id);
    nodeSel
      .classed("active", d => d.id === activeNode.id)
      .classed("highlight", d => isHot(d.id))
      .classed("dimmed", d => !isHot(d.id));
    centerSel
      .classed("active", d => d.id === activeNode.id)
      .classed("highlight", d => isHot(d.id))
      .classed("dimmed", d => !isHot(d.id));
    linkSel
      .classed("highlight", d => d.source.id === activeNode.id || d.target.id === activeNode.id)
      .classed("dimmed", d => !(d.source.id === activeNode.id || d.target.id === activeNode.id));
  }

  function clearGraphHover() {
    nodeSel.classed("active", false).classed("highlight", false).classed("dimmed", false);
    centerSel.classed("active", false).classed("highlight", false).classed("dimmed", false);
    linkSel.classed("highlight", false).classed("dimmed", false);
  }
}

function buildGraphModel(filtered, focus, w, h) {
  const cx = w * 0.56;
  const cy = h * 0.5;
  const depthStep = Math.max(520, w * 0.55);
  const nodes = [];
  const links = [];
  const rootId = "root:all";

  const rootNode = makeGraphNode({
    id: rootId,
    label: "全部广告",
    kind: "root",
    count: filtered.length,
    depth: 0,
    parentId: null
  });
  nodes.push(rootNode);

  const industryEntries = Array.from(aggregateBy(filtered, "industry").entries()).sort((a, b) => b[1] - a[1]);
  industryEntries.forEach(([industry, count]) => {
    const id = "industry:" + industry;
    nodes.push(makeGraphNode({ id, label: industry, kind: "industry", count, depth: 1, parentId: rootId }));
    links.push(makeGraphLink(rootId, id, 190, 0.3));
  });

  let crumb = "图谱层级：行业";
  let centerId = rootId;

  if (focus.industry) {
    const industryId = "industry:" + focus.industry;
    centerId = industryId;
    crumb = "图谱层级：行业 / " + focus.industry + " / 产品";
    const subsetIndustry = filtered.filter(a => a.industry === focus.industry);
    const productEntries = Array.from(aggregateBy(subsetIndustry, "product").entries()).sort((a, b) => b[1] - a[1]);
    productEntries.forEach(([product, count]) => {
      const id = "product:" + focus.industry + "|" + product;
      nodes.push(makeGraphNode({
        id,
        label: product,
        kind: "product",
        count,
        depth: 2,
        parentId: industryId,
        industryKey: focus.industry
      }));
      links.push(makeGraphLink(industryId, id, 170, 0.35));
    });

    if (focus.product) {
      const productId = "product:" + focus.industry + "|" + focus.product;
      centerId = productId;
      crumb = "图谱层级：" + focus.industry + " / " + focus.product + " / 刊期";
      const subsetProduct = subsetIndustry.filter(a => a.product === focus.product);
      const issueEntries = Array.from(aggregateBy(subsetProduct, "issueKey").entries())
        .sort((a, b) => issueSortKey(a[0]) - issueSortKey(b[0]));
      issueEntries.forEach(([issueKey, count]) => {
        const id = "issue:" + focus.industry + "|" + focus.product + "|" + issueKey;
        nodes.push(makeGraphNode({
          id,
          label: issueKey,
          kind: "issue",
          count,
          depth: 3,
          parentId: productId,
          industryKey: focus.industry
        }));
        links.push(makeGraphLink(productId, id, 160, 0.38));
      });

      if (focus.issueKey) {
        const issueId = "issue:" + focus.industry + "|" + focus.product + "|" + focus.issueKey;
        centerId = issueId;
        crumb = "图谱层级：" + focus.industry + " / " + focus.product + " / " + focus.issueKey + " / 广告";
        const ads = subsetProduct.filter(a => a.issueKey === focus.issueKey);
        ads.forEach((ad, idx) => {
          const id = "ad:" + ad.id + ":" + idx;
          nodes.push(makeGraphNode({
            id,
            label: ad.id,
            kind: "ad",
            count: 1,
            depth: 4,
            parentId: issueId,
            payload: ad
          }));
          links.push(makeGraphLink(issueId, id, 140, 0.42));
        });
      }
    }
  }

  const nodeMap = new Map(nodes.map(n => [n.id, n]));
  if (!nodeMap.has(centerId)) centerId = rootId;
  nodeMap.get(centerId).isCenter = true;

  const focusDepth = nodeMap.get(centerId).depth;
  const childrenByParent = new Map();
  nodes.forEach(n => {
    if (!n.parentId) return;
    if (!childrenByParent.has(n.parentId)) childrenByParent.set(n.parentId, []);
    childrenByParent.get(n.parentId).push(n);
  });

  nodes.forEach(n => {
    n.tx = cx + (n.depth - focusDepth) * depthStep;
    n.ty = cy;
  });

  childrenByParent.forEach((children) => {
    children.sort((a, b) => b.count - a.count);
    const len = children.length;
    const spread = Math.min(h * 0.78, Math.max(120, len * 42));
    const gap = len <= 1 ? 0 : spread / (len - 1);
    children.forEach((child, i) => {
      child.ty = len <= 1 ? cy : (cy - spread / 2 + i * gap);
    });
  });

  return { nodes, links, crumb };
}

function makeGraphNode(opts) {
  const kind = opts.kind;
  const palette = getGraphNodePalette(opts);
  if (kind === "ad") {
    const adSize = getGraphAdSize(opts.payload);
    return {
      id: opts.id,
      label: opts.label,
      displayLabel: opts.label,
      kind,
      count: opts.count,
      depth: opts.depth,
      parentId: opts.parentId,
      payload: opts.payload || null,
      isTruncated: false,
      isCenter: false,
      fillColor: palette.fillColor,
      strokeColor: palette.strokeColor,
      textColor: palette.textColor,
      subtextColor: palette.subtextColor,
      w: adSize.w,
      h: adSize.h,
      subtext: ""
    };
  }
  const maxChars = 52;
  const displayLabel = trimLabel(opts.label, maxChars);
  const isTruncated = displayLabel !== opts.label;
  const subtext = String(opts.subtext || "");
  const size = getGraphNodeSize(kind, displayLabel, subtext);
  return {
    id: opts.id,
    label: opts.label,
    displayLabel,
    kind,
    count: opts.count,
    depth: opts.depth,
    parentId: opts.parentId,
    payload: opts.payload || null,
    isTruncated,
    isCenter: false,
    fillColor: palette.fillColor,
    strokeColor: palette.strokeColor,
    textColor: palette.textColor,
    subtextColor: palette.subtextColor,
    w: size.w,
    h: size.h,
    subtext
  };
}

function getGraphNodeSize(kind, label, subtext) {
  const labelFontSize = getRootNumberVar("--graph-node-label-size", 14);
  const labelTracking = getRootNumberVar("--graph-node-label-tracking", 1.3);
  const subtextFontSize = getRootNumberVar("--graph-node-subtext-size", 11);
  const subtextTracking = getRootNumberVar("--graph-node-subtext-tracking", 0.6);
  const hasSubtext = !!subtext;
  const h = hasSubtext ? 42 : 38;
  const labelWidth = measureGraphTextWidth(label, labelFontSize, 600, labelTracking);
  const subtextWidth = subtext ? measureGraphTextWidth(subtext, subtextFontSize, 400, subtextTracking) : 0;
  const contentWidth = Math.max(labelWidth, subtextWidth);
  const horizontalPadding = hasSubtext ? 22 : 20;
  const minWidth = hasSubtext ? 110 : 80;
  const maxWidth = kind === "issue" ? 640 : 720;
  return {
    w: clamp(contentWidth + horizontalPadding * 2, minWidth, maxWidth),
    h
  };
}

function getGraphAdSize(ad) {
  const meta = ad && ad.imgSrc ? adImageMetaCache.get(ad.imgSrc) : null;
  const sourceW = meta && Number.isFinite(meta.w) && meta.w > 0 ? meta.w : GRAPH_AD_FALLBACK_W;
  const sourceH = meta && Number.isFinite(meta.h) && meta.h > 0 ? meta.h : GRAPH_AD_FALLBACK_H;
  const scale = Math.min(GRAPH_AD_MAX_W / sourceW, GRAPH_AD_MAX_H / sourceH);
  return {
    w: Math.max(36, Math.round(sourceW * scale)),
    h: Math.max(48, Math.round(sourceH * scale))
  };
}

function measureGraphTextWidth(text, fontSize, fontWeight, letterSpacing) {
  const value = String(text || "");
  if (!value) return 0;
  const tracking = Math.max(0, Number(letterSpacing) || 0);
  if (graphTextMeasureContext) {
    graphTextMeasureContext.font = fontWeight + " " + fontSize + "px " + getGraphMeasureFontFamily();
    return graphTextMeasureContext.measureText(value).width + Math.max(0, value.length - 1) * tracking;
  }
  let units = 0;
  for (const ch of value) {
    units += /[\u4e00-\u9fff\u3400-\u4dbf\u3040-\u30ff\uac00-\ud7af]/.test(ch) ? 1.05 : 0.62;
  }
  return (units * fontSize) + Math.max(0, value.length - 1) * tracking;
}

function measureAxisLabelHalfWidth(text, fontSize, fontWeight, letterSpacing, extraWidth) {
  const width = measureGraphTextWidth(text, fontSize, fontWeight, letterSpacing) + Math.max(0, extraWidth || 0);
  return width * 0.5;
}

function getRootNumberVar(name, fallback) {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  const value = parseFloat(raw);
  return Number.isFinite(value) ? value : fallback;
}

function getGraphMeasureFontFamily() {
  const raw = getComputedStyle(document.documentElement).getPropertyValue("--font-mono").trim();
  return raw || "monospace";
}

function primeGraphAdImageMeta(filtered, focus) {
  if (!focus || !focus.issueKey || !focus.industry || !focus.product) return;
  const ads = filtered.filter(a =>
    a.industry === focus.industry &&
    a.product === focus.product &&
    a.issueKey === focus.issueKey
  );
  if (!ads.length) return;
  const pending = ads
    .map(ad => ensureAdImageMeta(ad.imgSrc))
    .filter(Boolean);
  if (!pending.length) return;
  const snapshot = {
    industry: focus.industry,
    product: focus.product,
    issueKey: focus.issueKey
  };
  Promise.all(pending).then(() => {
    if (state.mode !== "graph") return;
    if (state.graphFocus.industry !== snapshot.industry) return;
    if (state.graphFocus.product !== snapshot.product) return;
    if (state.graphFocus.issueKey !== snapshot.issueKey) return;
    renderGraph(getFilteredAds());
  }).catch(() => {});
}

function ensureAdImageMeta(imgSrc) {
  if (!imgSrc) return null;
  const cached = adImageMetaCache.get(imgSrc);
  if (cached) {
    if (cached.status === "loaded" || cached.status === "error") return null;
    return cached.promise || null;
  }
  const promise = new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      adImageMetaCache.set(imgSrc, {
        status: "loaded",
        w: img.naturalWidth || GRAPH_AD_FALLBACK_W,
        h: img.naturalHeight || GRAPH_AD_FALLBACK_H
      });
      resolve();
    };
    img.onerror = () => {
      adImageMetaCache.set(imgSrc, {
        status: "error",
        w: GRAPH_AD_FALLBACK_W,
        h: GRAPH_AD_FALLBACK_H
      });
      resolve();
    };
    img.src = imgSrc;
  });
  adImageMetaCache.set(imgSrc, { status: "pending", promise });
  return promise;
}

function getGraphNodePalette(opts) {
  const paletteKey = opts.kind === "industry" ? opts.label : opts.industryKey;
  if (!paletteKey) {
    return {
      fillColor: null,
      strokeColor: null,
      textColor: null,
      subtextColor: null
    };
  }

  const fillColor = INDUSTRY_COLORS[paletteKey] || INDUSTRY_COLORS["其他"] || null;
  if (!fillColor) {
    return {
      fillColor: null,
      strokeColor: null,
      textColor: null,
      subtextColor: null
    };
  }

  const darkText = isDarkHex(fillColor) ? "#ffffff" : "#000000";
  const subtextColor = isDarkHex(fillColor) ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.72)";

  return {
    fillColor,
    strokeColor: mixHex(fillColor, "#ffffff", 0.18),
    textColor: darkText,
    subtextColor
  };
}

function isDarkHex(hex) {
  const rgb = hexToRgb(hex);
  if (!rgb) return false;
  const luminance = (0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b) / 255;
  return luminance < 0.58;
}

function mixHex(base, target, ratio) {
  const a = hexToRgb(base);
  const b = hexToRgb(target);
  if (!a || !b) return base;
  const t = clamp(ratio, 0, 1);
  const r = Math.round(a.r + (b.r - a.r) * t);
  const g = Math.round(a.g + (b.g - a.g) * t);
  const bl = Math.round(a.b + (b.b - a.b) * t);
  return rgbToHex(r, g, bl);
}

function hexToRgb(hex) {
  const raw = String(hex || "").trim().replace(/^#/, "");
  if (!/^[0-9a-fA-F]{6}$/.test(raw)) return null;
  return {
    r: parseInt(raw.slice(0, 2), 16),
    g: parseInt(raw.slice(2, 4), 16),
    b: parseInt(raw.slice(4, 6), 16)
  };
}

function rgbToHex(r, g, b) {
  return "#" + [r, g, b].map(v => clamp(v, 0, 255).toString(16).padStart(2, "0")).join("");
}

function makeGraphLink(source, target, distance, strength) {
  return {
    id: source + "->" + target,
    source,
    target,
    distance,
    strength
  };
}

function issueSortKey(issueKey) {
  const parts = String(issueKey).split("-");
  const y = parseInt(parts[0], 10) || 0;
  const i = parseInt(parts[1], 10) || 0;
  return y * 1000 + i;
}

function graphNodePadding(node) {
  if (node.isCenter) return 74;
  return Math.max(24, (Math.max(node.w, node.h) * 0.55) + 10);
}

function updateGraphLinkPositions(linkSel) {
  linkSel.each(function(d) {
    this.setAttribute("d", buildSketchLinkPath(d));
  });
}

function buildSketchLinkPath(link) {
  const edge = edgeTrimPoint(link.source, link.target);
  const dx = edge.x2 - edge.x1;
  const dy = edge.y2 - edge.y1;
  const len = Math.hypot(dx, dy) || 1;
  if (len < 18) {
    return "M " + edge.x1 + " " + edge.y1 + " L " + edge.x2 + " " + edge.y2;
  }
  const ux = dx / len;
  const uy = dy / len;
  const px = -uy;
  const py = ux;
  const seed = hashString(link.id);
  const ampBase = Math.min(2.6, Math.max(0.7, len * 0.008));
  const amp = ampBase * (0.82 + ((seed % 17) / 40));
  const freq = 1.2 + (((seed >> 3) % 7) * 0.18);
  const phase = ((seed % 360) * Math.PI) / 180;
  const steps = Math.max(5, Math.min(10, Math.round(len / 82)));
  const points = [];
  for (let i = 0; i <= steps; i += 1) {
    const t = i / steps;
    let offset = 0;
    if (i !== 0 && i !== steps) {
      const envelope = Math.sin(Math.PI * t);
      offset = Math.sin((t * freq * Math.PI * 2) + phase) * amp * envelope;
    }
    points.push({
      x: edge.x1 + dx * t + px * offset,
      y: edge.y1 + dy * t + py * offset
    });
  }
  return pointsToSmoothPath(points);
}

function pointsToSmoothPath(points) {
  if (!points.length) return "";
  if (points.length === 1) return "M " + points[0].x + " " + points[0].y;
  let path = "M " + points[0].x + " " + points[0].y;
  for (let i = 1; i < points.length - 1; i += 1) {
    const midX = (points[i].x + points[i + 1].x) * 0.5;
    const midY = (points[i].y + points[i + 1].y) * 0.5;
    path += " Q " + points[i].x + " " + points[i].y + " " + midX + " " + midY;
  }
  const last = points[points.length - 1];
  path += " T " + last.x + " " + last.y;
  return path;
}

function hashString(value) {
  let hash = 2166136261;
  const text = String(value || "");
  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function edgeTrimPoint(source, target) {
  const sourcePoint = getGraphNodeBoundaryPoint(source, target.x - source.x, target.y - source.y);
  const targetPoint = getGraphNodeBoundaryPoint(target, source.x - target.x, source.y - target.y);
  return {
    x1: source.x + sourcePoint.x,
    y1: source.y + sourcePoint.y,
    x2: target.x + targetPoint.x,
    y2: target.y + targetPoint.y
  };
}

function getGraphNodeBoundaryPoint(node, dirX, dirY) {
  const len = Math.hypot(dirX, dirY) || 1;
  const ux = dirX / len;
  const uy = dirY / len;
  if (node.isCenter) {
    const radius = Number.isFinite(node.linkRadius)
      ? node.linkRadius
      : (GRAPH_CENTER_CIRCLE_RADIUS + GRAPH_CENTER_CIRCLE_STROKE_WIDTH * 0.5);
    return { x: ux * radius, y: uy * radius };
  }

  const strokeOutset = node.kind === "ad" ? 0 : GRAPH_NODE_STROKE_WIDTH * 0.5;
  const halfW = Math.max(0.01, node.w * 0.5 + strokeOutset);
  const halfH = Math.max(0.01, node.h * 0.5 + strokeOutset);
  const cornerRadius = node.kind === "ad" ? 0 : Math.min(18, node.h * 0.5) + strokeOutset;
  return intersectRoundedRectRay(ux, uy, halfW, halfH, cornerRadius);
}

function intersectRoundedRectRay(dirX, dirY, halfW, halfH, radius) {
  const EPS = 1e-6;
  const len = Math.hypot(dirX, dirY) || 1;
  const ux = dirX / len;
  const uy = dirY / len;
  const signX = ux < 0 ? -1 : 1;
  const signY = uy < 0 ? -1 : 1;
  const ax = Math.abs(ux);
  const ay = Math.abs(uy);
  const hw = Math.max(EPS, halfW);
  const hh = Math.max(EPS, halfH);
  const r = clamp(radius, 0, Math.min(hw, hh));

  if (ax < EPS) return { x: 0, y: signY * hh };
  if (ay < EPS) return { x: signX * hw, y: 0 };

  if (r < EPS) {
    const t = Math.min(hw / ax, hh / ay);
    return { x: signX * ax * t, y: signY * ay * t };
  }

  const innerW = Math.max(0, hw - r);
  const innerH = Math.max(0, hh - r);
  const tVertical = hw / ax;
  const yAtVertical = ay * tVertical;
  if (yAtVertical <= innerH + EPS) {
    return { x: signX * hw, y: signY * yAtVertical };
  }

  const tHorizontal = hh / ay;
  const xAtHorizontal = ax * tHorizontal;
  if (xAtHorizontal <= innerW + EPS) {
    return { x: signX * xAtHorizontal, y: signY * hh };
  }

  const cx = innerW;
  const cy = innerH;
  const b = ax * cx + ay * cy;
  const c = cx * cx + cy * cy - r * r;
  const tCorner = Math.max(0, b - Math.sqrt(Math.max(0, b * b - c)));
  return {
    x: signX * ax * tCorner,
    y: signY * ay * tCorner
  };
}

function updateGraphWorldBounds(nodes) {
  const bounds = getGraphNodeBounds(nodes);
  state.graphWorldBounds = bounds;
}

function getGraphNodeBounds(nodes) {
  if (!nodes || !nodes.length) {
    return null;
  }
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;
  nodes.forEach((n) => {
    const x = Number.isFinite(n.x) ? n.x : n.tx;
    const y = Number.isFinite(n.y) ? n.y : n.ty;
    const padX = n.isCenter ? 72 : (n.w * 0.5 + 18);
    const padY = n.isCenter ? 72 : (n.h * 0.5 + 18);
    minX = Math.min(minX, x - padX);
    maxX = Math.max(maxX, x + padX);
    minY = Math.min(minY, y - padY);
    maxY = Math.max(maxY, y + padY);
  });
  return { minX, maxX, minY, maxY };
}

function updateGraphWorldBoundsFromRoot(rootSel, fallbackNodes) {
  const nodeBounds = getGraphNodeBounds(fallbackNodes);
  const node = rootSel && rootSel.node ? rootSel.node() : null;
  let svgBounds = null;
  if (node && typeof node.getBBox === "function") {
    const bb = node.getBBox();
    if (Number.isFinite(bb.x) && Number.isFinite(bb.y) && Number.isFinite(bb.width) && Number.isFinite(bb.height) && bb.width > 0 && bb.height > 0) {
      const pad = 24;
      svgBounds = {
        minX: bb.x - pad,
        maxX: bb.x + bb.width + pad,
        minY: bb.y - pad,
        maxY: bb.y + bb.height + pad
      };
    }
  }
  if (nodeBounds && svgBounds) {
    state.graphWorldBounds = {
      minX: Math.min(nodeBounds.minX, svgBounds.minX),
      maxX: Math.max(nodeBounds.maxX, svgBounds.maxX),
      minY: Math.min(nodeBounds.minY, svgBounds.minY),
      maxY: Math.max(nodeBounds.maxY, svgBounds.maxY)
    };
    return;
  }
  state.graphWorldBounds = svgBounds || nodeBounds;
}

function applyGraphDefaultView(model, viewW, viewH) {
  const cam = state.cameras.graph;
  const center = model.nodes.find(n => n.isCenter) || model.nodes[0];
  if (!center) return;
  const depth = center.depth || 0;
  let scale = 1.03;
  if (center.kind === "industry") scale = 1.08;
  if (center.kind === "product") scale = 1.14;
  if (center.kind === "issue") scale = 1.2;
  if (center.kind === "ad") scale = 1.24;
  if (depth >= 2) scale += 0.06;
  cam.scale = scale;
  const focusX = depth === 0 ? 0.52 : (depth === 1 ? 0.6 : 0.66);
  const focusY = 0.54;
  cam.x = viewW * focusX - center.tx * scale;
  cam.y = viewH * focusY - center.ty * scale;
}

function handleGraphNodeClick(node) {
  if (node.kind === "industry") {
    state.graphFocus = { industry: node.label, product: null, issueKey: null };
    renderGraph(getFilteredAds());
    return;
  }
  if (node.kind === "product") {
    state.graphFocus = { industry: state.graphFocus.industry, product: node.label, issueKey: null };
    renderGraph(getFilteredAds());
    return;
  }
  if (node.kind === "issue") {
    state.graphFocus = { industry: state.graphFocus.industry, product: state.graphFocus.product, issueKey: node.label };
    renderGraph(getFilteredAds());
    return;
  }
  if (node.kind === "ad" && node.payload) {
    openDetailModal(node.payload);
  }
}

function showGraphNodeTooltip(event, node) {
  refs.tooltip.style.display = "block";
  if (node.kind === "ad") {
    refs.tooltip.textContent = node.label;
  } else {
    refs.tooltip.textContent = node.label + " | " + node.count + "条";
  }
  moveTooltip(event);
}

function stepGraphBack() {
  if (state.graphFocus.issueKey) {
    state.graphFocus.issueKey = null;
  } else if (state.graphFocus.product) {
    state.graphFocus.product = null;
  } else if (state.graphFocus.industry) {
    state.graphFocus.industry = null;
  }
  renderGraph(getFilteredAds());
}

function openDetailModal(ad) {
  state.detailAd = ad;
  refs.detailImg.src = ad.imgSrc;
  refs.detailTitle.textContent = ad.id;
  refs.detailMeta.textContent = ad.year + " 年 / 第 " + ad.issue + " 期 / " + ad.industry + " / " + ad.product;
  refs.detailFoot.textContent = "图谱路径：" + ad.industry + " → " + ad.product + " → " + ad.issueKey + " → " + ad.id;

  refs.detailTags.innerHTML = "";
  const tags = ad.tagList.length ? ad.tagList : [];
  tags.forEach(code => {
    const def = TAG_DEFS.find(t => t.code === code);
    const chip = document.createElement("span");
    chip.className = "mini-tag";
    chip.textContent = def ? def.label : code;
    refs.detailTags.appendChild(chip);
  });
  if (!tags.length) {
    refs.detailTags.innerHTML = "<span class=\"mini-tag\">无维度标签</span>";
  }

  const sim = findSimilarAds(ad, 4);
  refs.similarRow.innerHTML = "";
  if (!sim.length) {
    refs.similarRow.innerHTML = "<div class=\"empty\">未找到相似广告</div>";
  } else {
    sim.forEach(item => {
      const card = document.createElement("div");
      card.className = "similar-card";
      const countClass = item.sharedCount >= 100 ? " three-digits" : (item.sharedCount >= 10 ? " two-digits" : "");
      const tagLen = (item.ad.industry || "").length + (item.ad.product || "").length;
      const tagClass = tagLen >= 7 ? " tight" : (tagLen >= 5 ? " compact" : "");
      const idLen = (item.ad.id || "").length;
      const idClass = idLen >= 13 ? " tight" : (idLen >= 11 ? " compact" : "");
      card.innerHTML = "<img src=\"" + item.ad.imgSrc + "\" alt=\"\"><div class=\"similar-caption\"><span class=\"similar-count" + countClass + "\">" + escapeHtml(String(item.sharedCount)) + "</span><div class=\"similar-meta\"><span class=\"similar-id" + idClass + "\">" + escapeHtml(item.ad.id) + "</span><div class=\"similar-tags" + tagClass + "\"><span class=\"mini-tag\">" + escapeHtml(item.ad.industry) + "</span><span class=\"mini-tag\">" + escapeHtml(item.ad.product) + "</span></div></div></div>";
      card.addEventListener("click", () => openDetailModal(item.ad));
      refs.similarRow.appendChild(card);
    });
  }

  refs.detailModal.classList.add("open");
}

function closeDetailModal() {
  refs.detailModal.classList.remove("open");
}

function findSimilarAds(target, count) {
  const others = state.allAds.filter(a => a.id !== target.id);
  const scored = others.map(ad => {
    let score = 0;
    if (ad.industry === target.industry) score += 2.5;
    if (ad.product === target.product) score += 3.2;
    const sharedCount = ad.tagList.filter(t => target.tagList.includes(t)).length;
    score += sharedCount * 1.1;
    const yd = Math.abs(ad.year - target.year);
    score += Math.max(0, 1.2 - yd * 0.12);
    return { ad, score, sharedCount };
  });
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, count);
}

function aggregateBy(arr, key) {
  const map = new Map();
  arr.forEach(item => {
    const k = item[key];
    map.set(k, (map.get(k) || 0) + 1);
  });
  return map;
}

function groupByIndustryProduct(arr) {
  const out = new Map();
  arr.forEach(ad => {
    if (!out.has(ad.industry)) out.set(ad.industry, new Map());
    const pMap = out.get(ad.industry);
    pMap.set(ad.product, (pMap.get(ad.product) || 0) + 1);
  });
  return out;
}

function sumCounts(map) {
  let n = 0;
  map.forEach(v => { n += v; });
  return n;
}

function drawSvgText(svg, x, y, text, size, color, bold) {
  const t = document.createElementNS("http://www.w3.org/2000/svg", "text");
  t.setAttribute("x", String(x));
  t.setAttribute("y", String(y));
  t.setAttribute("fill", color || "#000000");
  t.setAttribute("font-size", String(size || 12));
  t.setAttribute("font-family", "\"IBM Plex Mono\", \"JetBrains Mono\", \"SFMono-Regular\", \"Menlo\", \"Monaco\", \"Courier New\", monospace");
  t.setAttribute("text-anchor", "middle");
  if (bold) t.setAttribute("font-weight", "700");
  t.textContent = text;
  svg.appendChild(t);
}

function trimLabel(s, n) {
  if (!s) return "";
  if (s.length <= n) return s;
  return s.slice(0, n - 1) + "…";
}

function showTooltip(e, adLike) {
  refs.tooltip.style.display = "block";
  refs.tooltip.textContent = adLike.id + " | " + (adLike.industry || "") + " | " + (adLike.product || "");
  moveTooltip(e);
}

function moveTooltip(e) {
  refs.tooltip.style.left = e.clientX + 14 + "px";
  refs.tooltip.style.top = e.clientY + 14 + "px";
}

function hideTooltip() {
  refs.tooltip.style.display = "none";
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
