import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GlassCard } from "@/components/GlassCard";
import { Footer } from "@/components/Footer";
import { ArrowRight, Clock, User } from "lucide-react";
import { blogArticles } from "@/data/blog";

export default function Blog() {
  const featuredArticles = blogArticles.filter(a => a.featured);
  const regularArticles = blogArticles.filter(a => !a.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white mb-6 leading-tight" data-testid="text-blog-hero-heading">
              Latest
              <span className="block bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Stay updated with industry trends, best practices, and expert insights on technology and innovation
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-display font-bold text-white mb-12" data-testid="text-featured-heading">Featured Articles</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <Card 
                  key={article.id} 
                  className="group overflow-hidden bg-slate-900/50 border-white/10 hover-elevate active-elevate-2 transition-all card-3d-hover"
                  data-testid={`card-featured-article-${index}`}
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img 
                      src={article.imageUrl} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge className="bg-primary/20 text-primary border-primary/30">
                        {article.category}
                      </Badge>
                      <span className="text-sm text-slate-400 flex items-center gap-1">
                        <Clock className="w-4 h-4" /> {article.readTime} min read
                      </span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white mb-3" data-testid={`text-article-title-${index}`}>
                      {article.title}
                    </h3>
                    <p className="text-slate-300 mb-6">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-400">By {article.author}</span>
                      <Button variant="ghost" className="text-primary p-0 group/btn" data-testid={`button-read-article-${index}`}>
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="py-24 relative bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-white mb-12" data-testid="text-all-articles-heading">All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <GlassCard 
                key={article.id} 
                className="overflow-hidden group hover-elevate active-elevate-2 transition-all card-3d-hover flex flex-col"
                data-testid={`card-article-${index}`}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-primary/20 text-primary border-primary/30 text-xs">
                      {article.category}
                    </Badge>
                    <span className="text-xs text-slate-400">{article.readTime} min</span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-white mb-2 flex-1" data-testid={`text-article-list-title-${index}`}>
                    {article.title}
                  </h3>
                  <p className="text-sm text-slate-400 mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" /> {article.author}
                    </span>
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
