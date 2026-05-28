"use client";

import { motion } from "motion/react";
import {
  FaBolt,
  FaHardHat,
  FaLayerGroup,
  FaLeaf,
  FaPaintRoller,
  FaShower,
  FaTools,
  FaWater,
} from "react-icons/fa";
import { MdPestControl } from "react-icons/md";
import { useAppStore } from "@/store/useAppStore";

const services = [
  {
    icon: FaTools,
    title: "General Repairs & Handyman",
    description:
      "Comprehensive handyman solutions for everyday wear and tear — doors, locks, fixtures, and anything in between.",
    color: "#1b3a6b",
  },
  {
    icon: FaWater,
    title: "Plumbing Services",
    description:
      "Leak repairs, pipe installations, drain unblocking, geyser servicing, and full plumbing system overhauls.",
    color: "#0369a1",
  },
  {
    icon: FaBolt,
    title: "Electrical Services",
    description:
      "Fault finding, DB board work, light fittings, plug point installations, and complete electrical compliance.",
    color: "#d97706",
  },
  {
    icon: FaLayerGroup,
    title: "Ceiling Installation & Repairs",
    description:
      "Rhinoboard, PVC, and bulkhead ceiling solutions — installation, patch repairs, and full replacements.",
    color: "#7c3aed",
  },
  {
    icon: FaPaintRoller,
    title: "Painting & Wall Finishes",
    description:
      "Interior and exterior painting, skimming, plastering, and decorative wall finishes that transform spaces.",
    color: "#059669",
  },
  {
    icon: FaHardHat,
    title: "Construction & Renovations",
    description:
      "From minor structural repairs to full property renovations — we manage projects of all sizes with precision.",
    color: "#dc2626",
  },
  {
    icon: FaLeaf,
    title: "Garden & Yard Maintenance",
    description:
      "Lawn mowing, hedge trimming, yard clearing, and seasonal garden care that keeps properties looking their best.",
    color: "#16a34a",
  },
  {
    icon: FaShower,
    title: "Pressure Washing",
    description:
      "High-pressure cleaning for driveways, patios, walls, and exterior surfaces to restore and maintain curb appeal.",
    color: "#0284c7",
  },
  {
    icon: MdPestControl,
    title: "Pest Control Services",
    description:
      "Professional treatment for cockroaches, rodents, snakes, and crawling insects using safe, effective methods.",
    color: "#b45309",
  },
];

export default function Services() {
  const { openQuoteModal } = useAppStore();
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent text-xs font-bold uppercase tracking-widest mb-3">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
            Comprehensive Maintenance Services
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto leading-relaxed">
            Every service you need under one roof. From urgent repairs to
            scheduled maintenance, our skilled team handles it all so your
            properties stay in perfect condition.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-transparent transition-all duration-300 cursor-default"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${service.color}15` }}
              >
                <service.icon size={22} style={{ color: service.color }} />
              </div>
              <h3 className="font-semibold text-primary-dark mb-2 text-base">
                {service.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {service.description}
              </p>
              <div
                className="mt-4 w-8 h-0.5 rounded-full transition-all duration-300 group-hover:w-16"
                style={{ backgroundColor: service.color }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 rounded-3xl p-8 sm:p-12 text-center"
          style={{
            background: "linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%)",
            border: "1px solid #e0eaff",
          }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-primary-dark mb-3">
            Need a service not listed here?
          </h3>
          <p className="text-zinc-500 mb-6 max-w-lg mx-auto text-sm leading-relaxed">
            We handle a wide variety of property maintenance tasks. Reach out
            and we'll let you know if we can help.
          </p>
          <button
            type="button"
            onClick={openQuoteModal}
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3 rounded-full transition-colors duration-200"
          >
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}
