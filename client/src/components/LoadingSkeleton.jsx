export default function LoadingSkeleton({ rows = 5 }) {
  return (
    <div className="glass-card space-y-4 p-6">
      {Array.from({ length: rows }).map((_, index) => (
        <div key={index} className="h-4 animate-pulse rounded-full bg-slate-200" />
      ))}
    </div>
  );
}

