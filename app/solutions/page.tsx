import Link from "next/link";
import { PageFrame, SectionIntro } from "../components/site-chrome";
import { solutions } from "../site-data";
import { Breadcrumbs } from "../components/breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "解决方案｜新能源、工业制造与工程建设｜RISE", description: "RISE 升昇电气面向新能源项目、工业制造、工程建设与渠道 OEM，组织产品、配电、控制与交付支持。", alternates: { canonical: "/solutions" } };

export default function SolutionsPage() { return <PageFrame><main className="inner-page"><section className="page-hero dark-page-hero"><div className="section-shell"><p className="eyebrow light">RISE / SOLUTIONS</p><h1>不同场景，<em>同一份稳定。</em></h1><p>从真实工况出发，把产品、配电、控制与交付组织成清晰的项目支持。</p></div></section><Breadcrumbs items={[{ name: "解决方案", href: "/solutions" }]} /><section className="section-shell inner-section"><SectionIntro mark="01" eyebrow="应用场景" title={<>从使用场景出发，<br /><span>而不是从产品名开始。</span></>} /><div className="solution-list">{solutions.map((item) => <Link href={`/solutions/${item.slug}`} className="solution-row" key={item.slug}><span>{item.index}</span><div><h2>{item.title}</h2><p>{item.desc}</p><small>{item.detail}</small></div><b>查看方案 →</b></Link>)}</div></section></main></PageFrame>; }
