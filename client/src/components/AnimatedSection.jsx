import { motion, useReducedMotion } from 'framer-motion';

export default function AnimatedSection({ children, className = '' }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={prefersReducedMotion ? undefined : { once: true, amount: 0.12 }}
      transition={prefersReducedMotion ? undefined : { duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
}
