import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { GlassCard } from "@/components/GlassCard";
import { Footer } from "@/components/Footer";
import { ArrowRight, Code, Smartphone, Globe, Palette, Share2, Shield, Star, Users, Award, Target, CheckCircle2, TrendingUp } from "lucide-react";
import { services } from "@/data/services";
import { portfolioItems } from "@/data/portfolio";
import { testimonials } from "@/data/testimonials";
import heroImage from "@assets/generated_images/futuristic_3d_tech_hero_illustration.png";
import { useEffect, useRef, useState } from "react";

const iconMap: Record<string, any> = {
  Globe,
  Smartphone,
  Code,
  Palette,
  Share2,
  Shield
};

function Counter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, hasStarted]);

  return <span ref={countRef}>{count}{suffix}</span>;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20" data-testid="badge-innovation">
                Innovation Meets Excellence
              </Badge>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold leading-tight" data-testid="text-hero-headline">
                Transform Your
                <span className="block bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent animate-pulse">
                  Digital Future
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl" data-testid="text-hero-subheadline">
                We craft cutting-edge digital solutions that propel your business forward. From stunning websites to powerful applications, we turn your vision into reality.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    className="group font-semibold"
                    data-testid="button-get-started"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10"
                    data-testid="button-view-services"
                  >
                    View Services
                  </Button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div>
                  <div className="text-3xl font-display font-bold text-primary" data-testid="text-stat-clients">
                    <Counter end={500} suffix="+" />
                  </div>
                  <div className="text-sm text-slate-400">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-primary" data-testid="text-stat-projects">
                    <Counter end={1200} suffix="+" />
                  </div>
                  <div className="text-sm text-slate-400">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-primary" data-testid="text-stat-years">
                    <Counter end={15} suffix="+" />
                  </div>
                  <div className="text-sm text-slate-400">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Right Image - 3D Animated */}
            <div className="relative animate-float-3d">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-cyan-400/30 blur-3xl rounded-full animate-pulse-3d" />
              <img 
                src={heroImage} 
                alt="Futuristic technology illustration" 
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl animate-glow-pulse"
                data-testid="img-hero"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 relative" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4" data-testid="text-services-heading">
              Our Services
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <GlassCard 
                  key={service.id} 
                  className="p-8 group hover-elevate active-elevate-2 transition-all duration-300 card-3d-hover"
                  data-testid={`card-service-${index}`}
                >
                  <div className="mb-6 w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform animate-pulse-3d">
                    {Icon && <Icon className="w-8 h-8 text-white animate-rotate-3d" />}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-white mb-3" data-testid={`text-service-title-${index}`}>
                    {service.title}
                  </h3>
                  <p className="text-slate-400 mb-4">
                    {service.description}
                  </p>
                  <Link href="/services">
                    <Button variant="ghost" className="text-primary p-0 hover:bg-transparent group/btn" data-testid={`button-learn-more-${index}`}>
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-24 relative bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6" data-testid="text-about-heading">
                Building the Future of Technology
              </h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                With over 15 years of expertise, we've been at the forefront of digital innovation. Our mission is to empower businesses with cutting-edge technology solutions that drive growth and success.
              </p>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                We combine technical excellence with creative design to deliver products that not only meet but exceed expectations. Every project is a partnership where your success is our priority.
              </p>
              <Link href="/about">
                <Button size="lg" variant="outline" className="bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10" data-testid="button-learn-about">
                  Learn About Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <GlassCard className="p-6 text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-display font-bold text-white mb-2" data-testid="text-achievement-team">
                  <Counter end={50} suffix="+" />
                </div>
                <div className="text-slate-400">Expert Team Members</div>
              </GlassCard>
              <GlassCard className="p-6 text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-display font-bold text-white mb-2" data-testid="text-achievement-awards">
                  <Counter end={25} suffix="+" />
                </div>
                <div className="text-slate-400">Industry Awards</div>
              </GlassCard>
              <GlassCard className="p-6 text-center">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-display font-bold text-white mb-2" data-testid="text-achievement-satisfaction">
                  <Counter end={98} suffix="%" />
                </div>
                <div className="text-slate-400">Client Satisfaction</div>
              </GlassCard>
              <GlassCard className="p-6 text-center">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-display font-bold text-white mb-2" data-testid="text-achievement-growth">
                  <Counter end={150} suffix="%" />
                </div>
                <div className="text-slate-400">Average Growth</div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4" data-testid="text-why-choose-heading">
              Why Choose Us
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              We deliver excellence through innovation, expertise, and dedication
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: CheckCircle2, title: "Quality Assured", desc: "Every project undergoes rigorous testing" },
              { icon: Users, title: "Expert Team", desc: "Skilled professionals with proven track records" },
              { icon: Target, title: "On-Time Delivery", desc: "We respect deadlines and deliver on time" },
              { icon: Award, title: "Award Winning", desc: "Recognized excellence in digital solutions" }
            ].map((item, index) => (
              <GlassCard key={index} className="p-8 text-center hover-elevate active-elevate-2 transition-all card-3d-hover" data-testid={`card-benefit-${index}`}>
                <item.icon className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse-3d" />
                <h3 className="text-lg font-display font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 relative bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4" data-testid="text-portfolio-heading">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Explore our latest work and success stories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.slice(0, 6).map((item, index) => (
              <Card 
                key={item.id} 
                className="group overflow-hidden bg-slate-900/50 border-white/10 hover-elevate active-elevate-2 transition-all card-3d-hover"
                data-testid={`card-portfolio-${index}`}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <Badge className="mb-2 bg-primary/20 text-primary border-primary/30">{item.category}</Badge>
                      <h3 className="text-white font-display font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-slate-300 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4" data-testid="text-testimonials-heading">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Trusted by businesses worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <GlassCard key={testimonial.id} className="p-8 hover-elevate active-elevate-2 transition-all card-3d-hover" data-testid={`card-testimonial-${index}`}>
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={testimonial.imageUrl} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
                  />
                  <div>
                    <h4 className="font-semibold text-white" data-testid={`text-testimonial-name-${index}`}>{testimonial.name}</h4>
                    <p className="text-sm text-slate-400">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-300 leading-relaxed" data-testid={`text-testimonial-content-${index}`}>
                  "{testimonial.content}"
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassCard variant="strong" className="p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-cyan-500/20 blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6" data-testid="text-cta-heading">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Let's transform your ideas into reality. Get in touch with our team today.
              </p>
              <Link href="/contact">
                <Button size="lg" className="font-semibold group" data-testid="button-contact-us">
                  Contact Us Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </div>
  );
}
