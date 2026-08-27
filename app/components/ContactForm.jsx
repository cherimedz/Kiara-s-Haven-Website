"use client";

import { useState } from "react";
import Button from "./ui/Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-line bg-bg p-8 text-center">
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
    <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-bg p-8 space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Your Name
        </label>
        <input
          id="name"
          type="text"
          required
          placeholder="Enter your name"
          className="w-full rounded-lg border border-line bg-card px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Your Email
        </label>
        <input
          id="email"
          type="email"
          required
          placeholder="Enter your email"
          className="w-full rounded-lg border border-line bg-card px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Your Message
        </label>
        <textarea
          id="message"
          rows={4}
          required
          placeholder="Enter your message"
          className="w-full rounded-lg border border-line bg-card px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>
      <Button type="submit" variant="primary">
        Send Message
      </Button>
    </form>
  );
}
