import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-700">404</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold text-ink">Page not found</h1>
        <Link to="/" className="btn-primary mt-6">
          Go Home
        </Link>
      </div>
    </div>
  );
}

