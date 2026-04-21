import { MapPin, Search, ShieldCheck, TimerReset, Truck } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import Seo from '../components/Seo';
import { locationCoverage } from '../data/site';

export default function SearchLocationPage() {
  const [query, setQuery] = useState('');

  const filteredLocations = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return locationCoverage;
    }

    return locationCoverage.filter((location) => {
      const haystack = [
        location.city,
        location.state,
        location.coverage,
        ...location.popularRoutes,
        ...location.services
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [query]);

  return (
    <>
      <Seo
        title="Search by Location | Shree Shyam Cargo Packers & Movers"
        description="Search supported cities, service areas, and popular relocation routes across India."
        path="/search-location"
      />

      <AnimatedSection className="section-pad">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Search by Location"
            title="Find packers and movers service coverage by city"
            description="Search your city, route, or service type to check availability and popular relocation corridors."
            centered
          />

          <div className="mx-auto mt-10 max-w-3xl">
            <div className="glass-card flex items-center gap-3 px-4 py-3">
              <Search className="h-5 w-5 text-brand-700" />
              <input
                type="text"
                className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-slate-400"
                placeholder="Search Jaipur, Delhi, bike transport, office relocation..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
            {['Jaipur', 'Delhi', 'Mumbai', 'Pune', 'Bangalore', 'Household Shifting'].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setQuery(item)}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 font-semibold text-slate-700 transition hover:border-brand-500 hover:text-brand-700"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredLocations.map((location) => (
              <div key={location.city} className="glass-card p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-brand-700">
                      <MapPin className="h-5 w-5" />
                      <p className="text-sm font-bold uppercase tracking-[0.18em]">{location.state}</p>
                    </div>
                    <h3 className="mt-3 font-display text-2xl font-extrabold text-ink">{location.city}</h3>
                  </div>
                  <span className="rounded-full bg-brand-50 px-3 py-2 text-xs font-bold text-brand-700">
                    {location.coverage}
                  </span>
                </div>

                <div className="mt-5 space-y-3 text-sm text-slate-600">
                  <p className="flex items-center gap-2">
                    <TimerReset className="h-4 w-4 text-accent" />
                    Response time: {location.responseTime}
                  </p>
                  <p className="flex items-center gap-2">
                    <Truck className="h-4 w-4 text-accent" />
                    Popular routes: {location.popularRoutes.join(', ')}
                  </p>
                  <p className="flex items-start gap-2">
                    <ShieldCheck className="mt-0.5 h-4 w-4 text-accent" />
                    Services: {location.services.join(', ')}
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <Link to={`/locations/${location.slug}`} className="btn-primary w-full">
                    Open {location.city} Page
                  </Link>
                  <Link to="/get-quote" className="btn-outline w-full">
                    Get Quote for {location.city}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredLocations.length === 0 && (
            <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-dashed border-slate-300 bg-white/70 p-10 text-center">
              <h3 className="font-display text-2xl font-bold text-ink">No exact match found</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Try searching with a nearby city, a major route, or a service like household shifting or bike transport.
              </p>
              <button type="button" onClick={() => setQuery('')} className="btn-outline mt-6">
                Show All Locations
              </button>
            </div>
          )}
        </div>
      </AnimatedSection>
    </>
  );
}
