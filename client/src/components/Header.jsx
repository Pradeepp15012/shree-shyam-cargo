import { Menu, PhoneCall, X } from 'lucide-react';
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
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/85 backdrop-blur-xl">
      <div className="container-shell flex items-center justify-between gap-4 py-4">
        <Link to="/" className="min-w-0">
          <p className="font-display text-lg font-extrabold text-ink sm:text-xl">{company.shortName}</p>
          <p className="text-xs font-medium text-brand-700">{company.tagline}</p>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-semibold transition ${isActive ? 'text-brand-700' : 'text-slate-600 hover:text-brand-700'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={callLink} className="btn-outline">
            <PhoneCall className="mr-2 h-4 w-4" />
            {company.phone}
          </a>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-primary">
            Get Quote
          </a>
        </div>

        <button
          type="button"
          className="rounded-full border border-slate-200 p-2 text-slate-700 lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <div className="container-shell flex flex-col gap-4 py-4">
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
    </header>
  );
}
