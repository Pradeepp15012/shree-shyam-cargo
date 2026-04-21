export default function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && <p className="eyebrow-pill">{eyebrow}</p>}
      <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">{description}</p>}
    </div>
  );
}
