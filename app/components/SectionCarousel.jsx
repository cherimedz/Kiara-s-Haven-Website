"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import Button from "./ui/Button";

const sections = [
  {
    id: "adopt",
    title: "Adopt Your New Furry Companion",
    body: "At Kiara's Haven, we're committed to finding loving homes for homeless, disabled, and overlooked animals. Adopting means giving a deserving animal a second chance at life, guided by compassionate matchmaking.",
    cta: "Meet Your Furry Friends",
    gradient: "from-[#e5a663] to-[#f2c98a]",
  },
  {
    id: "volunteer",
    title: "Volunteer and Make a Difference",
    body: "Join our team dedicated to the welfare of homeless and neglected animals. Volunteers help organize events, assist with adoptions, and contribute in ways big and small.",
    cta: "Join Our Team",
    gradient: "from-[#6f9a6f] to-[#b8dfa0]",
  },
  {
    id: "donate",
    title: "Support Us With Your Donation",
    body: "Donations help provide care, shelter, and medical attention to animals in need — and support educational programs and community outreach initiatives.",
    cta: "Donate Today",
    gradient: "from-[#c4794f] to-[#e0a978]",
  },
  {
    id: "sponsor",
    title: "Become a Sponsor",
    body: "Sponsorship helps cover essential care, shelter, and medical attention. Even without adopting or donating directly, sponsoring a furry friend makes a real difference.",
    cta: "Sponsor a Friend",
    gradient: "from-[#e79aa4] to-[#f7cac9]",
  },
  {
    id: "impact",
    title: "Our Impact",
    body: "Every home found, every animal cared for, and every volunteer hour given adds up. This is a demo project, so the numbers here are illustrative rather than real statistics.",
    cta: "Learn More",
    gradient: "from-[#fd8451] to-[#ffbd6f]",
  },
  {
    id: "join-family",
    title: "Join Our Family",
    body: "Our community grows every day, bringing us closer to a world where animals can thrive. Join us and become part of something dedicated to making a positive impact.",
    cta: "Join the Family",
    gradient: "from-[#d9e88a] to-[#8fbc8f]",
  },
];

export default function SectionCarousel() {
  const [active, setActive] = useState(0);
  const current = sections[active];

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {sections.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setActive(i)}
            className={clsx(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors",
              i === active ? "bg-ink text-white" : "bg-card text-mute border border-line hover:text-ink"
            )}
          >
            {s.title.split(" ").slice(0, 2).join(" ")}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35 }}
          className={`rounded-3xl bg-gradient-to-br ${current.gradient} text-white p-10 md:p-14`}
        >
          <h3 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-semibold mb-4">
            {current.title}
          </h3>
          <p className="text-base md:text-lg opacity-95 mb-6 max-w-2xl">{current.body}</p>
          <Button variant="ghost" className="border-white/70 text-white hover:bg-white/10">
            {current.cta}
          </Button>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
