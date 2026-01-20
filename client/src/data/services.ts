import { Service } from "@shared/schema";
import { Code, Smartphone, Globe, Palette, Share2, Shield } from "lucide-react";

export const services: Service[] = [
  {
    id: "web-dev",
    title: "Website Design & Development",
    description: "Create stunning, responsive websites that captivate your audience and drive results.",
    icon: "Globe",
    features: [
      "Custom responsive web design",
      "Modern frontend frameworks (React, Next.js)",
      "SEO optimization",
      "E-commerce solutions",
      "Content management systems",
      "Progressive web applications"
    ],
    detailedDescription: "We craft beautiful, high-performance websites tailored to your brand. From landing pages to complex web applications, our team delivers pixel-perfect designs with cutting-edge technology."
  },
  {
    id: "app-dev",
    title: "App Design & Development",
    description: "Build powerful mobile applications that users love, available on iOS and Android.",
    icon: "Smartphone",
    features: [
      "Native iOS and Android apps",
      "Cross-platform solutions (React Native, Flutter)",
      "User-centric UI/UX design",
      "App store deployment",
      "Push notifications & analytics",
      "Ongoing maintenance & support"
    ],
    detailedDescription: "Transform your ideas into intuitive mobile experiences. We develop robust, scalable applications that engage users and deliver seamless performance across all devices."
  },
  {
    id: "software-dev",
    title: "Software Development",
    description: "Custom software solutions designed to streamline your business operations and boost productivity.",
    icon: "Code",
    features: [
      "Enterprise software solutions",
      "Cloud-based applications",
      "API development & integration",
      "Database design & optimization",
      "Microservices architecture",
      "Legacy system modernization"
    ],
    detailedDescription: "We build scalable, secure software tailored to your unique business needs. Our solutions automate workflows, enhance efficiency, and drive digital transformation."
  },
  {
    id: "graphic-design",
    title: "Graphic Designing",
    description: "Eye-catching visual designs that elevate your brand and communicate your message effectively.",
    icon: "Palette",
    features: [
      "Brand identity & logo design",
      "Marketing materials (brochures, flyers)",
      "Social media graphics",
      "UI/UX design for digital products",
      "Infographics & illustrations",
      "Print & packaging design"
    ],
    detailedDescription: "Our creative team brings your vision to life with stunning visual designs. From brand identity to marketing collateral, we create graphics that resonate with your audience."
  },
  {
    id: "social-media",
    title: "Social Media Marketing",
    description: "Strategic social media campaigns that grow your audience and drive engagement.",
    icon: "Share2",
    features: [
      "Social media strategy & planning",
      "Content creation & scheduling",
      "Community management",
      "Paid advertising campaigns",
      "Analytics & performance tracking",
      "Influencer partnerships"
    ],
    detailedDescription: "Amplify your brand's voice across social platforms. We create compelling content, manage communities, and run data-driven campaigns that convert followers into customers."
  },
  {
    id: "cyber-security",
    title: "Cyber Security Solutions",
    description: "Comprehensive security services to protect your digital assets and ensure business continuity.",
    icon: "Shield",
    features: [
      "Security audits & assessments",
      "Penetration testing",
      "Network security",
      "Data encryption & protection",
      "Compliance consulting (GDPR, HIPAA)",
      "24/7 security monitoring"
    ],
    detailedDescription: "Safeguard your business from cyber threats with our advanced security solutions. We provide proactive protection, rapid incident response, and ongoing monitoring to keep your data secure."
  }
];
