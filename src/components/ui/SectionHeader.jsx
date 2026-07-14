import { motion } from 'framer-motion'

export default function SectionHeader({ badge, title, subtitle, center = true, light = false, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${center ? 'text-center' : ''} ${className}`}
    >
      {badge && (
        <span className={`section-badge ${light ? 'bg-white/15 text-white' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-current" />
          {badge}
        </span>
      )}
      <h2 className={`section-title ${light ? 'text-white' : ''}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`section-subtitle mt-4 ${center ? 'mx-auto' : ''} ${light ? 'text-slate-300' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
