"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import AnimatedHero from "@/components/AnimatedHero";
import { contactInfo } from "@/data/contact";

const WHATSAPP_NUMBER = "233203915510";
const CALL_NUMBER = "0243079555";
const EMAIL = "info@donkorandsons.com";

export default function ContactPage() {
  return (
    <>
      <AnimatedHero
        image="/contact-hero.jpeg"
        title="Contact Us"
        subtitle="We're here to help — reach out to our caring team anytime"
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-accent/40 bg-surface p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold mb-4">
                  <info.icon size={24} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-primary">
                  {info.title}
                </h3>
                {info.lines.map((line, j) => (
                  <p key={j} className="mt-1 text-sm text-text-muted">
                    {line}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>

          {/* CTA + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Get in Touch CTA */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-accent/40 bg-surface p-8 shadow-sm"
            >
              <div className="mb-6">
                <h2 className="font-heading text-2xl font-bold text-primary mb-3">
                  Get in Touch
                </h2>
                <p className="text-text-muted leading-relaxed">
                  We&apos;re here to support you every step of the way. Reach us directly
                  via call or WhatsApp — we respond promptly and with care.
                </p>
              </div>

              <div className="space-y-4">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 w-full rounded-xl bg-[#25D366] px-6 py-4 text-white font-semibold shadow hover:bg-[#1ebe5d] transition-all group"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </span>
                  <div>
                    <div className="text-base">WhatsApp Us</div>
                    <div className="text-sm font-normal opacity-90">Chat with us instantly</div>
                  </div>
                  <MessageCircle size={18} className="ml-auto opacity-70" />
                </a>

                {/* Call */}
                <a
                  href={`tel:${CALL_NUMBER}`}
                  className="flex items-center gap-4 w-full rounded-xl bg-gold px-6 py-4 text-primary font-semibold shadow hover:bg-gold/90 transition-all group"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Phone size={20} />
                  </span>
                  <div>
                    <div className="text-base">Call Us</div>
                    <div className="text-sm font-normal opacity-75">{CALL_NUMBER}</div>
                  </div>
                  <Phone size={18} className="ml-auto opacity-50" />
                </a>

                {/* Email */}
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-4 w-full rounded-xl border border-accent/50 bg-white px-6 py-3 text-primary font-medium hover:bg-surface transition-all group"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <Mail size={18} />
                  </span>
                  <div>
                    <div className="text-sm font-semibold">Email Us</div>
                    <div className="text-xs text-text-muted">{EMAIL}</div>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-2xl font-bold text-primary mb-6">
                Our Location
              </h2>
              <div className="rounded-2xl overflow-hidden border border-accent/40 shadow-sm h-100 lg:h-full min-h-75">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.0!2d0.8667!3d5.2333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf89a26d6d6d6d7%3A0xb8c0e8c0e8c0e8c0!2sAgona%20Swedru!5e0!3m2!1sen!2sgh!4v1711612800000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Donkor And Sons Transition Home Location - Agona Swedru"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
