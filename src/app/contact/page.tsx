"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import AnimatedHero from "@/components/AnimatedHero";
import ContactForm from "@/components/ContactForm";

import { contactInfo } from "@/data/contact";

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

          {/* Form + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-2xl font-bold text-primary mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </motion.div>

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
