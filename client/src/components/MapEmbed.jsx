import { company } from '../data/site';

export default function MapEmbed() {
  const embedUrl =
    import.meta.env.VITE_GOOGLE_MAPS_EMBED_URL ||
    `https://www.google.com/maps?q=${encodeURIComponent(company.address)}&z=14&output=embed`;
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address)}`;

  return (
    <div className="overflow-hidden rounded-3xl border border-white/50 bg-white shadow-soft">
      <iframe
        title="Business location"
        src={embedUrl}
        className="h-80 w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <div className="flex flex-col gap-3 border-t border-slate-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-ink">{company.shortName}</p>
          <p className="mt-1 text-sm text-slate-600">{company.address}</p>
        </div>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noreferrer"
          className="btn-outline w-full sm:w-auto"
        >
          Open in Google Maps
        </a>
      </div>
    </div>
  );
}
