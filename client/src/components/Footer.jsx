import {
  ArrowRight,
  Clock3,
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Truck,
  Twitter,
  Youtube
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { aboutSectionLinks } from '../data/aboutSections';
import { company, services } from '../data/site';
import { callLink, whatsappLink } from '../utils/helpers';

const helpLinks = [
  { label: "FAQ's", to: '/contact' },
  { label: 'Consignment Tracking Help', to: '/contact' },
  { label: 'Expert Advice', to: '/contact' },
  { label: "Do's and Don'ts", to: '/services' },
  { label: 'Customer Care', to: '/contact' },
  { label: 'Moving Checklist', to: '/get-quote' }
];

const serviceLinks = [
  { label: 'Domestic Moving', to: '/services' },
  { label: 'Office Relocation', to: '/services' },
  { label: 'International Moving Support', to: '/services' },
  { label: 'Car Carriers', to: '/services' },
  { label: 'Transportation', to: '/services' },
  { label: 'IT Relocation', to: '/services' },
  { label: 'Supply Chain Management', to: '/services' },
  { label: 'Infrastructure Handling', to: '/services' }
];

const moveCategories = [
  { label: 'Exhibition Moves', to: '/services' },
  { label: 'Office Move', to: '/services' },
  { label: 'Machinery Moves', to: '/services' },
  { label: 'Laboratory Moves', to: '/services' },
  { label: 'Defence Services', to: '/services' },
  { label: 'Bank Staff Moving', to: '/services' },
  { label: 'Data Center Relocation', to: '/services' },
  { label: 'Government Employee Moving', to: '/services' }
];

const otherLinks = [
  { label: 'Shifting Process', to: '/services' },
  { label: 'Video Testimonials', to: '/' },
  { label: 'Customer Feedback', to: '/contact' },
  { label: 'Safety Features', to: '/about' },
  { label: 'Freight Forwarding Service', to: '/services' },
  { label: 'Warehouse Support', to: '/services' },
  { label: 'Home Storage', to: '/services' },
  { label: 'Quick Quote', to: '/get-quote' }
];

const socialLinks = [
  { label: 'Facebook', href: '#', icon: Facebook },
  { label: 'Twitter', href: '#', icon: Twitter },
  { label: 'LinkedIn', href: '#', icon: Linkedin },
  { label: 'YouTube', href: '#', icon: Youtube }
];

function FooterList({ title, links }) {
  return (
    <div>
      <h3 className="font-display text-xl font-bold text-white">{title}</h3>
      <div className="mt-5 grid gap-3 text-sm text-slate-200">
        {links.map((item) => (
          <Link key={item.label} to={item.to} className="transition hover:text-white">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#cdb8a4] bg-[#10192c] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,140,69,0.16),transparent_26%),radial-gradient(circle_at_90%_15%,rgba(41,112,214,0.18),transparent_28%)]" />

      <div className="relative border-b border-white/10">
        <div className="container-shell py-12">
          <div className="premium-dark p-8 sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f0cda8]">Need Movers Fast?</p>
                <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
                  Plan your move with a team that handles packing, transport, and delivery end to end.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-8 text-white/80">
                  Get quick support for household shifting, office relocation, vehicle transport, storage, and intercity moving across India.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href={callLink} className="btn-secondary">
                  <PhoneCall className="mr-2 h-4 w-4" />
                  Call Now
                </a>
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-primary bg-white text-ink hover:bg-slate-100">
                  WhatsApp Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative container-shell py-16">
        <div className="grid gap-10 xl:grid-cols-[1fr_1fr_1fr_1fr_1fr_1.2fr]">
          <FooterList title="About Us" links={aboutSectionLinks} />
          <FooterList title="Need Help ?" links={helpLinks} />
          <FooterList title="Services" links={serviceLinks} />
          <FooterList title="Move Categories" links={moveCategories} />
          <FooterList title="Other Links" links={otherLinks} />

          <div>
            <h3 className="font-display text-3xl font-bold text-white">Contact</h3>
            <div className="mt-6 space-y-4 text-sm text-slate-100">
              <a href={callLink} className="flex items-start gap-3 transition hover:text-white">
                <PhoneCall className="mt-0.5 h-4 w-4 text-white/80" />
                <span className="text-3xl font-extrabold tracking-tight">{company.phone}</span>
              </a>
              <a href={`mailto:${company.email}`} className="flex items-start gap-3 transition hover:text-white">
                <Mail className="mt-0.5 h-4 w-4 text-white/80" />
                <span>{company.email}</span>
              </a>
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-white/80" />
                <span>{company.address}</span>
              </p>
              <p className="flex items-start gap-3">
                <Clock3 className="mt-0.5 h-4 w-4 text-white/80" />
                <span>24/7 customer care for urgent relocation support</span>
              </p>
              <p className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-4 w-4 text-white/80" />
                <span>{services.length} core moving solutions with trained handling support</span>
              </p>
            </div>

            {/* <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[#f0cda8]">
                <Truck className="h-4 w-4" />
                Secure Storage
              </p>
              <p className="mt-3 text-sm leading-8 text-white/80">
                Warehouse support, short-term holding, and home storage options available for selected routes.
              </p>
              <Link to="/services" className="mt-4 inline-flex items-center text-sm font-bold text-white transition hover:text-white/80">
                Explore Service Options
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div> */}
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-[#0c1424]">
        <div className="container-shell flex flex-col gap-6 py-6 xl:flex-row xl:items-center xl:justify-between">
          <div className="max-w-4xl text-sm leading-8 text-white/80">
            <p>
              {company.name} provides reliable relocation support, professional packing, vehicle transport, office shifting, and moving assistance across major Indian cities with route-focused service planning.
            </p>
            <p className="mt-3">© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          </div>

          <div className="flex flex-col gap-5 lg:min-w-[420px] xl:items-end">
            <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-white xl:justify-end">
              <Link
                to="/contact"
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 transition hover:bg-white/10 hover:text-white"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 transition hover:bg-white/10 hover:text-white"
              >
                Privacy Policy
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-3 xl:justify-end">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:-translate-y-0.5 hover:border-[#f0cda8] hover:bg-white/20"
                  title={label}
                >
                  <Icon className="h-4 w-4 transition group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
