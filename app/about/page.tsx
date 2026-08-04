import { CtaBand, PageFrame, SectionIntro } from "../components/site-chrome";
import { Breadcrumbs } from "../components/breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于升昇｜浙江升昇电气有限公司",
  description: "了解浙江升昇电气的业务方向、制造协同方式、企业资料与资质信息。",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <PageFrame><main className="inner-page">
    <section className="page-hero"><div className="section-shell"><p className="eyebrow">RISE / ABOUT</p><h1>关于升昇，<em>从事实开始。</em></h1><p>浙江升昇电气有限公司，面向新能源、工业制造与工程建设项目提供电气产品支持。</p></div></section>
    <Breadcrumbs items={[{ name: "关于升昇", href: "/about" }]} />
    <section className="section-shell inner-section" id="profile"><SectionIntro mark="01" eyebrow="企业简介" title={<>把需求听清楚，<br /><span>把交付做扎实。</span></>} lead="企业基础信息已根据公开工商信息与企业提供资料核实，真实数据持续更新。" /><div className="about-copy"><p>RISE 升昇电气位于浙江乐清，依托区域电气产业基础，专注新能源配套、低压成套配电、储能控制与电能质量产品。</p><p>我们将产品理解、技术沟通、生产检验与交付协同放在同一条工作链路中，帮助项目客户减少信息损耗，获得更清晰的下一步。</p></div></section>
    <section className="about-data section-shell"><div className="data-card"><strong>2024</strong><span>成立年份</span></div><div className="data-card"><strong>1000万</strong><span>注册资本</span></div><div className="data-card"><strong>不足50人</strong><span>团队规模</span></div><div className="data-card"><strong>2000m²</strong><span>厂区面积</span></div><div className="data-card"><strong>12项</strong><span>资质证书</span></div></section>
    <section className="section-shell inner-section" id="history"><SectionIntro mark="02" eyebrow="发展历程" title={<>每一步，<span>都留下依据。</span></>} /><div className="timeline"><div><span>01</span><strong>企业成立</strong><p>2024 年 9 月于浙江乐清·柳市注册成立，聚焦新能源配套与低压配电。</p></div><div><span>02</span><strong>产品迭代</strong><p>形成光伏配套、低压成套、储能控制、电能质量四大产品方向。</p></div><div><span>03</span><strong>项目协同</strong><p>取得 12 项资质证书，进入新能源与工业项目协同交付。</p></div></div></section>
    <section className="section-shell inner-section" id="certs"><SectionIntro mark="03" eyebrow="资质荣誉" title={<>真实证书，<span>逐项呈现。</span></>} lead="不使用 AI 生成证书、印章或虚构资质。真实扫描件到位后，直接替换当前占位。" /><div className="certificate-grid">{["ISO 体系认证", "高新技术企业", "CCC / 型式试验", "专利与荣誉"].map((item) => <div className="certificate-placeholder" key={item}><span>证书占位</span><strong>{item}</strong><small>待补真实扫描件</small></div>)}</div></section>
    <section className="section-shell inner-section" id="factory"><SectionIntro mark="04" eyebrow="生产实力" title={<>让现场，<span>成为最有力的说明。</span></>} /><div className="factory-placeholder visual-image"><img src="/assets/generated/about-factory-v3.webp" alt="RISE 企业厂区形象示意图，真实厂区照片待补" loading="lazy" /><span>企业厂区示意 / 真实实拍待补</span></div></section>
  </main><CtaBand /></PageFrame>;
}

