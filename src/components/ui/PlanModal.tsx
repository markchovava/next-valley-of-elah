"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import { monthlyPlans } from "@/config/plans";
import { useAppStore } from "@/store/useAppStore";

interface PlanForm {
  name: string;
  phone: string;
  email: string;
  units: string;
}

const blank: PlanForm = { name: "", phone: "", email: "", units: "" };

const inputClass =
  "w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200";

export default function PlanModal() {
  const { planModalOpen, closePlanModal, selectedPlan } = useAppStore();
  const [form, setForm] = useState<PlanForm>(blank);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const plan =
    monthlyPlans.find((p) => p.name === selectedPlan) ?? monthlyPlans[1];

  useEffect(() => {
    if (planModalOpen) {
      setForm(blank);
      setSubmitted(false);
    }
  }, [planModalOpen]);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = planModalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [planModalOpen]);

  // Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePlanModal();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [closePlanModal]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
    setTimeout(() => {
      closePlanModal();
      setForm(blank);
      setSubmitted(false);
    }, 2800);
  };

  return (
    <AnimatePresence>
      {planModalOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="pm-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-9998 bg-black/60 backdrop-blur-sm"
            onClick={closePlanModal}
          />

          {/* Panel */}
          <motion.div
            key="pm-panel"
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 24 }}
            transition={{ type: "spring", duration: 0.45, bounce: 0.12 }}
            className="fixed inset-0 z-9999 flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Select a plan"
              className="pointer-events-auto w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-white rounded-3xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-zinc-100 px-7 py-5 flex items-center justify-between rounded-t-3xl z-10">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-bold text-xl text-primary-dark">
                      {plan.name} Plan
                    </h2>
                    {plan.badge && (
                      <span className="bg-accent/15 text-accent text-xs font-bold px-2.5 py-0.5 rounded-full">
                        {plan.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-zinc-400 text-xs mt-0.5">{plan.tagline}</p>
                </div>
                <button
                  type="button"
                  onClick={closePlanModal}
                  aria-label="Close"
                  className="w-9 h-9 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-400 hover:text-zinc-700 transition-colors"
                >
                  <FaTimes size={14} />
                </button>
              </div>

              <div className="grid md:grid-cols-2">
                {/* Left: Plan Details */}
                <div
                  className="p-7 md:rounded-bl-3xl"
                  style={{
                    background: plan.featured
                      ? "linear-gradient(160deg, #1b3a6b 0%, #0f2444 100%)"
                      : "#f8fafc",
                  }}
                >
                  {/* Price */}
                  <div className="mb-6">
                    <span
                      className={`text-5xl font-black ${plan.featured ? "text-white" : "text-primary-dark"}`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`text-sm ml-2 ${plan.featured ? "text-white/50" : "text-zinc-400"}`}
                    >
                      {plan.period}
                    </span>
                  </div>

                  {/* Divider */}
                  <div
                    className={`text-xs font-semibold uppercase tracking-wider mb-4 ${plan.featured ? "text-white/40" : "text-zinc-400"}`}
                  >
                    What&apos;s included
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm"
                      >
                        <FaCheckCircle
                          size={13}
                          className={`mt-0.5 shrink-0 ${plan.featured ? "text-accent-light" : "text-accent"}`}
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
                </div>

                {/* Right: Contact Form */}
                <div className="p-7">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center h-full text-center py-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", bounce: 0.45 }}
                        className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-5"
                      >
                        <FaCheckCircle size={30} className="text-green-500" />
                      </motion.div>
                      <h3 className="text-lg font-bold text-primary-dark mb-2">
                        Plan Selected!
                      </h3>
                      <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
                        We&apos;ll contact you shortly to finalise your{" "}
                        {plan.name} plan setup.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <p className="font-semibold text-primary-dark text-sm mb-1">
                          Your contact details
                        </p>
                        <p className="text-zinc-400 text-xs leading-relaxed mb-5">
                          Fill in below and we&apos;ll reach out within 24 hours
                          to get your {plan.name} plan started.
                        </p>
                      </div>

                      <div>
                        <label
                          htmlFor="pm-name"
                          className="block text-xs font-semibold text-zinc-500 mb-1.5 uppercase tracking-wide"
                        >
                          Full Name *
                        </label>
                        <input
                          id="pm-name"
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="John Smith"
                          className={inputClass}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="pm-phone"
                          className="block text-xs font-semibold text-zinc-500 mb-1.5 uppercase tracking-wide"
                        >
                          Phone Number *
                        </label>
                        <input
                          id="pm-phone"
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          placeholder="07xx xxx xxx"
                          className={inputClass}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="pm-email"
                          className="block text-xs font-semibold text-zinc-500 mb-1.5 uppercase tracking-wide"
                        >
                          Email Address
                        </label>
                        <input
                          id="pm-email"
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className={inputClass}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="pm-units"
                          className="block text-xs font-semibold text-zinc-500 mb-1.5 uppercase tracking-wide"
                        >
                          No. of Properties
                        </label>
                        <input
                          id="pm-units"
                          type="number"
                          name="units"
                          value={form.units}
                          onChange={handleChange}
                          min="1"
                          placeholder="e.g. 5"
                          className={inputClass}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-primary hover:bg-primary-dark disabled:opacity-60 text-white font-semibold py-4 rounded-xl transition-all duration-200 shadow-lg shadow-primary/20 hover:-translate-y-0.5 disabled:translate-y-0"
                      >
                        {loading ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg
                              aria-hidden="true"
                              className="animate-spin w-4 h-4"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                              />
                            </svg>
                            Confirming...
                          </span>
                        ) : (
                          `Confirm ${plan.name} Plan →`
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
