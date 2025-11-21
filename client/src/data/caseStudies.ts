export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  imageUrl: string;
  technologies: string[];
  year: number;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "E-Commerce Platform Transformation",
    client: "RetailHub",
    industry: "E-Commerce",
    challenge: "Legacy system struggling with peak traffic, poor user experience, and outdated technology stack affecting sales.",
    solution: "Rebuilt platform with React frontend, Node.js backend, and AWS infrastructure. Implemented real-time inventory management and AI-powered recommendations.",
    results: [
      "300% increase in concurrent users support",
      "45% improvement in page load times",
      "67% increase in conversion rate",
      "$2.5M additional revenue in first year"
    ],
    imageUrl: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=500&fit=crop",
    technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Redis"],
    year: 2024
  },
  {
    id: "2",
    title: "FinTech Mobile App Launch",
    client: "PayFlow",
    industry: "Financial Services",
    challenge: "Need to launch secure mobile banking app with complex transaction handling and regulatory compliance requirements.",
    solution: "Developed native iOS and Android apps with end-to-end encryption, biometric authentication, and compliance frameworks.",
    results: [
      "Launched in 2 months",
      "50K+ downloads in first month",
      "99.99% uptime",
      "Zero security incidents"
    ],
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13e763f?w=800&h=500&fit=crop",
    technologies: ["Swift", "Kotlin", "Firebase", "OAuth 2.0"],
    year: 2024
  },
  {
    id: "3",
    title: "Healthcare Management System",
    client: "MedCare Solutions",
    industry: "Healthcare",
    challenge: "Fragmented patient data across systems, inefficient workflows, and compliance challenges.",
    solution: "Built comprehensive EHR system with HIPAA compliance, patient portal, and provider dashboard.",
    results: [
      "40% reduction in administrative overhead",
      "Improved patient outcomes by 25%",
      "100% HIPAA compliance achieved",
      "Adoption rate: 95% among staff"
    ],
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
    technologies: ["React", "Java", "Azure", "SQL Server"],
    year: 2023
  },
  {
    id: "4",
    title: "Real Estate Platform Redesign",
    client: "PropertyLink",
    industry: "Real Estate",
    challenge: "Outdated interface, slow search functionality, and poor mobile experience losing customers.",
    solution: "Complete UI/UX overhaul with advanced search, virtual tours, and AI property matching algorithm.",
    results: [
      "150% increase in lead generation",
      "85% mobile traffic increase",
      "3x faster property search",
      "$5M in facilitated transactions"
    ],
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
    technologies: ["Next.js", "GraphQL", "MongoDB", "Three.js"],
    year: 2024
  },
  {
    id: "5",
    title: "SaaS Analytics Platform",
    client: "DataInsights",
    industry: "Analytics",
    challenge: "Growing customer base needed advanced analytics capabilities and real-time dashboards.",
    solution: "Developed scalable SaaS platform with real-time data processing, advanced visualizations, and custom reports.",
    results: [
      "10x faster report generation",
      "Real-time data pipeline processing",
      "$3M ARR growth",
      "Enterprise client expansion"
    ],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    technologies: ["Vue.js", "Python", "Kafka", "ClickHouse"],
    year: 2023
  }
];
