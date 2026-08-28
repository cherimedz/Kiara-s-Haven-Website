"use client";

import { motion } from "framer-motion";
import Button from "./ui/Button";
import HeroScene from "./illustrations/HeroScene";

export default function Hero() {
  return (
    <section id="home" className="px-6 pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="uppercase tracking-[0.2em] text-sm text-accent font-medium mb-4">
            A Home for Paws. A Future for All.
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-semibold text-ink leading-tight mb-6">
            A little more kindness,
            <br />
            <span className="italic text-accent">for every kind of life.</span>
          </h1>
          <p className="text-mute text-lg mb-8 max-w-md">
            Kiara&apos;s Haven is a fictional concept for a digitalized animal
            adoption center — built on love, memory, and the belief that
            every life deserves a safe home.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="#wayfinder">Adopt a friend 🐾</Button>
            <Button href="#contact" variant="ghost">
              Join our family
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <HeroScene className="w-full h-auto" />
          <p className="mt-3 text-right text-sm italic text-mute">
            In memory of five souls who made this all possible. ♡
          </p>
        </motion.div>
      </div>
    </section>
  );
}
