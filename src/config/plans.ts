export interface PlanConfig {
  id: string;
  name: string;
  price: string;
  period: string;
  tagline: string;
  featured: boolean;
  badge?: string;
  features: string[];
}

export const monthlyPlans: PlanConfig[] = [
  {
    id: "basic",
    name: "Basic",
    price: "$20",
    period: "/ month per house",
    tagline: "Essential coverage for low-maintenance properties",
    featured: false,
    features: [
      "Routine property inspection",
      "Minor electrical repairs",
      "Minor plumbing repairs",
      "Written inspection report",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    price: "$40",
    period: "/ month per house",
    tagline: "Complete peace of mind for busy property managers",
    featured: true,
    badge: "Most Popular",
    features: [
      "Routine plumbing checks & repairs",
      "Routine electrical checks & repairs",
      "Pest control — cockroaches & rodents",
      "Priority service response",
      "Monthly maintenance report",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: "Custom",
    period: "contact for pricing",
    tagline: "Full-scope maintenance for demanding portfolios",
    featured: false,
    badge: "Best Value",
    features: [
      "Full comprehensive maintenance services",
      "Targeted pest control — cockroaches, rodents, snakes, crawling insects & tiling pests",
      "Dedicated property manager",
      "Priority emergency response",
      "Detailed monthly reporting",
      "Negotiated multi-property rates",
    ],
  },
];
