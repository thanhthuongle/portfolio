import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Briefcase } from 'lucide-react';
import { useLang } from '../hooks/useLang';
import { experience } from '../data/experience';
import SectionHeading from '../components/ui/SectionHeading';
import Badge from '../components/ui/Badge';
import { reveal } from '../hooks/useScrollReveal';

export default function Experience() {
  const { t } = useTranslation();
  const { pick } = useLang();

  return (
    <section id="experience" className="bg-surface/40 py-12 sm:py-16">
      <div className="container-page">
        <SectionHeading eyebrow={t('experience.subtitle')} title={t('experience.heading')} />

        <div className="mt-14 border-l border-border pl-8 sm:pl-10">
          {experience.map((job, i) => (
            <motion.div
              key={i}
              {...reveal(i * 0.05)}
              className="relative pb-12 last:pb-0"
            >
              <span className="absolute -left-[42px] flex h-7 w-7 items-center justify-center rounded-full border border-border bg-surface text-accent sm:-left-[50px]">
                <Briefcase size={14} />
              </span>

              <span className="text-sm font-medium text-accent">{job.period}</span>
              <h3 className="mt-1 font-display text-xl font-bold">{pick(job.role)}</h3>
              <p className="mt-0.5 font-medium text-muted">{pick(job.company)}</p>
              <ul className="mt-3  list-disc space-y-1.5 pl-5 leading-relaxed text-muted">
                {pick(job.description)
                  .split('\n')
                  .map((line) => line.replace(/^\s*-\s*/, '').trim())
                  .filter(Boolean)
                  .map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
              </ul>

              {job.tech?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tech.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
