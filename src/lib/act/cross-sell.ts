// Cross-sell app recommendations for the CMAT ecosystem

export interface CrossSellApp {
  slug: string;
  name: string;
  reason: string;
  url?: string;
}

const CROSS_SELL_BY_CATEGORY: Record<string, CrossSellApp[]> = {
  admissions: [
    { slug: "cat", name: "CAT Prep", reason: "India's top MBA entrance exam" },
    { slug: "xat", name: "XAT Prep", reason: "Xavier Aptitude Test practice" },
    { slug: "mat-india", name: "MAT Prep", reason: "Management Aptitude Test" },
    { slug: "gmat-quant", name: "GMAT Quant", reason: "Global MBA admissions" },
  ],
  professional: [
    { slug: "cma", name: "CMA Prep", reason: "Certified Management Accountant" },
    { slug: "ca-foundation", name: "CA Foundation", reason: "Chartered Accountancy foundation" },
  ],
  default: [
    { slug: "cat", name: "CAT Prep", reason: "India's top MBA entrance exam" },
    { slug: "gre", name: "GRE Prep", reason: "Graduate school admissions" },
  ],
};

export function getCrossSellApps(category: string): CrossSellApp[] {
  return (CROSS_SELL_BY_CATEGORY[category] ?? CROSS_SELL_BY_CATEGORY.default).slice(0, 3);
}