import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/* ─── Scroll-triggered fade-in wrapper ─── */
export function FadeIn({ children, delay = 0, className = '', direction = 'up' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const dirMap = {
    up: { y: 24 },
    down: { y: -24 },
    left: { x: 32 },
    right: { x: -32 },
    none: {},
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...dirMap[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ─── Section Header (reusable) ─── */
export function SectionHeader({ label, title, titleHighlight, desc, light = false, align = 'center' }) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left'

  return (
    <FadeIn className={`${alignClass} mb-10 lg:mb-12`}>
      {label && <span className="section-label">{label}</span>}
      <h2 className={`section-title ${light ? 'section-title-light' : ''}`}>
        {title}{' '}
        {titleHighlight && <span className={light ? 'gradient-text-gold' : 'gradient-text'}>{titleHighlight}</span>}
      </h2>
      {desc && (
        <p className={`section-desc ${light ? 'section-desc-light' : ''} ${align === 'center' ? '' : '!mx-0'}`}>
          {desc}
        </p>
      )}
    </FadeIn>
  )
}

/* ─── Icon Box ─── */
export function IconBox({ icon: Icon, color, size = 20, boxSize = 'w-11 h-11' }) {
  return (
    <div
      className={`${boxSize} rounded-xl flex items-center justify-center shrink-0`}
      style={{ background: `${color}12` }}
    >
      <Icon size={size} style={{ color }} />
    </div>
  )
}
