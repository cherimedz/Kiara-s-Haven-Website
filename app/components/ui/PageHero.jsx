/* Pale haven surface with deep haven ink — the same 70/20/10 balance the
   homepage cards use, so no sub-page becomes a wall of one colour. */
const themes = {
  simba: { surface: "from-simba-soft to-simba-wash", ink: "text-simba-deep" },
  sebastian: { surface: "from-sebastian-soft to-sebastian-wash", ink: "text-sebastian-deep" },
  coco: { surface: "from-coco-soft to-coco-wash", ink: "text-coco-deep" },
  princess: { surface: "from-princess-soft to-princess-wash", ink: "text-princess-deep" },
};

export default function PageHero({ theme, focus, orgName, tagline }) {
  const t = themes[theme];

  return (
    <section
      className={`bg-gradient-to-br ${t.surface} ${t.ink} px-6 py-24 md:py-32`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-semibold text-[11px] uppercase tracking-[0.16em] opacity-80 mb-4">
          {focus}
        </p>
        <h1 className="font-display font-normal text-[clamp(2.5rem,4.5vw,3.5rem)] leading-[1.04] tracking-[-0.035em] mb-4">
          {orgName}
        </h1>
        <p className="text-[18px] leading-[1.7] opacity-85">{tagline}</p>
      </div>
    </section>
  );
}
