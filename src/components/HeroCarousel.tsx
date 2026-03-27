"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Link from "next/link";

const slides = [
  {
    image:
      "https://images.pexels.com/photos/7317874/pexels-photo-7317874.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Honoring Lives with Dignity",
    subtitle:
      "Donkor And Sons — compassionate funeral services for your loved ones",
    cta: { label: "Our Services", href: "/services/furniture-shop" },
  },
  {
    image:
      "https://images.pexels.com/photos/10485372/pexels-photo-10485372.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Premium Caskets & Furniture",
    subtitle:
      "Browse our collection of finely crafted caskets, chairs, and memorial furniture",
    cta: { label: "Shop Furniture", href: "/services/furniture-shop" },
  },
  {
    image:
      "https://images.pexels.com/photos/1729993/pexels-photo-1729993.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Hearse & Transport Services",
    subtitle:
      "Dignified transportation for your loved ones with our fleet of vehicles",
    cta: { label: "View Rentals", href: "/services/rentals" },
  },
  {
    image:
      "https://images.pexels.com/photos/872831/pexels-photo-872831.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Canopies & Event Rentals",
    subtitle:
      "Beautiful canopies, tents, and seating for memorial services and gatherings",
    cta: { label: "View Rentals", href: "/services/rentals" },
  },
  {
    image: "/serene.png",
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
