"use client";

import { motion } from "framer-motion";
import type { StaticImageData } from "next/image";

interface AnimatedHeroProps {
  image: string | StaticImageData;
  title: string;
  subtitle?: string;
}

export default function AnimatedHero({ image, title, subtitle }: AnimatedHeroProps) {
  const imageUrl = typeof image === "string" ? image : (image as StaticImageData)?.src ?? "";

  return (
    <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
      {/* Background with parallax-like effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("${imageUrl}")` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-primary/20" />
      {/* Content */}
      <div className="relative z-10 flex h-full items-end pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-heading text-4xl sm:text-5xl font-bold text-white"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-3 max-w-2xl text-lg text-white/80"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
