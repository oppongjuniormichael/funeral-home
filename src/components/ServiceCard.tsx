"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({ icon: Icon, title, description, href }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <Link href={href} className="group block">
        <div className="rounded-2xl border border-accent/40 bg-surface p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-gold/40 hover:-translate-y-1">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/30 text-primary-light group-hover:bg-gold/20 group-hover:text-gold transition-colors">
            <Icon size={28} />
          </div>
          <h3 className="mt-5 font-heading text-xl font-semibold text-primary">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">
            {description}
          </p>
          <span className="mt-5 inline-flex items-center text-sm font-medium text-gold group-hover:gap-2 transition-all">
            Learn More
            <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
