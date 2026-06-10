"use client";

import { usePathname } from "next/navigation";

import type { NavigationItem } from "../../src/lib/site-navigation";

export function SiteNavigation({
  categories,
  components
}: {
  categories: NavigationItem[];
  components: NavigationItem[];
}) {
  const pathname = usePathname();
  const categoryValue = categories.some((item) => item.href === pathname) ? pathname : "";
  const componentValue = components.some((item) => item.href === pathname) ? pathname : "";

  const navigate = (href: string) => {
    if (href) {
      window.location.assign(href);
    }
  };

  return (
    <nav className="siteNav" aria-label="Supply-chain pages">
      <a className="brandLink" href="/">
        AI Supply Chain
      </a>
      <div className="navSelects">
        <label>
          Consumer category
          <select value={categoryValue} onChange={(event) => navigate(event.target.value)}>
            <option value="">Choose category</option>
            {categories.map((item) => (
              <option key={item.slug} value={item.href}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
        <label>
          Component technology
          <select value={componentValue} onChange={(event) => navigate(event.target.value)}>
            <option value="">Choose layer</option>
            {components.map((item) => (
              <option key={item.slug} value={item.href}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
      </div>
    </nav>
  );
}
