// Cấu hình animation dùng chung cho Framer Motion khi phần tử vào viewport.
// Dùng: <motion.div {...reveal()} /> hoặc spread vào motion component.

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

/**
 * Props sẵn dùng cho motion: tự chạy khi cuộn vào màn hình (một lần).
 * @param {number} delay - độ trễ (giây)
 */
export function reveal(delay = 0) {
  return {
    initial: 'hidden',
    whileInView: 'show',
    viewport: { once: true, amount: 0.2 },
    variants: fadeUp,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  };
}
