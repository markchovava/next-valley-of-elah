"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import { useAppStore } from "@/store/useAppStore";

interface FormState {
  name: string;
  email: string;
  phone: string;
  propertyType: string;
  units: string;
  plan: string;
  message: string;
}

const blank: FormState = {
  name: "",
  email: "",
  phone: "",
  propertyType: "",
  units: "",
  plan: "",
  message: "",
};

const inputClass =
  "w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200";

export default function QuoteModal() {
  const { quoteModalOpen, closeQuoteModal, selectedPlan } = useAppStore();
  const [form, setForm] = useState<FormState>(blank);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Pre-fill plan when modal opens
  useEffect(() => {
    if (quoteModalOpen) {
      setForm({ ...blank, plan: selectedPlan ?? "" });
      setSubmitted(false);
    }
  }, [quoteModalOpen, selectedPlan]);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = quoteModalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [quoteModalOpen]);

  // Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeQuoteModal();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [closeQuoteModal]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
    setTimeout(() => {
      closeQuoteModal();
      setForm(blank);
      setSubmitted(false);
    }, 2800);
  };

  return (
    <AnimatePresence>
      {quoteModalOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="qm-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm"
            onClick={closeQuoteModal}
          />

          {/* Panel */}
          <motion.div
            key="qm-panel"
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 24 }}
            transition={{ type: "spring", duration: 0.45, bounce: 0.12 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="pointer-events-auto w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-white rounded-3xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-zinc-100 px-7 py-5 flex items-center justify-between rounded-t-3xl z-10">
                <div>
                  <h2 className="font-bold text-xl text-primary-dark">
                    Request a Free Quote
                  </h2>
                  <p className="text-zinc-400 text-xs mt-0.5">
                    We&apos;ll respond within 24 hours
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeQuoteModal}
                  aria-label="Close"
                  className="w-9 h-9 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-400 hover:text-zinc-700 transition-colors"
                >
                  <FaTimes size={14} />
                </button>
              </div>

              <div className="px-7 py-6">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-12">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", bounce: 0.45 }}
                      className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-5"
                    >
                      <FaCheckCircle size={30} className="text-green-500" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-primary-dark mb-2">
                      Request Sent!
                    </h3>
                    <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
                      Our team will contact you within 24 hours with a tailored
                      quotation.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="qm-name"
                          className="block text-xs font-semibold text-zinc-500 mb-1.5 uppercase tracking-wide"
                        >
                          Full Name *
                        </label>
                        <input
                          id="qm-name"
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
                          htmlFor="qm-email"
                          className="block text-xs font-semibold text-zinc-500 mb-1.5 uppercase tracking-wide"
                        >
                          Email *
                        </label>
                        <input
                          id="qm-email"
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="qm-phone"
                          className="block text-xs font-semibold text-zinc-500 mb-1.5 uppercase tracking-wide"
                        >
                          Phone
                        </label>
                        <input
                          id="qm-phone"
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="07xx xxx xxx"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="qm-propertyType"
                          className="block text-xs font-semibold text-zinc-500 mb-1.5 uppercase tracking-wide"
                        >
                          Property Type *
                        </label>
                        <select
                          id="qm-propertyType"
                          name="propertyType"
                          value={form.propertyType}
                          onChange={handleChange}
                          required
                          className={inputClass}
                        >
                          <option value="">Select type...</option>
                          <option>Individual Home</option>
                          <option>Residential Complex</option>
                          <option>Commercial Property</option>
                          <option>Estate Agency Portfolio</option>
                          <option>Corporate / Industrial</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="qm-units"
                          className="block text-xs font-semibold text-zinc-500 mb-1.5 uppercase tracking-wide"
                        >
                          No. of Units / Properties
                        </label>
                        <input
                          id="qm-units"
                          type="number"
                          name="units"
                          value={form.units}
                          onChange={handleChange}
                          min="1"
                          placeholder="e.g. 12"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="qm-plan"
                          className="block text-xs font-semibold text-zinc-500 mb-1.5 uppercase tracking-wide"
                        >
                          Interested Plan
                        </label>
                        <select
                          id="qm-plan"
                          name="plan"
                          value={form.plan}
                          onChange={handleChange}
                          className={inputClass}
                        >
                          <option value="">Select a plan...</option>
                          <option>Per Job</option>
                          <option>Basic</option>
                          <option>Standard</option>
                          <option>Premium</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="qm-message"
                        className="block text-xs font-semibold text-zinc-500 mb-1.5 uppercase tracking-wide"
                      >
                        Message / Requirements
                      </label>
                      <textarea
                        id="qm-message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Describe your maintenance needs or any specific requirements..."
                        className={`${inputClass} resize-none`}
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
                          Sending...
                        </span>
                      ) : (
                        "Send Quote Request"
                      )}
                    </button>

                    <p className="text-zinc-400 text-xs text-center">
                      No obligation — we&apos;ll assess your needs and follow up
                      within 24 hours.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
