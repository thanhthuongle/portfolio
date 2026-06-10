import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { reveal } from '../hooks/useScrollReveal';
import { skills as techStack } from '../data/skills';

const tabs = [
  { key: 'all', label: 'All' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'database', label: 'Database' },
  { key: 'devops', label: 'DevOps' },
  { key: 'tools', label: 'Tools' },
  // { key: 'others', label: 'Others' },
];

function TechIcon({ skill }) {
  const baseClassName = `h-12 w-12 object-contain ${skill.iconClassName ?? ''}`;

  if (skill.icon) {
    return <img src={skill.icon} alt="" className={baseClassName} loading="lazy" />;
  }

  return (
    <span className="font-display text-4xl font-medium leading-none text-fg">
      {skill.fallback}
    </span>
  );
}

function LevelDots({ level, color }) {
  return (
    <div className="mt-3 flex justify-center gap-2">
      {Array.from({ length: 6 }).map((_, index) => (
        <span
          key={index}
          className={`h-2 w-2 rounded-full ${index < level ? color : 'bg-border'}`}
        />
      ))}
    </div>
  );
}

export default function Skills() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('all');

  const visibleSkills = useMemo(() => {
    if (activeTab === 'all') return techStack;
    return techStack.filter((skill) => skill.category.includes(activeTab));
  }, [activeTab]);

  return (
    <section id="skills" className="bg-surface/40 py-12 sm:py-16">
      <div className="container-page">
        <motion.div
          {...reveal()}
          className="overflow-hidden rounded-lg border border-border  p-6 shadow-2xl bg-surface shadow-fg/5 sm:p-8 border-slate-700/70 dark:bg-[#0d1424] dark:shadow-slate-950/30"
        >
          <div className="grid gap-6 md:grid-cols-[1.1fr_1.8fr_auto] md:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Tech Stack
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold leading-tight text-fg sm:text-3xl">
                {t('skills.heading')}
              </h2>
            </div>

            <p className="border-border text-sm leading-6 text-muted md:border-l md:pl-8">
              A collection of technologies and tools I use to build amazing digital products.
            </p>

            <div className="flex items-center gap-3 rounded-xl border border-border bg-bg px-4 py-3 md:flex-col md:items-start md:gap-0.5">
              <span className="font-display text-3xl font-extrabold leading-none text-accent">
                {techStack.length}+
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
                Technologies
              </span>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;

              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`h-9 rounded-lg px-5 text-xs font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface ${isActive
                    ? 'bg-accent text-white shadow-lg shadow-accent/30'
                    : 'bg-bg text-muted ring-1 ring-border hover:text-fg hover:ring-accent/60'
                    }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <motion.div
            layout
            className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8"
          >
            {visibleSkills.map((skill, index) => (
              <motion.article
                layout
                key={skill.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.02, duration: 0.25 }}
                className="flex min-h-[126px] flex-col items-center justify-center rounded-lg border border-border bg-bg px-3 py-4 text-center shadow-lg shadow-fg/5 transition hover:translate-y-1 hover:border-accent/60 dark:border-slate-800 dark:bg-[#171f31] dark:shadow-slate-950/20 dark:hover:border-indigo-400/60 dark:hover:bg-[#1b263a]"
              >
                <TechIcon skill={skill} />
                <h3 className="mt-3 text-sm font-semibold text-fg">{skill.name}</h3>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div >
    </section >
  );
}
