import clsx from "clsx";

/**
 * Statistics as an editorial row, not a dashboard.
 *
 * Deliberately not boxed. Putting figures in a bordered card is what makes
 * them read as SaaS analytics; a plain row with hairline rules between the
 * columns lets the numbers be the picture. That is also why there is no icon
 * here — see the icon rule in AGENTS.md.
 *
 * The number is Fraunces because a figure on this site is an editorial
 * statement; the label is Manrope because it is information.
 *
 * @param {object} props
 * @param {{value: string, label: string}[]} props.stats
 * @param {string} [props.accent] Class colouring the numbers.
 * @param {"dl" | "div"} [props.as] `dl` when the labels describe the figures.
 */
export default function StatRow({ stats, accent = "text-ink", as: Tag = "dl", className }) {
  const isList = Tag === "dl";

  return (
    <Tag
      className={clsx(
        "grid grid-cols-2 lg:grid-cols-4 gap-y-10",
        "divide-y divide-line lg:divide-y-0 lg:divide-x",
        className
      )}
    >
      {stats.map(({ value, label }) => (
        <div key={label} className="px-6 first:pl-0 lg:py-1">
          {isList && <dt className="sr-only">{label}</dt>}
          {isList ? (
            <dd>
              <StatBody value={value} label={label} accent={accent} />
            </dd>
          ) : (
            <StatBody value={value} label={label} accent={accent} />
          )}
        </div>
      ))}
    </Tag>
  );
}

function StatBody({ value, label, accent }) {
  return (
    <>
      <span
        className={clsx(
          "block font-display font-medium text-[clamp(2rem,3.4vw,2.75rem)] leading-none tracking-[-0.02em]",
          accent
        )}
      >
        {value}
      </span>
      <span className="block text-[14px] text-mute mt-3 leading-[1.5]">{label}</span>
    </>
  );
}
