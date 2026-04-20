export default function TestimonialCard({ name, role, text }) {
  return (
    <div className="glass-card p-6">
      <p className="text-base leading-7 text-slate-600">“{text}”</p>
      <div className="mt-6">
        <p className="font-display text-lg font-bold text-ink">{name}</p>
        <p className="text-sm text-brand-700">{role}</p>
      </div>
    </div>
  );
}

