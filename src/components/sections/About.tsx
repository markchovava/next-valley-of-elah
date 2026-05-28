"use client";

import { motion } from "motion/react";
import {
  FaBolt,
  FaCheckCircle,
  FaLayerGroup,
  FaTag,
  FaUsers,
} from "react-icons/fa";

const features = [
  {
    icon: FaBolt,
    title: "24-Hour Response",
    description:
      "We guarantee a response to your maintenance request within 24 hours — because delays cost you money and frustrate tenants.",
  },
  {
    icon: FaUsers,
    title: "Skilled & Experienced Team",
    description:
      "Our vetted professionals bring hands-on expertise across all trade disciplines, delivering quality workmanship every time.",
  },
  {
    icon: FaTag,
    title: "Transparent Pricing",
    description:
      "No surprises. We issue a clear quotation before any work begins so you know exactly what you're paying for.",
  },
  {
    icon: FaLayerGroup,
    title: "One-Stop-Shop",
    description:
      "From plumbing to pest control, a single call connects you to every maintenance service your property needs.",
  },
];

const whyPoints = [
  "Dedicated account manager for estate agencies",
  "Monthly maintenance reports & documentation",
  "Emergency callout services available",
  "Competitive rates for multi-property portfolios",
  "Fully compliant with local building regulations",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent text-xs font-bold uppercase tracking-widest mb-3">
            Why Partner With Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
            Built on Reliability, Delivered with Care
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto leading-relaxed">
            We understand that property managers need a maintenance partner they
            can trust completely — one that shows up, communicates clearly, and
            gets the job done right.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-zinc-100 hover:shadow-md hover:border-accent/20 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                  <feature.icon
                    size={20}
                    className="text-primary group-hover:text-accent transition-colors"
                  />
                </div>
                <h3 className="font-semibold text-primary-dark mb-2 text-sm">
                  {feature.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Why Points */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="rounded-3xl p-8 sm:p-10 text-white"
              style={{
                background: "linear-gradient(135deg, #1b3a6b 0%, #0f2444 100%)",
              }}
            >
              <h3 className="text-2xl font-bold mb-2">
                Why real estate agencies choose us
              </h3>
              <p className="text-white/60 text-sm mb-7 leading-relaxed">
                We've built our service model specifically around the needs of
                property managers and real estate agencies who need a
                dependable, professional partner.
              </p>
              <ul className="space-y-3">
                {whyPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm">
                    <FaCheckCircle
                      size={15}
                      className="text-accent mt-0.5 shrink-0"
                    />
                    <span className="text-white/80">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-7 border-t border-white/10 flex items-center gap-4">
                <a
                  href="#contact"
                  className="bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors duration-200"
                >
                  Start a Partnership
                </a>
                <a
                  href="#services"
                  className="text-white/60 hover:text-accent text-sm transition-colors"
                >
                  View Services →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
