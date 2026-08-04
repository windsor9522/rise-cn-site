import { PageFrame } from "../components/site-chrome";
import { Breadcrumbs } from "../components/breadcrumbs";
import { InquiryForm } from "../components/inquiry-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "提交项目需求｜联系 RISE 升昇电气",
  description: "联系浙江升昇电气，提交新能源、低压配电、储能控制或电能质量治理项目需求。",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() { return <PageFrame><main className="inner-page"><section className="page-hero dark-page-hero"><div className="section-shell"><p className="eyebrow light">RISE / CONTACT</p><h1>从你的项目需求，<em>开始一次清晰沟通。</em></h1><p>留下产品方向、应用场景、数量与交期，我们会从最关键的技术问题开始。</p></div></section><Breadcrumbs items={[{ name: "联系我们", href: "/contact" }]} /><section className="section-shell inner-section contact-layout"><div><div className="contact-image"><img src="/assets/generated/contact-office-v3.webp" alt="RISE 企业接待空间示意图" fetchPriority="high" /></div><p className="eyebrow">项目咨询 · 陈经理</p><h2>把问题说清楚，<br /><span>下一步就会更明确。</span></h2><div className="contact-details"><a href="mailto:windsor2333@outlook.com">windsor2333@outlook.com</a><a href="tel:+8613736992966">137 3692 9966</a><p>浙江省乐清市柳市镇<br />浙江升昇电气有限公司</p></div></div><InquiryForm /></section></main></PageFrame>; }
