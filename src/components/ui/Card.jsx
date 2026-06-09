// Thẻ khung dùng chung với viền + nền surface.
export default function Card({ children, className = '' }) {
  return (
    <div
      className={`rounded-2xl border border-border bg-surface p-6 transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}
