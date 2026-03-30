"use client";

import { motion } from "framer-motion";
import { Heart, Shield, Users, Award } from "lucide-react";
import AnimatedHero from "@/components/AnimatedHero";
import StatsCounter from "@/components/StatsCounter";

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
    image: "https://images.pexels.com/photos/7317943/pexels-photo-7317943.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Grace Osei-Bonsu",
    role: "Operations Manager",
    image: "https://images.pexels.com/photos/886616/pexels-photo-886616.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Samuel Adjei",
    role: "Head of Funeral Services",
    image: "https://images.pexels.com/photos/10485632/pexels-photo-10485632.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Abena Frimpong",
    role: "Client Relations",
    image: "https://images.pexels.com/photos/4491272/pexels-photo-4491272.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

export default function AboutPage() {
  return (
    <>
      <AnimatedHero
        image="https://images.pexels.com/photos/10485641/pexels-photo-10485641.jpeg?auto=compress&cs=tinysrgb&w=1600"
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
                Donkor And Sons was founded by Elder Joseph Mensah with a
                simple yet profound vision: to provide families with
                compassionate, affordable, and dignified funeral services during
                their most difficult moments.
              </p>
              <p className="mt-4 text-text-muted leading-relaxed">
                What began as a small family-run operation has grown into a
                trusted institution, serving thousands of families across Ghana.
                Today, we offer a comprehensive range of services — from
                premium caskets and memorial furniture to event venue rentals
                and full funeral coordination.
              </p>
              <p className="mt-4 text-text-muted leading-relaxed">
                Our beautiful grounds include a serene Memorial Garden, a
                modern Indoor Chapel Hall, and a spacious Reception Hall,
                making us a one-stop destination for all memorial needs. Every
                service we provide is guided by our core values of compassion,
                integrity, and excellence.
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
                className="h-80 sm:h-112 rounded-2xl overflow-hidden bg-cover bg-center shadow-xl"
                style={{
                  backgroundImage:
                    "url(https://images.pexels.com/photos/7317874/pexels-photo-7317874.jpeg?auto=compress&cs=tinysrgb&w=800)",
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

      {/* Team */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-sm font-medium text-gold tracking-widest uppercase">
              Our Team
            </span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-primary">
              Meet the People Behind Our Mission
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl border border-accent/40 bg-surface overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                <div
                  className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${member.image})` }}
                />
                <div className="p-5 text-center">
                  <h3 className="font-heading text-lg font-semibold text-primary">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-gold">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
