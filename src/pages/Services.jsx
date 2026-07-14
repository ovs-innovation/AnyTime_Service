import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import ServicesSection from '@components/sections/ServicesSection'
import CTASection from '@components/sections/CTASection'

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0 },
}

export default function Services() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <Helmet>
        <title>Our Services — Anytime Services | Premium Printing & Signage Solutions</title>
        <meta name="description" content="Explore our complete B2B marketing collateral printing, LED sign board fabrication, vehicle decals, and corporate branding installation services." />
        <link rel="canonical" href="https://anytimeservices.in/services" />
      </Helmet>

      {/* Page Header */}
      <div className="bg-hero py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
        <div className="container-main relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-badge bg-white/15 text-white border border-white/20">What We Offer</span>
            <h1 className="font-heading font-black text-4xl md:text-5xl text-white mt-4 mb-4">
              Our Services
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              High-impact corporate branding, printing, and signage solutions executed with professional precision.
            </p>
          </motion.div>
        </div>
      </div>

      <ServicesSection showAll />
      <CTASection />
    </motion.div>
  )
}
