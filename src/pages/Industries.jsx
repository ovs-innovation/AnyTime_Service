import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CTASection from '@components/sections/CTASection'
import SectionHeader from '@components/ui/SectionHeader'
import { industries } from '@data/industries'
import { MdArrowForward } from 'react-icons/md'

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0 },
}

export default function Industries() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <Helmet>
        <title>Industries We Serve — Anytime Services | Printing & Signage for Every Sector</title>
        <meta
          name="description"
          content="Anytime Services delivers custom LED signage, branding, printing, vehicle wraps, and product photography for Corporate Offices, Retail, Hotels, Healthcare, Banks, Schools, and more."
        />
        <link rel="canonical" href="https://anytimeservices.in/industries" />
      </Helmet>

      {/* Page Header */}
      <div className="bg-hero py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
        <div className="container-main relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-badge bg-white/15 text-white border border-white/20">Industries</span>
            <h1 className="font-heading font-black text-4xl md:text-5xl text-white mt-4 mb-4">
              Industries We Serve
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              From corporate lobbies to retail storefronts — we deliver premium signage, branding, and print solutions tailored to every sector across India.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Industry Cards */}
      <section className="section bg-brand-gray dark:bg-secondary-dark" aria-labelledby="industries-page-heading">
        <div className="container-main">
          <SectionHeader
            badge="Our Reach"
            title="Branding Solutions for Every Sector"
            subtitle="We understand the unique visual identity needs of each industry and deliver targeted, high-impact solutions."
            id="industries-page-heading"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {industries.map((ind, i) => (
              <motion.article
                key={ind.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="card p-8 group hover:border-primary/40 hover:shadow-card-hover transition-all duration-300 flex flex-col"
              >
                {/* Icon */}
                <div
                  className="text-5xl mb-4 group-hover:scale-110 transition-transform inline-block"
                  aria-hidden="true"
                >
                  {ind.icon}
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-xl text-secondary dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-primary transition-colors">
                  {ind.title}
                </h3>

                {/* Description */}
                <p className="text-brand-muted dark:text-slate-400 text-sm leading-relaxed flex-1">
                  {ind.description}
                </p>

                {/* Service tags */}
                {ind.services && (
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {ind.services.map((svc) => (
                      <span
                        key={svc}
                        className="text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full bg-primary/8 dark:bg-primary/15 text-primary border border-primary/20"
                      >
                        {svc}
                      </span>
                    ))}
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Industries Trust Us */}
      <section className="section bg-white dark:bg-secondary" aria-labelledby="trust-heading">
        <div className="container-main">
          <SectionHeader
            badge="Why Brands Choose Us"
            title="The Anytime Services Advantage"
            subtitle="Businesses across industries trust us for on-time delivery, premium materials, and end-to-end project execution."
            id="trust-heading"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { icon: '🎨', title: 'Design Expertise', desc: 'In-house creative team delivering print-ready artwork aligned to your brand guidelines.' },
              { icon: '⚡', title: 'Fast Turnaround', desc: 'Express delivery on urgent print and signage orders — even same-day for select items.' },
              { icon: '🔧', title: 'End-to-End Execution', desc: 'We design, fabricate, and install — you get one reliable partner from brief to launch.' },
              { icon: '📍', title: 'Pan-India Reach', desc: 'Serving 20+ cities with consistent quality standards across every project.' },
            ].map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card p-6 text-center group hover:border-primary/30 transition-colors"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform inline-block" aria-hidden="true">
                  {point.icon}
                </div>
                <h3 className="font-heading font-bold text-secondary dark:text-white mb-2">{point.title}</h3>
                <p className="text-brand-muted dark:text-slate-400 text-sm leading-relaxed">{point.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-14"
          >
            <Link to="/contact" className="btn-primary btn-lg" aria-label="Discuss your industry project">
              Discuss Your Project
              <MdArrowForward size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </motion.div>
  )
}
