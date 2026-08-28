"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import Button from "./ui/Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-line bg-card p-8 text-center">
        <p className="font-[family-name:var(--font-heading)] text-xl mb-2">
          Thanks for reaching out!
        </p>
        <p className="text-mute">
          This is a demo form — nothing was actually sent, but on a real site
          this is where your message would go.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          type="text"
          required
          placeholder="Your name"
          aria-label="Your name"
          className="w-full rounded-lg border border-line bg-card px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <input
          type="email"
          required
          placeholder="Email address"
          aria-label="Email address"
          className="w-full rounded-lg border border-line bg-card px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>
      <textarea
        rows={4}
        required
        placeholder="Your message"
        aria-label="Your message"
        className="w-full rounded-lg border border-line bg-card px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
      />
      <Button type="submit" variant="primary">
        Send Message <Send size={16} className="ml-2" />
      </Button>
    </form>
  );
}
