export default function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand-700">{eyebrow}</p>}
      <h2 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>}
    </div>
  );
}

