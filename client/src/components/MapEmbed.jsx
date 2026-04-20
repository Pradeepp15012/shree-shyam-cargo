export default function MapEmbed() {
  const embedUrl = import.meta.env.VITE_GOOGLE_MAPS_EMBED_URL;

  if (!embedUrl) {
    return (
      <div className="glass-card flex min-h-80 items-center justify-center p-8 text-center text-sm text-slate-500">
        Add `VITE_GOOGLE_MAPS_EMBED_URL` to show the live business location map.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-white/50 shadow-soft">
      <iframe
        title="Business location"
        src={embedUrl}
        className="h-80 w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}

