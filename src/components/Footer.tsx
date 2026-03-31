import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Globe, Heart, MessageCircle } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Furniture Shop", href: "/services/furniture-shop" },
  { label: "Funeral Shop", href: "/services/rentals" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white/80">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-primary font-heading font-bold text-lg">
                D
              </div>
              <div>
                <span className="block text-lg font-heading font-bold text-white">
                  Donkor And Sons
                </span>
                <span className="block text-xs text-accent tracking-widest uppercase">
                  Transition Home
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/60 mt-4">
              Providing compassionate and dignified funeral services, quality
              furniture, and premium event rentals to honor your loved ones with
              grace.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-gold hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Globe size={16} />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-gold hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Heart size={16} />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-gold hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <span className="text-sm text-white/40">
                  Funeral Planning
                </span>
              </li>
              <li>
                <span className="text-sm text-white/40">
                  Event Coordination
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                <span>123 Serenity Avenue, Accra, Ghana</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone size={16} className="shrink-0 text-gold" />
                <a href="tel:+233000000000" className="hover:text-gold transition-colors">
                  +233 (0) 00 000 0000
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail size={16} className="shrink-0 text-gold" />
                <a
                  href="mailto:info@donkorandsons.com"
                  className="hover:text-gold transition-colors"
                >
                  info@donkorandsons.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Clock size={16} className="mt-0.5 shrink-0 text-gold" />
                <span>
                  Mon–Fri: 8AM–6PM
                  <br />
                  Sat: 9AM–4PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Donkor And Sons Transition Home. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            <a href="#" className="hover:text-white/60 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white/60 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
