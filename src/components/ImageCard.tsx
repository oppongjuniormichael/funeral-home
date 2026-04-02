"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image, { type StaticImageData } from "next/image";

type Props = {
  src: string | StaticImageData;
  alt?: string;
  onClick?: () => void;
  index?: number;
  label?: string;
  size?: "small" | "wide" | "tall" | "square";
};

export default function ImageCard({
  src,
  alt = "",
  onClick,
  index = 0,
  label,
  size = "small",
}: Props) {
  const [loaded, setLoaded] = useState(false);
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["12px", "-12px"]);

  let aspectClass = "aspect-4/3";
  if (size === "tall") aspectClass = "aspect-3/4";
  else if (size === "wide") aspectClass = "aspect-video";
  else if (size === "square") aspectClass = "aspect-square";

  const variants = {
    hidden: { opacity: 0, y: 18, rotateX: -8 },
    visible: { opacity: 1, y: 0, rotateX: 0 },
  };

  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      transition={{ duration: 0.55, delay: index * 0.04, type: "spring", damping: 20, stiffness: 220 }}
      whileHover={{ scale: 1.03 }}
      className="group relative mb-4 w-full overflow-hidden rounded-2xl border border-accent/20 bg-surface text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-gold/60 break-inside-avoid"
    >
      <motion.div ref={targetRef} style={{ y }} className={`relative w-full ${aspectClass} bg-gray-800`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
          onLoadingComplete={() => setLoaded(true)}
          className={`object-cover transition-transform duration-700 ${
            loaded ? "group-hover:scale-105 opacity-100" : "opacity-0 scale-105"
          }`}
        />

        {/* subtle vignette */}
        <div className="absolute inset-0 pointer-events-none bg-linear-to-t from-black/60 via-black/30 to-transparent" />

        {/* hover overlay */}
        <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-full bg-black/30 backdrop-blur-sm rounded-md p-3">
            <p className="text-sm font-heading text-white font-semibold">{label}</p>
            {alt && <p className="text-xs text-white/70 mt-1 line-clamp-2">{alt}</p>} 
          </div>
        </div>

        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-8 w-8 rounded-full bg-accent/40 animate-pulse" />
          </div>
        )}
      </motion.div>
    </motion.button>
  );
}
