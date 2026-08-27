"use client";

import { motion } from "framer-motion";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-accent to-[#e0a978] text-white px-6 py-24 md:py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <p className="uppercase tracking-[0.2em] text-sm opacity-90 mb-4">Welcome Home</p>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-semibold mb-6">
          Kiara&apos;s Haven
        </h1>
        <p className="text-lg opacity-95 mb-8">
          A concept adoption center dedicated to homeless, disabled, and overlooked
          animals — and the four community havens it inspired, each one named
          after a real, beloved member of the family.
        </p>
        <Button href="#many-faces" variant="ghost" className="border-white/70 text-white hover:bg-white/10">
          Explore Our Havens
        </Button>
      </motion.div>
    </section>
  );
}
