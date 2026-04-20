export default function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div className="glass-card p-6">
      <div className="mb-5 inline-flex rounded-2xl bg-brand-100 p-4 text-brand-700">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="font-display text-xl font-bold text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </div>
  );
}

