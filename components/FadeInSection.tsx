'use client';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';

export default function FadeInSection({ children }: { children: React.ReactNode }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  // Prevent first-paint flicker: don't start hidden on the initial SSR/CSR hydration
  const hasHydrated = useRef(false);
  const initialState = hasHydrated.current ? 'hidden' : false; // first render => false, later => 'hidden'

  useEffect(() => {
    hasHydrated.current = true; // subsequent mounts can use 'hidden'
  }, []);

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={initialState}
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
