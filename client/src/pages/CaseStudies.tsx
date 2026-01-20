import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/GlassCard";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { caseStudies } from "@/data/caseStudies";
import { TrendingUp, Users, Target, Zap } from "lucide-react";

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white mb-6 leading-tight" data-testid="text-casestudies-hero-heading">
              Success
              <span className="block bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
                Stories
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Discover how we've helped businesses transform and scale with innovative solutions
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((caseStudy, index) => (
              <Card 
                key={caseStudy.id}
                className={`group overflow-hidden bg-slate-900/50 border-white/10 hover-elevate active-elevate-2 transition-all card-3d-hover ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                }`}
                data-testid={`card-casestudy-${index}`}
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-0">
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-video lg:aspect-auto lg:h-96">
                    <img 
                      src={caseStudy.imageUrl} 
                      alt={caseStudy.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/50 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-10 flex flex-col justify-between">
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <Badge className="bg-primary/20 text-primary border-primary/30">
                            {caseStudy.industry}
                          </Badge>
                          <span className="text-sm text-slate-400">{caseStudy.year}</span>
                        </div>
                        <h3 className="text-3xl font-display font-bold text-white mb-2" data-testid={`text-casestudy-title-${index}`}>
                          {caseStudy.title}
                        </h3>
                        <p className="text-lg text-primary font-semibold">{caseStudy.client}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                          <Target className="w-5 h-5 text-primary" /> Challenge
                        </h4>
                        <p className="text-slate-300 leading-relaxed">{caseStudy.challenge}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                          <Zap className="w-5 h-5 text-primary" /> Solution
                        </h4>
                        <p className="text-slate-300 leading-relaxed">{caseStudy.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="mt-8 pt-8 border-t border-white/10">
                      <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-primary" /> Results
                      </h4>
                      <ul className="space-y-2">
                        {caseStudy.results.map((result, i) => (
                          <li key={i} className="text-slate-300 flex items-start gap-2">
                            <span className="text-primary font-bold">•</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mt-8">
                      <p className="text-sm text-slate-400 mb-3">Technologies Used:</p>
                      <div className="flex flex-wrap gap-2">
                        {caseStudy.technologies.map((tech, i) => (
                          <Badge key={i} className="bg-white/5 text-slate-300 border-white/10">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Users, label: "Happy Clients", value: "500+" },
              { icon: Target, label: "Projects Delivered", value: "1200+" },
              { icon: TrendingUp, label: "Average ROI", value: "300%+" },
              { icon: Zap, label: "Success Rate", value: "99%" }
            ].map((stat, index) => (
              <GlassCard key={index} className="p-8 text-center hover-elevate active-elevate-2 transition-all card-3d-hover" data-testid={`card-stat-${index}`}>
                <stat.icon className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse-3d" />
                <div className="text-3xl font-display font-bold text-white mb-2">{stat.value}</div>
                <p className="text-slate-400">{stat.label}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
