export type Product = {
  slug: string;
  index: string;
  title: string;
  shortTitle: string;
  desc: string;
  detail: string;
  specs: string[];
  scenes: string[];
  tone: "green" | "dark" | "sand";
  asset: string;
};

export const products: Product[] = [
  {
    slug: "pv",
    index: "01",
    title: "光伏配套设备",
    shortTitle: "光伏配套",
    desc: "汇流箱、并网及直流侧保护产品，为新能源项目建立清晰、稳定的电气连接。",
    detail: "面向分布式光伏、集中式电站与新能源配套场景，围绕汇流、保护、监测和并网接口提供可配置的电气设备。",
    specs: ["直流侧汇流与保护", "多路输入配置", "户外防护与散热", "支持项目定制"],
    scenes: ["分布式光伏", "集中式电站", "工商业屋顶", "新能源配套"],
    tone: "green",
    asset: "/assets/products/pv.png",
  },
  {
    slug: "low-voltage",
    index: "02",
    title: "低压成套配电",
    shortTitle: "低压配电",
    desc: "覆盖 GGD、GCS、MNS 等系列柜体，服务进线、馈线、计量与动力配电场景。",
    detail: "根据用电负荷、柜体布置、元器件配置和现场接口完成低压成套配电方案的协同设计与制造。",
    specs: ["GGD / GCS / MNS 系列", "进线与馈线组合", "抽屉式功能单元", "按图纸与配置生产"],
    scenes: ["工厂配电", "商业建筑", "基础设施", "动力控制"],
    tone: "dark",
    asset: "/assets/products/low-voltage.png",
  },
  {
    slug: "ess",
    index: "03",
    title: "储能控制系统",
    shortTitle: "储能控制",
    desc: "围绕 BMS、PCS、EMS、保护与通信接口进行系统化梳理，让储能控制更易集成。",
    detail: "面向储能项目的电池管理、变流控制、能量管理及保护接口，提供从单柜配置到系统协同的产品支持。",
    specs: ["BMS / PCS / EMS 接口", "电池柜控制配套", "保护与通信管理", "系统集成预留"],
    scenes: ["工商业储能", "新能源储能", "微电网", "峰谷调节"],
    tone: "sand",
    asset: "/assets/products/ess.png",
  },
  {
    slug: "power-quality",
    index: "04",
    title: "电能质量治理",
    shortTitle: "电能质量",
    desc: "针对谐波、无功、波动等实际工况，提供可评估、可配置、可验收的治理设备。",
    detail: "从现场问题识别、运行工况评估到设备配置和交付验收，帮助工业与建筑用电场景改善电能质量。",
    specs: ["谐波治理", "无功补偿", "电压波动改善", "方案评估与验收"],
    scenes: ["精密制造", "工业负载", "数据机房", "商业综合体"],
    tone: "green",
    asset: "/assets/products/power-quality.png",
  },
];

export const solutions = [
  { slug: "new-energy", index: "01", title: "新能源项目", desc: "光伏、储能、并网与新能源配套系统", detail: "从直流侧保护、汇流到储能控制，围绕新能源项目的安全连接与稳定运行组织产品。", image: "/assets/generated/solution-new-energy-v3.webp" },
  { slug: "industrial", index: "02", title: "工业制造", desc: "工厂配电、动力负荷与电能质量治理", detail: "根据负荷特性、生产节奏与现场空间，协同低压配电和电能质量治理设备。", image: "/assets/generated/solution-industrial-v3.webp" },
  { slug: "engineering", index: "03", title: "工程建设", desc: "商业建筑、基础设施与 EPC 配套", detail: "为工程项目提供图纸理解、柜体配置、生产检验与交付协同支持。", image: "/assets/generated/solution-engineering-v3.webp" },
  { slug: "oem", index: "04", title: "渠道与 OEM", desc: "标准产品、定制组装与持续供货", detail: "围绕渠道伙伴和 OEM 项目，支持规格确认、批量协同与持续供货。", image: "/assets/generated/solution-oem-v3.webp" },
];

export const cases = [
  { slug: "new-energy-demo", tag: "场景示意 · 待替换真实案例", title: "新能源配套项目", desc: "光伏屋顶与储能设备的项目场景示意，真实项目背景、设备配置与交付结果待补。", image: "/assets/generated/case-new-energy-v3.webp" },
  { slug: "industrial-demo", tag: "场景示意 · 待替换真实案例", title: "工业配电改造", desc: "工厂低压配电改造的现场场景示意，真实工况、治理难点与方案成果待补。", image: "/assets/generated/case-industrial-v3.webp" },
  { slug: "engineering-demo", tag: "场景示意 · 待替换真实案例", title: "工程建设配套", desc: "商业建筑配电房的项目场景示意，真实项目规模、交付节点与客户评价待补。", image: "/assets/generated/case-engineering-v3.webp" },
];

export const news = [
  { slug: "site-upgrade", category: "企业动态", date: "2026.08", title: "RISE 中文站启动多页面企业站升级", excerpt: "围绕产品、方案、案例与信任资产，建立更清晰的中文站信息架构。", image: "/assets/generated/news-enterprise-v3.webp" },
  { slug: "power-quality-basics", category: "技术干货", date: "待发布", title: "电能质量治理项目，前期需要确认哪些信息？", excerpt: "从负荷类型、运行工况和现场数据开始，减少后期方案变更。", image: "/assets/generated/news-power-quality-v3.webp" },
  { slug: "pv-protection", category: "行业资讯", date: "待发布", title: "光伏配套设备中的直流侧保护要点", excerpt: "围绕汇流、保护、监测与并网接口梳理基础选型信息。", image: "/assets/generated/news-pv-v3.webp" },
];

export const trustItems = ["真实资质待补", "生产实力待补", "产品参数可追溯", "项目协同响应"];
