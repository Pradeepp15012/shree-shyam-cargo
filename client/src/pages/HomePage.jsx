import { ArrowRight, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import AnimatedSection from '../components/AnimatedSection';
import LeadForm from '../components/LeadForm';
import MapEmbed from '../components/MapEmbed';
import SectionHeading from '../components/SectionHeading';
import Seo from '../components/Seo';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import { submitLead } from '../api/api';
import { company, services, stats, testimonials, trustPoints } from '../data/site';
import { callLink, whatsappLink } from '../utils/helpers';
import { useState } from 'react';

const defaultForm = {
  name: '',
  phone: '',
  pickup: '',
  drop: '',
  date: '',
  serviceType: '',
  goodsType: '',
  message: ''
};

const heroGallery = [
  {
    src: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80',
    alt: 'Packers and movers team loading boxes into a delivery truck',
    label: 'Professional loading crew'
  },
  {
    src: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=900&q=80',
    alt: 'Packed household boxes arranged safely during a home move',
    label: 'Secure household packing'
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80',
    alt: 'Relocation truck prepared for intercity packers and movers service',
    label: 'Intercity transport ready'
  }
];

const moveMoments = [
  {
    src: 'https://images.unsplash.com/photo-1606788075761-6f5d6e63d5a0?auto=format&fit=crop&w=900&q=80',
    alt: 'Movers wrapping furniture carefully before transport',
    title: 'Furniture wrapping'
  },
  {
    src: 'https://images.unsplash.com/photo-1611419010196-a360856fc42f?auto=format&fit=crop&w=900&q=80',
    alt: 'Delivery truck on the road for interstate logistics service',
    title: 'On-road delivery'
  },
  {
    src: 'https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&w=900&q=80',
    alt: 'Warehouse style moving boxes stacked and labeled for relocation',
    title: 'Organized box handling'
  },
  {
    src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80',
    alt: 'Team member carrying packed cartons into a new home',
    title: 'Doorstep delivery support'
  }
];

const quoteVisuals = [
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80',
    alt: 'Family relocation boxes packed neatly inside a home',
    caption: 'Household shifting with careful room-by-room packing'
  },
  {
    src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
    alt: 'Commercial mover handling office cartons and business equipment',
    caption: 'Office moves planned to reduce downtime'
  }
];

export default function HomePage() {
  const [formData, setFormData] = useState(defaultForm);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      await submitLead(formData);
      toast.success('Quote request submitted successfully.');
      setFormData(defaultForm);
    } catch (error) {
      const validationMessage = error.response?.data?.errors?.[0]?.msg;
      toast.error(validationMessage || error.response?.data?.message || 'Unable to submit request.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Seo
        title="Reliable Packers & Movers Across India"
        description="Book professional relocation, packing, loading, and vehicle transport with Shree Shyam Cargo Packers & Movers."
        path="/"
      />

      <section className="relative overflow-hidden">
        <div className="container-shell grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:py-24">
          <div>
            <p className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-700">
              PAN India Relocation Experts
            </p>
            <h1 className="mt-6 max-w-3xl font-display text-5xl font-extrabold leading-tight text-ink sm:text-6xl">
              Reliable Packers & Movers for Stress-Free Relocation.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Trusted home shifting, office relocation, cargo transport, and vehicle moving services with fast response,
              safe handling, and transparent coordination.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={callLink} className="btn-primary">
                <PhoneCall className="mr-2 h-5 w-5" />
                Call Now
              </a>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-secondary">
                Get Quote on WhatsApp
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/60 bg-white/80 p-5 shadow-soft">
                  <p className="font-display text-3xl font-extrabold text-ink">{item.value}</p>
                  <p className="mt-2 text-sm text-slate-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-[1.1fr_0.9fr]">
              <div className="glass-card overflow-hidden p-3">
                <div className="relative h-[320px] overflow-hidden rounded-[2rem]">
                  <img
                    src={heroGallery[0].src}
                    alt={heroGallery[0].alt}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent p-5 text-white">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Live Moving Operations</p>
                    <p className="mt-2 font-display text-2xl font-bold">{heroGallery[0].label}</p>
                  </div>
                </div>
              </div>
              <div className="grid gap-5">
                {heroGallery.slice(1).map((image) => (
                  <div key={image.label} className="glass-card overflow-hidden p-3">
                    <div className="relative h-[148px] overflow-hidden rounded-[1.75rem]">
                      <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                      <p className="absolute bottom-4 left-4 right-4 font-display text-lg font-bold text-white">{image.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card p-4 sm:p-6">
              <div className="rounded-[2rem] bg-gradient-to-br from-ink via-brand-800 to-brand-500 p-8 text-white">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Instant Support</p>
                <h2 className="mt-4 font-display text-3xl font-bold">Move smarter with a team that plans every detail.</h2>
                <ul className="mt-6 space-y-4 text-sm text-white/85">
                  <li>Premium packing materials and careful handling</li>
                  <li>Dedicated move coordination and tracking updates</li>
                  <li>Affordable intercity and local shifting packages</li>
                </ul>
                <Link to="/get-quote" className="btn-secondary mt-8 w-full">
                  Start Your Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="section-pad">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Services"
            title="Everything you need for a smooth move"
            description="From home relocation to vehicle transport, our team handles every step with speed and care."
            centered
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-pad pt-0">
        <div className="container-shell">
          <div className="glass-card overflow-hidden p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-700">Moving In Action</p>
                <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
                  Real visuals that match the services customers expect from a moving company
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-slate-600">
                Packing, loading, transport, and doorstep delivery visuals help visitors instantly understand that this is a genuine packers and movers service.
              </p>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {moveMoments.map((image) => (
                <div key={image.title} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
                  <img src={image.src} alt={image.alt} className="h-64 w-full object-cover" />
                  <div className="p-5">
                    <p className="font-display text-xl font-bold text-ink">{image.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-pad bg-white/80">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Built for reliability, speed, and trust"
              description="Our process is tuned for lead response, secure packing, transparent communication, and timely delivery."
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {trustPoints.map(({ title, icon: Icon }) => (
              <div key={title} className="glass-card flex items-center gap-4 p-5">
                <div className="rounded-2xl bg-accent/15 p-3 text-accent">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="font-display text-lg font-bold text-ink">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-pad">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Testimonials"
            title="Customers trust us with important moves"
            description="Real stories from clients who relied on us for home, office, and vehicle shifting."
            centered
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <TestimonialCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-pad bg-white/80">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <SectionHeading
              eyebrow="Quick Quote"
              title="Request a callback in minutes"
              description="Share your move details and our team will contact you with the best price and schedule."
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {quoteVisuals.map((image) => (
                <div key={image.caption} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
                  <img src={image.src} alt={image.alt} className="h-56 w-full object-cover" />
                  <p className="p-4 text-sm font-semibold leading-7 text-slate-700">{image.caption}</p>
                </div>
              ))}
            </div>
          </div>
          <LeadForm
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
            loading={loading}
            submitLabel="Request Quick Quote"
            serviceOptions={services.map((service) => service.title)}
          />
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-pad">
        <div className="container-shell">
          <div className="glass-card overflow-hidden p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <SectionHeading
                  eyebrow="Service Areas"
                  title="Serving local and interstate moves across India"
                  description="Popular routes include Jaipur, Delhi, Gurgaon, Noida, Mumbai, Pune, Ahmedabad, Hyderabad, Bengaluru, and more."
                />
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {['Jaipur', 'Delhi NCR', 'Pune', 'Mumbai', 'Ahmedabad', 'Bengaluru'].map((city) => (
                    <div key={city} className="rounded-2xl bg-slate-100 px-4 py-3 text-sm font-semibold text-ink shadow-sm">
                      {city}
                    </div>
                  ))}
                </div>
              </div>
              <MapEmbed />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
