// components/PageTransitionWrapper.tsx
'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

export default function PageTransitionWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const firstLoadRef = useRef(true)

  // After first client hydration, allow initial animations
  useEffect(() => {
    firstLoadRef.current = false
  }, [])

  return (
    // Don't animate the very first render to avoid the hydration blip
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        // On first load -> no initial animation; on route changes -> fade/slide
        initial={firstLoadRef.current ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
        // IMPORTANT: keep an opaque bg so you never see a transparent frame
        className="min-h-screen bg-white"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
