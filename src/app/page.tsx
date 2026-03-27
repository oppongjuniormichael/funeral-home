"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Armchair, Warehouse, TreePine, HeartHandshake } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import ServiceCard from "@/components/ServiceCard";
import StatsCounter from "@/components/StatsCounter";

const services = [
  {
    icon: HeartHandshake,
    title: "Funeral Planning",
    description:
      "Complete funeral coordination with personalized services to honor your loved ones with dignity and compassion.",
    href: "/contact",
  },
  {
    icon: Armchair,
    title: "Furniture Shop",
    description:
      "Premium caskets, chairs, and memorial furniture available for purchase with various styles and price ranges.",
    href: "/services/furniture-shop",
  },
  {
    icon: Warehouse,
    title: "Event Rentals",
    description:
      "Hearses, canopies, chairs, sound systems, and more available for rent for your memorial services and events.",
    href: "/services/rentals",
  },
  {
    icon: TreePine,
    title: "Event Venues",
    description:
      "Beautiful memorial gardens, indoor chapel halls, and reception spaces for dignified gatherings.",
    href: "/services/rentals",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroCarousel />

      {/* Services Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span className="text-sm font-medium text-gold tracking-widest uppercase">
              What We Offer
            </span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-primary">
              Our Services
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-text-muted">
              From funeral planning to furniture sales and event rentals, we
              provide everything you need to create a meaningful farewell.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="bg-accent/20 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-cover bg-center shadow-xl"
                style={{
                  backgroundImage:
                    "url(https://images.pexels.com/photos/7317916/pexels-photo-7317916.jpeg?auto=compress&cs=tinysrgb&w=800)",
                }}
              >
                <div className="absolute inset-0 bg-primary/20" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-medium text-gold tracking-widest uppercase">
                About Us
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold text-primary">
                A Legacy of Compassion & Dignity
              </h2>
              <p className="mt-4 text-text-muted leading-relaxed">
                For over 25 years, Donkor And Sons has been the trusted
                partner for families during their most difficult moments. We
                combine traditional values with modern services to ensure every
                farewell is as unique as the life it celebrates.
              </p>
              <p className="mt-3 text-text-muted leading-relaxed">
                Our dedicated team handles every detail with care — from
                selecting the perfect casket to coordinating a beautiful
                memorial service at our serene grounds.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-block rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-light transition-colors"
              >
                Learn More About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsCounter />

      {/* Testimonials */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-sm font-medium text-gold tracking-widest uppercase">
              Testimonials
            </span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-primary">
              What Families Say
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Donkor And Sons made an incredibly difficult time so much easier. Their attention to detail and genuine compassion was remarkable.",
                name: "Ama Mensah",
                role: "Accra, Ghana",
              },
              {
                quote:
                  "The venue and rental services were outstanding. Everything was set up perfectly, and the team went above and beyond to accommodate our needs.",
                name: "Kwame Asante",
                role: "Kumasi, Ghana",
              },
              {
                quote:
                  "From the beautiful casket selection to the memorial garden ceremony, every detail was handled with such care and professionalism.",
                name: "Efua Owusu",
                role: "Tema, Ghana",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="rounded-2xl border border-accent/40 bg-surface p-7 shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      className="h-4 w-4 text-gold"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-text-muted leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-5 border-t border-accent/30 pt-4">
                  <p className="font-heading font-semibold text-primary text-sm">
                    {t.name}
                  </p>
                  <p className="text-xs text-text-muted">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: "url(https://images.pexels.com/photos/7317885/pexels-photo-7317885.jpeg?auto=compress&cs=tinysrgb&w=1600)" }}>
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              Ready to Plan a Meaningful Farewell?
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
              Let our experienced team guide you through every step with
              compassion, care, and attention to detail.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="rounded-lg bg-gold px-8 py-3.5 text-sm font-semibold text-primary hover:bg-gold/90 transition-all hover:shadow-xl"
              >
                Contact Us Today
              </Link>
              <Link
                href="/services/furniture-shop"
                className="rounded-lg border-2 border-white/30 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all"
              >
                Browse Our Collection
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
