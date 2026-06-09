// Chip nhỏ cho tag công nghệ / kỹ năng.
export default function Badge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted transition-colors hover:border-accent hover:text-accent ${className}`}
    >
      {children}
    </span>
  );
}
