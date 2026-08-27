import clsx from "clsx";

export default function SectionHeading({ eyebrow, title, subtitle, align = "center", className }) {
  return (
    <div
      className={clsx(
        "max-w-2xl mb-10",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <p className="font-sans text-sm uppercase tracking-[0.2em] text-accent mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-semibold text-ink">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-mute text-lg">{subtitle}</p>}
    </div>
  );
}
