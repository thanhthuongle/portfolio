import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLang } from '../hooks/useLang';
import { about } from '../data/about';
import { profile } from '../data/profile';
import SectionHeading from '../components/ui/SectionHeading';
import { reveal } from '../hooks/useScrollReveal';
import anim from "../assets/hero.json";
import Lottie from "lottie-react";

export default function About() {
  const { t } = useTranslation();
  const { pick } = useLang();

  return (
    <section id="about" className="py-12 sm:py-16">
      <div className="container-page">
        <SectionHeading eyebrow={t('about.subtitle')} title={t('about.heading')} />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          {/* Ảnh chân dung */}
          <motion.div {...reveal()} className="order-1 lg:order-none">
            <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-surface">
              {/* <img
                src={profile.avatar}
                alt={profile.name}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              /> */}
              <Lottie
                animationData={anim}
                loop
                className="mx-auto h-auto w-full"
                style={{ maxWidth: anim.w ? `${anim.w}px` : undefined }}
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/30 to-transparent" />
            </div>
          </motion.div>

          {/* Nội dung */}
          <motion.div {...reveal(0.1)} className="flex flex-col gap-6">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-muted">
                {pick(p)}
              </p>
            ))}

            <dl className="mt-4 grid grid-cols-3 gap-4">
              {about.stats.map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-border bg-surface p-4 text-center"
                >
                  <dt className="font-display text-3xl font-extrabold text-accent">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs text-muted">{pick(s.label)}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
