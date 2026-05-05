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

const UI_TEXT = {
  zh: {
    brandSub: "机联会刊广告数字化平台",
    clearTags: "清空维度",
    reset: "重置",
    view: "视图",
    timelineMode: "总览模式",
    graphMode: "图谱模式",
    visualPanel: "数量模式",
    back: "返回上一层",
    timeAxis: "时间轴",
    industryAxis: "行业轴",
    axisShare: "行业→特征",
    tagShare: "特征→行业",
    axisShareLong: "行业→特征 P(特征|行业)",
    tagShareLong: "特征→行业 P(行业|特征)",
    less: "少",
    more: "多",
    industryProductFilter: "行业 / 产品筛选",
    analysisPanel: "分析面板",
    collapse: "收起",
    expand: "展开",
    matchedAds: "匹配广告",
    coveredIssues: "覆盖刊期",
    industryCount: "行业数",
    productCount: "产品数",
    timeSpan: "时间跨度",
    industryDashboard: "行业数量看板",
    yearUnit: "年份",
    issueUnit: "期刊",
    topFeatures: "高频维度",
    featureCodes: "维度编码",
    featureExplain: "特征解释",
    similarAds: "相似广告",
    detailBack: "返回",
    locateInGraph: "在图谱中定位",
    locateInTimeline: "在时间轴中定位",
    noData: "无数据",
    noCurve: "当前筛选下暂无行业曲线",
    noFeature: "暂无维度",
    noFeatureTag: "无维度标签",
    noSimilar: "未找到相似广告",
    allAds: "全部广告",
    graphLevel: "图谱层级",
    noResult: "无结果",
    industry: "行业",
    product: "产品",
    issue: "刊期",
    ad: "广告",
    year: "年",
    issuePrefix: "第",
    issueSuffix: "期",
    graphPath: "图谱路径",
    itemUnit: "条",
    count: "数量",
    filterPanelAria: "替换行业面板",
    all: "全部"
  },
  en: {
    brandSub: "Digital Advertising Platform of China Machine Federation Journal",
    clearTags: "Clear",
    reset: "Reset",
    view: "View",
    timelineMode: "Overview Mode",
    graphMode: "Graph Mode",
    visualPanel: "Count Mode",
    back: "Back",
    timeAxis: "Timeline",
    industryAxis: "Industry Axis",
    axisShare: "Industry→Feature",
    tagShare: "Feature→Industry",
    axisShareLong: "Industry→Feature P(feature|industry)",
    tagShareLong: "Feature→Industry P(industry|feature)",
    less: "Low",
    more: "High",
    industryProductFilter: "Industry / Product Filter",
    analysisPanel: "Analysis",
    collapse: "Collapse",
    expand: "Expand",
    matchedAds: "Matched Ads",
    coveredIssues: "Issues",
    industryCount: "Industries",
    productCount: "Products",
    timeSpan: "Time Span",
    industryDashboard: "Industry Count Dashboard",
    yearUnit: "Year",
    issueUnit: "Issue",
    topFeatures: "Top Features",
    featureCodes: "Feature Codes",
    featureExplain: "Feature Note",
    similarAds: "Similar Ads",
    detailBack: "Back",
    locateInGraph: "Locate in Graph",
    locateInTimeline: "Locate in Timeline",
    noData: "No Data",
    noCurve: "No industry curves for this filter",
    noFeature: "No Features",
    noFeatureTag: "No Feature Tags",
    noSimilar: "No Similar Ads",
    allAds: "All Ads",
    graphLevel: "Graph Level",
    noResult: "No Result",
    industry: "Industry",
    product: "Product",
    issue: "Issue",
    ad: "Ad",
    year: "",
    issuePrefix: "Issue ",
    issueSuffix: "",
    graphPath: "Graph Path",
    itemUnit: "ads",
    count: "Count",
    filterPanelAria: "Replace industry panel",
    all: "All"
  }
};

const TAG_LABELS_EN = {
  Aa1: "Calligraphy", Aa2: "Song Typeface", Aa3: "Sans Serif", Aa4: "Decorative Type",
  Ab1: "Vertical Text", Ab2: "Horizontal Text", Ab3: "Mixed Layout",
  Ac1: "Realistic", Ac2: "Stylized", Ad1: "Illustration", Ad2: "Photography",
  Ba1: "Traditional Female", Ba2: "New Woman", Bb1: "Traditional Male", Bb2: "New Man",
  Ca1: "Scientific Terms", Ca2: "Scientific Evidence", Cb1: "Brand Name", Cb2: "Trademark Symbol", Cb3: "Registered Mark", Cb4: "Neologism / Pun",
  Da: "Scene", Db: "Language", Dc: "Geography",
  Ea1: "Commercial", Ea2: "Popular Science", Ea3: "Patriotic"
};

const TAG_GROUP_LABELS_EN = {
  visual: "Visual Form",
  identity: "Identity & Gender",
  text: "Text & Discourse",
  global: "Global Symbols",
  social: "Social Modernity"
};

const INDUSTRY_LABELS_EN = {
  "纺织": "Textiles",
  "日化": "Daily Chemicals",
  "橡胶": "Rubber",
  "医药": "Medicine",
  "食品": "Food",
  "电器": "Electrical",
  "塑料": "Plastics",
  "搪瓷": "Enamelware",
  "油漆": "Paint",
  "纸业": "Paper",
  "化工": "Chemicals",
  "钢铁": "Steel",
  "火柴": "Matches",
  "其他": "Other",
  "未知": "Unknown"
};

const PRODUCT_LABELS_EN = {
  "布料": "Fabric",
  "衣物": "Clothing",
  "鞋子": "Shoes",
  "套鞋": "Overshoes",
  "肥皂": "Soap",
  "袜子": "Socks",
  "牙刷": "Toothbrush",
  "化妆品": "Cosmetics",
  "毛巾": "Towel",
  "牙膏": "Toothpaste",
  "雪花膏": "Vanishing Cream",
  "味精": "MSG",
  "电灯泡": "Light Bulb",
  "帽子": "Hat",
  "人造自来血": "Artificial Blood Tonic",
  "烟咀": "Cigarette Holder",
  "唱片": "Records",
  "筷子": "Chopsticks",
  "饼干": "Biscuits",
  "蚊香": "Mosquito Coil",
  "床上用品": "Bedding",
  "轮胎": "Tires",
  "女界宝": "Nujiebao",
  "绒毯": "Blanket",
  "电风扇": "Electric Fan",
  "手帕": "Handkerchief",
  "亚林臭药水": "Yalin Deodorant",
  "饮料": "Beverage",
  "器皿": "Vessels",
  "中国银行": "Bank of China",
  "钢笔": "Fountain Pen",
  "宽紧带": "Elastic Band",
  "鱼肝油": "Cod Liver Oil",
  "化学应用玻璃器": "Chemical Glassware",
  "玩具": "Toys",
  "鲜味晶": "Seasoning Crystals",
  "床": "Bed",
  "国货": "National Goods",
  "热水瓶": "Thermos",
  "日用品": "Daily Goods",
  "调料": "Condiments",
  "面霜": "Face Cream",
  "油漆": "Paint",
  "月月红": "Yueyuehong",
  "纽扣": "Buttons",
  "橡皮球": "Rubber Ball",
  "油墨": "Ink",
  "自由霜": "Ziyou Cream",
  "糖": "Candy",
  "补使命": "Bushiming",
  "窗帘": "Curtains",
  "电光": "Electric Light",
  "电木": "Bakelite",
  "化学玻璃": "Chemical Glass",
  "良丹": "Liangdan",
  "汽水": "Soda",
  "图章盒": "Seal Box",
  "未知": "Unknown",
  "墨汁": "Ink",
  "时钟": "Clock",
  "鞋套": "Shoe Covers",
  "皂粉": "Soap Powder",
  "海波药": "Hypo Solution",
  "火柴": "Matches",
  "面盆": "Wash Basin",
  "手套": "Gloves",
  "丝巾": "Silk Scarf",
  "香粉": "Face Powder",
  "新华银行": "Xinhua Bank",
  "牙粉": "Tooth Powder",
  "颜料": "Pigment",
  "照相卡纸": "Photographic Card Paper",
  "笔": "Pen",
  "钢精器皿": "Aluminum Ware",
  "红铅丹": "Red Lead",
  "化学原料": "Chemical Materials",
  "火车杯": "Train Cup",
  "罗帐": "Canopy Net",
  "手电筒": "Flashlight",
  "爽身粉": "Talcum Powder",
  "胃灵": "Weiling",
  "橡胶品": "Rubber Goods",
  "亚林沙而": "Yalin Shaer",
  "樟脑丸": "Mothballs",
  "真马宝": "Zhenmabao",
  "助肺呼吸香胶": "Respiratory Gum",
  "儿童用品": "Children's Goods",
  "红丹": "Red Lead",
  "机联会刊": "The Young Companion",
  "灭火器": "Fire Extinguisher",
  "木箱": "Wooden Box",
  "皮带": "Belt",
  "熔铜罐": "Copper Melting Pot",
  "五彩花铁盒": "Decorated Tin Box",
  "浴巾": "Bath Towel",
  "玻璃杯": "Glass Cup",
  "插锁": "Plug Lock",
  "电池": "Battery",
  "番茄酱": "Tomato Sauce",
  "风琴": "Organ",
  "骨痛精": "Bone Pain Remedy",
  "黄丹": "Yellow Lead",
  "镜子": "Mirror",
  "礼券": "Gift Voucher",
  "硫酸": "Sulfuric Acid",
  "皮球": "Ball",
  "汽灯": "Gas Lamp",
  "铅笔": "Pencil",
  "热水袋": "Hot Water Bag",
  "伞": "Umbrella",
  "速印机": "Duplicator",
  "太乙麦精粉": "Taiyi Malt Powder",
  "铁丝网篱": "Wire Mesh Fence",
  "鲜果子露": "Fruit Syrup",
  "香烟": "Cigarettes",
  "消防器": "Firefighting Equipment",
  "鞋带": "Shoelaces",
  "眼镜": "Glasses",
  "雨衣": "Raincoat",
  "百用绳": "Utility Rope",
  "薄荷脑": "Menthol",
  "薄荷油": "Peppermint Oil",
  "冰淇淋": "Ice Cream",
  "茶杯": "Tea Cup",
  "嫦娥粉": "Chang'e Powder",
  "催眠术": "Hypnotism",
  "当归素": "Angelica Extract",
  "地毯": "Carpet",
  "电灯": "Electric Lamp",
  "电话订购": "Telephone Orders",
  "二天油": "Ertian Oil",
  "发夹": "Hair Clip",
  "发网": "Hair Net",
  "凤尾鱼罐头": "Canned Anchovies",
  "钢精": "Aluminum",
  "钢丝": "Steel Wire",
  "工艺制品": "Craft Goods",
  "公益广告": "Public Service Ad",
  "海藻晶": "Seaweed Crystals",
  "红黄铜皮": "Red and Yellow Brass Sheet",
  "花边": "Lace",
  "黄包车": "Rickshaw",
  "黄铜皮": "Brass Sheet",
  "火炉": "Stove",
  "火腿": "Ham",
  "火油炉": "Kerosene Stove",
  "戒烟药": "Anti-smoking Medicine",
  "酒精": "Alcohol",
  "蜡纸": "Wax Paper",
  "龙井茶": "Longjing Tea",
  "麦精茶": "Malt Drink",
  "麦精粉": "Malt Powder",
  "奶粉": "Milk Powder",
  "年糕": "Rice Cake",
  "牛奶": "Milk",
  "皮包": "Leather Bag",
  "皮件": "Leather Goods",
  "乒乓球": "Table Tennis",
  "上海纺织印染公司": "Shanghai Textile Printing and Dyeing Co.",
  "上海商业银行": "Shanghai Commercial Bank",
  "肾气丸": "Shenqi Pills",
  "十滴水": "Ten Drops",
  "食品公司": "Food Company",
  "手挽袋": "Handbag",
  "双鹦鹉牌": "Double Parrot Brand",
  "水果罐头": "Canned Fruit",
  "藤柳儿椅": "Rattan Chair",
  "痛必灵": "Tongbiling",
  "退色灵": "Color Remover",
  "万年历": "Perpetual Calendar",
  "围巾": "Scarf",
  "五金": "Hardware",
  "喜果": "Wedding Sweets",
  "喜果盒": "Wedding Sweet Box",
  "香水": "Perfume",
  "香烟缸": "Ashtray",
  "香油": "Sesame Oil",
  "信纸": "Writing Paper",
  "眼药": "Eye Medicine",
  "洋钉": "Wire Nails",
  "药品": "Medicine",
  "一文钱": "Yiwenqian",
  "椅子": "Chair",
  "油膏": "Ointment",
  "月饼": "Mooncake",
  "赠券": "Coupon",
  "帐薄表单": "Account Books and Forms",
  "中国医学大成": "Chinese Medical Compendium",
  "钟表": "Clock and Watch",
  "竹套": "Bamboo Cover",
  "滋味素": "Ziweisu",
  "棕绷套": "Palm-fiber Bed Cover"
};

const FEATURE_DESCRIPTIONS_EN = {
  Aa1: "Draws on local writing traditions and preserves brush movement, giving the layout a strong traditional character.",
  Aa2: "A printed serif type style with thick verticals and thin horizontals, common in early printed body text.",
  Aa3: "Even strokes with no terminal decoration, conveying industrial order and modern graphic clarity.",
  Aa4: "Characters are stretched, reshaped, hollowed, shadowed, or otherwise decorated for visual effect.",
  Ab1: "Text is arranged vertically from top to bottom.",
  Ab2: "Text is arranged horizontally from left to right.",
  Ab3: "Vertical and horizontal arrangements appear together in the same advertisement.",
  Ac1: "Depicts recognizable objects, people, scenes, or products with concrete detail and everyday visual realism.",
  Ac2: "Uses simplification, exaggeration, geometry, symbolism, or deformation rather than realistic depiction.",
  Ad1: "The main visual content is hand drawn through line, tone, color, or other illustration techniques.",
  Ad2: "The main visual content is photographic, often with grayscale texture and realistic scenes or portraits.",
  Ba1: "Represents women through traditional family roles such as mother, wife, or domestic caretaker.",
  Ba2: "Represents modern women such as students, stars, professionals, or social figures in public life.",
  Bb1: "Represents men through traditional roles, dress, family hierarchy, or older social etiquette.",
  Bb2: "Represents modern men such as professionals, entrepreneurs, students, or progressive youth.",
  Ca1: "Uses scientific or technical terms such as vitamins, therapy, mechanisms, or non-irritating formulas.",
  Ca2: "Presents data, charts, patent numbers, experiments, reports, or other evidential claims.",
  Cb1: "The product is identified through an explicit brand name, often in the form of a named label or mark.",
  Cb2: "Uses a graphic trademark, often near words such as trademark or registered trademark.",
  Cb3: "Explicitly marks the advertisement or product as registered.",
  Cb4: "Uses invented terms, homophones, puns, or witty phrasing to create memorable meaning.",
  Da: "Shows modern urban scenes such as high-rise buildings, vehicles, trams, or Western-style architecture.",
  Db: "Contains foreign-language text, most often English.",
  Dc: "References Shanghai, concessions, Western countries, or other global and modern geographic markers.",
  Ea1: "Primarily promotes a product through commercial persuasion, storytelling, or comparison.",
  Ea2: "Connects the advertisement to public health, modern lifestyle guidance, or cultural education.",
  Ea3: "Contains explicit national crisis awareness or social mobilization, beyond generic national-goods slogans."
};
const TAG_DEF_MAP = new Map(TAG_DEFS.map(tag => [tag.code, tag]));
const VISUAL_TAGS = TAG_DEFS;
const FEATURE_DESCRIPTIONS = {
  Aa1: "源于本土书写传统，涵盖楷、隶、行、草等多种书体类别。其形态保留了毛笔书写中提按顿挫的运笔规律与有机连贯的笔触，在版面视觉上传递出显著的传统感",
  Aa2: "源自早期雕版与铅印技术，以横细竖粗的线条对比及笔画末端带有衬线装饰为客观判定依据，构成了当时常规的印刷正文体系",
  Aa3: "线条等粗、去除末端装饰，体现了工业化设计的秩序感",
  Aa4: "对字形骨架进行几何拉伸与变形设计，或运用镂空、阴影等特效装饰",
  Ab1: "文字由上而下排列",
  Ab2: "文字各个左右并排",
  Ab3: "文字由上而下排列和文字各个左右并排混用",
  Ac1: "描绘具体可辨识的物象（如人物、风景、器物），一定的细节且清晰（如人物五官、服饰纹理、建筑结构）；符合日常视觉经验（符合透视、比例等写实技法）；通常承担叙事、宣传或纪实功能",
  Ac2: "脱离对现实物象的精确摹写，无具体细节，不能体现结构走向；不符合真实存在的事物；不符合日常视觉经验（透视、比例等），可能通过简化、变形、夸张、比喻、拟人、几何化或符号化手法表现，强调形式象征意义；几何化构图（如圆形、线条的秩序组合）；形象高度简化（如商标、图案装饰）；受西方现代艺术（如立体派、未来派）影响的变形手法",
  Ad1: "广告画面中的人物、场景、商品等所有视觉内容，均由画师运用线条、色彩、明暗等绘画技法手工创作完成",
  Ad2: "主要图像内容为摄影照片，往往是深色或者有灰蒙蒙的感觉，内容是人像和真实的空间场景",
  Ba1: "传统家庭角色（慈母、贤妻）她们的价值主要体现在家庭内部，是家族门风、教养的体现，她的声誉与家族的声誉紧密捆绑。服饰装扮往往为普通棉服、传统旗袍、无特别妆发、布鞋等，或者场景中正在做的事为做家务、交代家事、带孩子等",
  Ba2: "新女性（影星、女学生、职业女性、社交名媛），她们的核心是个人主义、独立自主和公共参与，追求教育、职业、爱情和社会的平等权利。服饰装扮往往为新式服装、新式旗袍、高跟鞋、时髦配饰、卷发等，或者场景正在做的事为休闲娱乐、活跃在公开场合",
  Bb1: "传统士绅、家长、小孩（家族的“香火继承者”和“未来士绅”）；核心是家族与伦理，固守传统礼制。服饰装扮往往为长袍马褂、瓜皮帽、布鞋、长辫等",
  Bb2: "现代企业家、专业人士、进步青年、小孩。核心是在公共领域创造价值，致力于国家富强与个人发展。服饰装扮往往为西装、中山装、学生装、大衣、皮鞋等",
  Ca1: "出现较为科学性的术语，如“不受刺激”“电疗”、“维他命”、“科学机制”等",
  Ca2: "有数据、图表、专利号、实验报告等",
  Cb1: "一般以 xx 牌的形式作为品牌名称",
  Cb2: "通常有圆形图框，大多情况下旁边会有“商标”、“注册商标”字样，有时也会同时出现多个商标图形。民国商标不都是圆形的，圆形只是当时很常见的一种款式，还有多种其他形状被广泛使用，几何形状、异形/具象形状、组合形状",
  Cb3: "一般“注册商标”是标注在商标图像附近，或者单独位置标注出来",
  Cb4: "词组为新创或与某字读音相近，以达到诙谐、委婉、寓意深刻或双关的表达效果",
  Da: "出现摩天大楼、现代交通工具（汽车、电车）、西式建筑等都市景观",
  Db: "出现外文，大多为英文",
  Dc: "有相关图案或图像描绘上海、租界、欧美国家等现代化或全球化地标",
  Ea1: "纯商业推销，如通过讲故事、比喻等方法",
  Ea2: "介入具有普适意义的公共卫生指导、现代生活规范普及或文化启蒙",
  Ea3: "文本包含明确的民族危机感与政治社会动员诉求（如详细论述“抵制漏卮”、“实业救国”等），仅附带“国货之光”等空泛口号的样本不予计入"
};

const INDUSTRY_COLORS = {
  "纺织": "#C8B2DB",
  "橡胶": "#5299C7",
  "日化": "#B6EBB5",
  "食品": "#F6C6A1",
  "其他": "#DCD4CA",
  "医药": "#F5B043",
  "塑料": "#8B7067",
  "电器": "#EC84A9",
  "化工": "#D4695D",
  "油漆": "#494C9A",
  "搪瓷": "#8F88C8",
  "钢铁": "#DDBAB0",
  "纸业": "#D4DCBE",
  "火柴": "#F9F6EE",
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
const GRAPH_BUBBLE_MIN_R = 24;
const GRAPH_BUBBLE_MAX_R = 70;
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
  detailSourceMode: "timeline",
  detailHistory: [],
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
  graphRootEl: null,
  timelineAutoFit: true,
  analysisIndustryPanels: [],
  analysisIndustryPanelKey: "",
  analysisCurveUnit: "year",
  expandedAxisIssueKey: null,
  analysisCollapsed: false,
  visualExpandedTag: null,
  visualScale: 1,
  visualAxisMode: "time",
  visualMetricMode: "count",
  sidebarCollapsed: false,
  lang: localStorage.getItem("archiveMLang") === "en" ? "en" : "zh"
};

const refs = {
  appShell: document.querySelector(".app-shell"),
  topBar: document.querySelector(".top-bar"),
  tagRail: document.getElementById("tagRail"),
  resetBtn: document.getElementById("resetBtn"),
  langToggleBtn: document.getElementById("langToggleBtn"),
  viewSwitch: document.getElementById("viewSwitch"),
  viewToggleBtn: document.getElementById("viewToggleBtn"),
  viewMenuPanel: document.getElementById("viewMenuPanel"),
  timelineView: document.getElementById("timelineView"),
  graphView: document.getElementById("graphView"),
  visualView: document.getElementById("visualView"),
  visualHeatmapWrap: document.getElementById("visualHeatmapWrap"),
  visualAxis: document.getElementById("visualAxis"),
  visualAxisToggle: document.getElementById("visualAxisToggle"),
  visualMetricControls: document.getElementById("visualMetricControls"),
  timelineStage: document.getElementById("timelineStage"),
  timelineContainer: document.getElementById("timelineContainer"),
  timelineAxisOverlay: document.getElementById("timelineAxisOverlay"),
  sidebarToggleBtn: document.getElementById("sidebarToggleBtn"),
  industryList: document.getElementById("industryList"),
  graphSvg: document.getElementById("graphSvg"),
  graphCrumb: document.getElementById("graphCrumb"),
  graphBackBtn: document.getElementById("graphBackBtn"),
  statAds: document.getElementById("statAds"),
  statIssues: document.getElementById("statIssues"),
  statIndustries: document.getElementById("statIndustries"),
  statProducts: document.getElementById("statProducts"),
  analysisDrawer: document.getElementById("analysisDrawer"),
  analysisCollapseBtn: document.getElementById("analysisCollapseBtn"),
  analysisYearSpan: document.getElementById("analysisYearSpan"),
  analysisCurveUnitToggle: document.getElementById("analysisCurveUnitToggle"),
  analysisIndustryCurves: document.getElementById("analysisIndustryCurves"),
  analysisTags: document.getElementById("analysisTags"),
  tooltip: document.getElementById("tooltip"),
  detailModal: document.getElementById("detailModal"),
  closeModalBtn: document.getElementById("closeModalBtn"),
  detailBackBtn: document.getElementById("detailBackBtn"),
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
  applyLanguage();
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

  if (refs.langToggleBtn) {
    refs.langToggleBtn.addEventListener("click", () => {
      state.lang = state.lang === "zh" ? "en" : "zh";
      localStorage.setItem("archiveMLang", state.lang);
      applyLanguage();
      renderTagRail();
      renderSidebar();
      renderAll();
      if (state.detailAd) openDetailModal(state.detailAd, { preserveSource: true, preserveHistory: true });
    });
  }

  refs.resetBtn.addEventListener("click", () => {
    state.tagsSelected.clear();
    state.openTagGroups.clear();
    state.openIndustries.clear();
    state.pairsSelected.clear();
    state.viewMenuOpen = false;
    state.graphFocus = { industry: null, product: null, issueKey: null };
    state.timelineAutoFit = true;
    state.analysisCollapsed = false;
    state.analysisIndustryPanels = [];
    state.analysisIndustryPanelKey = "";
    state.analysisCurveUnit = "year";
    state.visualExpandedTag = null;
    state.visualScale = 1;
    state.visualAxisMode = "time";
    state.visualMetricMode = "count";
    resetCameras();
    syncViewMenu();
    renderTagRail();
    renderSidebar();
    renderAll();
  });

  refs.graphBackBtn.addEventListener("click", stepGraphBack);
  refs.analysisCollapseBtn.addEventListener("click", () => {
    state.analysisCollapsed = !state.analysisCollapsed;
    renderAll();
  });
  if (refs.analysisCurveUnitToggle) {
    refs.analysisCurveUnitToggle.addEventListener("click", (event) => {
      const btn = event.target.closest(".analysis-unit-btn");
      if (!btn) return;
      const unit = btn.dataset.unit === "issue" ? "issue" : "year";
      if (state.analysisCurveUnit === unit) return;
      state.analysisCurveUnit = unit;
      syncAnalysisCurveUnitToggle();
      renderAnalysisIndustryCurves(getFilteredAds());
    });
  }
  if (refs.sidebarToggleBtn) {
    refs.sidebarToggleBtn.addEventListener("click", () => {
      state.sidebarCollapsed = !state.sidebarCollapsed;
      syncSidebarState();
      renderAll();
    });
  }
  refs.closeModalBtn.addEventListener("click", closeDetailModal);
  if (refs.detailBackBtn) {
    refs.detailBackBtn.addEventListener("click", () => {
      const previous = state.detailHistory.pop();
      if (!previous) return;
      openDetailModal(previous.ad, {
        sourceMode: previous.sourceMode,
        preserveHistory: true
      });
    });
  }
  refs.timelineAxisOverlay.addEventListener("click", (e) => {
    if (e.target.closest(".axis-stack-bar")) return;
    if (!state.expandedAxisIssueKey) return;
    state.expandedAxisIssueKey = null;
    renderAll();
  });
  refs.detailModal.addEventListener("click", (e) => {
    if (e.target === refs.detailModal) closeDetailModal();
  });

  refs.focusInGraphBtn.addEventListener("click", () => {
    if (!state.detailAd) return;
    if (refs.focusInGraphBtn.dataset.targetMode === "timeline") {
      const ad = state.detailAd;
      closeDetailModal();
      locateAdInTimeline(ad);
      return;
    }
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
    if (!e.target.closest(".analysis-curve-picker")) {
      document.querySelectorAll(".analysis-curve-picker.open").forEach(picker => picker.classList.remove("open"));
    }
  });

  window.addEventListener("resize", () => {
    enforceCameraBounds("timeline");
    enforceCameraBounds("graph");
    renderTimelineAxis();
    renderVisualPanel(getFilteredAds());
  });

  if (refs.visualHeatmapWrap) {
    refs.visualHeatmapWrap.addEventListener("scroll", syncVisualAxisScroll);
    refs.visualHeatmapWrap.addEventListener("wheel", (e) => {
      const isZoomGesture = e.ctrlKey || e.metaKey || e.altKey;
      if (!isZoomGesture) return;
      e.preventDefault();
      const prevScale = state.visualScale;
      const nextScale = clamp(prevScale * Math.exp(-e.deltaY * 0.0025), 1, 5);
      if (nextScale === prevScale) return;
      const rect = refs.visualHeatmapWrap.getBoundingClientRect();
      const focusX = e.clientX - rect.left + refs.visualHeatmapWrap.scrollLeft - 138;
      const ratio = focusX / Math.max(1, getVisualStepPx(prevScale));
      state.visualScale = nextScale;
      renderVisualPanel(getFilteredAds());
      refs.visualHeatmapWrap.scrollLeft = Math.max(0, ratio * getVisualStepPx(nextScale) - (e.clientX - rect.left) + 138);
      syncVisualAxisScroll();
    }, { passive: false });
  }

  if (refs.visualAxisToggle) {
    refs.visualAxisToggle.addEventListener("click", (event) => {
      const btn = event.target.closest(".visual-axis-btn");
      if (!btn) return;
      const nextAxis = btn.dataset.axis || "time";
      if (state.visualAxisMode === nextAxis) return;
      state.visualAxisMode = nextAxis;
      state.visualMetricMode = state.visualAxisMode === "industry" ? "axisShare" : "count";
      state.visualExpandedTag = null;
      state.visualScale = 1;
      renderVisualPanel(getFilteredAds());
    });
  }

  if (refs.visualMetricControls) {
    refs.visualMetricControls.addEventListener("click", (event) => {
      const btn = event.target.closest(".visual-metric-btn");
      if (!btn) return;
      if (state.visualAxisMode !== "industry") return;
      state.visualMetricMode = btn.dataset.metric || "count";
      renderVisualPanel(getFilteredAds());
    });
  }
}

function t(key) {
  const langPack = UI_TEXT[state.lang] || UI_TEXT.zh;
  return langPack[key] || UI_TEXT.zh[key] || key;
}

function applyLanguage() {
  document.documentElement.lang = state.lang === "en" ? "en" : "zh-CN";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  if (refs.langToggleBtn) refs.langToggleBtn.textContent = state.lang === "en" ? "中" : "EN";
  if (refs.analysisCollapseBtn) {
    refs.analysisCollapseBtn.textContent = state.analysisCollapsed ? t("expand") : t("collapse");
  }
  syncSidebarState();
  updateDetailLocateButton();
  syncDetailBackButton();
  syncVisualAxisButtonText();
  syncAnalysisCurveUnitToggle();
}

function syncSidebarState() {
  if (refs.appShell) refs.appShell.classList.toggle("sidebar-collapsed", state.sidebarCollapsed);
  if (!refs.sidebarToggleBtn) return;
  const collapsed = state.sidebarCollapsed;
  refs.sidebarToggleBtn.textContent = collapsed ? "‹" : "›";
  refs.sidebarToggleBtn.setAttribute("aria-expanded", collapsed ? "false" : "true");
  refs.sidebarToggleBtn.setAttribute(
    "aria-label",
    collapsed
      ? (state.lang === "en" ? "Expand filter panel" : "展开筛选面板")
      : (state.lang === "en" ? "Collapse filter panel" : "收起筛选面板")
  );
}

function tagLabel(code) {
  const def = TAG_DEF_MAP.get(code);
  if (!def) return code;
  return state.lang === "en" ? (TAG_LABELS_EN[code] || def.label) : def.label;
}

function tagDescription(code) {
  if (state.lang === "en") return FEATURE_DESCRIPTIONS_EN[code] || FEATURE_DESCRIPTIONS[code] || "";
  return FEATURE_DESCRIPTIONS[code] || "";
}

function groupLabel(group) {
  return state.lang === "en" ? (TAG_GROUP_LABELS_EN[group.key] || group.label) : group.label;
}

function industryLabel(industry) {
  return state.lang === "en" ? (INDUSTRY_LABELS_EN[industry] || industry) : industry;
}

function productLabel(product) {
  return state.lang === "en" ? (PRODUCT_LABELS_EN[product] || product) : product;
}

function itemUnit(count) {
  if (state.lang === "en") return count === 1 ? "ad" : "ads";
  return t("itemUnit");
}

function countText(count) {
  return state.lang === "en" ? count + " " + itemUnit(count) : count + t("itemUnit");
}

function syncVisualAxisButtonText() {
  if (refs.visualAxisToggle) {
    const timeBtn = refs.visualAxisToggle.querySelector("[data-axis='time']");
    const industryBtn = refs.visualAxisToggle.querySelector("[data-axis='industry']");
    if (timeBtn) timeBtn.textContent = t("timeAxis");
    if (industryBtn) industryBtn.textContent = t("industryAxis");
  }
}

function syncAnalysisCurveUnitToggle() {
  if (!refs.analysisCurveUnitToggle) return;
  refs.analysisCurveUnitToggle.querySelectorAll(".analysis-unit-btn").forEach(btn => {
    const isActive = btn.dataset.unit === state.analysisCurveUnit;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
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
    markCameraUserModified(modeKey);
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
      markCameraUserModified(modeKey);
      zoomAt(viewport, modeKey, factor, e.clientX, e.clientY, bounds.min, bounds.max);
      return;
    }

    const cam = state.cameras[modeKey];
    markCameraUserModified(modeKey);
    cam.x -= e.deltaX;
    cam.y -= e.deltaY;
    applyCamera(modeKey);
  }, { passive: false });

  viewport.addEventListener("dblclick", (e) => {
    if (ignoreTarget(e.target)) return;
    const bounds = getScaleBounds(opts);
    markCameraUserModified(modeKey);
    zoomAt(viewport, modeKey, 1.25, e.clientX, e.clientY, bounds.min, bounds.max);
  });
}

function markCameraUserModified(modeKey) {
  if (modeKey === "timeline") state.timelineAutoFit = false;
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
  const vw = Math.max(1, refs.timelineContainer.clientWidth);
  const contentTopY = Number.isFinite(layout.contentTopY) ? layout.contentTopY : 0;
  const contentBottomY = Number.isFinite(layout.contentBottomY) ? layout.contentBottomY : layout.totalH;
  const contentH = Math.max(1, contentBottomY - contentTopY);
  const contentLeftX = Number.isFinite(layout.contentLeftX) ? layout.contentLeftX : 0;
  const contentRightX = Number.isFinite(layout.contentRightX) ? layout.contentRightX : layout.totalW;
  const contentW = Math.max(1, contentRightX - contentLeftX);
  const fitY = Math.max(0.01, (vh - TIMELINE_VERTICAL_MARGIN * 2) / contentH);
  const fitX = Math.max(0.01, vw / contentW);
  return { min: clamp(Math.max(fitY, fitX), TIMELINE_MIN_SCALE, TIMELINE_MAX_SCALE), max: TIMELINE_MAX_SCALE };
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
  overlay.style.setProperty("--timeline-scale", String(cam.scale));
  const pxPerIssue = layout.gapX * cam.scale;
  const step = getAdaptiveTickStep(pxPerIssue);
  const yearLabelRanges = [];
  const filtered = getFilteredAds();

  const main = document.createElement("div");
  main.className = "axis-mainline";
  overlay.appendChild(main);

  renderTimelineDotStack(overlay, filtered, layout, cam, viewW);

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
    thumbSrc: "thumbs/" + id + ".png",
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
      .map(tag => tagLabel(tag.code));

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
    title.textContent = groupLabel(group);

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
      option.textContent = tagLabel(code);
      option.addEventListener("click", (e) => {
        e.stopPropagation();
        if (state.tagsSelected.has(code)) state.tagsSelected.delete(code);
        else state.tagsSelected.add(code);
        state.analysisCollapsed = false;
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
  if (!selectedLabels.length) return t("all");
  if (selectedLabels.length <= 2) return selectedLabels.join(" / ");
  return state.lang === "en" ? selectedLabels.length + " selected" : "已选 " + selectedLabels.length + " 项";
}

function renderSidebar() {
  const filtered = getFilteredAds({ includePairs: false });
  const map = groupByIndustryProduct(filtered);
  refs.industryList.innerHTML = "";
  const industries = Array.from(map.keys()).sort((a, b) => {
    const ac = sumCounts(map.get(a));
    const bc = sumCounts(map.get(b));
    return bc - ac;
  });
  const maxIndustryTotal = Math.max(1, ...industries.map(industry => sumCounts(map.get(industry))));

  industries.forEach((industry) => {
    const products = map.get(industry);
    const total = sumCounts(products);
    const industryPct = Math.round((total / Math.max(1, filtered.length)) * 100);
    const isOpen = state.openIndustries.has(industry);
    const isIndustrySelected = hasSelectedIndustry(industry);
    const block = document.createElement("div");
    block.className = "industry-block" + (isOpen ? " open" : "");
    const blockInner = document.createElement("div");
    blockInner.className = "industry-block-inner";

    const head = document.createElement("div");
    head.className = "industry-head" + (isIndustrySelected ? " active" : "");
    const industryColor = INDUSTRY_COLORS[industry] || "#e7e3da";
    head.style.setProperty("--industry-head-bg", industryColor);
    head.style.setProperty("--row-bar-w", ((total / maxIndustryTotal) * 100).toFixed(3) + "%");
    head.style.setProperty("--row-bar-color", industryColor);
    head.style.setProperty("--industry-head-ink", isDarkHex(industryColor) ? "#ffffff" : "#000000");
    head.innerHTML = "<div class=\"industry-head-inner\"><div class=\"left\"><span>" + escapeHtml(industryLabel(industry)) + "</span></div><span class=\"count\">" + total + " / " + industryPct + "%</span></div>";
    const body = document.createElement("div");
    body.className = "industry-products" + (isOpen ? " open" : "");
    head.addEventListener("click", () => {
      toggleIndustrySelection(industry);
    });

    const productEntries = Array.from(products.entries()).sort((a, b) => b[1] - a[1]);
    const maxProductCount = Math.max(1, ...productEntries.map(([, count]) => count));
    productEntries.forEach(([product, count]) => {
      const key = industry + "|" + product;
      const pct = Math.round((count / Math.max(1, total)) * 100);
      const row = document.createElement("div");
      row.className = "product-item" + (state.pairsSelected.has(key) ? " active" : "");
      row.style.setProperty("--row-bar-w", ((count / maxProductCount) * 100).toFixed(3) + "%");
      row.style.setProperty("--row-bar-color", industryColor);
      row.innerHTML = "<div class=\"product-item-inner\"><span>" + escapeHtml(productLabel(product)) + "</span><span>" + count + " / " + pct + "%</span></div>";
      row.addEventListener("click", () => {
        if (state.pairsSelected.has(key)) state.pairsSelected.delete(key);
        else state.pairsSelected.add(key);
        state.analysisCollapsed = false;
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
  if (refs.appShell) refs.appShell.classList.toggle("visual-mode", mode === "visual");
  syncViewMenu();
  document.querySelectorAll(".mode-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.mode === mode);
  });
  refs.timelineView.classList.toggle("active", mode === "timeline");
  refs.graphView.classList.toggle("active", mode === "graph");
  refs.visualView.classList.toggle("active", mode === "visual");
  renderAll();
}

function renderAll() {
  const filtered = getFilteredAds();
  if (refs.appShell) refs.appShell.classList.toggle("visual-mode", state.mode === "visual");
  syncSidebarState();
  renderSidebar();
  syncAnalysisDrawerState(filtered);
  updateStats(filtered);
  renderAnalysisPanel(filtered);
  renderTimeline(filtered);
  renderGraph(filtered);
  renderVisualPanel(filtered);
}

function getFilteredAds(options = {}) {
  const includePairs = options.includePairs !== false;
  const includeTags = options.includeTags !== false;
  const hasPair = state.pairsSelected.size > 0;
  const hasTag = state.tagsSelected.size > 0;
  return state.allAds.filter(ad => {
    const pairOk = !includePairs || !hasPair || state.pairsSelected.has(ad.industry + "|" + ad.product);
    const tagOk = !includeTags || !hasTag || Array.from(state.tagsSelected).every(t => ad.tagList.includes(t));
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

function hasActiveFilters() {
  return state.tagsSelected.size > 0 || state.pairsSelected.size > 0;
}

function syncAnalysisDrawerState(filtered) {
  const open = hasActiveFilters() && state.mode !== "visual";
  if (!open) state.analysisCollapsed = false;
  if (refs.appShell) refs.appShell.classList.toggle("analysis-open", open);
  if (refs.appShell) refs.appShell.classList.toggle("axis-expanded", open && !!state.expandedAxisIssueKey);
  if (refs.appShell) refs.appShell.classList.toggle("analysis-collapsed", open && state.analysisCollapsed);
  if (refs.analysisDrawer) refs.analysisDrawer.setAttribute("aria-hidden", open ? "false" : "true");
  if (refs.analysisCollapseBtn) {
    refs.analysisCollapseBtn.textContent = state.analysisCollapsed ? t("expand") : t("collapse");
    refs.analysisCollapseBtn.setAttribute("aria-expanded", state.analysisCollapsed ? "false" : "true");
  }
}

function renderAnalysisPanel(filtered) {
  if (!refs.analysisYearSpan) return;
  const emptyText = t("noData");
  if (!filtered.length) {
    refs.analysisYearSpan.textContent = emptyText;
    refs.analysisIndustryCurves.innerHTML = "<div class=\"analysis-empty\">" + escapeHtml(t("noCurve")) + "</div>";
    refs.analysisTags.innerHTML = "<span class=\"analysis-tag muted\">" + escapeHtml(t("noFeature")) + "</span>";
    return;
  }

  const years = filtered.map(ad => ad.year).filter(Number.isFinite);
  const minYear = Math.min(...years);
  const maxYear = Math.max(...years);
  refs.analysisYearSpan.textContent = minYear === maxYear ? String(minYear) : (minYear + "-" + maxYear);

  renderAnalysisIndustryCurves(filtered);
  renderAnalysisTags(filtered);
}

function renderAnalysisIndustryCurves(filtered) {
  const container = refs.analysisIndustryCurves;
  container.innerHTML = "";
  syncAnalysisCurveUnitToggle();
  const industryEntries = Array.from(aggregateBy(filtered, "industry").entries()).sort((a, b) => b[1] - a[1]);
  const availableIndustries = industryEntries.map(([industry]) => industry);
  if (!availableIndustries.length) {
    container.innerHTML = "<div class=\"analysis-empty\">" + escapeHtml(t("noData")) + "</div>";
    return;
  }

  syncAnalysisIndustryPanels(availableIndustries);
  const axisItems = getAnalysisCurveAxisItems();
  const panelIndustries = state.analysisIndustryPanels.slice(0, 4);
  const maxAxisCount = getAnalysisCurveMax(filtered, panelIndustries, axisItems);

  panelIndustries.forEach((industry, panelIndex) => {
    const panel = document.createElement("div");
    panel.className = "analysis-curve-panel";

    const head = document.createElement("div");
    head.className = "analysis-curve-head";
    const title = document.createElement("div");
    title.className = "analysis-curve-title";
    title.textContent = industry ? industryLabel(industry) : "-";
    const picker = document.createElement("div");
    picker.className = "analysis-curve-picker";
    const pickerBtn = document.createElement("button");
    pickerBtn.type = "button";
    pickerBtn.className = "analysis-curve-select";
    pickerBtn.setAttribute("aria-label", t("filterPanelAria"));
    const pickerMenu = document.createElement("div");
    pickerMenu.className = "analysis-curve-menu";
    availableIndustries.forEach(optionIndustry => {
      const option = document.createElement("button");
      option.type = "button";
      option.className = "analysis-curve-option" + (optionIndustry === industry ? " active" : "");
      option.textContent = industryLabel(optionIndustry);
      option.addEventListener("click", (event) => {
        event.stopPropagation();
        state.analysisIndustryPanels[panelIndex] = optionIndustry;
        renderAnalysisIndustryCurves(filtered);
      });
      pickerMenu.appendChild(option);
    });
    pickerBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      document.querySelectorAll(".analysis-curve-picker.open").forEach(openPicker => {
        if (openPicker !== picker) openPicker.classList.remove("open");
      });
      picker.classList.toggle("open");
    });
    picker.appendChild(pickerBtn);
    picker.appendChild(pickerMenu);
    head.appendChild(title);
    head.appendChild(picker);

    const svg = buildIndustryAreaSvg(filtered, industry, axisItems, maxAxisCount);
    const axisRail = buildAreaAxisRail(axisItems);
    const hoverLabel = document.createElement("div");
    hoverLabel.className = "analysis-area-html-label";
    panel.appendChild(head);
    panel.appendChild(svg);
    panel.appendChild(axisRail);
    panel.appendChild(hoverLabel);
    container.appendChild(panel);
  });
}

function syncAnalysisIndustryPanels(availableIndustries) {
  const nextKey = availableIndustries.join("|");
  if (state.analysisIndustryPanelKey !== nextKey) {
    state.analysisIndustryPanels = [];
    state.analysisIndustryPanelKey = nextKey;
  }
  const preserved = state.analysisIndustryPanels.filter(industry => availableIndustries.includes(industry));
  const next = preserved.slice(0, 4);
  availableIndustries.forEach(industry => {
    if (next.length >= 4) return;
    if (!next.includes(industry)) next.push(industry);
  });
  while (next.length < 4) next.push(availableIndustries[0]);
  state.analysisIndustryPanels = next;
}

function getAnalysisCurveAxisItems() {
  if (state.analysisCurveUnit === "issue") {
    return state.issues.map(issue => ({
      key: issue.key,
      label: issue.key,
      axisLabel: String(issue.issue),
      issue,
      type: "issue"
    }));
  }
  const years = Array.from(new Set(state.issues.map(issue => issue.year))).sort((a, b) => a - b);
  return years.map(year => ({
    key: String(year),
    label: String(year),
    axisLabel: String(year),
    year,
    type: "year"
  }));
}

function getAnalysisCurveCount(filtered, industry, axisItem) {
  if (!axisItem) return 0;
  if (axisItem.type === "issue") {
    return filtered.filter(ad => ad.industry === industry && ad.issueKey === axisItem.key).length;
  }
  return filtered.filter(ad => ad.industry === industry && ad.year === axisItem.year).length;
}

function getAnalysisCurveMax(filtered, industries, axisItems) {
  return Math.max(1, ...industries.map(industry =>
    Math.max(0, ...axisItems.map(axisItem => getAnalysisCurveCount(filtered, industry, axisItem)))
  ));
}

function buildIndustryAreaSvg(filtered, industry, axisItems, maxCount) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 320 112");
  svg.setAttribute("preserveAspectRatio", "none");
  svg.classList.add("analysis-area-svg");
  svg.dataset.industry = industry;
  const color = INDUSTRY_COLORS[industry] || INDUSTRY_COLORS["其他"];
  const values = axisItems.map(axisItem => ({
    ...axisItem,
    count: getAnalysisCurveCount(filtered, industry, axisItem)
  }));
  const xFor = (idx) => values.length <= 1 ? 22 : 22 + idx * (276 / (values.length - 1));
  const yFor = (count) => 90 - (count / Math.max(1, maxCount)) * 64;
  const topPoints = values.map((d, idx) => xFor(idx) + "," + yFor(d.count));
  const areaPoints = ["22,90"].concat(topPoints, ["298,90"]).join(" ");
  const area = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
  area.setAttribute("points", areaPoints);
  area.setAttribute("fill", color);
  area.setAttribute("class", "analysis-area-fill");
  svg.appendChild(area);
  const line = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
  line.setAttribute("points", topPoints.join(" "));
  line.setAttribute("stroke", color);
  line.setAttribute("class", "analysis-area-line");
  svg.appendChild(line);
  const vLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
  vLine.setAttribute("class", "analysis-area-guide analysis-area-guide-v");
  vLine.setAttribute("y1", "20");
  vLine.setAttribute("y2", "92");
  svg.appendChild(vLine);
  const hLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
  hLine.setAttribute("class", "analysis-area-guide analysis-area-guide-h");
  hLine.setAttribute("x1", "18");
  hLine.setAttribute("x2", "302");
  svg.appendChild(hLine);
  values.forEach((d, idx) => {
    const hit = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    const x = xFor(idx);
    const nextX = idx < values.length - 1 ? xFor(idx + 1) : x + 36;
    const prevX = idx > 0 ? xFor(idx - 1) : x - 36;
    hit.setAttribute("x", String(Math.max(0, (prevX + x) / 2)));
    hit.setAttribute("y", "0");
    hit.setAttribute("width", String(Math.max(10, (nextX - prevX) / 2)));
    hit.setAttribute("height", "112");
    hit.setAttribute("class", "analysis-area-hit");
    hit.dataset.key = String(d.key);
    hit.addEventListener("mouseenter", () => syncAreaHover(d.key));
    hit.addEventListener("mousemove", () => syncAreaHover(d.key));
    hit.addEventListener("mouseleave", clearAreaHover);
    svg.appendChild(hit);
  });
  return svg;
}

function buildAreaAxisRail(axisItems) {
  const rail = document.createElement("div");
  rail.className = "analysis-area-years";
  getAnalysisAxisTickIndexes(axisItems).forEach((idx) => {
    const axisItem = axisItems[idx];
    const item = document.createElement("span");
    item.textContent = axisItem.axisLabel;
    item.style.left = axisItems.length <= 1 ? "50%" : ((idx / (axisItems.length - 1)) * 100).toFixed(3) + "%";
    rail.appendChild(item);
  });
  return rail;
}

function getAnalysisAxisTickIndexes(axisItems) {
  if (axisItems.length <= 8 || state.analysisCurveUnit === "year") return axisItems.map((_, idx) => idx);
  const indexes = new Set([0, axisItems.length - 1]);
  const issues = axisItems.map(item => Number(item.issue && item.issue.issue)).filter(Number.isFinite);
  const minIssue = Math.min(...issues);
  const maxIssue = Math.max(...issues);
  const span = Math.max(1, maxIssue - minIssue);
  const rough = span / 6;
  const steps = [5, 10, 20, 25, 50];
  const step = steps.find(value => value >= rough) || 50;
  for (let tick = Math.ceil(minIssue / step) * step; tick <= maxIssue; tick += step) {
    let bestIdx = 0;
    let bestDist = Infinity;
    axisItems.forEach((item, idx) => {
      const issueNo = Number(item.issue && item.issue.issue);
      const dist = Math.abs(issueNo - tick);
      if (dist < bestDist) {
        bestDist = dist;
        bestIdx = idx;
      }
    });
    indexes.add(bestIdx);
  }
  return Array.from(indexes).sort((a, b) => a - b);
}

function syncAreaHover(axisKey) {
  document.querySelectorAll(".analysis-area-svg").forEach(svg => {
    const industry = svg.dataset.industry || "";
    const filtered = getFilteredAds();
    const axisItems = getAnalysisCurveAxisItems();
    const axisItem = axisItems.find(item => item.key === String(axisKey));
    if (!axisItem) return;
    const panelIndustries = state.analysisIndustryPanels.slice(0, 4);
    const maxAxisCount = getAnalysisCurveMax(filtered, panelIndustries, axisItems);
    const count = getAnalysisCurveCount(filtered, industry, axisItem);
    const idx = axisItems.findIndex(item => item.key === String(axisKey));
    if (idx < 0) return;
    const x = axisItems.length <= 1 ? 22 : 22 + idx * (276 / (axisItems.length - 1));
    const y = 90 - (count / Math.max(1, maxAxisCount)) * 64;
    const v = svg.querySelector(".analysis-area-guide-v");
    const h = svg.querySelector(".analysis-area-guide-h");
    const label = svg.parentElement ? svg.parentElement.querySelector(".analysis-area-html-label") : null;
    if (v) {
      v.setAttribute("x1", String(x));
      v.setAttribute("x2", String(x));
    }
    if (h) {
      h.setAttribute("y1", String(y));
      h.setAttribute("y2", String(y));
    }
    if (label) {
      const nearRightEdge = x > 238;
      label.style.left = nearRightEdge
        ? "calc(" + ((x / 320) * 100).toFixed(3) + "% - 10px)"
        : "calc(" + ((x / 320) * 100).toFixed(3) + "% + 8px)";
      label.style.top = "calc(" + ((y / 112) * 100).toFixed(3) + "% - 28px)";
      label.style.transform = nearRightEdge ? "translateX(-100%)" : "translateX(0)";
      label.textContent = axisItem.label + " / " + industryLabel(industry) + " / " + countText(count);
    }
    svg.classList.add("hovering");
  });
}

function clearAreaHover() {
  document.querySelectorAll(".analysis-area-svg").forEach(svg => svg.classList.remove("hovering"));
}

function renderAnalysisBars(opts) {
  const container = opts.container;
  const entries = opts.entries.slice(0, opts.limit);
  container.innerHTML = "";
  if (!entries.length) {
    container.innerHTML = "<div class=\"analysis-empty\">" + escapeHtml(t("noData")) + "</div>";
    return;
  }
  const max = Math.max(...entries.map((entry) => entry[1]), 1);
  entries.forEach(([label, count]) => {
    const pct = Math.round((count / Math.max(1, opts.total)) * 100);
    const row = document.createElement("button");
    row.type = "button";
    row.className = "analysis-bar" + (opts.isActive(label) ? " active" : "");
    row.style.setProperty("--bar-w", Math.max(6, (count / max) * 100) + "%");
    row.style.setProperty("--bar-color", opts.getColor(label));
    row.innerHTML = "<span class=\"analysis-bar-label\">" + escapeHtml(industryLabel(label)) + "</span><span class=\"analysis-bar-count\">" + count + " / " + pct + "%</span>";
    row.addEventListener("click", () => opts.onClick(label));
    container.appendChild(row);
  });
}

function renderAnalysisTags(filtered) {
  const tagCounts = new Map();
  filtered.forEach(ad => {
    ad.tagList.forEach(code => tagCounts.set(code, (tagCounts.get(code) || 0) + 1));
  });
  const entries = Array.from(tagCounts.entries()).sort((a, b) => b[1] - a[1]).slice(0, 8);
  refs.analysisTags.innerHTML = "";
  if (!entries.length) {
    refs.analysisTags.innerHTML = "<span class=\"analysis-tag muted\">" + escapeHtml(t("noFeature")) + "</span>";
    return;
  }
  entries.forEach(([code, count]) => {
    const def = TAG_DEF_MAP.get(code);
    const tag = document.createElement("button");
    tag.type = "button";
    tag.className = "analysis-tag" + (state.tagsSelected.has(code) ? " active" : "");
    tag.textContent = (def ? tagLabel(code) : code) + " " + count;
    tag.addEventListener("click", () => {
      if (state.tagsSelected.has(code)) state.tagsSelected.delete(code);
      else state.tagsSelected.add(code);
      renderTagRail();
      renderAll();
    });
    refs.analysisTags.appendChild(tag);
  });
}

function renderVisualPanel(filtered) {
  if (!refs.visualHeatmapWrap || !refs.visualAxis) return;
  if (state.mode !== "visual") return;
  normalizeVisualMetricMode();
  const axisItems = getVisualAxisItems(filtered);
  const availableW = Math.max(320, refs.visualHeatmapWrap.clientWidth || 960);
  const maxCellW = state.visualAxisMode === "industry" ? 140 : 42;
  const baseCellW = Math.max(5, Math.min(maxCellW, Math.floor((availableW - 150) / Math.max(1, axisItems.length))));
  const cellW = Math.round(baseCellW * state.visualScale);
  const activeAds = filtered;
  const tagTotals = new Map(VISUAL_TAGS.map(tag => [
    tag.code,
    activeAds.filter(ad => ad.tagList.includes(tag.code)).length
  ]));
  const axisTotals = new Map(axisItems.map(item => [
    item.key,
    activeAds.filter(ad => isAdInVisualAxisItem(ad, item)).length
  ]));
  const maxMetric = Math.max(1, ...VISUAL_TAGS.flatMap(tag =>
    axisItems.map(item => getVisualCellMetric(activeAds, tag.code, item, tagTotals, axisTotals).value)
  ));

  refs.visualHeatmapWrap.style.setProperty("--visual-cell-w", cellW + "px");
  refs.visualHeatmapWrap.style.setProperty("--issue-count", axisItems.length);
  refs.visualHeatmapWrap.innerHTML = "";
  syncVisualAxisControls();
  syncVisualMetricControls();

  VISUAL_TAGS.forEach(tag => {
    const row = document.createElement("div");
    row.className = "visual-row" + (state.visualExpandedTag === tag.code ? " expanded" : "");

    const label = document.createElement("button");
    label.type = "button";
    label.className = "visual-row-label";
    label.setAttribute("aria-expanded", state.visualExpandedTag === tag.code ? "true" : "false");
    label.innerHTML = "<span>" + escapeHtml(tagLabel(tag.code)) + "</span><span class=\"visual-row-caret\" aria-hidden=\"true\"></span>";
    label.addEventListener("click", () => {
      const nextExpanded = state.visualExpandedTag === tag.code ? null : tag.code;
      state.visualExpandedTag = nextExpanded;
      if (nextExpanded && state.visualAxisMode === "time") state.visualScale = Math.max(state.visualScale, 2.2);
      renderVisualPanel(getFilteredAds());
      syncVisualAxisScroll();
    });

    const description = tagDescription(tag.code);
    const note = document.createElement("div");
    note.className = "visual-feature-note";
    note.innerHTML = "<div class=\"visual-feature-note-kicker\">" + escapeHtml(t("featureExplain")) + "</div><div class=\"visual-feature-note-title\">" + escapeHtml(tagLabel(tag.code)) + "</div><p>" + escapeHtml(description) + "</p>";

    const cells = document.createElement("div");
    cells.className = "visual-cells";
    axisItems.forEach(item => {
      const ads = getVisualCellAds(activeAds, tag.code, item);
      const count = ads.length;
      const cell = document.createElement("button");
      cell.type = "button";
      cell.className = "visual-cell";
      const metric = getVisualCellMetric(activeAds, tag.code, item, tagTotals, axisTotals);
      cell.style.setProperty("--heat", String(metric.value ? Math.pow(metric.value / maxMetric, 0.58) : 0));
      const tooltipText = tagLabel(tag.code) + " / " + item.label + " / " + countText(count) + metric.tooltipSuffix;
      cell.setAttribute("aria-label", tooltipText);
      cell.addEventListener("mouseenter", (event) => showAnalysisTooltip(event, tooltipText));
      cell.addEventListener("mousemove", (event) => showAnalysisTooltip(event, tooltipText));
      cell.addEventListener("mouseleave", hideTooltip);
      cells.appendChild(cell);
    });

    const strip = document.createElement("div");
    strip.className = "visual-ad-strip";
    axisItems.forEach(item => {
      const bucket = document.createElement("div");
      bucket.className = "visual-ad-bucket";
      getVisualCellAds(activeAds, tag.code, item)
        .slice(0, 12)
        .forEach(ad => {
          const img = document.createElement("img");
          img.src = ad.thumbSrc || ad.imgSrc;
          img.alt = ad.id;
          img.addEventListener("mouseenter", (event) => showTooltip(event, ad));
          img.addEventListener("mousemove", moveTooltip);
          img.addEventListener("mouseleave", hideTooltip);
          img.addEventListener("click", () => openDetailModal(ad));
          bucket.appendChild(img);
        });
      strip.appendChild(bucket);
    });

    row.appendChild(label);
    if (state.visualExpandedTag === tag.code && description) row.appendChild(note);
    row.appendChild(cells);
    row.appendChild(strip);
    refs.visualHeatmapWrap.appendChild(row);
  });

  renderVisualAxis(axisItems, cellW);
  syncVisualAxisScroll();
}

function getVisualAxisItems(filtered) {
  if (state.visualAxisMode === "industry") {
    const counts = aggregateBy(filtered, "industry");
    return Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "zh-Hans-CN"))
      .map(([industry]) => ({ key: industry, label: industryLabel(industry), group: t("industry"), type: "industry" }));
  }
  return state.issues.map(issue => ({ key: issue.key, label: issue.key, issue, type: "time" }));
}

function getVisualCellAds(ads, tagCode, item) {
  return ads.filter(ad => {
    if (!ad.tagList.includes(tagCode)) return false;
    return isAdInVisualAxisItem(ad, item);
  });
}

function isAdInVisualAxisItem(ad, item) {
  if (item.type === "industry") return ad.industry === item.key;
  return ad.issueKey === item.key;
}

function getVisualCellMetric(ads, tagCode, item, tagTotals, axisTotals) {
  const count = getVisualCellAds(ads, tagCode, item).length;
  if (state.visualAxisMode === "industry" && state.visualMetricMode === "axisShare") {
    const axisTotal = axisTotals.get(item.key) || 0;
    const value = axisTotal ? count / axisTotal : 0;
    return { value, tooltipSuffix: " / " + count + "/" + axisTotal + " = " + Math.round(value * 100) + "% " + getVisualAxisShareLabel() };
  }
  if (state.visualAxisMode === "industry" && state.visualMetricMode === "tagShare") {
    const tagTotal = tagTotals.get(tagCode) || 0;
    const value = tagTotal ? count / tagTotal : 0;
    return { value, tooltipSuffix: " / " + count + "/" + tagTotal + " = " + Math.round(value * 100) + "% " + getVisualTagShareLabel() };
  }
  return { value: count, tooltipSuffix: "" };
}

function getVisualMetricLabel() {
  if (state.visualMetricMode === "axisShare") return getVisualAxisShareButtonLabel();
  if (state.visualMetricMode === "tagShare") return getVisualTagShareButtonLabel();
  return t("count");
}

function syncVisualMetricControls() {
  if (!refs.visualMetricControls) return;
  refs.visualMetricControls.hidden = state.visualAxisMode !== "industry";
  refs.visualMetricControls.querySelectorAll(".visual-metric-btn").forEach(btn => {
    const metric = btn.dataset.metric || "count";
    btn.classList.toggle("active", metric === state.visualMetricMode);
    if (metric === "axisShare") btn.textContent = getVisualAxisShareButtonLabel();
    if (metric === "tagShare") btn.textContent = getVisualTagShareButtonLabel();
  });
}

function syncVisualAxisControls() {
  if (!refs.visualAxisToggle) return;
  syncVisualAxisButtonText();
  refs.visualAxisToggle.querySelectorAll(".visual-axis-btn").forEach(btn => {
    const axis = btn.dataset.axis || "time";
    btn.classList.toggle("active", axis === state.visualAxisMode);
  });
}

function normalizeVisualMetricMode() {
  if (state.visualAxisMode === "time") {
    state.visualMetricMode = "count";
    return;
  }
  if (state.visualMetricMode !== "axisShare" && state.visualMetricMode !== "tagShare") {
    state.visualMetricMode = "axisShare";
  }
}

function getVisualAxisShareButtonLabel() {
  return t("axisShare");
}

function getVisualTagShareButtonLabel() {
  return t("tagShare");
}

function getVisualAxisShareLabel() {
  return t("axisShareLong");
}

function getVisualTagShareLabel() {
  return t("tagShareLong");
}

function renderVisualAxis(axisItems, cellW) {
  const step = cellW + 1;
  const totalW = Math.max(1, axisItems.length) * step;
  const pxPerIssue = step;
  const tickStep = getAdaptiveTickStep(pxPerIssue);
  refs.visualAxis.style.setProperty("--visual-cell-w", cellW + "px");
  refs.visualAxis.style.setProperty("--issue-count", axisItems.length);
  refs.visualAxis.innerHTML = "<div class=\"visual-axis-content\"></div>";
  const content = refs.visualAxis.querySelector(".visual-axis-content");
  content.style.width = totalW + "px";
  if (state.visualAxisMode === "time") {
    const main = document.createElement("div");
    main.className = "axis-mainline";
    content.appendChild(main);
  }
  const yearLabelRanges = [];
  let lastYear = null;
  let lastYearX = -9999;
  axisItems.forEach((item, idx) => {
    const x = idx * step;
    if (state.visualAxisMode === "industry") {
      const tick = document.createElement("div");
      tick.className = "visual-axis-year visual-axis-industry";
      tick.style.left = (x + cellW / 2) + "px";
      tick.textContent = item.label;
      content.appendChild(tick);
      return;
    }
    const issue = item.issue;
    const prevIssue = axisItems[idx - 1] && axisItems[idx - 1].issue;
    if (issue.year !== (prevIssue && prevIssue.year) && issue.year !== lastYear && x - lastYearX >= 56) {
      const year = document.createElement("div");
      year.className = "axis-year-label";
      year.style.left = (x + cellW / 2) + "px";
      year.textContent = String(issue.year);
      content.appendChild(year);
      const yearHalfW = measureAxisLabelHalfWidth(issue.year, 11, 500, 0.8, 18);
      const yearX = x + cellW / 2;
      yearLabelRanges.push({
        minX: yearX - yearHalfW,
        maxX: yearX + yearHalfW
      });
      lastYear = issue.year;
      lastYearX = x;
    }
    if (idx % tickStep !== 0 && issue.year === (prevIssue && prevIssue.year)) return;
    const tick = document.createElement("div");
    tick.className = "axis-tick";
    tick.style.left = (x + cellW / 2) + "px";
    content.appendChild(tick);
    const issueHalfW = measureAxisLabelHalfWidth(issue.issue, 10, 400, 0.8, 0);
    const issueX = x + cellW / 2;
    const overlapsYear = yearLabelRanges.some(range =>
      (issueX - issueHalfW) <= range.maxX && (issueX + issueHalfW) >= range.minX
    );
    if (overlapsYear) return;
    const issueLabel = document.createElement("div");
    issueLabel.className = "axis-issue-label";
    issueLabel.style.left = issueX + "px";
    issueLabel.textContent = String(issue.issue || "");
    content.appendChild(issueLabel);
  });
}

function getVisualStepPx(scale) {
  const availableW = Math.max(320, refs.visualHeatmapWrap ? refs.visualHeatmapWrap.clientWidth : 960);
  const itemCount = state.visualAxisMode === "industry"
    ? Math.max(1, getVisualAxisItems(getFilteredAds()).length)
    : Math.max(1, state.issues.length);
  const maxCellW = state.visualAxisMode === "industry" ? 140 : 42;
  const baseCellW = Math.max(5, Math.min(maxCellW, Math.floor((availableW - 150) / itemCount)));
  return Math.round(baseCellW * scale) + 1;
}

function syncVisualAxisScroll() {
  if (!refs.visualAxis || !refs.visualHeatmapWrap) return;
  const content = refs.visualAxis.querySelector(".visual-axis-content");
  if (!content) return;
  content.style.transform = "translateX(" + (-refs.visualHeatmapWrap.scrollLeft) + "px)";
}

function hasSelectedIndustry(industry) {
  for (const key of state.pairsSelected) {
    if (key.split("|")[0] === industry) return true;
  }
  return false;
}

function hasSelectedProduct(product) {
  for (const key of state.pairsSelected) {
    if (key.split("|")[1] === product) return true;
  }
  return false;
}

function toggleIndustrySelection(industry) {
  const keys = getIndustryProductKeys(industry);
  const allSelected = keys.length > 0 && keys.every(key => state.pairsSelected.has(key));
  keys.forEach(key => {
    if (allSelected) state.pairsSelected.delete(key);
    else state.pairsSelected.add(key);
  });
  state.analysisCollapsed = false;
  if (!allSelected) state.openIndustries.add(industry);
  renderSidebar();
  renderAll();
}

function toggleProductSelection(product) {
  const keys = getProductKeys(product);
  const allSelected = keys.length > 0 && keys.every(key => state.pairsSelected.has(key));
  keys.forEach(key => {
    if (allSelected) state.pairsSelected.delete(key);
    else state.pairsSelected.add(key);
  });
  state.analysisCollapsed = false;
  renderSidebar();
  renderAll();
}

function getIndustryProductKeys(industry) {
  const keys = new Set();
  state.allAds.forEach(ad => {
    if (ad.industry === industry) keys.add(ad.industry + "|" + ad.product);
  });
  return Array.from(keys);
}

function getProductKeys(product) {
  const keys = new Set();
  state.allAds.forEach(ad => {
    if (ad.product === product) keys.add(ad.industry + "|" + ad.product);
  });
  return Array.from(keys);
}

function renderTimelineDotStack(overlay, filtered, layout, cam, viewW) {
  if (!hasActiveFilters() || !filtered.length) return;
  const issueMap = new Map();
  filtered.forEach(ad => {
    if (!issueMap.has(ad.issueKey)) issueMap.set(ad.issueKey, []);
    issueMap.get(ad.issueKey).push(ad);
  });
  const entries = state.issues.map((issue, idx) => ({
    issue,
    idx,
    ads: issueMap.get(issue.key) || []
  }));
  if (!entries.length) return;

  const maxCount = Math.max(...entries.map(entry => entry.ads.length), 1);
  entries.forEach(entry => {
    if (!entry.ads.length) return;
    const worldX = layout.leftPad + entry.idx * layout.gapX;
    const sx = cam.x + worldX * cam.scale;
    if (sx < -30 || sx > viewW + 30) return;
    const industryGroups = groupAdsByIndustry(entry.ads)
      .sort((a, b) => b.ads.length - a.ads.length || a.industry.localeCompare(b.industry, "zh-Hans-CN"));
    const bar = document.createElement("div");
    const isExpanded = state.expandedAxisIssueKey === entry.issue.key;
    bar.className = "axis-stack-bar" + (isExpanded ? " expanded" : "");
    bar.style.left = sx + "px";
    bar.style.height = Math.max(isExpanded ? 86 : 10, (entry.ads.length / maxCount) * (isExpanded ? 106 : 54)) + "px";
    bar.addEventListener("pointerdown", (e) => {
      e.stopPropagation();
    });
    bar.addEventListener("click", (e) => {
      e.stopPropagation();
      state.expandedAxisIssueKey = isExpanded ? null : entry.issue.key;
      renderAll();
    });
    industryGroups.forEach((group) => {
      const sample = group.ads[0];
      const segment = document.createElement("button");
      segment.type = "button";
      segment.className = "axis-stack-segment";
      segment.style.flexGrow = String(group.ads.length);
      segment.style.backgroundColor = sample.color;
      const pct = Math.round((group.ads.length / entry.ads.length) * 100);
      const tooltipText = entry.issue.key + " / " + industryLabel(group.industry) + " / " + countText(group.ads.length) + " / " + pct + "%";
      segment.setAttribute("aria-label", tooltipText);
      segment.addEventListener("pointerdown", (e) => {
        e.stopPropagation();
      });
      segment.addEventListener("pointerenter", (event) => {
        showAnalysisTooltip(event, tooltipText);
      });
      segment.addEventListener("pointermove", (event) => {
        showAnalysisTooltip(event, tooltipText);
      });
      segment.addEventListener("pointerleave", hideTooltip);
      segment.addEventListener("mouseover", (event) => {
        showAnalysisTooltip(event, tooltipText);
      });
      segment.addEventListener("mousemove", (event) => {
        showAnalysisTooltip(event, tooltipText);
      });
      segment.addEventListener("mouseout", hideTooltip);
      segment.addEventListener("click", (e) => {
        e.stopPropagation();
        state.expandedAxisIssueKey = isExpanded ? null : entry.issue.key;
        renderAll();
      });
      bar.appendChild(segment);
    });
    overlay.appendChild(bar);
  });
}

function showAnalysisTooltip(event, text) {
  refs.tooltip.style.display = "block";
  refs.tooltip.textContent = text;
  moveTooltip(event);
}

function groupAdsByIndustry(ads) {
  const map = new Map();
  ads.forEach(ad => {
    if (!map.has(ad.industry)) map.set(ad.industry, []);
    map.get(ad.industry).push(ad);
  });
  return Array.from(map.entries()).map(([industry, groupedAds]) => ({ industry, ads: groupedAds }));
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
  const axisOverlayH = hasActiveFilters() ? 132 : 72;
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
    el.dataset.adId = ad.id;
    el.style.left = x + "px";
    el.style.top = y + "px";
    el.style.width = adSize.w + "px";
    el.style.height = adH + "px";
    el.style.borderBottomColor = ad.color;
    ad.timelineRect = { x, y, w: adSize.w, h: adH };

    const img = document.createElement("img");
    img.src = ad.thumbSrc || ad.imgSrc;
    img.onerror = () => {
      if (img.src !== ad.imgSrc) img.src = ad.imgSrc;
    };
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

  if (state.timelineAutoFit) fitTimelineToDefaultView();
  applyCamera("timeline");
}

function getTimelineAdSize(ad) {
  const src = ad && (ad.thumbSrc || ad.imgSrc);
  const meta = src ? adImageMetaCache.get(src) : null;
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
    .map(ad => ensureAdImageMeta(ad.thumbSrc || ad.imgSrc))
    .filter(Boolean);
  if (!pending.length) return;
  Promise.all(pending).then(() => {
    if (state.mode !== "timeline") return;
    renderTimeline(getFilteredAds());
  }).catch(() => {});
}

function fitTimelineToDefaultView() {
  const layout = state.timelineLayout;
  if (!layout) return;
  const bounds = getTimelineScaleBounds();
  const cam = state.cameras.timeline;
  const contentLeftX = Number.isFinite(layout.contentLeftX) ? layout.contentLeftX : 0;
  const contentRightX = Number.isFinite(layout.contentRightX) ? layout.contentRightX : layout.totalW;
  const contentW = Math.max(1, contentRightX - contentLeftX);
  const viewW = Math.max(1, refs.timelineContainer.clientWidth);
  const fitX = viewW / contentW;
  cam.scale = clamp(fitX, bounds.min, bounds.max);
  enforceCameraBounds("timeline");
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
    drawSvgText(svgEl, w / 2, h / 2, t("noData"), 16, "#000000");
    refs.graphCrumb.textContent = t("graphLevel") + "：" + t("noResult");
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
      nonAdBody.append("circle")
        .attr("class", "graph-node-rect")
        .attr("r", d => d.r || Math.min(d.w, d.h) / 2);
      nonAdBody.append("text")
        .attr("class", "graph-node-text")
        .classed("graph-node-text-small", d => state.lang === "en" || d.kind === "issue" || d.kind === "product")
        .style("--graph-node-text-scale", d => getGraphNodeTextScale(d))
        .attr("x", 0)
        .each(function(d) {
          const text = d3.select(this);
          const lines = d.displayLines && d.displayLines.length ? d.displayLines : [d.displayLabel];
          const lineH = state.lang === "en" ? 11 : (d.kind === "product" ? 13 : 14);
          const startY = lines.length > 1 ? -((lines.length - 1) * lineH) / 2 + 5 : (d.subtext ? -4 : 5);
          lines.forEach((line, idx) => {
            text.append("tspan")
              .attr("x", 0)
              .attr("y", startY + idx * lineH)
              .text(line);
          });
        });
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
        .style("--graph-center-text-scale", d => getGraphCenterTextScale(d))
        .attr("x", 0)
        .each(function(d) {
          const text = d3.select(this);
          const lines = d.displayLines && d.displayLines.length ? d.displayLines : [d.displayLabel || d.label];
          const lineH = state.lang === "en" ? 13 : 15;
          const startY = lines.length > 1 ? -((lines.length - 1) * lineH) / 2 - 2 : -4;
          lines.forEach((line, idx) => {
            text.append("tspan")
              .attr("x", 0)
              .attr("y", startY + idx * lineH)
              .text(line);
          });
        });
      body.append("text")
        .attr("class", "graph-center-subtext")
        .attr("x", 0)
        .attr("y", d => state.lang === "en" && d.displayLines && d.displayLines.length > 1 ? 28 : 18)
        .text(d => countText(d.count));
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
    label: t("allAds"),
    displayLabel: t("allAds"),
    kind: "root",
    count: filtered.length,
    depth: 0,
    parentId: null
  });
  nodes.push(rootNode);

  const industryEntries = Array.from(aggregateBy(filtered, "industry").entries()).sort((a, b) => b[1] - a[1]);
  industryEntries.forEach(([industry, count]) => {
    const id = "industry:" + industry;
    nodes.push(makeGraphNode({ id, label: industry, displayLabel: industryLabel(industry), kind: "industry", count, depth: 1, parentId: rootId }));
    links.push(makeGraphLink(rootId, id, 190, 0.3));
  });

  let crumb = t("graphLevel") + "：" + t("industry");
  let centerId = rootId;

  if (focus.industry) {
    const industryId = "industry:" + focus.industry;
    centerId = industryId;
    crumb = t("graphLevel") + "：" + t("industry") + " / " + industryLabel(focus.industry) + " / " + t("product");
    const subsetIndustry = filtered.filter(a => a.industry === focus.industry);
    const productEntries = Array.from(aggregateBy(subsetIndustry, "product").entries()).sort((a, b) => b[1] - a[1]);
    productEntries.forEach(([product, count]) => {
      const id = "product:" + focus.industry + "|" + product;
      nodes.push(makeGraphNode({
        id,
        label: product,
        displayLabel: productLabel(product),
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
      crumb = t("graphLevel") + "：" + industryLabel(focus.industry) + " / " + productLabel(focus.product) + " / " + t("issue");
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
        crumb = t("graphLevel") + "：" + industryLabel(focus.industry) + " / " + productLabel(focus.product) + " / " + focus.issueKey + " / " + t("ad");
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
  assignGraphBubbleSizes(nodes);

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
      displayFullLabel: opts.label,
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
  const displaySource = opts.displayLabel || opts.label;
  const displayParts = getGraphDisplayParts(kind, displaySource);
  const displayLabel = displayParts.label;
  const isTruncated = !!displayParts.isTruncated;
  const subtext = String(opts.subtext || "");
  const size = getGraphNodeSize(kind, displayLabel, subtext, opts.count);
  return {
    id: opts.id,
    label: opts.label,
    displayLabel,
    displayFullLabel: displaySource,
    displayLines: displayParts.lines,
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
    r: size.r,
    subtext
  };
}

function getGraphDisplayParts(kind, label) {
  const raw = String(label || "");
  if (kind === "issue") {
    const short = raw.replace(/^19(\d{2})-/, "$1-");
    return { label: short, lines: [short], isTruncated: short !== raw };
  }
  if (state.lang === "en") {
    const lines = wrapGraphEnglishLabel(raw, kind);
    return { label: raw, lines, isTruncated: false };
  }
  if (kind === "product") {
    const compact = raw.replace(/[、，,/\s]+/g, "");
    const visible = compact.length > 4 ? compact.slice(0, 4) + "…" : compact;
    const lines = visible.length > 2 ? [visible.slice(0, 2), visible.slice(2)] : [visible];
    return { label: visible, lines, isTruncated: visible !== compact };
  }
  const short = trimLabel(raw, 5);
  return { label: short, lines: [short], isTruncated: short !== raw };
}

function wrapGraphEnglishLabel(label, kind) {
  const raw = String(label || "").trim();
  if (!raw) return [""];
  const maxChars = kind === "root" ? 7 : kind === "industry" ? 10 : 9;
  const words = raw.split(/[\s/]+/).filter(Boolean);
  if (!words.length) return [raw];
  const lines = [];
  let current = "";
  words.forEach(word => {
    const pieces = word.length > maxChars + 2 ? splitGraphLongWord(word, maxChars) : [word];
    pieces.forEach(piece => {
      const next = current ? current + " " + piece : piece;
      if (current && next.length > maxChars) {
        lines.push(current);
        current = piece;
      } else {
        current = next;
      }
    });
  });
  if (current) lines.push(current);
  return lines;
}

function splitGraphLongWord(word, maxChars) {
  const chunks = [];
  for (let i = 0; i < word.length; i += maxChars) {
    chunks.push(word.slice(i, i + maxChars));
  }
  return chunks;
}

function assignGraphBubbleSizes(nodes) {
  const bubbles = nodes.filter(n => n.kind !== "ad" && !n.isCenter);
  if (!bubbles.length) return;
  const maxCount = Math.max(1, ...bubbles.map(n => n.count || 0));
  bubbles.forEach(node => {
    const ratio = Math.sqrt(Math.max(0, node.count || 0) / maxCount);
    const r = Math.round(GRAPH_BUBBLE_MIN_R + ratio * (GRAPH_BUBBLE_MAX_R - GRAPH_BUBBLE_MIN_R));
    node.r = r;
    node.w = r * 2;
    node.h = r * 2;
  });
}

function getGraphNodeTextScale(node) {
  if (!node) return "1";
  const r = Number.isFinite(node.r) ? node.r : 34;
  if (state.lang === "en" && node.kind !== "issue") {
    const lines = node.displayLines && node.displayLines.length ? node.displayLines : [node.displayLabel || node.label || ""];
    const longest = Math.max(1, ...lines.map(line => String(line).length));
    const horizontal = (r * 1.48) / (longest * 7.2);
    const vertical = (r * 1.45) / (lines.length * 11);
    return String(clamp(Math.min(horizontal, vertical), 0.46, 0.92).toFixed(2));
  }
  if (node.kind === "product") {
    if (r < 30) return "0.78";
    if (r < 38) return "0.86";
    return "0.92";
  }
  if (node.kind !== "issue") return "1";
  if (r < 30) return "0.68";
  if (r < 38) return "0.78";
  return "0.88";
}

function getGraphCenterTextScale(node) {
  if (!node || state.lang !== "en") return "1";
  const lines = node.displayLines && node.displayLines.length ? node.displayLines : [node.displayLabel || node.label || ""];
  const longest = Math.max(1, ...lines.map(line => String(line).length));
  const horizontal = (GRAPH_CENTER_CIRCLE_RADIUS * 1.35) / (longest * 8);
  const vertical = (GRAPH_CENTER_CIRCLE_RADIUS * 1.25) / (lines.length * 13);
  return String(clamp(Math.min(horizontal, vertical), 0.52, 0.95).toFixed(2));
}

function getGraphNodeSize(kind, label, subtext, count) {
  const labelFontSize = getRootNumberVar("--graph-node-label-size", 14);
  const labelTracking = getRootNumberVar("--graph-node-label-tracking", 1.3);
  const subtextFontSize = getRootNumberVar("--graph-node-subtext-size", 11);
  const subtextTracking = getRootNumberVar("--graph-node-subtext-tracking", 0.6);
  const hasSubtext = !!subtext;
  const labelWidth = measureGraphTextWidth(label, labelFontSize, 600, labelTracking);
  const subtextWidth = subtext ? measureGraphTextWidth(subtext, subtextFontSize, 400, subtextTracking) : 0;
  const contentWidth = Math.max(labelWidth, subtextWidth);
  const minTextR = Math.max(18, contentWidth * 0.5 + (hasSubtext ? 14 : 10));
  const countRatio = Math.sqrt(Math.max(1, count || 1));
  const r = clamp(Math.max(minTextR, 18 + countRatio * 1.2), GRAPH_BUBBLE_MIN_R, GRAPH_BUBBLE_MAX_R);
  return {
    w: r * 2,
    h: r * 2,
    r
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
      textColor: "#000000",
      subtextColor: "rgba(0, 0, 0, 0.72)"
    };
  }

  const fillColor = INDUSTRY_COLORS[paletteKey] || INDUSTRY_COLORS["其他"] || null;
  if (!fillColor) {
    return {
      fillColor: null,
      strokeColor: null,
      textColor: "#000000",
      subtextColor: "rgba(0, 0, 0, 0.72)"
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
    this.setAttribute("d", buildStraightLinkPath(d));
  });
}

function buildStraightLinkPath(link) {
  const edge = edgeTrimPoint(link.source, link.target);
  return "M " + edge.x1 + " " + edge.y1 + " L " + edge.x2 + " " + edge.y2;
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
  if (node.kind !== "ad") {
    const radius = (Number.isFinite(node.r) ? node.r : Math.min(node.w, node.h) * 0.5) + strokeOutset;
    return { x: ux * radius, y: uy * radius };
  }
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
    refs.tooltip.textContent = (node.displayFullLabel || node.displayLabel || node.label) + " | " + countText(node.count);
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

function openDetailModal(ad, options = {}) {
  if (options.pushHistory && state.detailAd) {
    state.detailHistory.push({
      ad: state.detailAd,
      sourceMode: state.detailSourceMode
    });
  }
  state.detailAd = ad;
  if (options.preserveSource) {
    state.detailSourceMode = state.detailSourceMode || state.mode;
  } else {
    state.detailSourceMode = options.sourceMode || state.mode;
  }
  refs.detailImg.src = ad.imgSrc;
  refs.detailTitle.textContent = ad.id;
  refs.detailMeta.textContent = state.lang === "en"
    ? ad.year + " / " + t("issuePrefix") + ad.issue + " / " + industryLabel(ad.industry) + " / " + productLabel(ad.product)
    : ad.year + " 年 / 第 " + ad.issue + " 期 / " + ad.industry + " / " + ad.product;
  refs.detailFoot.textContent = t("graphPath") + "：" + industryLabel(ad.industry) + " → " + productLabel(ad.product) + " → " + ad.issueKey + " → " + ad.id;

  refs.detailTags.innerHTML = "";
  const tags = ad.tagList.length ? ad.tagList : [];
  tags.forEach(code => {
    const def = TAG_DEFS.find(t => t.code === code);
    const chip = document.createElement("span");
    chip.className = "mini-tag";
    chip.textContent = def ? tagLabel(code) : code;
    chip.title = chip.textContent;
    refs.detailTags.appendChild(chip);
  });
  if (!tags.length) {
    refs.detailTags.innerHTML = "<span class=\"mini-tag\">" + escapeHtml(t("noFeatureTag")) + "</span>";
  }

  const sim = findSimilarAds(ad, 4);
  refs.similarRow.innerHTML = "";
  if (!sim.length) {
    refs.similarRow.innerHTML = "<div class=\"empty\">" + escapeHtml(t("noSimilar")) + "</div>";
  } else {
    sim.forEach(item => {
      const card = document.createElement("div");
      card.className = "similar-card";
      const countClass = item.sharedCount >= 100 ? " three-digits" : (item.sharedCount >= 10 ? " two-digits" : "");
      const tagLen = (item.ad.industry || "").length + (item.ad.product || "").length;
      const tagClass = tagLen >= 7 ? " tight" : (tagLen >= 5 ? " compact" : "");
      const idLen = (item.ad.id || "").length;
      const idClass = idLen >= 13 ? " tight" : (idLen >= 11 ? " compact" : "");
      const similarIndustry = industryLabel(item.ad.industry);
      const similarProduct = productLabel(item.ad.product);
      card.innerHTML = "<img src=\"" + item.ad.imgSrc + "\" alt=\"\"><div class=\"similar-caption\"><span class=\"similar-count" + countClass + "\">" + escapeHtml(String(item.sharedCount)) + "</span><div class=\"similar-meta\"><span class=\"similar-id" + idClass + "\">" + escapeHtml(item.ad.id) + "</span><div class=\"similar-tags" + tagClass + "\"><span class=\"mini-tag\" title=\"" + escapeHtml(similarIndustry) + "\">" + escapeHtml(similarIndustry) + "</span><span class=\"mini-tag\" title=\"" + escapeHtml(similarProduct) + "\">" + escapeHtml(similarProduct) + "</span></div></div></div>";
      card.addEventListener("click", () => openDetailModal(item.ad, {
        pushHistory: true,
        preserveSource: true
      }));
      refs.similarRow.appendChild(card);
    });
  }

  refs.detailModal.classList.add("open");
  syncDetailBackButton();
  updateDetailLocateButton();
}

function closeDetailModal() {
  refs.detailModal.classList.remove("open");
  state.detailHistory = [];
  syncDetailBackButton();
}

function syncDetailBackButton() {
  if (!refs.detailBackBtn) return;
  refs.detailBackBtn.hidden = !state.detailHistory.length;
  refs.detailBackBtn.textContent = t("detailBack");
}

function updateDetailLocateButton() {
  if (!refs.focusInGraphBtn) return;
  const targetMode = state.detailSourceMode === "graph" ? "timeline" : "graph";
  refs.focusInGraphBtn.dataset.targetMode = targetMode;
  refs.focusInGraphBtn.textContent = targetMode === "timeline" ? t("locateInTimeline") : t("locateInGraph");
}

function locateAdInTimeline(ad) {
  if (!ad) return;
  state.timelineAutoFit = false;
  setMode("timeline");
  requestAnimationFrame(() => {
    focusTimelineAd(ad);
  });
}

function focusTimelineAd(ad) {
  const rect = ad.timelineRect;
  const layout = state.timelineLayout;
  if (!rect || !layout) return;
  const bounds = getTimelineScaleBounds();
  const cam = state.cameras.timeline;
  const viewW = Math.max(1, refs.timelineContainer.clientWidth);
  const viewH = Math.max(1, refs.timelineContainer.clientHeight - layout.axisOverlayH);
  const nextScale = clamp(Math.max(cam.scale, bounds.min * 1.35, 1.2), bounds.min, bounds.max);
  cam.scale = nextScale;
  cam.x = viewW * 0.5 - (rect.x + rect.w * 0.5) * nextScale;
  cam.y = viewH * 0.44 - (rect.y + rect.h * 0.5) * nextScale;
  state.timelineAutoFit = false;
  applyCamera("timeline");
  flashTimelineAd(ad.id);
}

function flashTimelineAd(adId) {
  const el = Array.from(refs.timelineStage.querySelectorAll(".ad-point")).find(node => node.dataset.adId === adId);
  if (!el) return;
  el.classList.add("ad-point-focus");
  window.setTimeout(() => el.classList.remove("ad-point-focus"), 1600);
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
  refs.tooltip.textContent = adLike.id + " | " + industryLabel(adLike.industry || "") + " | " + productLabel(adLike.product || "");
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
