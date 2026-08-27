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
        <p className="font-sans text-sm uppercase tracking-[0.2em] opacity-90 mb-4">
          {focus}
        </p>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-semibold mb-4">
          {orgName}
        </h1>
        <p className="text-lg md:text-xl opacity-95">{tagline}</p>
      </div>
    </section>
  );
}
