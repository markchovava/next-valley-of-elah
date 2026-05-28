"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { FaBars, FaPhone, FaTimes } from "react-icons/fa";
import { useAppStore } from "@/store/useAppStore";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { brand, openQuoteModal } = useAppStore();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary shadow-lg shadow-primary/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center shrink-0">
            <span className="text-white font-black text-sm leading-none">
              VE
            </span>
          </div>
          <span className="text-white font-bold text-lg leading-tight hidden sm:block">
            {brand.shortName}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-accent transition-colors duration-200 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${brand.phones[0].replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-white/80 hover:text-accent transition-colors text-sm"
          >
            <FaPhone size={12} />
            {brand.phones[0]}
          </a>
          <a
            href="#contact"
            className="bg-accent hover:bg-accent-dark text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 shadow-lg shadow-accent/30"
          >
            Free Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-primary-dark"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white/80 hover:text-accent hover:bg-white/5 transition-colors text-sm font-medium px-3 py-2.5 rounded-lg"
                >
                  {link.label}
                </a>
              ))}
              <div className="border-t border-white/10 mt-2 pt-3 flex flex-col gap-2">
                <a
                  href={`tel:${brand.phones[0].replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-white/70 px-3 py-2 text-sm"
                >
                  <FaPhone size={12} />
                  {brand.phones[0]}
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-accent text-white px-5 py-2.5 rounded-full text-sm font-semibold text-center"
                >
                  Get a Free Quote
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
