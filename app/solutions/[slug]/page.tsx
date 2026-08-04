import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand, PageFrame } from "../../components/site-chrome";
import { solutions } from "../../site-data";
import { Breadcrumbs } from "../../components/breadcrumbs";
import { pageMetadata } from "../../seo";
import type { Metadata } from "next";

export function generateStaticParams() { return solutions.map((item) => ({ slug: item.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const solution = solutions.find((item) => item.slug === slug); return solution ? pageMetadata(`${solution.title}解决方案｜RISE 升昇电气`, solution.detail, `/solutions/${solution.slug}`) : {}; }
export default async function SolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const solution = solutions.find((item) => item.slug === slug); if (!solution) notFound(); return <PageFrame><main className="inner-page"><section className="page-hero"><div className="section-shell"><p className="eyebrow">解决方案 / {solution.index}</p><h1>{solution.title}<br /><em>{solution.desc}</em></h1><p>{solution.detail}</p><div className="detail-page-image"><img src={solution.image} alt={`${solution.title}方案场景示意图`} fetchPriority="high" /></div></div></section><Breadcrumbs items={[{ name: "解决方案", href: "/solutions" }, { name: solution.title, href: `/solutions/${solution.slug}` }]} /><section className="section-shell inner-section"><div className="content-panel"><p className="eyebrow">方案结构</p><h2>先理解现场，<span>再组织产品。</span></h2><div className="solution-steps"><span>01 / 工况沟通</span><span>02 / 配置确认</span><span>03 / 制造检验</span><span>04 / 项目交付</span></div><p className="detail-copy">该方案页面为内容模板，后续将补充真实应用照片、系统结构、产品组合、项目难点与交付成果。</p><Link className="button button-primary" href="/contact">提交项目需求 <span aria-hidden="true">→</span></Link></div></section></main><CtaBand /></PageFrame>; }
