export default function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div className="premium-card group h-full p-7 transition duration-300 hover:-translate-y-1">
      <div className="mb-6 inline-flex rounded-[1.35rem] bg-gradient-to-br from-brand-100 to-[#eef3ff] p-4 text-brand-700 shadow-sm transition duration-300 group-hover:scale-105">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="font-display text-3xl font-bold leading-tight text-ink">{title}</h3>
      <p className="mt-4 text-sm leading-8 text-slate-600">{description}</p>
    </div>
  );
}
