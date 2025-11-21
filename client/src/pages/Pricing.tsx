import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/GlassCard";
import { Footer } from "@/components/Footer";
import { ArrowRight, Check } from "lucide-react";
import { pricingServices } from "@/data/pricing";
import { Link } from "wouter";

export default function Pricing() {
  const [selectedService, setSelectedService] = useState(pricingServices[0].id);
  const currentService = pricingServices.find(s => s.id === selectedService)!;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white mb-6 leading-tight" data-testid="text-pricing-hero-heading">
              Simple,
              <span className="block bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
                Transparent Pricing
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Choose the perfect plan for your project needs
            </p>
          </div>
        </div>
      </section>

      {/* Service Selector */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {pricingServices.map(service => (
              <Button
                key={service.id}
                variant={selectedService === service.id ? "default" : "outline"}
                className={selectedService === service.id ? "" : "bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10"}
                onClick={() => setSelectedService(service.id)}
                data-testid={`button-service-${service.id}`}
              >
                {service.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-white mb-4" data-testid="text-pricing-service-heading">
              {currentService.name}
            </h2>
            <p className="text-lg text-slate-400">{currentService.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {currentService.tiers.map((tier, index) => (
              <GlassCard
                key={index}
                variant={tier.highlighted ? "strong" : "default"}
                className={`p-8 relative group hover-elevate active-elevate-2 transition-all card-3d-hover ${
                  tier.highlighted ? "ring-2 ring-primary" : ""
                }`}
                data-testid={`card-pricing-tier-${index}`}
              >
                {tier.highlighted && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white">
                    Most Popular
                  </Badge>
                )}

                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  {tier.name}
                </h3>
                <p className="text-slate-400 text-sm mb-6">{tier.description}</p>

                <div className="mb-8">
                  <span className="text-5xl font-display font-bold text-white">
                    ${tier.basePrice.toLocaleString()}
                  </span>
                  <span className="text-slate-400 ml-2">+</span>
                  <p className="text-slate-400 text-sm mt-2">Custom requirements may apply</p>
                </div>

                <Link href="/contact">
                  <Button 
                    className="w-full mb-8 group/btn font-semibold"
                    variant={tier.highlighted ? "default" : "outline"}
                    data-testid={`button-get-quote-${index}`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>

                <div className="space-y-4">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-white text-center mb-12" data-testid="text-pricing-faq-heading">
            Pricing FAQs
          </h2>

          <div className="space-y-6">
            {[
              { q: "Can I upgrade or downgrade my plan?", a: "Yes, you can change your plan anytime. We'll prorate any changes to your billing." },
              { q: "What payment methods do you accept?", a: "We accept all major credit cards, bank transfers, and PayPal for enterprise customers." },
              { q: "Is there a setup fee?", a: "No setup fees. You only pay for the services and features you use." },
              { q: "Do you offer discounts for long-term commitments?", a: "Yes, we offer 10-20% discounts for annual contracts. Contact our sales team for details." }
            ].map((item, index) => (
              <GlassCard key={index} className="p-6" data-testid={`faq-item-${index}`}>
                <h3 className="font-semibold text-white mb-2">{item.q}</h3>
                <p className="text-slate-400">{item.a}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
