import { MapPin, Menu, PhoneCall, ShieldCheck, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { company } from '../data/site';
import { callLink, whatsappLink } from '../utils/helpers';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
  { label: 'Get Quote', to: '/get-quote' }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] border border-white/60 bg-white/80 shadow-soft backdrop-blur-xl">
        <div className="hidden items-center justify-between border-b border-[#ece3d8] px-6 py-3 lg:flex">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-slate-500">
            <span className="inline-flex items-center gap-2 text-accentDark">
              <ShieldCheck className="h-4 w-4" />
              Verified Moving Network
            </span>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Jaipur HQ, Pan India Coverage
            </span>
          </div>
          <a href={callLink} className="text-sm font-semibold text-slate-700 transition hover:text-brand-700">
            {company.phone}
          </a>
        </div>

        <div className="container-shell flex items-center justify-between gap-4 py-4">
          <Link to="/" className="min-w-0">
            <p className="font-display text-2xl font-bold leading-none text-ink sm:text-3xl">{company.shortName}</p>
            <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.22em] text-accentDark">{company.tagline}</p>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative text-sm font-semibold transition ${isActive ? 'text-brand-700' : 'text-slate-600 hover:text-brand-700'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={callLink} className="btn-outline">
              <PhoneCall className="mr-2 h-4 w-4" />
              Call Now
            </a>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-primary">
              Get Quote
            </a>
          </div>

          <button
            type="button"
            className="rounded-full border border-[#ddd1c4] bg-white/80 p-2 text-slate-700 lg:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-[#ece3d8] bg-white/90 lg:hidden">
            <div className="container-shell flex flex-col gap-4 py-5">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-semibold text-slate-700"
                >
                  {item.label}
                </NavLink>
              ))}
              <a href={callLink} className="btn-outline">
                Call Now
              </a>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-primary">
                Get Quote on WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
