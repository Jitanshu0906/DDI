import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { GlassCard } from "@/components/GlassCard";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Cpu, Globe, Layers, Mail, Phone, Shield, Sparkles, Timer } from "lucide-react";
import inquiryHeroImage from "@assets/generated_images/abstract_tech_pattern_background.png";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const inquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().min(2, "Company name is required"),
  website: z.string().optional(),
  budget: z.string().min(1, "Budget is required"),
  timeline: z.string().min(1, "Timeline is required"),
  interest: z.string().min(1, "Please select your main interest"),
  techStack: z.string().optional(),
  requirements: z.string().min(10, "Please describe requirements (min 10 characters)"),
});

type InquiryFormData = z.infer<typeof inquirySchema>;

export default function Inquiry() {
  const { toast } = useToast();

  const form = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      website: "",
      budget: "",
      timeline: "",
      interest: "",
      techStack: "",
      requirements: "",
    },
  });

  const onSubmit = (data: InquiryFormData) => {
    // Keep it simple and fast: open email client with a detailed techy inquiry.
    const subject = encodeURIComponent("Tech Inquiry - Digital Dreams IT");
    const body = encodeURIComponent(
      [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone || "Not provided"}`,
        ``,
        `Company: ${data.company}`,
        `Website: ${data.website || "Not provided"}`,
        ``,
        `Main Interest: ${data.interest}`,
        `Budget: ${data.budget}`,
        `Timeline: ${data.timeline}`,
        ``,
        `Tech Stack (optional): ${data.techStack || "Not provided"}`,
        ``,
        `Requirements:`,
        data.requirements,
      ].join("\n")
    );

    const mailtoLink = `mailto:contact@digitaldreamsit.in?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

    toast({
      title: "Inquiry prepared!",
      description: "Your email client has been opened with the form details. Please send it to complete your inquiry.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={inquiryHeroImage} alt="Tech background" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/90 to-slate-950" />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">Tech Inquiry Form</Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white mt-4 mb-6 leading-tight">
              Send Your
              <span className="block bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
                Project Brief
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Share key details so we can propose the right architecture, timeline, and approach.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <GlassCard className="p-10" data-testid="card-inquiry-form">
              <h2 className="text-3xl font-display font-bold text-white mb-2">Tech Inquiry</h2>
              <p className="text-slate-400 mb-8">
                Fill in the details below. We’ll use this to prepare your proposal.
              </p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Your Name *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Full name"
                              className="bg-white/5 border-white/10 text-white placeholder:text-slate-500"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Email *</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your@email.com"
                              className="bg-white/5 border-white/10 text-white placeholder:text-slate-500"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Phone (Optional)</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+91..."
                              className="bg-white/5 border-white/10 text-white placeholder:text-slate-500"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Company *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Company / Organization"
                              className="bg-white/5 border-white/10 text-white placeholder:text-slate-500"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Website (Optional)</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="https://company.com"
                            className="bg-white/5 border-white/10 text-white placeholder:text-slate-500"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="interest"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Main Interest *</FormLabel>
                          <FormControl>
                            <select
                              value={field.value}
                              onChange={field.onChange}
                              className="w-full bg-white/5 border border-white/10 text-white rounded-md px-3 py-2"
                            >
                              <option value="" className="bg-slate-950">Select one</option>
                              <option value="Web Development">Web Development</option>
                              <option value="Mobile App">Mobile App</option>
                              <option value="Cloud / DevOps">Cloud / DevOps</option>
                              <option value="AI / Automation">AI / Automation</option>
                              <option value="UI/UX & Product Design">UI/UX & Product Design</option>
                              <option value="Other">Other</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Budget *</FormLabel>
                          <FormControl>
                            <select
                              value={field.value}
                              onChange={field.onChange}
                              className="w-full bg-white/5 border border-white/10 text-white rounded-md px-3 py-2"
                            >
                              <option value="" className="bg-slate-950">Select range</option>
                              <option value="lt-5-lakhs">Less than 5 Lakhs</option>
                              <option value="5 - 15 Lakhs">5 - 15 Lakhs</option>
                              <option value="15 - 50 Lakhs">15 - 50 Lakhs</option>
                              <option value="gt-50-lakhs">Greater than 50 Lakhs</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="timeline"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Timeline *</FormLabel>
                          <FormControl>
                            <select
                              value={field.value}
                              onChange={field.onChange}
                              className="w-full bg-white/5 border border-white/10 text-white rounded-md px-3 py-2"
                            >
                              <option value="" className="bg-slate-950">Select timeline</option>
                              <option value="ASAP">ASAP</option>
                              <option value="1 - 3 Months">1 - 3 Months</option>
                              <option value="3 - 6 Months">3 - 6 Months</option>
                              <option value="6+ Months">6+ Months</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="techStack"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Preferred Tech Stack (Optional)</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="React, Node, AWS, etc."
                              className="bg-white/5 border-white/10 text-white placeholder:text-slate-500"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="requirements"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Project Requirements *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe what you want to build. Include key features, users, integrations, constraints..."
                            rows={7}
                            className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" size="lg" className="w-full font-semibold" data-testid="button-submit-inquiry">
                    Prepare Inquiry
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>

                  <div className="text-xs text-slate-500">
                    Submitting opens your email client with the filled details.
                  </div>
                </form>
              </Form>
            </GlassCard>

            <div className="space-y-8">
              <GlassCard className="p-8" data-testid="card-inquiry-benefits">
                <h3 className="text-2xl font-display font-bold text-white mb-6">What you’ll get</h3>

                <div className="space-y-5">
                  {[
                    { icon: Sparkles, title: "Technical clarity", desc: "Architecture + approach based on your requirements." },
                    { icon: Layers, title: "Right scope", desc: "A proposal with phases, milestones, and deliverables." },
                    { icon: Timer, title: "Timeline mapping", desc: "Realistic planning with delivery checkpoints." },
                    { icon: Cpu, title: "Tech-fit recommendations", desc: "Best-fit stack options (based on constraints & goals)." },
                  ].map((it) => (
                    <div key={it.title} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                        <it.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">{it.title}</div>
                        <div className="text-slate-400 text-sm leading-relaxed">{it.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>

              <GlassCard className="p-8" data-testid="card-inquiry-contact">
                <h3 className="text-2xl font-display font-bold text-white mb-6">Direct Contact</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Email</h4>
                      <a href="mailto:contact@digitaldreamsit.in" className="text-slate-400 hover:text-primary transition-colors">
                        contact@digitaldreamsit.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Phone</h4>
                      <a href="tel:+916355816866" className="text-slate-400 hover:text-primary transition-colors">
                        +91 6355 816 866
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Security-first</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        We follow secure-by-design practices for modern web and product engineering.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Global Delivery</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        Remote-friendly collaboration with clear milestones and updates.
                      </p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

