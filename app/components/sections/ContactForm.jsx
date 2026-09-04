"use client";

import { useState } from "react";
import { Send } from "lucide-react";

import Button from "@/app/components/ui/Button";
import Field, { CONTROL } from "@/app/components/ui/Field";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-line bg-surface p-8 md:p-10 text-center">
        <p className="font-display text-[22px] tracking-[-0.02em] mb-2">
          Thanks for reaching out!
        </p>
        <p className="text-[15px] leading-[1.65] text-mute">
          This is a demo form — nothing was actually sent, but on a real site
          this is where your message would go.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field id="contact-name" label="Your name">
          <input id="contact-name" type="text" required placeholder="Medha" className={`${CONTROL} h-13`} />
        </Field>
        <Field id="contact-email" label="Email address">
          <input
            id="contact-email"
            type="email"
            required
            placeholder="you@example.com"
            className={`${CONTROL} h-13`}
          />
        </Field>
      </div>

      <Field id="contact-message" label="Your message">
        <textarea
          id="contact-message"
          rows={4}
          required
          placeholder="Say hello…"
          className={`${CONTROL} py-3.5`}
        />
      </Field>

      <Button type="submit" variant="primary">
        Send message <Send size={16} aria-hidden="true" />
      </Button>
    </form>
  );
}
