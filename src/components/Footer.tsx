import Link from "next/link";
import { Globe, Heart, MessageCircle } from "lucide-react";
import { contactInfo } from "@/data/contact";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Furniture Shop", href: "/services/furniture-shop" },
  { label: "Funeral Services", href: "/services/rentals" },
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
              {contactInfo.map((info) => {
                const isBlock = info.title === "Visit Us" || info.title === "Working Hours";
                const Icon = info.icon;
                return (
                  <li
                    key={info.title}
                    className={isBlock ? "flex items-start gap-3 text-sm" : "flex items-center gap-3 text-sm"}
                  >
                    <Icon size={16} className={isBlock ? "mt-0.5 shrink-0 text-gold" : "shrink-0 text-gold"} />
                    <div>
                      {info.title === "Call Us" &&
                        info.lines.map((line, i) => {
                          const tel = line.trim().startsWith("+") ? line.trim() : line.trim().startsWith("0") ? `+233${line.trim().slice(1)}` : line.trim();
                          return (
                            <div key={i}>
                              <a href={`tel:${tel}`} className="hover:text-gold transition-colors">
                                {line}
                              </a>
                            </div>
                          );
                        })}

                      {info.title === "Email Us" &&
                        info.lines.map((line, i) => (
                          <div key={i}>
                            <a href={`mailto:${line}`} className="hover:text-gold transition-colors">
                              {line}
                            </a>
                          </div>
                        ))}

                      {info.title === "Visit Us" && <span>{info.lines.join(", ")}</span>}

                      {info.title === "Working Hours" && (
                        <span>
                          {info.lines.map((l, idx) => (
                            <span key={idx}>
                              {l}
                              {idx < info.lines.length - 1 && <br />}
                            </span>
                          ))}
                        </span>
                      )}
                    </div>
                  </li>
                );
              })}
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
