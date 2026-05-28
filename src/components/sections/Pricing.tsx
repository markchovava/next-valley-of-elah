"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { FaArrowRight, FaCheckCircle, FaPhone } from "react-icons/fa";
import { useAppStore } from "@/store/useAppStore";

type Model = "perJob" | "monthly";

const monthlyPlans = [
  {
    id: "basic",
    name: "Basic",
    price: "$20",
    period: "/ month per house",
    tagline: "Essential coverage for low-maintenance properties",
    featured: false,
    features: [
      "Routine property inspection",
      "Minor electrical repairs",
      "Minor plumbing repairs",
      "Written inspection report",
    ],
    cta: "Select Basic Plan",
    ctaStyle: "outline" as const,
  },
  {
    id: "standard",
    name: "Standard",
    price: "$40",
    period: "/ month per house",
    tagline: "Complete peace of mind for busy property managers",
    featured: true,
    badge: "Most Popular",
    features: [
      "Routine plumbing checks & repairs",
      "Routine electrical checks & repairs",
      "Pest control — cockroaches & rodents",
      "Priority service response",
      "Monthly maintenance report",
    ],
    cta: "Select Standard Plan",
    ctaStyle: "solid" as const,
  },
  {
    id: "premium",
    name: "Premium",
    price: "Custom",
    period: "contact for pricing",
    tagline: "Full-scope maintenance for demanding portfolios",
    featured: false,
    badge: "Best Value",
    features: [
      "Full comprehensive maintenance services",
      "Targeted pest control — cockroaches, rodents, snakes, crawling insects & tiling pests",
      "Dedicated property manager",
      "Priority emergency response",
      "Detailed monthly reporting",
      "Negotiated multi-property rates",
    ],
    cta: "Contact for Pricing",
    ctaStyle: "accent" as const,
  },
];

export default function Pricing() {
  const [model, setModel] = useState<Model>("monthly");
  const { openPlanModal, openQuoteModal } = useAppStore();

  return (
    <section id="pricing" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-accent text-xs font-bold uppercase tracking-widest mb-3">
            Partnership Models
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
            Flexible Plans for Every Property
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto leading-relaxed">
            Choose the engagement model that works best for you — pay per job or
            lock in comprehensive monthly coverage.
          </p>
        </motion.div>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-white border border-zinc-200 rounded-full p-1 shadow-sm">
            {(["monthly", "perJob"] as Model[]).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setModel(m)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  model === m
                    ? "bg-primary text-white shadow-md"
                    : "text-zinc-500 hover:text-primary"
                }`}
              >
                {m === "monthly" ? "Monthly Packages" : "Per Job Basis"}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {model === "monthly" ? (
            <motion.div
              key="monthly"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
            >
              <div className="grid md:grid-cols-3 gap-6 items-stretch">
                {monthlyPlans.map((plan, i) => (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`relative flex flex-col rounded-3xl p-7 transition-all duration-300 ${
                      plan.featured
                        ? "bg-primary text-white shadow-2xl shadow-primary/30 scale-105"
                        : "bg-white border border-zinc-100 shadow-sm hover:shadow-md"
                    }`}
                  >
                    {plan.badge && (
                      <span
                        className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold ${
                          plan.featured
                            ? "bg-accent text-white"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        {plan.badge}
                      </span>
                    )}

                    <div className="mb-6">
                      <h3
                        className={`font-bold text-lg mb-1 ${
                          plan.featured ? "text-white" : "text-primary-dark"
                        }`}
                      >
                        {plan.name}
                      </h3>
                      <p
                        className={`text-xs leading-relaxed ${
                          plan.featured ? "text-white/60" : "text-zinc-400"
                        }`}
                      >
                        {plan.tagline}
                      </p>
                    </div>

                    <div className="mb-6">
                      <span
                        className={`text-4xl font-black ${
                          plan.featured ? "text-white" : "text-primary-dark"
                        }`}
                      >
                        {plan.price}
                      </span>
                      <span
                        className={`text-sm ml-1 ${
                          plan.featured ? "text-white/50" : "text-zinc-400"
                        }`}
                      >
                        {plan.period}
                      </span>
                    </div>

                    <ul className="space-y-3 mb-8 flex-1">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-sm"
                        >
                          <FaCheckCircle
                            size={14}
                            className={`mt-0.5 shrink-0 ${
                              plan.featured
                                ? "text-accent-light"
                                : "text-accent"
                            }`}
                          />
                          <span
                            className={
                              plan.featured ? "text-white/80" : "text-zinc-600"
                            }
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {plan.id === "premium" ? (
                      <button
                        type="button"
                        onClick={() => openPlanModal("Premium")}
                        className="flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3 px-6 rounded-full text-sm transition-all duration-200"
                      >
                        <FaPhone size={12} />
                        {plan.cta}
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => openPlanModal(plan.name)}
                        className={`flex items-center justify-center gap-2 font-semibold py-3 px-6 rounded-full text-sm transition-all duration-200 ${
                          plan.featured
                            ? "bg-accent hover:bg-accent-dark text-white shadow-lg shadow-accent/30"
                            : "bg-primary hover:bg-primary-dark text-white"
                        }`}
                      >
                        {plan.cta}
                        <FaArrowRight size={12} />
                      </button>
                    )}
                  </motion.div>
                ))}
              </div>

              <p className="text-center text-zinc-400 text-xs mt-8">
                All plans quoted per house/unit. Multi-property discounts
                available — contact us to discuss your portfolio.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="perJob"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="max-w-3xl mx-auto"
            >
              <div className="bg-white rounded-3xl border border-zinc-100 shadow-sm overflow-hidden">
                <div
                  className="p-8 sm:p-10 text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, #1b3a6b 0%, #0f2444 100%)",
                  }}
                >
                  <h3 className="text-2xl font-bold mb-3">Per Job Basis</h3>
                  <p className="text-white/70 leading-relaxed">
                    Perfect for one-off repairs, urgent callouts, or property
                    owners who prefer to pay only when work is needed.
                  </p>
                </div>
                <div className="p-8 sm:p-10">
                  <div className="grid sm:grid-cols-2 gap-6 mb-8">
                    {[
                      {
                        title: "Free Site Assessment",
                        desc: "We visit your property and assess the scope of work at no charge.",
                      },
                      {
                        title: "Written Quotation",
                        desc: "A detailed, transparent quote is issued before any work begins.",
                      },
                      {
                        title: "Approval Required",
                        desc: "We only proceed once you've reviewed and approved the quotation.",
                      },
                      {
                        title: "All Trades Covered",
                        desc: "Any service from our full catalogue can be requested on a per-job basis.",
                      },
                    ].map((item) => (
                      <div key={item.title} className="flex gap-3">
                        <FaCheckCircle
                          size={15}
                          className="text-accent mt-0.5 shrink-0"
                        />
                        <div>
                          <div className="font-semibold text-primary-dark text-sm mb-1">
                            {item.title}
                          </div>
                          <div className="text-zinc-500 text-xs leading-relaxed">
                            {item.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={openQuoteModal}
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-colors duration-200"
                  >
                    Request a Quotation
                    <FaArrowRight size={12} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
