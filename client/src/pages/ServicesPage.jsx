import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import Seo from '../components/Seo';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/site';

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Services | Shree Shyam Cargo Packers & Movers"
        description="Explore household shifting, office relocation, loading, packing, and car or bike transport services."
        path="/services"
      />

      <AnimatedSection className="section-pad">
        <div className="container-shell">
          <div className="section-hero p-8 text-center sm:p-10">
            <SectionHeading
              eyebrow="Our Services"
              title="Professional moving solutions for every relocation need"
              description="We deliver dependable support for residential, corporate, and vehicle transportation requirements."
              centered
            />
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
