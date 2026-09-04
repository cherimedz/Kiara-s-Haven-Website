import Link from "next/link";
import clsx from "clsx";

import { INTERACTION } from "@/app/lib/layout";

/**
 * Three button styles and no more.
 *
 *   primary    the one important action on a screen — terracotta, white text
 *   secondary  transparent, quiet border, deep ink
 *   text       no container at all; for cards and editorial lines
 *
 * The haven variants are `primary` in that haven's colour, for the one CTA on
 * a haven page. They sit on the `deep` tone so white text always clears
 * contrast.
 *
 * Buttons are the only pill shapes in the system. That is deliberate: the page
 * is calm and rectangular, so the actions get to be the round ones.
 */
const variants = {
  primary: "text-white bg-brand hover:bg-brand-dark",
  secondary: "border border-line text-ink bg-transparent hover:bg-surface hover:border-brand",
  simba: "text-white bg-simba-deep hover:bg-simba-primary",
  sebastian: "text-white bg-sebastian-deep hover:bg-sebastian-primary",
  coco: "text-white bg-coco-deep hover:bg-coco-primary",
  princess: "text-white bg-princess-deep hover:bg-princess-primary",
};

/* Heights are fixed rather than derived from padding, so two buttons side by
   side always line up whatever is inside them. */
const sizes = {
  sm: "h-12 px-5 text-sm",
  md: "h-13 px-6 text-[15px]",
  lg: "h-14 px-7 text-base",
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) {
  const isText = variant === "text";

  const classes = clsx(
    // Manrope 600, sentence case — never uppercase, never serif inside buttons.
    "group inline-flex items-center justify-center gap-2 font-semibold tracking-[-0.01em]",
    "select-none whitespace-nowrap",
    INTERACTION.focus,
    isText
      ? // No container: colour shift plus the arrow slide, nothing else.
        "text-brand-dark hover:text-brand transition-colors duration-fast rounded-sm"
      : clsx("rounded-full", INTERACTION.button, sizes[size], variants[variant]),
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
