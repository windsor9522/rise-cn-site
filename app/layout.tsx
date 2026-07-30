import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RISE 升昇电气 | 新能源与配电系统解决方案",
  description: "浙江升昇电气有限公司专注新能源配套、低压配电、储能控制与电能质量产品。",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  metadataBase: new URL("https://rise-cn-site.pages.dev"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://rise-cn-site.pages.dev/",
    siteName: "RISE 升昇电气",
    title: "RISE 升昇电气 | 让每一度电，更稳定地奔向未来。",
    description: "新能源配套与配电系统解决方案，来自浙江升昇电气。",
    images: [{ url: "/og.png", width: 1792, height: 1008, alt: "RISE 升昇电气，让每一度电，更稳定地奔向未来。" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
