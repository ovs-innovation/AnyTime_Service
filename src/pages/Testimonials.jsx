import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { MdStar, MdFormatQuote } from 'react-icons/md'
import SectionHeader from '@components/ui/SectionHeader'
import CTASection from '@components/sections/CTASection'
import { testimonials } from '@data/testimonials'

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0 },
}

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`} role="img">
      {[...Array(5)].map((_, i) => (
        <MdStar key={i} size={18} className={i < rating ? 'text-accent' : 'text-slate-300 dark:text-slate-600'} />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <Helmet>
        <title>Client Testimonials — Anytime Services</title>
        <meta name="description" content="Read what our 500+ clients say about Anytime Services' manpower, security, and facility management solutions." />
        <link rel="canonical" href="https://anytimeservices.in/testimonials" />
      </Helmet>

      {/* Page Header */}
      <div className="bg-hero py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
        <div className="container-main relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-badge bg-white/15 text-white border border-white/20">What Clients Say</span>
            <h1 className="font-heading font-black text-4xl md:text-5xl text-white mt-4 mb-4">
              Client Testimonials
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              The trust of 500+ companies across India is our greatest achievement.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Overall Rating */}
      <section className="section-sm bg-white dark:bg-secondary border-b border-brand-border dark:border-slate-700">
        <div className="container-main">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            {[['4.9/5', 'Average Rating', '⭐'], ['500+', 'Happy Clients', '🤝'], ['98%', 'Client Retention', '🔄'], ['10+', 'Years Trusted', '🏆']].map(([val, lbl, icon]) => (
              <div key={lbl} className="px-8 py-4">
                <div className="text-3xl mb-1" aria-hidden="true">{icon}</div>
                <p className="font-heading font-black text-3xl text-primary">{val}</p>
                <p className="text-brand-muted dark:text-slate-400 text-sm mt-1">{lbl}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-brand-gray dark:bg-secondary-dark" aria-labelledby="testimonials-page-heading">
        <div className="container-main">
          <SectionHeader
            badge="Reviews"
            title="What Our Clients Say"
            id="testimonials-page-heading"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {testimonials.map((t, i) => (
              <motion.article
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="card p-8 flex flex-col group hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                  <MdFormatQuote className="text-primary" size={28} />
                </div>
                <StarRating rating={t.rating} />
                <blockquote className="text-brand-muted dark:text-slate-400 text-sm leading-relaxed mt-4 flex-1">
                  "{t.review}"
                </blockquote>
                <div className="flex items-center gap-4 mt-6 pt-6 border-t border-brand-border dark:border-slate-700">
                  <img
                    src={t.avatar}
                    alt={`Photo of ${t.name}`}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-bold text-secondary dark:text-white">{t.name}</p>
                    <p className="text-brand-muted dark:text-slate-400 text-xs">{t.designation}</p>
                    <p className="text-primary text-xs font-semibold">{t.company}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </motion.div>
  )
}
