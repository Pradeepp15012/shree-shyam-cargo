import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import Seo from '../components/Seo';
import { stats, trustPoints } from '../data/site';

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About | Shree Shyam Cargo Packers & Movers"
        description="Learn about our experience, mission, safety standards, and why customers trust Shree Shyam Cargo Packers & Movers."
        path="/about"
      />

      <AnimatedSection className="section-pad">
        <div className="container-shell section-hero p-8 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeading
                eyebrow="About Us"
                title="A logistics team built on discipline, care, and trust"
                description="We help families and businesses relocate confidently through trained manpower, quality packing materials, and route planning designed to reduce delays and damage."
              />
            </div>
            <div className="premium-dark p-8 sm:p-10">
              <p className="text-base leading-8 text-white/80">
                Shree Shyam Cargo Packers & Movers was founded to deliver a more dependable relocation experience. Our
                mission is simple: protect customer belongings, communicate clearly, and move on schedule. With a strong
                service network and experienced crews, we support local shifting, interstate household moves, office
                relocations, and vehicle transport with the same professional approach.
              </p>
              <p className="mt-6 text-base leading-8 text-white/80">
                We focus on careful packing, clear timelines, accountable teams, and customer-first support so each move
                feels less stressful and more predictable.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-pad bg-white/80">
        <div className="container-shell">
          <div className="grid gap-6 md:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="metric-card text-center">
                <p className="font-display text-5xl font-bold text-ink">{item.value}</p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-pad">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Trust Indicators"
            title="Why clients feel confident choosing us"
            description="Every move is backed by operating discipline, experienced handlers, and responsive support."
            centered
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {trustPoints.map(({ title, icon: Icon }) => (
              <div key={title} className="premium-card p-6">
                <div className="inline-flex rounded-2xl bg-[#f5eadf] p-4 text-accentDark">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="mt-5 font-display text-3xl font-bold text-ink">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
