import { ArrowRight, Building2, MapPinned, Search, Truck } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
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
  const [isMobile, setIsMobile] = useState(false);
  const [showAllMobile, setShowAllMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const syncMobileState = (event) => {
      setIsMobile(event.matches);
    };

    syncMobileState(mediaQuery);

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', syncMobileState);
      return () => mediaQuery.removeEventListener('change', syncMobileState);
    }

    mediaQuery.addListener(syncMobileState);
    return () => mediaQuery.removeListener(syncMobileState);
  }, []);

  const normalizedQuery = query.trim().toLowerCase();
  const allLocations = useMemo(
    () =>
      locationColumns.flat().map((city) => ({
        rawCity: city,
        label: formatLocationLabel(city),
      })),
    [],
  );

  const filteredFlatLocations = useMemo(() => {
    if (!normalizedQuery) {
      return allLocations;
    }

    return allLocations.filter((location) => location.label.toLowerCase().includes(normalizedQuery));
  }, [allLocations, normalizedQuery]);

  useEffect(() => {
    setShowAllMobile(false);
  }, [normalizedQuery]);

  const visibleLocations = useMemo(() => {
    if (!isMobile || showAllMobile || normalizedQuery) {
      return filteredFlatLocations;
    }

    return filteredFlatLocations.slice(0, 12);
  }, [filteredFlatLocations, isMobile, normalizedQuery, showAllMobile]);

  const hiddenLocationCount = filteredFlatLocations.length - visibleLocations.length;

  return (
    <AnimatedSection className="section-pad border-t border-[#171616] bg-gradient-to-b from-[#f0ece8] via-[#fff7ef] to-[#f4ede3]">
      <div className="container-shell">
        <div className="flex flex-col gap-1 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Search By Location"
            title="Find packers and movers service city-wise across India"
            description="Every listed location opens its own city page with service details, routes, moving support information, and quote actions."
          />
          
        </div>

        <div className="mt-8 grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="premium-dark self-start p-6 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ffe2b8]">Location Coverage</p>
            <h3 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight sm:text-5xl">
              Choose your city and land directly on a dedicated movers service page.
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-8 text-white/85">
              These city links are placed just above the footer on all pages, so visitors can quickly jump into the right location-specific service page from anywhere on the site.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {summaryItems.map(({ icon: Icon, label }) => (
                <div key={label} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                  <Icon className="h-4 w-4 text-[#ffe2b8]" />
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
                className="premium-card group p-5 transition hover:-translate-y-1 hover:border-[#d58d61]"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a3562b]">Featured City</p>
                <h3 className="mt-3 font-display text-2xl font-bold text-ink sm:text-3xl">{city}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 sm:leading-8">
                  Open the dedicated {city} page for routes, service details, FAQs, and quick quote actions.
                </p>
                <span className="mt-5 inline-flex items-center text-sm font-bold text-[#a3562b]">
                  Open City Page
                  <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="premium-card mt-10 p-6 sm:p-8">
          <div className="flex flex-col gap-4 border-b border-[#ecd9c7] pb-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a3562b]">All Service Cities</p>
              <h3 className="mt-2 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">Packers & Movers city directory</h3>
            </div>
            <p className="max-w-2xl text-sm leading-8 text-slate-600">
              Click any city below to open its detailed page. This section stays available before the footer on every page for easier navigation.
            </p>
          </div>
          <div className="mt-6 rounded-[1.5rem] border border-[#ecd9c7] bg-[#fbf2e8] p-4 sm:p-5">
            <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm">
              <Search className="h-5 w-5 text-[#a3562b]" />
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
              <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
                {visibleLocations.map(({ rawCity, label }) => (
                  <Link
                    key={rawCity}
                    to={`/locations/${createLocationSlug(rawCity)}`}
                    className="group flex items-start gap-1 px-1 -py-1 text-sm font-semibold leading-7 text-slate-700 transition hover:-translate-y-0.5 hover:border-[#d58d61] hover:bg-[#fff0e0] hover:text-[#9f4f2b]"
                  >
                    <span className="mt-1 h-1 w-1 rounded-full bg-[#c7a38a] transition group-hover:bg-[#b85c32]" />
                    <span>Packers & Movers {label}</span>
                  </Link>
                ))}
              </div>
              {isMobile && !normalizedQuery && hiddenLocationCount > 0 && (
                <button
                  type="button"
                  onClick={() => setShowAllMobile((prev) => !prev)}
                  className="btn-outline mt-6 w-full sm:w-auto"
                >
                  {showAllMobile ? 'Show Fewer Cities' : `Show ${hiddenLocationCount} More Cities`}
                </button>
              )}
            </>
          ) : (
            <div className="mt-6 rounded-[1.75rem] border border-dashed border-[#d8b9a0] bg-[#fbf2e8] p-8 text-center">
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
