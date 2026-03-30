"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Link from "next/link";

const slides = [
  {
    image: "/images/company.png",
    title: "Donkor & Sons — A Legacy of Compassion",
    subtitle:
      "Providing exceptional and respectful services with years of experience and dedication.",
    cta: { label: "About Us", href: "/about" },
  },
  {
    image: "/images/casket.jpg",
    title: "Premium Caskets",
    subtitle:
      "A wide selection of finely crafted caskets for a dignified farewell",
    cta: { label: "View Caskets", href: "/services/furniture-shop" },
  },
  {
    image: "/images/sofa3.jpg",
    title: "Premium Furniture",
    subtitle:
      "High-quality chairs, sofas, and memorial furniture for your comfort",
    cta: { label: "Shop Furniture", href: "/services/furniture-shop" },
  },
  {
    image: "/images/hess.png",
    title: "Hearse & Transport Services",
    subtitle:
      "Dignified transportation for your loved ones with our fleet of vehicles",
    cta: { label: "View Rentals", href: "/services/rentals" },
  },
  {
    image: "/images/event3.jpg",
    title: "Canopies & Event Rentals",
    subtitle:
      "Beautiful canopies, tents, and seating for memorial services and gatherings",
    cta: { label: "View Rentals", href: "/services/rentals" },
  },
  {
    image: "/images/event2.jpg",
    title: "Serene Venues & Chapel",
    subtitle:
      "Peaceful indoor and outdoor spaces for dignified farewell ceremonies",
    cta: { label: "Contact Us", href: "/contact" },
  },
];

export default function HeroCarousel() {
  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="h-[75vh] min-h-[500px]"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="relative h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent" />
              {/* Content */}
              <div className="relative z-10 flex h-full items-center">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-xl">
                    <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-lg text-white/80 mb-8 leading-relaxed">
                      {slide.subtitle}
                    </p>
                    <Link
                      href={slide.cta.href}
                      className="inline-block rounded-lg bg-gold px-8 py-3.5 text-sm font-semibold text-primary transition-all hover:bg-gold/90 hover:shadow-xl hover:scale-105"
                    >
                      {slide.cta.label}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
