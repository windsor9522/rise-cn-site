import Link from "next/link";
import { PageFrame, SectionIntro } from "../components/site-chrome";
import { cases } from "../site-data";
import { Breadcrumbs } from "../components/breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "工程案例｜新能源与工业配电项目｜RISE", description: "浏览 RISE 升昇电气工程案例栏目，了解新能源配套、工业配电与工程建设项目的方案结构。真实案例资料持续补充。", alternates: { canonical: "/cases" } };

export default function CasesPage() { return <PageFrame><main className="inner-page"><section className="page-hero dark-page-hero"><div className="section-shell"><p className="eyebrow light">RISE / CASES</p><h1>让交付能力，<em>被具体项目看见。</em></h1><p>案例栏目将按行业筛选，展示项目背景、技术难点、方案过程与交付结果。</p></div></section><Breadcrumbs items={[{ name: "工程案例", href: "/cases" }]} /><section className="section-shell inner-section"><SectionIntro mark="01" eyebrow="工程案例" title={<>每个项目，<br /><span>都应该有完整上下文。</span></>} lead="当前为案例模板阶段，所有卡片均明确标注占位，待真实项目资料到位后替换。" /><div className="case-grid case-grid-large">{cases.map((item) => <Link className="case-card" href={`/cases/${item.slug}`} key={item.slug}><div className="case-image visual-image"><img src={item.image} alt={`${item.title}案例示意图`} loading="lazy" /></div><div className="case-copy"><span>{item.tag}</span><h3>{item.title}</h3><p>{item.desc}</p><b>查看案例结构 →</b></div></Link>)}</div></section></main></PageFrame>; }
