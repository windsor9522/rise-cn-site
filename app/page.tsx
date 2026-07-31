import Link from "next/link";
import { CtaBand, PageFrame, SectionIntro } from "./components/site-chrome";
import { cases, news, products, solutions, trustItems } from "./site-data";

export default function Home() {
  return <PageFrame>
    <main>
      <section className="hero hero-image" id="top">
        <div className="hero-backdrop" aria-hidden="true" />
        <div className="hero-overlay" />
        <div className="hero-content"><p className="eyebrow light">RISE / ZHEJIANG CHINA</p><h1>新能源配套与低压成套配电制造，<em>让每一度电更稳定。</em></h1><p className="hero-lede">浙江升昇电气有限公司面向新能源、工业制造与工程建设项目，提供清晰的产品、可靠的制造与可协同的交付支持。</p><div className="hero-actions"><Link className="button button-primary" href="/products">探索产品 <span aria-hidden="true">→</span></Link><Link className="button button-quiet" href="/contact">提交项目需求 <span aria-hidden="true">→</span></Link></div><div className="hero-metrics"><div><strong>4+</strong><span>产品与方案方向</span></div><div><strong>24h</strong><span>需求响应目标</span></div><div><strong>1:1</strong><span>项目技术协同</span></div></div></div><div className="hero-corner-note">POWERING<br />A BETTER<br />TOMORROW</div>
      </section>

      <section className="trust-bar section-shell" aria-label="RISE 信任资产"><div className="trust-intro"><span className="section-mark">/ TRUST</span><strong>先把信息说清楚</strong></div>{trustItems.map((item) => <div className="trust-item" key={item}><span className="trust-dot" />{item}</div>)}</section>

      <section className="intro section-shell"><div className="section-mark">/ 01</div><div className="intro-copy"><p className="eyebrow">关于 RISE</p><h2>从一套设备，<br /><span>到一项长期合作。</span></h2></div><div className="intro-body"><p>RISE 升昇电气位于浙江乐清，面向新能源、工业制造、工程建设与渠道 OEM 客户，提供配电和新能源电气产品。</p><p>我们相信，真正有价值的制造不止于把产品做出来，更在于把需求听清楚、把方案讲明白、把交付做扎实。</p><Link className="arrow-link" href="/about">了解升昇的企业基础 <span aria-hidden="true">→</span></Link></div></section>

      <section className="products section-shell"><SectionIntro mark="02" eyebrow="产品中心" title={<>面向项目，<br /><span>组织一整套电气能力。</span></>} lead="从新能源侧的连接与保护，到用电侧的配电与治理，RISE 以产品族的方式帮助客户快速找到合适的起点。" /><div className="product-grid">{products.map((product) => <article className={`product-card ${product.tone}`} key={product.slug}><div className="product-image visual-image" style={{ backgroundImage: `url(${product.asset})` }} role="img" aria-label={`${product.title}示意图`} /><div className="product-number">{product.index}</div><div className="product-copy"><h3>{product.title}</h3><p>{product.desc}</p><Link className="card-link" href={`/products/${product.slug}`}>查看产品详情 <span aria-hidden="true">→</span></Link></div></article>)}</div><Link className="section-more" href="/products">查看全部产品系列 <span aria-hidden="true">→</span></Link></section>

      <section className="solutions"><div className="section-shell"><SectionIntro dark mark="03" eyebrow="解决方案" title={<>不同场景，<br /><em>同一份稳定。</em></>} lead="无论是新能源项目的快速落地，还是工厂配电的长期运行，我们从真实工况出发，让产品和现场更匹配。" /><div className="scenario-grid">{solutions.map((item) => <Link className="scenario" href={`/solutions/${item.slug}`} key={item.slug}><span>{item.index}</span><div><h3>{item.title}</h3><p>{item.desc}</p></div><b aria-hidden="true">→</b></Link>)}</div></div></section>

      <section className="cases-preview section-shell"><SectionIntro mark="04" eyebrow="工程案例" title={<>让交付能力，<br /><span>被具体项目看见。</span></>} lead="案例内容正在收集与整理中。上线前将替换为真实项目现场、技术难点和交付结果。" /><div className="case-grid">{cases.map((item) => <Link className="case-card" href={`/cases/${item.slug}`} key={item.slug}><div className="case-image visual-image" style={{ backgroundImage: `url(${item.image})` }} role="img" aria-label={`${item.title}案例占位图`} /><div className="case-copy"><span>{item.tag}</span><h3>{item.title}</h3><p>{item.desc}</p><b aria-hidden="true">→</b></div></Link>)}</div><Link className="section-more" href="/cases">查看案例栏目 <span aria-hidden="true">→</span></Link></section>

      <section className="capability section-shell"><div className="capability-visual visual-image" style={{ backgroundImage: "url(/assets/factory/factory-demo.png)" }} role="img" aria-label="RISE 生产实力占位图"><div className="image-stamp">MANUFACTURING<br /><strong>IN PROGRESS</strong></div></div><div className="capability-copy"><div className="section-mark">/ 05</div><p className="eyebrow">制造与协同</p><h2>让复杂的项目，<br /><span>拥有清晰的下一步。</span></h2><p className="capability-lede">从第一次沟通到出厂交付，我们把信息、图纸、配置和检查节点放在同一条链路里，让每一次合作都更可复盘、更可复制。</p><div className="workflow-list">{[["01", "需求沟通", "从应用场景、技术参数、数量与交期开始，快速明确项目边界。"], ["02", "方案确认", "围绕系统图、柜体布局、元器件与接口进行技术评审。"], ["03", "生产检验", "按确认后的图纸与配置执行装配、接线、测试和出厂资料整理。"], ["04", "交付协同", "提供包装、铭牌、文件与发运信息，协助项目进入安装阶段。"]].map(([number, title, desc]) => <div className="workflow" key={number}><span>{number}</span><div><h3>{title}</h3><p>{desc}</p></div></div>)}</div></div></section>

      <section className="trust-assets section-shell"><SectionIntro mark="06" eyebrow="信任资产" title={<>资质、数据与现场，<br /><span>逐项补齐。</span></>} lead="真实资质、企业数据和生产现场将在素材到位后替换；当前页面明确保留占位，不虚构背书。" /><div className="asset-grid"><Link href="/about#certs" className="asset-tile"><span>01</span><strong>资质荣誉</strong><small>真实证书墙待补</small></Link><Link href="/about#factory" className="asset-tile dark-tile"><span>02</span><strong>生产实力</strong><small>车间、设备、仓库待补</small></Link><Link href="/about#profile" className="asset-tile"><span>03</span><strong>企业硬数据</strong><small>成立、产能、团队待补</small></Link></div></section>

      <section className="news-preview section-shell"><SectionIntro mark="07" eyebrow="新闻资讯" title={<>持续记录，<br /><span>让专业被搜索到。</span></>} lead="从企业动态、行业资讯到技术干货，逐步积累可检索、可复用的中文内容。" /><div className="news-list">{news.map((item) => <Link href={`/news/${item.slug}`} className="news-row" key={item.slug}><span>{item.date}</span><div><small>{item.category}</small><h3>{item.title}</h3><p>{item.excerpt}</p></div><b aria-hidden="true">→</b></Link>)}</div></section>

      <CtaBand title="把你的项目需求，交给我们一起梳理。" />
    </main>
  </PageFrame>;
}
