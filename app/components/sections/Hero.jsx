"use client";

import { motion } from "framer-motion";
import Button from "@/app/components/ui/Button";
import Eyebrow from "@/app/components/ui/Eyebrow";
import HeroScene from "@/app/components/illustrations/HeroScene";
import WaveDivider from "@/app/components/illustrations/WaveDivider";

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="px-6 pt-12 pb-4 md:pt-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1.08fr_1fr] gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Eyebrow className="mb-5">A home for paws. A future for all.</Eyebrow>

            <h1 className="font-display font-normal text-ink text-[clamp(2.75rem,4.4vw,3.5rem)] leading-[1.02] tracking-[-0.035em] mb-6">
              A little more kindness,
              <br />
              <span className="italic text-brand">for every kind of life.</span>
            </h1>

            <p className="text-[17px] leading-[1.7] text-mute mb-8 max-w-md">
              Kiara&apos;s Haven is a fictional concept for a digitalized animal
              adoption center — built on love, memory, and the belief that every
              life deserves a safe home.
            </p>

            <div className="flex flex-wrap gap-3">
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
            className="flex flex-col md:flex-row md:items-end gap-1"
          >
            <HeroScene className="w-full md:flex-1 min-w-0 h-auto" />
            <p className="font-display italic text-[15px] leading-[1.5] text-mute text-center md:text-left md:w-32 md:shrink-0 md:mb-12">
              In memory of five souls who made this all possible. ♡
            </p>
          </motion.div>
        </div>
      </div>

      <WaveDivider fill="var(--kh-surface)" />
    </section>
  );
}
