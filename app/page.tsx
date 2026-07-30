import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RISE 升昇电气 | 新能源与配电系统解决方案",
  description:
    "浙江升昇电气有限公司专注于新能源配套、低压配电、储能控制与电能质量产品，为项目客户提供从方案沟通到交付落地的可靠支持。",
};

const products = [
  {
    index: "01",
    title: "光伏配套设备",
    desc: "汇流箱、光伏并网及直流侧保护产品，为新能源项目建立清晰、稳定的电气连接。",
    tone: "green",
  },
  {
    index: "02",
    title: "低压成套配电",
    desc: "GGD、GCS、MNS 等系列低压柜体，覆盖进线、馈线、计量与动力配电场景。",
    tone: "dark",
  },
  {
    index: "03",
    title: "储能控制系统",
    desc: "围绕 BMS、PCS、EMS、保护与通讯接口进行系统化梳理，让储能控制更易集成。",
    tone: "sand",
  },
  {
    index: "04",
    title: "电能质量治理",
    desc: "针对谐波、无功、波动等实际工况，提供可评估、可配置、可验收的治理设备。",
    tone: "green",
  },
];

const scenarios = [
  ["新能源项目", "光伏、储能、并网与新能源配套系统"],
  ["工业制造", "工厂配电、动力负荷与电能质量治理"],
  ["工程建设", "商业建筑、基础设施与 EPC 配套"],
  ["渠道与 OEM", "标准产品、定制组装与持续供货"],
];

const workflow = [
  ["01", "需求沟通", "从应用场景、技术参数、数量与交期开始，快速明确项目边界。"],
  ["02", "方案确认", "围绕系统图、柜体布局、元器件与接口进行技术评审，减少后期变更。"],
  ["03", "生产检验", "按确认后的图纸与配置执行装配、接线、测试和出厂资料整理。"],
  ["04", "交付协同", "提供包装、铭牌、文件与发运信息，协助项目顺利进入安装阶段。"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="RISE 升昇电气首页">
          <span className="brand-mark">R</span>
          <span>
            <strong>RISE</strong>
            <small>升昇电气</small>
          </span>
        </a>
        <nav className="nav-links" aria-label="主导航">
          <a href="#products">产品中心</a>
          <a href="#solutions">应用领域</a>
          <a href="#capability">制造能力</a>
          <a href="#about">关于升昇</a>
        </nav>
        <a className="nav-cta" href="#contact">获取方案 <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-backdrop" aria-hidden="true"><div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" /><div className="hero-grid" /></div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow light">RISE / ZHEJIANG CHINA</p>
          <h1>让每一度电，<br /><em>更稳定地奔向未来。</em></h1>
          <p className="hero-lede">浙江升昇电气有限公司专注新能源配套与配电系统，以清晰的工程沟通、可靠的制造交付，为中国及全球项目提供值得信赖的电气产品。</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#products">探索产品 <span aria-hidden="true">↗</span></a>
            <a className="button button-quiet" href="#contact">提交项目需求 <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-metrics" aria-label="RISE 业务亮点">
            <div><strong>4+</strong><span>核心产品方向</span></div>
            <div><strong>24h</strong><span>需求响应目标</span></div>
            <div><strong>1:1</strong><span>项目技术协同</span></div>
          </div>
        </div>
        <div className="hero-corner-note">POWERING<br />A BETTER<br />TOMORROW</div>
      </section>

      <section className="ticker" aria-label="RISE 服务关键词">
        <span>新能源配套</span><i>✳</i><span>低压配电</span><i>✳</i><span>储能控制</span><i>✳</i><span>电能质量</span><i>✳</i><span>工程协同</span>
      </section>

      <section className="intro section-shell" id="about">
        <div className="section-mark">/ 01</div>
        <div className="intro-copy">
          <p className="eyebrow">关于 RI​​SE</p>
          <h2>从一套设备，<br /><span>到一项长期合作。</span></h2>
        </div>
        <div className="intro-body">
          <p>RISE 升昇电气位于浙江乐清，依托中国电器之都的产业基础，面向新能源、工业制造、工程建设与渠道 OEM 客户，提供配电和新能源电气产品。</p>
          <p>我们相信，真正有价值的制造不止于把产品做出来，更在于把需求听清楚、把方案讲明白、把交付做扎实。</p>
          <a className="arrow-link" href="#capability">了解我们的工作方式 <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="products section-shell" id="products">
        <div className="section-heading">
          <div><div className="section-mark">/ 02</div><p className="eyebrow">产品中心</p><h2>面向项目，<br /><span>组织一整套电气能力。</span></h2></div>
          <p className="section-note">从新能源侧的连接与保护，到用电侧的配电与治理，RISE 以产品族的方式帮助客户快速找到合适的起点。</p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className={`product-card ${product.tone}`} key={product.index}>
              <div className={`product-image product-art ${product.tone}`} aria-label={`${product.title} 示意图`}><span className="art-line" /><span className="art-line" /><span className="art-dot" /></div>
              <div className="product-number">{product.index}</div>
              <div className="product-copy"><h3>{product.title}</h3><p>{product.desc}</p><a className="card-link" href="#contact">了解产品方向 <span aria-hidden="true">↗</span></a></div>
            </article>
          ))}
        </div>
      </section>

      <section className="solutions" id="solutions">
        <div className="section-shell">
          <div className="section-heading light-heading">
            <div><div className="section-mark">/ 03</div><p className="eyebrow light">应用领域</p><h2>不同场景，<br /><em>同一份稳定。</em></h2></div>
            <p className="section-note">无论是新能源项目的快速落地，还是工厂配电的长期运行，我们从真实工况出发，让产品和现场更匹配。</p>
          </div>
          <div className="scenario-grid">
            {scenarios.map(([title, desc], index) => <a className="scenario" href="#contact" key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{desc}</p></div><b aria-hidden="true">↗</b></a>)}
          </div>
        </div>
      </section>

      <section className="capability section-shell" id="capability">
        <div className="capability-visual" aria-label="RISE 电气制造与检验示意图"><div className="cabinet-shape"><span /><span /><span /></div><div className="capability-rings"><i /><i /><i /></div><div className="image-stamp">MADE WITH<br /><strong>CARE</strong></div></div>
        <div className="capability-copy"><div className="section-mark">/ 04</div><p className="eyebrow">制造与协同</p><h2>让复杂的项目，<br /><span>拥有清晰的下一步。</span></h2><p className="capability-lede">从第一次沟通到出厂交付，我们把信息、图纸、配置和检查节点放在同一条链路里，让每一次合作都更可复盘、更可复制。</p><div className="workflow-list">{workflow.map(([number, title, desc]) => <div className="workflow" key={number}><span>{number}</span><div><h3>{title}</h3><p>{desc}</p></div></div>)}</div></div>
      </section>

      <section className="quote-section" id="contact">
        <div className="quote-inner section-shell"><div><p className="eyebrow light">准备开始了吗？</p><h2>把你的项目需求，<br /><em>交给我们一起梳理。</em></h2><p>告诉我们产品方向、应用场景、数量和交期。我们会从最关键的技术问题开始，为你准备下一步。</p></div><div className="contact-card"><span className="contact-label">RISE 项目咨询</span><a href="mailto:sales@rise-elec.com">sales@rise-elec.com</a><a href="tel:+8657762788168">+86 577 6278 8168</a><span className="contact-address">浙江省乐清市柳市镇<br />浙江升昇电气有限公司</span><a className="button button-light" href="mailto:sales@rise-elec.com?subject=RISE项目咨询">发送需求 <span aria-hidden="true">↗</span></a></div></div>
      </section>

      <footer className="site-footer"><div className="footer-brand"><span className="brand-mark">R</span><span><strong>RISE</strong><small>升昇电气</small></span></div><p>浙江升昇电气有限公司<br />新能源 · 配电 · 控制</p><span className="copyright">© 2026 RISE ELECTRIC</span></footer>
    </main>
  );
}
