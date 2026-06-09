import { motion } from 'framer-motion';
import { reveal } from '../../hooks/useScrollReveal';

/**
 * Tiêu đề mục dùng chung: nhãn nhỏ (eyebrow) + tiêu đề lớn.
 */
export default function SectionHeading({ eyebrow, title, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start';
  return (
    <motion.div
      {...reveal()}
      className={`flex flex-col gap-3 ${alignment}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-accent">
          <span className="h-px w-8 bg-accent" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
        {title}
      </h2>
    </motion.div>
  );
}
