export default function MissionVision() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl p-8 bg-gradient-to-br from-[#ffa7a2] to-[#fecea8] text-white">
          <h3 className="font-[family-name:var(--font-heading)] text-2xl font-semibold mb-3">
            Our Mission
          </h3>
          <p className="opacity-95 leading-relaxed">
            To create a world where every animal can enjoy a life of dignity,
            comfort, and happiness — providing shelter, care, and advocacy for
            animals in need, treated with compassion and respect.
          </p>
        </div>
        <div className="rounded-2xl p-8 bg-gradient-to-br from-[#86cdd9] to-[#daedf3] text-white">
          <h3 className="font-[family-name:var(--font-heading)] text-2xl font-semibold mb-3">
            Our Vision
          </h3>
          <p className="opacity-95 leading-relaxed">
            A future where all animals live free from suffering, every
            companion animal has a loving home, and wildlife thrives in its
            natural habitat.
          </p>
        </div>
      </div>
    </section>
  );
}
