export interface PricingTier {
  name: string;
  basePrice: number;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export interface PricingService {
  id: string;
  name: string;
  description: string;
  tiers: PricingTier[];
}

export const pricingServices: PricingService[] = [
  {
    id: "website",
    name: "Website Development",
    description: "Custom website solutions for any business size",
    tiers: [
      {
        name: "Starter",
        basePrice: 2500,
        description: "Perfect for small businesses",
        features: [
          "5-10 pages",
          "Mobile responsive design",
          "Basic SEO optimization",
          "Contact form",
          "1 month support"
        ]
      },
      {
        name: "Professional",
        basePrice: 5000,
        description: "For growing businesses",
        features: [
          "15-20 pages",
          "Advanced responsive design",
          "Full SEO optimization",
          "E-commerce integration",
          "3 months support",
          "Analytics setup"
        ],
        highlighted: true
      },
      {
        name: "Enterprise",
        basePrice: 10000,
        description: "Custom solutions",
        features: [
          "Unlimited pages",
          "Custom features",
          "Full API integration",
          "Advanced security",
          "12 months support",
          "Performance optimization"
        ]
      }
    ]
  },
  {
    id: "app",
    name: "App Development",
    description: "Native and cross-platform mobile applications",
    tiers: [
      {
        name: "MVP",
        basePrice: 15000,
        description: "Launch quickly",
        features: [
          "Single platform (iOS or Android)",
          "Core features only",
          "Basic UI/UX",
          "3 months support"
        ]
      },
      {
        name: "Standard",
        basePrice: 35000,
        description: "Full-featured app",
        features: [
          "iOS & Android",
          "Advanced features",
          "Custom UI/UX design",
          "Backend integration",
          "6 months support",
          "App store deployment"
        ],
        highlighted: true
      },
      {
        name: "Premium",
        basePrice: 75000,
        description: "Full enterprise solution",
        features: [
          "iOS, Android, & Web",
          "Unlimited features",
          "Enterprise design",
          "Custom backend",
          "12 months support",
          "24/7 monitoring",
          "API development"
        ]
      }
    ]
  },
  {
    id: "software",
    name: "Custom Software",
    description: "Tailored software solutions for complex problems",
    tiers: [
      {
        name: "Small Project",
        basePrice: 20000,
        description: "Limited scope",
        features: [
          "Up to 200 hours",
          "Specific requirements",
          "Basic infrastructure",
          "3 months support"
        ]
      },
      {
        name: "Medium Project",
        basePrice: 50000,
        description: "Extended scope",
        features: [
          "Up to 600 hours",
          "Multiple modules",
          "Cloud infrastructure",
          "Database design",
          "6 months support"
        ],
        highlighted: true
      },
      {
        name: "Large Project",
        basePrice: 150000,
        description: "Enterprise systems",
        features: [
          "Unlimited hours",
          "Complex requirements",
          "Distributed systems",
          "Advanced security",
          "12 months support",
          "Maintenance included"
        ]
      }
    ]
  },
  {
    id: "design",
    name: "Graphic Design",
    description: "Visual design services for all your needs",
    tiers: [
      {
        name: "Starter Package",
        basePrice: 1000,
        description: "Basic design services",
        features: [
          "Logo design",
          "Business card",
          "Email template",
          "2 revision rounds"
        ]
      },
      {
        name: "Brand Package",
        basePrice: 3000,
        description: "Complete brand identity",
        features: [
          "Logo & variations",
          "Brand guidelines",
          "Marketing materials",
          "Social media templates",
          "Unlimited revisions"
        ],
        highlighted: true
      },
      {
        name: "Enterprise Package",
        basePrice: 8000,
        description: "Full branding solution",
        features: [
          "Complete brand identity",
          "All collateral design",
          "Website mockups",
          "Brand book",
          "Animation assets",
          "Ongoing support"
        ]
      }
    ]
  }
];
