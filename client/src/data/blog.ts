export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  imageUrl: string;
  readTime: number;
  featured?: boolean;
}

export const blogArticles: BlogArticle[] = [
  {
    id: "1",
    title: "The Future of Web Development in 2025",
    excerpt: "Exploring emerging technologies and frameworks that are shaping the web development landscape.",
    content: "Web development continues to evolve at a rapid pace. In 2025, we're seeing the rise of AI-powered development tools, improved performance metrics, and more sophisticated frameworks. Learn about the latest trends and best practices.",
    category: "Web Development",
    author: "Alex Thompson",
    date: "2025-01-15",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
    readTime: 8,
    featured: true
  },
  {
    id: "2",
    title: "Mobile App Security Best Practices",
    excerpt: "Essential security measures every mobile developer should implement in their applications.",
    content: "Security is paramount in mobile development. From data encryption to secure API communication, we'll cover the critical practices that protect user data and maintain trust.",
    category: "Mobile Security",
    author: "Priya Sharma",
    date: "2025-01-12",
    imageUrl: "https://images.unsplash.com/photo-1555949519-1c7ad3d35a71?w=800&h=400&fit=crop",
    readTime: 10,
    featured: true
  },
  {
    id: "3",
    title: "Understanding Cloud Architecture",
    excerpt: "A comprehensive guide to building scalable and resilient cloud-based systems.",
    content: "Cloud architecture is more important than ever. Discover how to design systems that scale efficiently, maintain high availability, and optimize costs.",
    category: "Cloud Infrastructure",
    author: "Marcus Johnson",
    date: "2025-01-10",
    imageUrl: "https://images.unsplash.com/photo-1517694712162-798a0562f500?w=800&h=400&fit=crop",
    readTime: 12
  },
  {
    id: "4",
    title: "AI Integration in Web Applications",
    excerpt: "How to effectively integrate artificial intelligence features into your web projects.",
    content: "AI is transforming web applications. Learn how to integrate machine learning models, natural language processing, and intelligent recommendation systems.",
    category: "Artificial Intelligence",
    author: "Nina Patel",
    date: "2025-01-08",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    readTime: 9
  },
  {
    id: "5",
    title: "Cybersecurity Threats and Solutions",
    excerpt: "Current cybersecurity landscape and strategies to protect your business.",
    content: "Cyber threats are evolving constantly. Understand the latest attack vectors and implement robust defenses to protect your organization.",
    category: "Cybersecurity",
    author: "Ryan Foster",
    date: "2025-01-05",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13e763f?w=800&h=400&fit=crop",
    readTime: 11
  },
  {
    id: "6",
    title: "Design Trends 2025",
    excerpt: "The latest visual design trends that will define user interfaces this year.",
    content: "Minimalism, bold typography, and dark mode continue to dominate. Discover the design patterns that create engaging user experiences.",
    category: "Design",
    author: "Emma Wilson",
    date: "2025-01-01",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop",
    readTime: 7
  }
];
