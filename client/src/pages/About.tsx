import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/GlassCard";
import { Footer } from "@/components/Footer";
import { ArrowRight, Target, Eye, Heart, Zap, Shield, Users as UsersIcon, Linkedin, Twitter, Github } from "lucide-react";
import { teamMembers } from "@/data/team";
import { Link } from "wouter";
import teamHeroImage from "@assets/generated_images/team_collaboration_illustration.png";

export default function About() {
  const clientLogos = [
    { name: "TechCorp", url: "https://via.placeholder.com/150x50/1e293b/64748b?text=TechCorp" },
    { name: "StartupHub", url: "https://via.placeholder.com/150x50/1e293b/64748b?text=StartupHub" },
    { name: "GlobalTech", url: "https://via.placeholder.com/150x50/1e293b/64748b?text=GlobalTech" },
    { name: "InnovateCo", url: "https://via.placeholder.com/150x50/1e293b/64748b?text=InnovateCo" },
    { name: "FutureSoft", url: "https://via.placeholder.com/150x50/1e293b/64748b?text=FutureSoft" },
    { name: "DigitalWave", url: "https://via.placeholder.com/150x50/1e293b/64748b?text=DigitalWave" }
  ];

  const timeline = [
    { year: "2010", title: "Company Founded", description: "Started with a vision to transform digital experiences" },
    { year: "2013", title: "First Major Client", description: "Secured partnership with leading tech company" },
    { year: "2016", title: "Team Expansion", description: "Grew to 25+ talented professionals" },
    { year: "2019", title: "Industry Recognition", description: "Won Best IT Solutions Provider award" },
    { year: "2022", title: "Global Reach", description: "Expanded services to 15+ countries" },
    { year: "2025", title: "Innovation Leader", description: "Leading the industry with AI-powered solutions" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold mb-6 leading-tight" data-testid="text-about-hero-heading">
                About
                <span className="block bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
                  TechSolutions
                </span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                We're a team of passionate innovators dedicated to transforming businesses through cutting-edge technology and creative excellence.
              </p>
              <Link href="/contact">
                <Button size="lg" className="group font-semibold" data-testid="button-join-us">
                  Join Us
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-cyan-400/30 blur-3xl rounded-full" />
              <img 
                src={teamHeroImage} 
                alt="Team collaboration"
                className="relative z-10 w-full h-auto rounded-2xl"
                data-testid="img-about-hero"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <GlassCard className="p-10 text-center hover-elevate active-elevate-2 transition-all" data-testid="card-mission">
              <Target className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-display font-bold text-white mb-4">Our Mission</h3>
              <p className="text-slate-300 leading-relaxed">
                To empower businesses worldwide with innovative technology solutions that drive growth, efficiency, and success in the digital age.
              </p>
            </GlassCard>

            <GlassCard className="p-10 text-center hover-elevate active-elevate-2 transition-all" data-testid="card-vision">
              <Eye className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-display font-bold text-white mb-4">Our Vision</h3>
              <p className="text-slate-300 leading-relaxed">
                To be the world's most trusted technology partner, recognized for excellence, innovation, and transformative digital solutions.
              </p>
            </GlassCard>

            <GlassCard className="p-10 text-center hover-elevate active-elevate-2 transition-all" data-testid="card-values">
              <Heart className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-display font-bold text-white mb-4">Our Values</h3>
              <p className="text-slate-300 leading-relaxed">
                Integrity, innovation, excellence, and customer success. We believe in building lasting relationships through quality and trust.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 relative bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4" data-testid="text-timeline-heading">
              Our Journey
            </h2>
            <p className="text-xl text-slate-400">
              15 years of innovation and growth
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div 
                key={index} 
                className="flex gap-8 items-start"
                data-testid={`timeline-item-${index}`}
              >
                <div className="flex-shrink-0 w-24 text-right">
                  <Badge className="bg-primary/20 text-primary border-primary/30 font-bold text-lg">
                    {item.year}
                  </Badge>
                </div>
                <div className="relative flex-1">
                  <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-primary/50 to-transparent" />
                  <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-primary border-4 border-slate-950 -translate-x-1" />
                  <GlassCard className="p-6 ml-8 hover-elevate active-elevate-2 transition-all">
                    <h3 className="text-xl font-display font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-300">
                      {item.description}
                    </p>
                  </GlassCard>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4" data-testid="text-different-heading">
              What Makes Us Different
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Our unique approach to technology and client success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Lightning Fast", desc: "Rapid development without compromising quality" },
              { icon: Shield, title: "Secure & Reliable", desc: "Enterprise-grade security in every solution" },
              { icon: UsersIcon, title: "Client-Focused", desc: "Your success is our ultimate priority" },
              { icon: Target, title: "Results-Driven", desc: "Measurable outcomes and ROI focused" }
            ].map((item, index) => (
              <GlassCard 
                key={index} 
                className="p-8 text-center hover-elevate active-elevate-2 transition-all"
                data-testid={`card-different-${index}`}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-400">
                  {item.desc}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4" data-testid="text-team-heading">
              Meet Our Team
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Talented professionals dedicated to your success
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <GlassCard 
                key={member.id} 
                className="p-6 group hover-elevate active-elevate-2 transition-all text-center"
                data-testid={`card-team-${index}`}
              >
                <div className="relative mb-6 mx-auto w-32 h-32">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name}
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="text-lg font-display font-semibold text-white mb-1" data-testid={`text-team-name-${index}`}>
                  {member.name}
                </h3>
                <p className="text-sm text-primary mb-3">{member.role}</p>
                <p className="text-sm text-slate-400 mb-4">{member.bio}</p>
                
                <div className="flex justify-center gap-3">
                  {member.social.linkedin && (
                    <a 
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 hover-elevate active-elevate-2 border border-white/10"
                      aria-label={`${member.name} LinkedIn`}
                      data-testid={`link-team-linkedin-${index}`}
                    >
                      <Linkedin className="w-4 h-4 text-primary" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a 
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 hover-elevate active-elevate-2 border border-white/10"
                      aria-label={`${member.name} Twitter`}
                      data-testid={`link-team-twitter-${index}`}
                    >
                      <Twitter className="w-4 h-4 text-primary" />
                    </a>
                  )}
                  {member.social.github && (
                    <a 
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 hover-elevate active-elevate-2 border border-white/10"
                      aria-label={`${member.name} GitHub`}
                      data-testid={`link-team-github-${index}`}
                    >
                      <Github className="w-4 h-4 text-primary" />
                    </a>
                  )}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-24 relative bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4" data-testid="text-clients-heading">
              Trusted By Leading Brands
            </h2>
            <p className="text-xl text-slate-400">
              Partnering with industry leaders worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clientLogos.map((logo, index) => (
              <div 
                key={index}
                className="flex items-center justify-center p-6 rounded-lg bg-white/5 border border-white/10 hover-elevate active-elevate-2 transition-all grayscale hover:grayscale-0"
                data-testid={`logo-client-${index}`}
              >
                <img 
                  src={logo.url} 
                  alt={logo.name}
                  className="max-w-full h-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
