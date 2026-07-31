import Link from "next/link";
import { PageFrame, SectionIntro } from "../components/site-chrome";
import { products } from "../site-data";

export default function ProductsPage() {
  return <PageFrame><main className="inner-page"><section className="page-hero"><div className="section-shell"><p className="eyebrow">RISE / PRODUCTS</p><h1>产品中心，<em>从连接到治理。</em></h1><p>围绕新能源配套、低压成套配电、储能控制与电能质量，建立面向项目的产品路径。</p></div></section><section className="section-shell inner-section"><SectionIntro mark="01" eyebrow="产品系列" title={<>从单一设备，<br /><span>到完整产品族。</span></>} lead="每个系列均预留独立详情页，用于承载参数、材质工艺、适用场景、定制与询盘信息。" /><div className="detail-grid">{products.map((product) => <Link className={`detail-card ${product.tone}`} href={`/products/${product.slug}`} key={product.slug}><span>{product.index}</span><h2>{product.title}</h2><p>{product.desc}</p><b>查看系列详情 →</b></Link>)}</div></section></main></PageFrame>;
}
