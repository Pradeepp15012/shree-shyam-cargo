export default function TestimonialCard({ name, role, text }) {
  return (
    <div className="premium-card h-full p-7">
      <p className="font-display text-5xl leading-none text-accent">“</p>
      <p className="mt-3 text-base leading-8 text-slate-600">{text}</p>
      <div className="mt-6">
        <p className="font-display text-2xl font-bold text-ink">{name}</p>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accentDark">{role}</p>
      </div>
    </div>
  );
}
