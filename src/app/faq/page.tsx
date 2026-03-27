"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import AnimatedHero from "@/components/AnimatedHero";
import FaqAccordion from "@/components/FaqAccordion";
import { faqs } from "@/data/faq";

const faqCategories = [
  "All",
  ...Array.from(new Set(faqs.map((f) => f.category))),
];

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = faqs.filter((f) => {
    const matchesCategory =
      activeCategory === "All" || f.category === activeCategory;
    const matchesSearch =
      !search ||
      f.question.toLowerCase().includes(search.toLowerCase()) ||
      f.answer.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <AnimatedHero
        image="/faq-hero.jpeg"
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services, rentals, and more"
      />

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted/50"
              />
              <input
                type="text"
                placeholder="Search questions..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-accent/60 bg-surface pl-11 pr-4 py-3.5 text-sm placeholder:text-text-muted/50 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-colors"
              />
            </div>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {faqCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-white"
                    : "bg-accent/40 text-text-muted hover:bg-accent/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion */}
          {filtered.length > 0 ? (
            <FaqAccordion items={filtered} />
          ) : (
            <p className="text-center text-text-muted py-12">
              No questions found matching your search.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
