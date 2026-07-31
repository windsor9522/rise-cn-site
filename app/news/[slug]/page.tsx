import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand, PageFrame } from "../../components/site-chrome";
import { news } from "../../site-data";
import { Breadcrumbs } from "../../components/breadcrumbs";
import { pageMetadata } from "../../seo";
import type { Metadata } from "next";

export function generateStaticParams() { return news.map((item) => ({ slug: item.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const item = news.find((entry) => entry.slug === slug); return item ? pageMetadata(`${item.title}｜${item.category}｜RISE 升昇电气`, item.excerpt, `/news/${item.slug}`) : {}; }
export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const item = news.find((entry) => entry.slug === slug); if (!item) notFound(); return <PageFrame><main className="inner-page"><section className="page-hero"><div className="section-shell"><p className="eyebrow">{item.category} / {item.date}</p><h1>{item.title}</h1><p>{item.excerpt}</p></div></section><Breadcrumbs items={[{ name: "新闻资讯", href: "/news" }, { name: item.title, href: `/news/${item.slug}` }]} /><article className="section-shell article-page"><p className="eyebrow">文章内容模板</p><h2>这是一篇待补充的 RISE 中文内容。</h2><p>正式内容将围绕企业动态、行业资讯或技术问题展开，并补充发布时间、作者、相关产品与内部链接。</p><div className="placeholder-note"><strong>内容待发布</strong><p>当前保留页面结构，不将占位内容伪装成真实新闻。</p></div><Link className="arrow-link" href="/news">返回新闻资讯 <span aria-hidden="true">→</span></Link></article></main><CtaBand /></PageFrame>; }
