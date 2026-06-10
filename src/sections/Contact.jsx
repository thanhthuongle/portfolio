import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Mail } from 'lucide-react';
import { profile } from '../data/profile';
import Button from '../components/ui/Button';
import SocialLinks from '../components/ui/SocialLinks';
import { reveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-12 sm:py-316">
      <div className="container-page">
        <motion.div
          {...reveal()}
          className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-16 text-center sm:px-12"
        >
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/20 blur-[100px]" />

          <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            {t('contact.subtitle')}
          </span>

          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
            {t('contact.heading')}
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
            {t('contact.intro')}
          </p>

          <div className="mt-8 flex flex-col items-center gap-6">
            <Button href={`mailto:${profile.email}`} variant="primary">
              <Mail size={18} />
              {t('contact.emailMe')}
            </Button>

            <div className="flex flex-col items-center gap-3">
              <span className="text-sm text-muted">{t('contact.or')}</span>
              <SocialLinks />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
