import Link from "next/link";
import { breadcrumbSchema } from "../seo";

export function Breadcrumbs({ items }: { items: Array<{ name: string; href: string }> }) {
  const schemaItems = [{ name: "首页", href: "/" }, ...items];
  return <>
    <nav className="breadcrumbs section-shell" aria-label="面包屑导航">
      {schemaItems.map((item, index) => <span key={item.href}>{index > 0 && <b aria-hidden="true">/</b>}<Link href={item.href}>{item.name}</Link></span>)}
    </nav>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(schemaItems)) }} />
  </>;
}

