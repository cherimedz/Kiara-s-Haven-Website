import Link from "next/link";
import clsx from "clsx";

const variantGradients = {
  primary: "from-accent to-[#e0a978]",
  simba: "from-simba-from to-simba-to",
  sebastian: "from-sebastian-from to-sebastian-to",
  coco: "from-coco-from to-coco-to",
  princess: "from-princess-from to-princess-to",
  ghost: null,
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) {
  const isGhost = variant === "ghost";

  const classes = clsx(
    "inline-flex items-center justify-center rounded-xl font-medium transition-transform duration-200 select-none whitespace-nowrap",
    "hover:-translate-y-0.5 active:translate-y-0",
    size === "sm" && "px-4 py-2 text-sm",
    size === "md" && "px-6 py-3 text-base",
    size === "lg" && "px-8 py-4 text-lg",
    isGhost
      ? "border border-line text-ink bg-transparent hover:bg-card"
      : `text-white bg-gradient-to-br ${variantGradients[variant]} shadow-sm hover:shadow-md`,
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
