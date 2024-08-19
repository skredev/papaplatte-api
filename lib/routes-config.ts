// for page navigation & to sort on leftbar
export const ROUTES = [
  {
    title: "Getting Started",
    href: "getting-started",
    items: [
      { title: "Introduction", href: "/introduction" },
      { title: "Quick Start Guide", href: "/quick-start-guide" },
      { title: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "API",
    href: "api-documentation",
    items: [
      { title: "Rate Limiting", href: "/ratelimiting" },
      { title: "Contact", href: "/contact" }
    ],
  }
];

export const page_routes = ROUTES.map(({ href, items }) => {
    return items.map((link) => {
      return {
        title: link.title,
        href: href + link.href,
      };
    });
}).flat();