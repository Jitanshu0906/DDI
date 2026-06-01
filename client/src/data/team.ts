import { TeamMember } from "@shared/schema";

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Jitanshu Trivedi",
    role: "CEO & Founder",
    imageUrl: "client/public/images/Jitanshu.png",
    bio: "Visionary leader with 15+ years in tech innovation",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: "2",
    name: "Isha Chandel",
    role: "CTO",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces",
    bio: "Tech genius specializing in scalable architecture",
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    id: "3",
    name: "Suraj Yadav",
    role: "Head of Design",
    imageUrl: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=faces",
    bio: "Award-winning designer crafting pixel-perfect experiences",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: "4",
    name: "Shani",
    role: "Lead Developer",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces",
    bio: "Full-stack expert building robust solutions",
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  }
];
