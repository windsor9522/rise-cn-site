import Link from "next/link";

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="RISE 升昇电气首页">
      <span className="brand-mark">R</span>
      <span><strong>RISE</strong><small>升昇电气</small></span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <Brand />
      <nav className="nav-links" aria-label="主导航">
        <Link href="/">首页</Link>
        <Link href="/products">产品中心</Link>
        <Link href="/solutions">解决方案</Link>
        <Link href="/cases">工程案例</Link>
        <Link href="/about">关于升昇</Link>
        <Link href="/news">新闻资讯</Link>
      </nav>
      <Link className="nav-cta" href="/contact">获取方案 <span aria-hidden="true">→</span></Link>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer site-footer-expanded">
      <div className="footer-brand-wrap"><Brand /><p>新能源 · 配电 · 控制</p></div>
      <div className="footer-links"><div><strong>快速导航</strong><Link href="/products">产品中心</Link><Link href="/solutions">解决方案</Link><Link href="/cases">工程案例</Link></div><div><strong>了解升昇</strong><Link href="/about">关于我们</Link><Link href="/news">新闻资讯</Link><Link href="/contact">联系我们</Link></div></div>
      <div className="footer-contact"><strong>项目咨询 · 陈经理</strong><a href="mailto:windsor2333@outlook.com">windsor2333@outlook.com</a><a href="tel:+8613736992966">137 3692 9966</a><small>浙江省乐清市柳市镇<br />浙江升昇电气有限公司</small></div>
      <div className="copyright">© 2026 RISE ELECTRIC<br />备案信息待上线补充</div>
    </footer>
  );
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return <><SiteHeader />{children}<SiteFooter /></>;
}

export function SectionIntro({ mark, eyebrow, title, lead, dark = false }: { mark: string; eyebrow: string; title: React.ReactNode; lead?: string; dark?: boolean }) {
  return <div className={`section-heading ${dark ? "light-heading" : ""}`}><div><div className="section-mark">/ {mark}</div><p className={`eyebrow ${dark ? "light" : ""}`}>{eyebrow}</p><h2>{title}</h2></div>{lead && <p className="section-note">{lead}</p>}</div>;
}

export function CtaBand({ title = "把项目需求，交给我们一起梳理。" }: { title?: string }) {
  return <section className="quote-section"><div className="quote-inner section-shell"><div><p className="eyebrow light">准备开始了吗？</p><h2>{title}</h2><p>告诉我们产品方向、应用场景、数量和交期，我们会从最关键的技术问题开始，为你准备下一步。</p></div><div className="contact-card"><span className="contact-label">RISE 项目咨询 · 陈经理</span><a href="mailto:windsor2333@outlook.com">windsor2333@outlook.com</a><a href="tel:+8613736992966">137 3692 9966</a><span className="contact-address">浙江省乐清市柳市镇<br />浙江升昇电气有限公司</span><Link className="button button-light" href="/contact">提交项目需求 <span aria-hidden="true">→</span></Link></div></div></section>;
}
