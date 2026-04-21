import { useState } from 'react';
import toast from 'react-hot-toast';
import AnimatedSection from '../components/AnimatedSection';
import LeadForm from '../components/LeadForm';
import SectionHeading from '../components/SectionHeading';
import Seo from '../components/Seo';
import { submitLead } from '../api/api';
import { services } from '../data/site';

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

export default function GetQuotePage() {
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
      toast.success('Quote request saved successfully.');
      setFormData(defaultForm);
    } catch (error) {
      const validationMessage = error.response?.data?.errors?.[0]?.msg;
      toast.error(validationMessage || error.response?.data?.message || 'Unable to submit quote.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Seo
        title="Get Quote | Shree Shyam Cargo Packers & Movers"
        description="Request a detailed moving quote with pickup, drop, date, and item details."
        path="/get-quote"
      />

      <AnimatedSection className="section-pad">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="section-hero p-8 sm:p-10">
            <SectionHeading
              eyebrow="Get Quote"
              title="Share your move details and receive a fast estimate"
              description="Provide pickup, destination, shifting date, and item details so our team can prepare the right moving plan."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {['Route planning assistance', 'Packing material guidance', 'Transparent price discussion', 'Fast callback support'].map((item) => (
                <div key={item} className="rounded-2xl border border-[#e3d6c7] bg-white/80 px-4 py-4 text-sm font-semibold text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <LeadForm
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
            loading={loading}
            submitLabel="Submit Detailed Quote"
            showRouteFields
            serviceOptions={services.map((service) => service.title)}
          />
        </div>
      </AnimatedSection>
    </>
  );
}
