import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLang } from '../hooks/useLang';
import { skills } from '../data/skills';
import SectionHeading from '../components/ui/SectionHeading';
import Badge from '../components/ui/Badge';
import { reveal } from '../hooks/useScrollReveal';

export default function Skills() {
  const { t } = useTranslation();
  const { pick } = useLang();

  return (
    <section id="skills" className="bg-surface/40 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading eyebrow={t('skills.subtitle')} title={t('skills.heading')} />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {skills.map((group, i) => (
            <motion.div
              key={i}
              {...reveal((i % 2) * 0.06)}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <h3 className="mb-4 font-display text-lg font-bold text-accent">
                {pick(group.category)}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <Badge key={item} className="px-4 py-1.5 text-sm">
                    {item}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
