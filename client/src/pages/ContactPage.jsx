import { useState } from 'react';
import toast from 'react-hot-toast';
import AnimatedSection from '../components/AnimatedSection';
import LeadForm from '../components/LeadForm';
import MapEmbed from '../components/MapEmbed';
import SectionHeading from '../components/SectionHeading';
import Seo from '../components/Seo';
import { submitLead } from '../api/api';
import { company, services } from '../data/site';
import { callLink, whatsappLink } from '../utils/helpers';

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

export default function ContactPage() {
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
      toast.success('Your contact request has been sent.');
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
        title="Contact | Shree Shyam Cargo Packers & Movers"
        description="Contact Shree Shyam Cargo Packers & Movers for a fast quote, business location, and direct call or WhatsApp support."
        path="/contact"
      />

      <AnimatedSection className="section-pad">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Talk to our relocation support team"
              description="Reach us by phone, WhatsApp, or the form below for pricing, route guidance, and availability."
            />
            <div className="mt-8 space-y-4">
              <a href={callLink} className="btn-primary w-full sm:w-auto">
                Click to Call
              </a>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-secondary w-full sm:w-auto">
                WhatsApp Chat
              </a>
              <div className="glass-card p-6">
                <p className="font-semibold text-ink">{company.phone}</p>
                <p className="mt-2 text-sm text-slate-600">{company.email}</p>
                <p className="mt-2 text-sm text-slate-600">{company.address}</p>
              </div>
            </div>
          </div>
          <LeadForm
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
            loading={loading}
            submitLabel="Send Contact Request"
            serviceOptions={services.map((service) => service.title)}
          />
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-pad bg-white/80">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Location"
            title="Visit or locate our office"
            description="Embed this map with your real Google Maps business location before deployment."
          />
          <div className="mt-10">
            <MapEmbed />
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
