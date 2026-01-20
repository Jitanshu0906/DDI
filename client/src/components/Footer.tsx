import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 text-white pt-20 pb-8 border-t border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-4 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent" data-testid="text-footer-brand">
              Digital Dreams IT
            </h3>
            <p className="text-muted-foreground mb-4">
              Transforming ideas into exceptional digital experiences with cutting-edge technology and creative excellence.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover-elevate active-elevate-2 border border-white/10"
                aria-label="Facebook"
                data-testid="link-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover-elevate active-elevate-2 border border-white/10"
                aria-label="Twitter"
                data-testid="link-twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover-elevate active-elevate-2 border border-white/10"
                aria-label="LinkedIn"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover-elevate active-elevate-2 border border-white/10"
                aria-label="Instagram"
                data-testid="link-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-white transition-colors" data-testid="link-footer-home">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-white transition-colors" data-testid="link-footer-services">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted-foreground hover:text-white transition-colors" data-testid="link-footer-pricing">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-muted-foreground hover:text-white transition-colors" data-testid="link-footer-casestudies">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-white transition-colors" data-testid="link-footer-blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-white transition-colors" data-testid="link-footer-about">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-white transition-colors" data-testid="link-footer-contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Website Development</li>
              <li className="text-muted-foreground">App Development</li>
              <li className="text-muted-foreground">Software Development</li>
              <li className="text-muted-foreground">Graphic Designing</li>
              <li className="text-muted-foreground">Social Media Marketing</li>
              <li className="text-muted-foreground">Cyber Security</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                <a href="mailto:contact@digitaldreamsit.in" className="hover:text-white transition-colors" data-testid="link-email">
                  contact@digitaldreamsit.in
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                <a href="tel:+916355816866" className="hover:text-white transition-colors" data-testid="link-phone">
                  +91 6355 816 866
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Digital Dreams IT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
