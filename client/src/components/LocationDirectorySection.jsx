import { ArrowRight, Building2, MapPinned, Search, Truck } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { createLocationSlug, locationColumns } from '../data/site';

const featuredCities = ['Jaipur', 'Delhi', 'Mumbai', 'Pune', 'Ahmedabad', 'Hyderabad'];
const summaryItems = [
  { icon: MapPinned, label: '80+ Service Locations' },
  { icon: Truck, label: 'Local + Intercity Routes' },
  { icon: Building2, label: 'Home, Office, Vehicle Moves' }
];

const formatLocationLabel = (city) =>
  city === 'Navimumbai'
    ? 'Navi Mumbai'
    : city === 'Greaternoida'
      ? 'Greater Noida'
      : city === 'Portblair'
        ? 'Port Blair'
        : city;

export default function LocationDirectorySection() {
  const [query, setQuery] = useState('');

  const normalizedQuery = query.trim().toLowerCase();
  const allLocations = useMemo(
    () =>
      locationColumns.flat().map((city) => ({
        rawCity: city,
        label: formatLocationLabel(city)
      })),
    []
  );

  const filteredFlatLocations = useMemo(() => {
    if (!normalizedQuery) {
      return allLocations;
    }

    return allLocations.filter((location) => location.label.toLowerCase().includes(normalizedQuery));
  }, [allLocations, normalizedQuery]);

  const desktopColumns = useMemo(() => {
    if (!normalizedQuery) {
      return locationColumns.map((column) =>
        column.map((city) => ({
          rawCity: city,
          label: formatLocationLabel(city)
        }))
      );
    }

    const chunkSize = Math.ceil(filteredFlatLocations.length / 5) || 1;

    return Array.from({ length: 5 }, (_, index) =>
      filteredFlatLocations.slice(index * chunkSize, (index + 1) * chunkSize)
    ).filter((column) => column.length > 0);
  }, [filteredFlatLocations, normalizedQuery]);

  return (
    <AnimatedSection className="section-pad border-t border-white/70 bg-gradient-to-b from-white/80 to-[#fff8ef]">
      <div className="container-shell">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Search By Location"
            title="Find packers and movers service city-wise across India"
            description="Every listed location opens its own city page with service details, routes, moving support information, and quote actions."
          />
          <Link to="/search-location" className="btn-outline shrink-0">
            View All Location Pages
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] bg-gradient-to-br from-ink via-brand-800 to-brand-500 p-6 text-white shadow-soft sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Location Coverage</p>
            <h3 className="mt-4 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
              Choose your city and land directly on a dedicated movers service page.
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/85">
              These city links are placed just above the footer on all pages, so visitors can quickly jump into the right location-specific service page from anywhere on the site.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {summaryItems.map(({ icon: Icon, label }) => (
                <div key={label} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                  <Icon className="h-4 w-4 text-accent" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {featuredCities.map((city) => (
              <Link
                key={city}
                to={`/locations/${createLocationSlug(city)}`}
                className="group rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-brand-300"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-700">Featured City</p>
                <h3 className="mt-3 font-display text-2xl font-bold text-ink">{city}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Open the dedicated {city} page for routes, service details, FAQs, and quick quote actions.
                </p>
                <span className="mt-5 inline-flex items-center text-sm font-bold text-brand-700">
                  Open City Page
                  <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
          <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-700">All Service Cities</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-ink">Packers & Movers city directory</h3>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-600">
              Click any city below to open its detailed page. This section stays available before the footer on every page for easier navigation.
            </p>
          </div>
          <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 sm:p-5">
            <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm">
              <Search className="h-5 w-5 text-brand-700" />
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search city name like Jaipur, Delhi, Mumbai..."
                className="w-full bg-transparent text-sm font-medium text-ink outline-none placeholder:text-slate-400"
              />
            </div>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              {normalizedQuery ? `${filteredFlatLocations.length} matching locations found` : `${allLocations.length} total locations available`}
            </p>
          </div>
          {filteredFlatLocations.length > 0 ? (
            <>
              <div className="mt-6 grid gap-3 md:hidden">
                {filteredFlatLocations.map(({ rawCity, label }) => (
                  <Link
                    key={rawCity}
                    to={`/locations/${createLocationSlug(rawCity)}`}
                    className="group flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold leading-7 text-slate-700 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-slate-400 transition group-hover:bg-brand-600" />
                    <span>Packers & Movers {label}</span>
                  </Link>
                ))}
              </div>

              <div className="hidden gap-x-10 gap-y-4 md:grid md:grid-cols-2 xl:grid-cols-5">
                {desktopColumns.map((column, columnIndex) => (
              <ul key={columnIndex} className="mt-6 space-y-3">
                {column.map(({ rawCity, label }) => {
                  return (
                    <li key={rawCity}>
                      <Link
                        to={`/locations/${createLocationSlug(rawCity)}`}
                        className="group inline-flex items-start gap-3 rounded-2xl px-2 py-1 text-sm font-semibold leading-7 text-slate-600 transition hover:bg-brand-50 hover:text-brand-700"
                      >
                        <span className="mt-2 h-2 w-2 rounded-full bg-slate-400 transition group-hover:bg-brand-600" />
                        <span>Packers & Movers {label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
                ))}
              </div>
            </>
          ) : (
            <div className="mt-6 rounded-[1.75rem] border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
              <h4 className="font-display text-2xl font-bold text-ink">No city matched your search</h4>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Try searching with another city name like Jaipur, Delhi, Pune, Ahmedabad, or Mumbai.
              </p>
            </div>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
}
