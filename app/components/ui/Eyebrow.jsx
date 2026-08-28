import clsx from "clsx";

/* Small uppercase label: Manrope 600, 11px, 0.16em tracking, never pure black. */
export default function Eyebrow({ as: Tag = "p", className, children }) {
  return (
    <Tag
      className={clsx(
        "font-semibold text-[11px] uppercase tracking-[0.16em] text-accent",
        className
      )}
    >
      {children}
    </Tag>
  );
}
