import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/GlassCard";
import { Footer } from "@/components/Footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services } from "@/data/services";
import { Link } from "wouter";
import servicesHeroImage from "@assets/generated_images/abstract_tech_pattern_background.png";
import { Code, Smartphone, Globe, Palette, Share2, Shield } from "lucide-react";

const iconMap: Record<string, any> = {
  Globe,
  Smartphone,
  Code,
  Palette,
  Share2,
  Shield
};

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={servicesHeroImage} 
            alt="Technology background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/90 to-slate-950" />
        </div>
        
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white mb-6 leading-tight" data-testid="text-services-hero-heading">
              Our
              <span className="block bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Comprehensive IT solutions designed to transform your business and drive success in the digital age
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <GlassCard 
                  key={service.id} 
                  className="p-10 group hover-elevate active-elevate-2 transition-all duration-300"
                  data-testid={`card-service-detail-${index}`}
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {Icon && <Icon className="w-10 h-10 text-white" />}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-display font-bold text-white mb-3" data-testid={`text-service-detail-title-${index}`}>
                        {service.title}
                      </h2>
                      <p className="text-slate-300 leading-relaxed">
                        {service.detailedDescription}
                      </p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-4">Key Features:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/contact">
                    <Button className="w-full group/btn font-semibold" data-testid={`button-get-quote-${index}`}>
                      Get a Quote
                      <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassCard variant="strong" className="p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-cyan-500/20 blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6" data-testid="text-services-cta-heading">
                Need a Custom Solution?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                We're here to help. Contact us to discuss your specific requirements and get a tailored solution.
              </p>
              <Link href="/contact">
                <Button size="lg" className="font-semibold group" data-testid="button-discuss-project">
                  Discuss Your Project
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
