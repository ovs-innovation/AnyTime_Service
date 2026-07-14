import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import CountUp from 'react-countup'

const stats = [
  { value: 500, suffix: '+', label: 'Happy Clients', icon: '🤝', description: 'Across India' },
  { value: 1000, suffix: '+', label: 'Branding Projects', icon: '✨', description: 'Delivered & Installed' },
  { value: 20, suffix: '+', label: 'Cities Reached', icon: '📍', description: 'Corporate Network' },
  { value: 10, suffix: '+', label: 'Years Experience', icon: '🏆', description: 'Industry Expertise' },
]

function StatCard({ stat, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="stat-card group-hover:bg-white/15 transition-all duration-300 cursor-default">
        <div className="text-4xl mb-3" aria-hidden="true">{stat.icon}</div>
        <div className="font-heading font-black text-4xl xl:text-5xl text-white mb-1">
          <span>
            {stat.value}
            {stat.suffix}
          </span>
        </div>
        <div className="font-semibold text-white text-lg mb-1">{stat.label}</div>
        <div className="text-slate-400 text-sm">{stat.description}</div>
      </div>
    </motion.div>
  )
}

export default function StatsSection() {
  return (
    <section
      aria-labelledby="stats-heading"
      className="bg-secondary py-20 relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-hero-pattern pointer-events-none" aria-hidden="true" />

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-badge bg-primary/20 text-primary">Our Impact</span>
          <h2 id="stats-heading" className="section-title text-white mt-2">
            Numbers That Define Our Excellence
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
