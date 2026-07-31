import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand, PageFrame } from "../../components/site-chrome";
import { products } from "../../site-data";
import { Breadcrumbs } from "../../components/breadcrumbs";
import { siteUrl, pageMetadata } from "../../seo";
import type { Metadata } from "next";

export function generateStaticParams() { return products.map((product) => ({ slug: product.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  return product ? pageMetadata(`${product.title}｜产品系列｜RISE 升昇电气`, product.detail, `/products/${product.slug}`) : {};
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  const productSchema = { "@context": "https://schema.org", "@type": "Product", name: product.title, description: product.detail, image: `${siteUrl}${product.asset}`, brand: { "@type": "Brand", name: "RISE 升昇电气" } };
  return <PageFrame><main className="inner-page"><section className={`detail-hero ${product.tone}`}><div className="section-shell detail-hero-grid"><div><p className="eyebrow">产品系列 / {product.index}</p><h1>{product.title}<br /><em>为项目找到合适的起点。</em></h1><p>{product.detail}</p><Link className="button button-primary" href="/contact">获取产品方案 <span aria-hidden="true">→</span></Link></div><div className="detail-hero-art visual-image"><img src={product.asset} alt={`${product.title}产品示意图`} /></div></div></section><Breadcrumbs items={[{ name: "产品中心", href: "/products" }, { name: product.title, href: `/products/${product.slug}` }]} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} /><section className="section-shell inner-section"><div className="detail-columns"><div><p className="eyebrow">核心信息</p><h2>把参数、场景与交付，<span>放在同一张图里。</span></h2><p className="detail-copy">产品详情页将根据真实产品资料持续补充。当前先建立内容结构，避免后续替换素材时重新设计页面。</p></div><div className="spec-list">{product.specs.map((spec, index) => <div key={spec}><span>0{index + 1}</span><strong>{spec}</strong></div>)}</div></div><div className="scene-strip"><p className="eyebrow">适用场景</p>{product.scenes.map((scene) => <span key={scene}>{scene}</span>)}</div><div className="placeholder-note"><strong>真实参数待补</strong><p>电压、电流、防护等级、标准、材质与尺寸等信息将在企业产品资料确认后填入。</p></div></section></main><CtaBand title="需要这类产品的项目支持？" /></PageFrame>;
}
