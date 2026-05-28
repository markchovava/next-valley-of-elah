"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useAppStore } from "@/store/useAppStore";

export default function WhatsAppButton() {
  const { brand } = useAppStore();
  const [hovered, setHovered] = useState(false);

  // Convert e.g. "0774 228 946" → "263774228946"
  const waNumber = brand.phones[0].replace(/\s/g, "").replace(/^0/, "263");
  const waMessage = encodeURIComponent(
    `Hello ${brand.shortName}, I'm interested in your property maintenance services. Could you please assist me?`,
  );
  const href = `https://wa.me/${waNumber}?text=${waMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-9990 flex flex-col items-end gap-2.5">
      {/* Tooltip bubble */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="wa-tooltip"
            initial={{ opacity: 0, y: 6, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.92 }}
            transition={{ duration: 0.15 }}
            className="relative bg-zinc-900 text-white text-xs font-medium px-3.5 py-2 rounded-xl whitespace-nowrap shadow-xl pointer-events-none"
          >
            Chat with us on WhatsApp
            {/* Arrow */}
            <span className="absolute -bottom-1.5 right-6 w-3 h-3 bg-zinc-900 rotate-45 rounded-sm" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative block"
      >
        {/* Pulse ring */}
        <span
          className="absolute inset-0 rounded-full animate-ping"
          style={{ backgroundColor: "#25d36640" }}
        />
        {/* Main button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.93 }}
          className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
          style={{
            backgroundColor: "#25d366",
            boxShadow: "0 8px 32px #25d36650",
          }}
        >
          <FaWhatsapp size={26} className="text-white" />
        </motion.div>
      </a>
    </div>
  );
}
