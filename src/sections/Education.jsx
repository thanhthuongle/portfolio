import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { GraduationCap } from 'lucide-react';
import { useLang } from '../hooks/useLang';
import { education } from '../data/education';
import SectionHeading from '../components/ui/SectionHeading';
import { reveal } from '../hooks/useScrollReveal';

export default function Education() {
  const { t } = useTranslation();
  const { pick } = useLang();

  return (
    <section id="education" className="py-12 sm:py-16">
      <div className="container-page">
        <SectionHeading eyebrow={t('education.subtitle')} title={t('education.heading')} />

        <div className="mt-14 border-l border-border pl-8 sm:pl-10">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              {...reveal(i * 0.05)}
              className="relative pb-12 last:pb-0"
            >
              <span className="absolute -left-[42px] flex h-7 w-7 items-center justify-center rounded-full border border-border bg-surface text-accent sm:-left-[50px]">
                <GraduationCap size={15} />
              </span>

              <span className="text-sm font-medium text-accent">{edu.period}</span>
              <h3 className="mt-1 font-display text-xl font-bold">{pick(edu.school)}</h3>
              <p className="mt-0.5 font-medium text-muted">{pick(edu.degree)}</p>
              {/* <p className="mt-3 max-w-2xl leading-relaxed text-muted">
                {pick(edu.description)}
              </p> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
