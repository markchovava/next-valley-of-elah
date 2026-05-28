"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import {
  FaCheckCircle,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
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

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  propertyType: "",
  units: "",
  plan: "",
  message: "",
};

export default function Contact() {
  const { brand, selectedPlan, setSelectedPlan } = useAppStore();
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedPlan) {
      setForm((prev) => ({ ...prev, plan: selectedPlan }));
    }
  }, [selectedPlan]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
    setSelectedPlan(null);
  };

  const inputClass =
    "w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200";

  return (
    <section id="contact" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-accent text-xs font-bold uppercase tracking-widest mb-3">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
            Request a Free Quote
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto leading-relaxed">
            Fill in the form below and our team will be in touch within 24 hours
            with a detailed quotation tailored to your property.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="bg-white rounded-3xl p-10 shadow-sm border border-zinc-100 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-5">
                  <FaCheckCircle size={32} className="text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-2">
                  Message Received!
                </h3>
                <p className="text-zinc-500 text-sm max-w-sm leading-relaxed mb-6">
                  Thank you for reaching out. Our team will review your request
                  and contact you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm(initialForm);
                  }}
                  className="text-primary hover:text-accent text-sm font-medium transition-colors"
                >
                  Submit another request →
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-7 sm:p-9 shadow-sm border border-zinc-100 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold text-zinc-600 mb-1.5 uppercase tracking-wide"
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
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
                      htmlFor="email"
                      className="block text-xs font-semibold text-zinc-600 mb-1.5 uppercase tracking-wide"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
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

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold text-zinc-600 mb-1.5 uppercase tracking-wide"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
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
                      htmlFor="propertyType"
                      className="block text-xs font-semibold text-zinc-600 mb-1.5 uppercase tracking-wide"
                    >
                      Property Type *
                    </label>
                    <select
                      id="propertyType"
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

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="units"
                      className="block text-xs font-semibold text-zinc-600 mb-1.5 uppercase tracking-wide"
                    >
                      Number of Units
                    </label>
                    <input
                      id="units"
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
                      htmlFor="plan"
                      className="block text-xs font-semibold text-zinc-600 mb-1.5 uppercase tracking-wide"
                    >
                      Interested Plan
                    </label>
                    <select
                      id="plan"
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
                    htmlFor="message"
                    className="block text-xs font-semibold text-zinc-600 mb-1.5 uppercase tracking-wide"
                  >
                    Message / Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your maintenance needs or any specific requirements..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary hover:bg-primary-dark disabled:opacity-70 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:translate-y-0"
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
                    "Send Request"
                  )}
                </button>

                <p className="text-zinc-400 text-xs text-center">
                  We respond within 24 hours. Your details are kept
                  confidential.
                </p>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <div
              className="rounded-3xl p-7 text-white"
              style={{
                background: "linear-gradient(135deg, #1b3a6b 0%, #0f2444 100%)",
              }}
            >
              <h3 className="font-bold text-lg mb-5">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <FaMapMarkerAlt size={13} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs mb-0.5 uppercase tracking-wider">
                      Address
                    </div>
                    <div className="text-white/80 text-sm leading-relaxed">
                      {brand.address}
                    </div>
                  </div>
                </div>

                {brand.phones.map((phone) => (
                  <div key={phone} className="flex gap-3 items-center">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <FaPhone size={12} className="text-accent" />
                    </div>
                    <div>
                      <div className="text-white/50 text-xs mb-0.5 uppercase tracking-wider">
                        Phone
                      </div>
                      <a
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="text-white/80 hover:text-accent transition-colors text-sm"
                      >
                        {phone}
                      </a>
                    </div>
                  </div>
                ))}

                <div className="flex gap-3 items-center">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <FaEnvelope size={12} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs mb-0.5 uppercase tracking-wider">
                      Email
                    </div>
                    <a
                      href={`mailto:${brand.email}`}
                      className="text-white/80 hover:text-accent transition-colors text-sm break-all"
                    >
                      {brand.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating hours */}
            <div className="bg-white rounded-3xl p-7 border border-zinc-100 shadow-sm">
              <h3 className="font-bold text-primary-dark mb-4 text-sm uppercase tracking-wide">
                Operating Hours
              </h3>
              <div className="space-y-2 text-sm">
                {[
                  { day: "Monday – Friday", hours: "7:00 AM – 6:00 PM" },
                  { day: "Saturday", hours: "8:00 AM – 2:00 PM" },
                  {
                    day: "Sunday / Public Holiday",
                    hours: "Emergency calls only",
                  },
                ].map((item) => (
                  <div
                    key={item.day}
                    className="flex justify-between items-center py-1.5 border-b border-zinc-50 last:border-0"
                  >
                    <span className="text-zinc-500">{item.day}</span>
                    <span className="font-medium text-primary-dark text-xs">
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick call CTA */}
            <a
              href={`tel:${brand.phones[0].replace(/\s/g, "")}`}
              className="flex items-center justify-center gap-3 bg-accent hover:bg-accent-dark text-white font-semibold py-4 rounded-2xl transition-colors duration-200 shadow-lg shadow-accent/25"
            >
              <FaPhone size={15} />
              Call Us Now: {brand.phones[0]}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
