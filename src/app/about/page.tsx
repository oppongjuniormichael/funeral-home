"use client";

import { motion } from "framer-motion";
import { Heart, Shield, Users, Award } from "lucide-react";
import AnimatedHero from "@/components/AnimatedHero";
import StatsCounter from "@/components/StatsCounter";
// Use public logo image instead of missing asset

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description:
      "We approach every family with genuine empathy, understanding the weight of loss and the importance of a meaningful farewell.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Transparent pricing, honest guidance, and unwavering respect for your wishes and cultural traditions.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Deeply rooted in our community, we have served thousands of families across generations with dedication.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "From our facilities to our services, we maintain the highest standards of quality and professionalism.",
  },
];

const team = [
  {
    name: "Elder Joseph Mensah",
    role: "Founder & Director",
    image: "https://images.pexels.com/photos/2218786/pexels-photo-2218786.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Grace Osei-Bonsu",
    role: "Operations Manager",
    image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Samuel Adjei",
    role: "Head of Funeral Services",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Abena Frimpong",
    role: "Client Relations",
    image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export default function AboutPage() {
  return (
    <>
      <AnimatedHero
        image="/images/Whisk_595859b7a2890009a964e190065b622fdr.jpeg"
        title="About Donkor And Sons"
        subtitle="A legacy of compassion, dignity, and excellence spanning over two decades"
      />

      {/* Our Story */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-medium text-gold tracking-widest uppercase">
                Our Story
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold text-primary">
                Serving Families Since 2001
              </h2>
              <p className="mt-5 text-text-muted leading-relaxed">
                Donkor And Sons was founded by Elder Joseph Mensah with a vision 
                to provide compassionate, affordable, and dignified funeral services 
                during life's most difficult moments. Over the years, we've expanded 
                to serve the community in two distinct ways.
              </p>
              <p className="mt-4 text-text-muted leading-relaxed">
                <strong>Our Funeral Services Team</strong> consists of certified 
                professionals experienced in memorial planning, grief support, and 
                cultural traditions. They guide families through every step—from 
                casket selection to full funeral coordination—at our beautiful grounds 
                featuring a Memorial Garden, Indoor Chapel Hall, and Reception Hall.
              </p>
              <p className="mt-4 text-text-muted leading-relaxed">
                <strong>Our Furniture Showroom Team</strong> operates a retail showroom 
                offering quality home and office furnishings. Our knowledgeable sales 
                consultants help clients find the perfect pieces for their living and 
                working spaces.
              </p>
              <p className="mt-4 text-text-muted leading-relaxed">
                Whether honoring a loved one or furnishing a home, our team serves with 
                <strong> compassion, integrity, and excellence</strong>.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div
                className="h-80 sm:h-112.5 rounded-2xl overflow-hidden bg-cover bg-center shadow-xl"
                style={{
                  backgroundImage: `url('/images/logo.png')`,
                }}
              />
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-gold p-6 shadow-lg">
                <p className="font-heading text-3xl font-bold text-primary">25+</p>
                <p className="text-sm text-primary/70">Years of Service</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-accent/20 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-sm font-medium text-gold tracking-widest uppercase">
              Why Choose Us
            </span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-primary">
              Our Core Values
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl bg-surface border border-accent/40 p-7 text-center shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <v.icon size={28} />
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-primary">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm text-text-muted leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsCounter />

      {/* Team section removed as requested */}
    </>
  );
}
