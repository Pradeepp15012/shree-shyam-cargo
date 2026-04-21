import { ArrowRight } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import Seo from '../components/Seo';
import TestimonialCard from '../components/TestimonialCard';
import { stats, testimonials, trustPoints } from '../data/site';
import { aboutSectionLinks, aboutSections, newsUpdateItems } from '../data/aboutSections';

export default function AboutDetailPage() {
  const { sectionSlug } = useParams();
  const section = aboutSections[sectionSlug || ''];

  if (!section) {
    return <Navigate to="/about" replace />;
  }

  const relatedLinks = aboutSectionLinks.filter((item) => item.slug !== sectionSlug).slice(0, 3);
  const isStoriesPage = sectionSlug === 'customer-stories';
  const isNewsPage = sectionSlug === 'news-updates';

  return (
    <>
      <Seo
        title={`${section.seoTitle} | Shree Shyam Cargo Packers & Movers`}
        description={section.seoDescription}
        path={`/about/${sectionSlug}`}
      />

      <AnimatedSection className="section-pad">
        <div className="container-shell section-hero p-8 sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="eyebrow-pill">{section.eyebrow}</p>
              <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-tight text-ink sm:text-6xl">
                {section.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{section.description}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                {section.stats.map((item) => (
                  <div key={item.label} className="metric-card min-w-[170px]">
                    <p className="font-display text-3xl font-bold text-ink">{item.value}</p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="premium-dark p-8 sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f0cda8]">{section.spotlight.label}</p>
              <h2 className="mt-4 font-display text-4xl font-bold">{section.spotlight.title}</h2>
              <p className="mt-5 text-base leading-8 text-white/80">{section.spotlight.text}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {relatedLinks.map((item) => (
                  <Link
                    key={item.slug}
                    to={item.to}
                    className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-pad pt-0">
        <div className="container-shell grid gap-6 md:grid-cols-3">
          {section.highlights.map(({ title, text, icon: Icon }) => (
            <div key={title} className="premium-card p-6">
              <div className="inline-flex rounded-2xl bg-[#f5eadf] p-4 text-accentDark">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="mt-5 font-display text-3xl font-bold text-ink">{title}</h2>
              <p className="mt-4 text-sm leading-8 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-pad bg-white/80">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow="Inside This Section"
              title={`What ${section.seoTitle.toLowerCase()} means for our customers`}
              description="These focus areas show how the brand turns operating values into a more premium relocation experience."
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {section.featureCards.map((item) => (
              <div key={item.title} className="premium-card p-6">
                <h3 className="font-display text-3xl font-bold text-ink">{item.title}</h3>
                <p className="mt-4 text-sm leading-8 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-pad">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Brand Signals"
            title="The standards customers feel across every route"
            description="These core indicators stay relevant across all about-section pages because they shape the quality of the moving experience."
            centered
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {trustPoints.map(({ title, icon: Icon }) => (
              <div key={title} className="premium-card p-6">
                <div className="inline-flex rounded-2xl bg-[#eef3ff] p-4 text-brand-700">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="mt-5 font-display text-3xl font-bold text-ink">{title}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="metric-card text-center">
                <p className="font-display text-5xl font-bold text-ink">{item.value}</p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {isStoriesPage && (
        <AnimatedSection className="section-pad bg-white/80">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Customer Stories"
              title="Voices from moves that mattered"
              description="These customer reflections highlight the reassurance, timing, and handling quality that matter most in relocation work."
              centered
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {testimonials.map((item) => (
                <TestimonialCard key={item.name} {...item} />
              ))}
            </div>
          </div>
        </AnimatedSection>
      )}

      {isNewsPage && (
        <AnimatedSection className="section-pad bg-white/80">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Latest Updates"
              title="Recent service and brand updates"
              description="Use this section to keep the site feeling active, current, and helpful to customers planning their move."
              centered
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {newsUpdateItems.map((item) => (
                <div key={item.title} className="premium-card p-6">
                  <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-accentDark">Update</p>
                  <h3 className="mt-3 font-display text-3xl font-bold text-ink">{item.title}</h3>
                  <p className="mt-4 text-sm leading-8 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      )}

      <AnimatedSection className="section-pad">
        <div className="container-shell premium-dark p-8 sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f0cda8]">Explore More</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold sm:text-5xl">
            Continue through our company story with dedicated premium pages for each trust-building topic.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {relatedLinks.map((item) => (
              <Link
                key={item.slug}
                to={item.to}
                className="rounded-[1.5rem] border border-white/15 bg-white/10 p-5 transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                <p className="font-display text-2xl font-bold">{item.label}</p>
                <p className="mt-3 inline-flex items-center text-sm font-semibold text-[#f0cda8]">
                  Open page
                  <ArrowRight className="ml-2 h-4 w-4" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
