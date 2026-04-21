import { company } from '../data/site';

export default function MapEmbed() {
  const embedUrl =
    import.meta.env.VITE_GOOGLE_MAPS_EMBED_URL ||
    `https://www.google.com/maps?q=${encodeURIComponent(company.address)}&z=14&output=embed`;
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address)}`;

  return (
    <div className="premium-card overflow-hidden">
      <iframe
        title="Business location"
        src={embedUrl}
        className="h-80 w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <div className="flex flex-col gap-3 border-t border-[#ece3d8] px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-accentDark">Office Location</p>
          <p className="mt-2 font-display text-2xl font-bold text-ink">{company.shortName}</p>
          <p className="mt-1 text-sm leading-7 text-slate-600">{company.address}</p>
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
