import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, Menu, X, Languages } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { profile } from '../../data/profile';

const SECTIONS = [
  // 'about',
  'education',
  'experience',
  'projects',
  'skills',
  'contact'
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleLang = () => {
    const next = i18n.language?.startsWith('en') ? 'vi' : 'en';
    i18n.changeLanguage(next);
  };

  const isDark = theme === 'dark';
  const nextLangLabel = i18n.language?.startsWith('en') ? 'VI' : 'EN';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
        ? 'border-b border-border bg-bg/80 backdrop-blur-md'
        : 'border-b border-transparent'
        }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <a
          href="#hero"
          className="font-display text-lg font-extrabold tracking-tight"
        >
          {profile.name.split(' ').slice(-1)[0]}
          <span className="text-accent">.</span>
        </a>

        {/* Menu desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {SECTIONS.map((s) => (
            <li key={s}>
              <a
                href={`#${s}`}
                className="text-sm font-medium text-muted transition-colors hover:text-fg"
              >
                {t(`nav.${s}`)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            aria-label={t('lang.switchTo')}
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-2 text-xs font-semibold text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <Languages size={15} />
            {nextLangLabel}
          </button>

          <button
            onClick={toggleTheme}
            aria-label={isDark ? t('theme.toLight') : t('theme.toDark')}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
          >
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      {open && (
        <div className="border-t border-border bg-bg/95 backdrop-blur-md md:hidden">
          <ul className="container-page flex flex-col py-4">
            {SECTIONS.map((s) => (
              <li key={s}>
                <a
                  href={`#${s}`}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-muted transition-colors hover:text-fg"
                >
                  {t(`nav.${s}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
