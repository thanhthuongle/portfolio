// Nút dùng chung, render thành <a> hoặc <button> tùy có prop `href`.
const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50';

const variants = {
  primary:
    'bg-accent text-white hover:opacity-90 hover:-translate-y-0.5 shadow-lg shadow-accent/20',
  outline:
    'border border-border text-fg hover:border-accent hover:text-accent hover:-translate-y-0.5',
  ghost: 'text-muted hover:text-fg',
};

export default function Button({
  variant = 'primary',
  href,
  children,
  className = '',
  ...props
}) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
