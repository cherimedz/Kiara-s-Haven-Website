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
        <p className="font-semibold text-[11px] uppercase tracking-[0.16em] text-brand mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display font-normal text-ink text-[clamp(2.25rem,3.4vw,2.75rem)] leading-[1.08] tracking-[-0.025em]">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-[17px] leading-[1.7] text-mute">{subtitle}</p>}
    </div>
  );
}
