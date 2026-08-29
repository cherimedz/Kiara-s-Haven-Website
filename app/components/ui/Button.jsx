import Link from "next/link";
import clsx from "clsx";

/* Solid fills, not gradients — colour is an accent here, not the identity.
   Haven variants sit on the `deep` tone so white text always clears contrast. */
const variants = {
  primary: "text-white bg-brand hover:bg-brand-dark",
  simba: "text-white bg-simba-deep hover:bg-simba-primary",
  sebastian: "text-white bg-sebastian-deep hover:bg-sebastian-primary",
  coco: "text-white bg-coco-deep hover:bg-coco-primary",
  princess: "text-white bg-princess-deep hover:bg-princess-primary",
  ghost: "border border-line text-warm bg-transparent hover:bg-surface",
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) {
  const classes = clsx(
    // Manrope 600, sentence case — never uppercase, never serif inside buttons.
    "inline-flex items-center justify-center rounded-xl font-semibold tracking-[-0.01em]",
    "transition-colors duration-200 select-none whitespace-nowrap",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
    size === "sm" && "px-4 py-2 text-sm",
    size === "md" && "px-6 py-3 text-[15px]",
    size === "lg" && "px-8 py-4 text-base",
    variants[variant],
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
