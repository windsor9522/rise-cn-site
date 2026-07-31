import Link from "next/link";
import { PageFrame, SectionIntro } from "../components/site-chrome";
import { news } from "../site-data";

export default function NewsPage() { return <PageFrame><main className="inner-page"><section className="page-hero"><div className="section-shell"><p className="eyebrow">RISE / NEWS</p><h1>持续记录，<em>让专业被搜索到。</em></h1><p>企业动态、行业资讯与技术干货，将成为中文站长期积累的内容资产。</p></div></section><section className="section-shell inner-section"><SectionIntro mark="01" eyebrow="新闻资讯" title={<>从一次更新，<br /><span>开始积累长期信任。</span></>} /><div className="news-list news-list-page">{news.map((item) => <Link href={`/news/${item.slug}`} className="news-row" key={item.slug}><span>{item.date}</span><div><small>{item.category}</small><h3>{item.title}</h3><p>{item.excerpt}</p></div><b aria-hidden="true">→</b></Link>)}</div></section></main></PageFrame>; }
