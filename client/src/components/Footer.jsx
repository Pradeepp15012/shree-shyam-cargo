import { ArrowRight, Clock3, MapPin, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import { company, createLocationSlug, services } from '../data/site';
import { callLink, whatsappLink } from '../utils/helpers';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Locations', to: '/search-location' },
  { label: 'Contact', to: '/contact' },
  { label: 'Get Quote', to: '/get-quote' }
];

const featuredCities = ['Jaipur', 'Delhi', 'Mumbai', 'Pune', 'Ahmedabad', 'Hyderabad'];

export default function Footer() {
  return (
    <footer className="border-t border-white/70 bg-ink text-white">
      <div className="border-b border-white/10">
        <div className="container-shell py-10">
          <div className="rounded-[2rem] bg-gradient-to-r from-brand-700 via-brand-600 to-accent p-8 text-ink shadow-soft">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-ink/75">Need Movers Fast?</p>
                <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
                  Plan your move with a team that handles packing, transport, and delivery end to end.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-ink/80">
                  Get quick support for home shifting, office relocation, car and bike transport, and intercity moving across India.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href={callLink} className="btn-primary bg-ink hover:bg-slate-900">
                  <PhoneCall className="mr-2 h-4 w-4" />
                  Call Now
                </a>
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-secondary">
                  WhatsApp Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-shell grid gap-10 py-14 md:grid-cols-2 xl:grid-cols-[1.15fr_0.8fr_0.9fr_1fr]">
        <div>
          <p className="font-display text-2xl font-extrabold">{company.name}</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
            Trusted packers and movers for local and long-distance relocation, cargo handling, and vehicle transport across India.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Support</p>
              <p className="mt-2 text-sm font-semibold text-white">Fast callbacks for moving quotes</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Coverage</p>
              <p className="mt-2 text-sm font-semibold text-white">Local, intercity, and interstate routes</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold">Quick Links</h3>
          <div className="mt-4 grid gap-3 text-sm text-slate-300">
            {quickLinks.map((item) => (
              <Link key={item.to} to={item.to} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold">Core Services</h3>
          <div className="mt-4 grid gap-3 text-sm text-slate-300">
            {services.map((service) => (
              <Link key={service.title} to="/services" className="transition hover:text-white">
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold">Contact & Cities</h3>
          <div className="mt-4 space-y-4 text-sm text-slate-300">
            <a href={callLink} className="flex items-start gap-3 transition hover:text-white">
              <PhoneCall className="mt-0.5 h-4 w-4 text-accent" />
              <span>{company.phone}</span>
            </a>
            <p className="flex items-start gap-3">
              <Clock3 className="mt-0.5 h-4 w-4 text-accent" />
              <span>24/7 assistance for urgent relocation needs</span>
            </p>
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-accent" />
              <span>{company.address}</span>
            </p>
            <a href={`mailto:${company.email}`} className="block transition hover:text-white">
              {company.email}
            </a>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center text-accent transition hover:text-white">
              WhatsApp Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <div className="pt-2">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Popular Cities</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {featuredCities.map((city) => (
                  <Link
                    key={city}
                    to={`/locations/${createLocationSlug(city)}`}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:border-accent hover:text-white"
                  >
                    {city}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-3 py-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>{services.length} core moving solutions for homes, offices, and vehicles.</p>
        </div>
      </div>
    </footer>
  );
}
