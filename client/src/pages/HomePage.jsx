import { ArrowRight, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import AnimatedSection from '../components/AnimatedSection';
import DistanceEstimator from '../components/DistanceEstimator';
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
            <div className="mt-8">
              <DistanceEstimator />
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
