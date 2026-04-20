import { Link } from 'react-router-dom';
import { company, services } from '../data/site';
import { callLink, whatsappLink } from '../utils/helpers';

export default function Footer() {
  return (
    <footer className="border-t border-white/70 bg-ink text-white">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-[1.3fr_0.8fr_0.8fr]">
        <div>
          <p className="font-display text-2xl font-extrabold">{company.name}</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
            Trusted packers and movers for local and long-distance relocation, cargo handling, and vehicle transport
            across India.
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold">Quick Links</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold">Contact</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
            <a href={callLink}>{company.phone}</a>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <p>{company.address}</p>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="text-accent">
              WhatsApp Us
            </a>
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

