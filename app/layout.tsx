import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RISE 升昇电气 | 新能源与低压配电解决方案",
  description: "浙江升昇电气有限公司专注新能源配套、低压成套配电、储能控制与电能质量产品，为项目客户提供从方案沟通到交付协同的可靠支持。",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  metadataBase: new URL("https://rise-cn-site.gaob510.workers.dev"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://rise-cn-site.gaob510.workers.dev/",
    siteName: "RISE 升昇电气",
    title: "RISE 升昇电气 | 让每一度电，更稳定地奔向未来",
    description: "新能源配套与低压配电系统解决方案，来自浙江升昇电气。",
    images: [{ url: "/og.png", width: 1792, height: 1008, alt: "RISE 升昇电气，让每一度电，更稳定地奔向未来" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "浙江升昇电气有限公司",
    alternateName: "RISE 升昇电气",
    url: "https://rise-cn-site.gaob510.workers.dev",
    email: "sales@rise-elec.com",
    telephone: "+86 577 6278 8168",
    address: { "@type": "PostalAddress", addressLocality: "乐清市", addressRegion: "浙江省", addressCountry: "CN" },
  };
  return <html lang="zh-CN"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />{children}</body></html>;
}
