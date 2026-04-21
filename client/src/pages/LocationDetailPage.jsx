import { ArrowRight, Clock3, MapPin, PhoneCall, ShieldCheck, Truck } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import Seo from '../components/Seo';
import SectionHeading from '../components/SectionHeading';
import { company, getLocationBySlug } from '../data/site';
import { callLink, whatsappLink } from '../utils/helpers';

const processSteps = [
  'Free consultation and route planning',
  'Safe packing with labeled handling',
  'Loading, transit coordination, and unloading',
  'Final placement support and delivery confirmation'
];

export default function LocationDetailPage() {
  const { locationSlug } = useParams();
  const location = getLocationBySlug(locationSlug || '');

  if (!location) {
    return <Navigate to="/search-location" replace />;
  }

  const intro = `Shree Shyam Cargo Packers & Movers provides reliable shifting support in ${location.city}, ${location.state} for home relocation, office moves, vehicle transport, and complete packing assistance.`;
  const serviceDescription = `Our ${location.city} moving team manages route planning, packing quality, truck placement, loading discipline, and timely delivery so customers get a smoother relocation experience.`;
  const faqItems = [
    {
      question: `Do you provide local and intercity moving service in ${location.city}?`,
      answer: `Yes. We handle ${location.coverage.toLowerCase()} jobs from ${location.city} with planning support for household, office, and vehicle moves.`
    },
    {
      question: `How quickly can I get a quote for ${location.city}?`,
      answer: `Our team usually responds ${location.responseTime.toLowerCase()} after we receive your basic move details, route, and service requirement.`
    },
    {
      question: `Which routes are commonly booked from ${location.city}?`,
      answer: `Popular routes include ${location.popularRoutes.join(', ')} along with custom city-to-city transport requests across India.`
    }
  ];

  return (
    <>
      <Seo
        title={`Packers & Movers in ${location.city} | ${company.shortName}`}
        description={`${intro} Get route-specific support, packing services, and quick quotes for moves from ${location.city}.`}
        path={`/locations/${location.slug}`}
      />

      <AnimatedSection className="section-pad">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <p className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-700">
              Packers & Movers in {location.city}
            </p>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
              Trusted relocation support for {location.city}, {location.state}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{intro}</p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">{serviceDescription}</p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={callLink} className="btn-primary">
                <PhoneCall className="mr-2 h-5 w-5" />
                Call for {location.city}
              </a>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-secondary">
                Get Quote on WhatsApp
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Coverage</p>
                <p className="mt-3 font-display text-2xl font-bold text-ink">{location.coverage}</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Response Time</p>
                <p className="mt-3 font-display text-2xl font-bold text-ink">{location.responseTime}</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Service City</p>
                <p className="mt-3 font-display text-2xl font-bold text-ink">{location.city}</p>
              </div>
            </div>
          </div>

          <div className="glass-card overflow-hidden p-4">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80"
                alt={`Packers and movers service in ${location.city}`}
                className="h-[280px] w-full object-cover"
              />
            </div>
            <div className="mt-6 rounded-[2rem] bg-slate-50 p-6">
              <div className="flex items-center gap-3 text-brand-700">
                <MapPin className="h-5 w-5" />
                <p className="text-sm font-bold uppercase tracking-[0.2em]">{location.state}</p>
              </div>
              <h2 className="mt-3 font-display text-2xl font-bold text-ink">{location.city} Branch Support Highlights</h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
                <p className="flex items-start gap-3">
                  <Truck className="mt-1 h-4 w-4 text-accent" />
                  Popular routes: {location.popularRoutes.join(', ')}
                </p>
                <p className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 h-4 w-4 text-accent" />
                  Core services: {location.services.join(', ')}
                </p>
                <p className="flex items-start gap-3">
                  <Clock3 className="mt-1 h-4 w-4 text-accent" />
                  Fast callback support: {location.responseTime}
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-pad bg-white/80">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading
              eyebrow={`${location.city} Services`}
              title={`What we handle in ${location.city}`}
              description={`We support city moves and long-distance relocation requests from ${location.city} with careful packing, loading discipline, and route coordination.`}
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {location.services.map((service) => (
              <div key={service} className="glass-card p-5">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-700">{location.city}</p>
                <h3 className="mt-3 font-display text-xl font-bold text-ink">{service}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Dedicated planning, protected handling, and route-ready support for {service.toLowerCase()} jobs in and around {location.city}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-pad">
        <div className="container-shell grid gap-10 lg:grid-cols-2">
          <div className="glass-card p-8">
            <SectionHeading
              eyebrow="Popular Routes"
              title={`Frequently requested moving routes from ${location.city}`}
              description={`Customers often contact us for these routes when planning a move from ${location.city}.`}
            />
            <div className="mt-8 space-y-4">
              {location.popularRoutes.map((route) => (
                <div key={route} className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-700">
                  {route}
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-8">
            <SectionHeading
              eyebrow="Process"
              title={`How we manage moves in ${location.city}`}
              description="A simple step-by-step process keeps packing, loading, transit, and delivery organized."
            />
            <div className="mt-8 space-y-4">
              {processSteps.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 font-bold text-white">
                    {index + 1}
                  </div>
                  <p className="text-sm font-semibold leading-7 text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-pad bg-white/80">
        <div className="container-shell">
          <SectionHeading
            eyebrow="FAQ"
            title={`Common questions for ${location.city} packers and movers service`}
            description={`Helpful answers for customers planning a household, office, or vehicle move from ${location.city}.`}
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {faqItems.map((item) => (
              <div key={item.question} className="glass-card p-6">
                <h3 className="font-display text-xl font-bold text-ink">{item.question}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-pad">
        <div className="container-shell">
          <div className="rounded-[2rem] bg-gradient-to-br from-ink via-brand-800 to-brand-500 p-8 text-white sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Need a quote in {location.city}?</p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold sm:text-4xl">
              Book professional movers for {location.city} with route-specific support and a fast callback.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/85">
              Share your pickup city, drop city, shifting date, and service type. Our team will help you plan the right moving solution for {location.city}.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/get-quote" className="btn-secondary">
                Request Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link to="/search-location" className="btn-outline border-white/30 text-white hover:border-white hover:text-white">
                Explore More Cities
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
