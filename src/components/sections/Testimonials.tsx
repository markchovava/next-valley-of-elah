"use client";

import { motion } from "motion/react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Property Manager, Greendale Estate",
    rating: 5,
    text: "Valley of Ellah has been managing maintenance for our 45-unit complex for over a year. Their response time is exceptional — never more than a few hours for urgent issues. The quality of workmanship is consistently outstanding.",
    initials: "SM",
    color: "#1b3a6b",
  },
  {
    name: "James K.",
    role: "Director, Prime Realty Zimbabwe",
    rating: 5,
    text: "We've partnered with them for our portfolio of 20+ properties on the Standard plan. The monthly maintenance packages have saved us countless headaches and our tenants are significantly happier. Highly recommended.",
    initials: "JK",
    color: "#059669",
  },
  {
    name: "Linda C.",
    role: "Homeowner, Borrowdale",
    rating: 5,
    text: "Had a plumbing emergency on a Sunday evening. They were at my property within two hours. The team was professional, tidy, and explained everything they were doing. Exceptional service.",
    initials: "LC",
    color: "#7c3aed",
  },
  {
    name: "Robert M.",
    role: "Property Developer, Harare",
    rating: 5,
    text: "Their renovation work on our 12-unit complex was completed on time and precisely within budget. The project management was superb and the finishing quality exceeded our expectations.",
    initials: "RM",
    color: "#d97706",
  },
  {
    name: "Grace N.",
    role: "Estate Agent, Relo Properties",
    rating: 5,
    text: "Transparent pricing and utterly reliable service. As an estate agent who recommends maintenance providers to clients, Valley of Ellah is my go-to recommendation without hesitation.",
    initials: "GN",
    color: "#dc2626",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
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
            Client Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
            Trusted by Property Professionals
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto leading-relaxed">
            Don't take our word for it — hear from the property managers, estate
            agents, and homeowners who rely on us every day.
          </p>
        </motion.div>

        {/* Swiper Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonials-swiper !pb-12"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.name}>
                <div className="bg-surface border border-zinc-100 rounded-3xl p-7 h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <FaStar
                        key={`star-${t.name}-${i}`}
                        size={13}
                        className="text-accent"
                      />
                    ))}
                  </div>

                  {/* Quote Icon */}
                  <FaQuoteLeft size={24} className="text-primary/10 mb-3" />

                  {/* Text */}
                  <p className="text-zinc-600 text-sm leading-relaxed flex-1 mb-6">
                    {t.text}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                      style={{ backgroundColor: t.color }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-primary-dark text-sm">
                        {t.name}
                      </div>
                      <div className="text-zinc-400 text-xs">{t.role}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style>{`
        .testimonials-swiper .swiper-pagination-bullet {
          background: #1b3a6b;
          opacity: 0.3;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          background: #f59e0b;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
