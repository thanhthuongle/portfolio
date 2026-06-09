import { motion } from 'framer-motion';
import { ArrowDown, FolderGit2, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLang } from '../hooks/useLang';
import { profile } from '../data/profile';
import Button from '../components/ui/Button';
import SocialLinks from '../components/ui/SocialLinks';
import anim from "../assets/programming.json";
import Lottie from "lottie-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const { t } = useTranslation();
  const { pick } = useLang();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Hiệu ứng nền gradient mềm */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
      </div>

      <div
        // className="container-page"
        className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center gap-12 px-6 pt-24 sm:pt-0 sm:px-8 md:flex-row md:justify-between"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex w-full flex-col gap-6 md:max-w-[50%]"
        >
          <motion.p variants={item} className="text-lg font-medium text-muted">
            {t('hero.greeting')}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="font-display text-2xl font-semibold text-accent sm:text-3xl"
          >
            {pick(profile.title)}
          </motion.p>

          <motion.p
            variants={item}
            className="max-w-2xl text-lg leading-relaxed text-muted text-balance"
          >
            {pick(profile.tagline)}
          </motion.p>

          {/* <motion.div variants={item} className="mt-2 flex flex-wrap items-center gap-4">
            <Button href="#projects" variant="primary">
              <FolderGit2 size={18} />
              {t('hero.viewProjects')}
            </Button>
            <Button href={pick(profile.resume)} variant="outline" target="_blank" rel="noopener noreferrer">
              <Download size={18} />
              {t('hero.downloadCV')}
            </Button>
          </motion.div> */}

          <motion.div variants={item} className="mt-2">
            <SocialLinks />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="w-full max-w-md md:w-1/2 md:max-w-[50%]"
        >
          <Lottie
            animationData={anim}
            loop
            className="mx-auto h-auto w-full"
            style={{ maxWidth: anim.w ? `${anim.w}px` : undefined }}
          />
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted transition-colors hover:text-accent sm:inline-flex"
      >
        {t('hero.scroll')}
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </a>
    </section>
  );
}
