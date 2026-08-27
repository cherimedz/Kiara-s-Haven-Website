import Button from "./ui/Button";

const gradients = {
  simba: "from-simba-from to-simba-to",
  sebastian: "from-sebastian-from to-sebastian-to",
  coco: "from-coco-from to-coco-to",
  princess: "from-princess-from to-princess-to",
};

export default function SubOrgCard({ org }) {
  return (
    <div
      className={`rounded-2xl p-8 bg-gradient-to-br ${gradients[org.theme]} text-white flex flex-col h-full`}
    >
      <p className="text-sm uppercase tracking-wide opacity-90 mb-2">{org.focus}</p>
      <h3 className="font-[family-name:var(--font-heading)] text-2xl font-semibold mb-3">
        {org.orgName}
      </h3>
      <p className="opacity-95 leading-relaxed mb-6 flex-1">{org.tagline}</p>
      <Button
        href={`/${org.slug}`}
        variant="ghost"
        className="self-start border-white/70 text-white hover:bg-white/10"
      >
        Visit {org.orgName}
      </Button>
    </div>
  );
}
