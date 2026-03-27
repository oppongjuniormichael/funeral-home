"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FaqAccordionProps {
  items: { question: string; answer: string }[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`rounded-xl border transition-colors ${
              isOpen ? "border-gold/40 bg-surface shadow-md" : "border-accent/40 bg-surface"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between px-6 py-5 text-left"
            >
              <span className={`font-heading text-base font-semibold pr-4 ${isOpen ? "text-gold" : "text-primary"}`}>
                {item.question}
              </span>
              <ChevronDown
                size={18}
                className={`shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-gold" : "text-text-muted"
                }`}
              />
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-sm leading-relaxed text-text-muted">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
