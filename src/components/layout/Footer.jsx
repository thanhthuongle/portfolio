import { useTranslation } from 'react-i18next';
import { ArrowUp } from 'lucide-react';
import { profile } from '../../data/profile';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container-page flex flex-col items-center justify-between gap-4 py-10 sm:flex-row">
        <div className="text-center text-sm text-muted sm:text-left">
          <p>
            © {year} {profile.name}. {t('footer.rights')}
          </p>
          <p className="mt-1 text-xs">{t('footer.builtWith')}</p>
        </div>

        <a
          href="#hero"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
        >
          {t('footer.backToTop')}
          <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
}
