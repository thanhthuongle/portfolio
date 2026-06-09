import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, Github } from 'lucide-react';
import { useLang } from '../hooks/useLang';
import { projects } from '../data/projects';
import SectionHeading from '../components/ui/SectionHeading';
import Badge from '../components/ui/Badge';
import { reveal } from '../hooks/useScrollReveal';

function ProjectCard({ project, index }) {
  const { t } = useTranslation();
  const { pick } = useLang();

  return (
    <motion.article
      {...reveal((index % 2) * 0.08)}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/10 ${project.featured ? 'md:col-span-2' : ''
        }`}
    >
      {/* Ảnh / placeholder */}
      <div
        className={`relative w-full overflow-hidden ${project.featured ? 'aspect-[16/8]' : 'aspect-[16/10]'
          }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-accent/10 to-transparent" />
        {project.animation ? (
          <Lottie
            animationData={project.animation}
            loop
            className="relative h-full w-full object-cover"
          />
        ) : (
          project.image && (
            <img
              src={project.image}
              alt={pick(project.title)}
              loading="lazy"
              className="relative h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          )
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-display text-xl font-bold">{pick(project.title)}</h3>
        <p className="flex-1 leading-relaxed text-muted">{pick(project.description)}</p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="mt-2 flex items-center gap-4 border-t border-border pt-4">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-fg transition-colors hover:text-accent"
            >
              {t('projects.demo')}
              <ArrowUpRight size={16} />
            </a>
          )}
          {project.source && (
            <a
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted transition-colors hover:text-accent"
            >
              <Github size={16} />
              {t('projects.source')}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading eyebrow={t('projects.subtitle')} title={t('projects.heading')} />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title.en} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
