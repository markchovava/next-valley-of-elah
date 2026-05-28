"use client";

import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { useAppStore } from "@/store/useAppStore";

const serviceLinks = [
  "General Repairs",
  "Plumbing Services",
  "Electrical Services",
  "Ceiling & Roofing",
  "Painting & Finishes",
  "Garden Maintenance",
];

const quickLinks = [
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const { brand } = useAppStore();

  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <span className="text-white font-black text-sm">VE</span>
              </div>
              <span className="font-bold text-lg">{brand.shortName}</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              {brand.slogan}
            </p>
            <p className="text-white/50 text-xs leading-relaxed">
              Your trusted property maintenance partner in Harare, serving real
              estate agencies and property owners since day one.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-accent mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-accent mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-white/60 hover:text-accent transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-accent mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3 items-start">
                <FaMapMarkerAlt
                  size={14}
                  className="text-accent mt-0.5 shrink-0"
                />
                <span className="text-white/60 text-sm leading-relaxed">
                  {brand.address}
                </span>
              </li>
              {brand.phones.map((phone) => (
                <li key={phone} className="flex gap-3 items-center">
                  <FaPhone size={12} className="text-accent shrink-0" />
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="text-white/60 hover:text-accent transition-colors text-sm"
                  >
                    {phone}
                  </a>
                </li>
              ))}
              <li className="flex gap-3 items-center">
                <FaEnvelope size={12} className="text-accent shrink-0" />
                <a
                  href={`mailto:${brand.email}`}
                  className="text-white/60 hover:text-accent transition-colors text-sm break-all"
                >
                  {brand.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Fixing Homes, Building Trust &mdash; Harare, Zimbabwe
          </p>
        </div>
      </div>
    </footer>
  );
}
