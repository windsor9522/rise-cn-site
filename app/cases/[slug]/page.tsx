import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand, PageFrame } from "../../components/site-chrome";
import { cases } from "../../site-data";
import { Breadcrumbs } from "../../components/breadcrumbs";
import { pageMetadata } from "../../seo";
import type { Metadata } from "next";

export function generateStaticParams() { return cases.map((item) => ({ slug: item.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const item = cases.find((entry) => entry.slug === slug); return item ? pageMetadata(`${item.title}｜工程案例｜RISE 升昇电气`, item.desc, `/cases/${item.slug}`) : {}; }
export default async function CaseDetailPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const item = cases.find((entry) => entry.slug === slug); if (!item) notFound(); return <PageFrame><main className="inner-page"><section className="page-hero"><div className="section-shell"><p className="eyebrow">工程案例 / {item.tag}</p><h1>{item.title}<br /><em>真实项目资料待补。</em></h1><p>{item.desc}</p></div></section><Breadcrumbs items={[{ name: "工程案例", href: "/cases" }, { name: item.title, href: `/cases/${item.slug}` }]} /><section className="section-shell inner-section"><div className="content-panel"><p className="eyebrow">案例详情模板</p><h2>背景 → 难点 → 方案 → <span>成果。</span></h2><div className="case-detail-flow"><div><strong>项目背景</strong><p>待补真实项目背景与现场条件。</p></div><div><strong>技术难点</strong><p>待补负荷、接口、交期或安装条件。</p></div><div><strong>解决方案</strong><p>待补产品组合、配置与实施过程。</p></div><div><strong>交付成果</strong><p>待补验收结果与客户评价。</p></div></div><Link className="button button-primary" href="/contact">咨询类似项目 <span aria-hidden="true">→</span></Link></div></section></main><CtaBand /></PageFrame>; }
