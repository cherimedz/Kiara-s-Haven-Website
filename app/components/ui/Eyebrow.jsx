import clsx from "clsx";

/* Small uppercase label: Manrope 600, 11px, 0.16em tracking, never pure black.
   Uses brand-dark rather than brand — at 11px, plain terracotta on cream is
   4.01:1, just under the 4.5:1 required for small text. */
export default function Eyebrow({ as: Tag = "p", className, children }) {
  return (
    <Tag
      className={clsx(
        "font-semibold text-[11px] uppercase tracking-[0.16em] text-brand-dark",
        className
      )}
    >
      {children}
    </Tag>
  );
}
