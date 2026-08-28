const gradients = {
  simba: "from-simba-from to-simba-to",
  sebastian: "from-sebastian-from to-sebastian-to",
  coco: "from-coco-from to-coco-to",
  princess: "from-princess-from to-princess-to",
};

export default function PageHero({ theme, focus, orgName, tagline }) {
  return (
    <section
      className={`bg-gradient-to-br ${gradients[theme]} px-6 py-24 md:py-32 text-white`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-semibold text-[11px] uppercase tracking-[0.16em] opacity-90 mb-4">
          {focus}
        </p>
        <h1 className="font-display font-normal text-[clamp(2.5rem,4.5vw,3.5rem)] leading-[1.04] tracking-[-0.035em] mb-4">
          {orgName}
        </h1>
        <p className="text-[18px] leading-[1.7] opacity-95">{tagline}</p>
      </div>
    </section>
  );
}
