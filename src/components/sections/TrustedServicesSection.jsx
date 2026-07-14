import { motion } from 'framer-motion'

export default function TrustedServicesSection() {
  return (
    <section aria-labelledby="trusted-services-heading" className="section bg-slate-50 dark:bg-secondary-dark overflow-hidden">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge bg-primary/10 text-primary mb-4">
              Printing & Marketing Solutions
            </span>
            <h2
              id="trusted-services-heading"
              className="font-heading font-black text-3xl md:text-4xl text-secondary dark:text-white mb-6 leading-tight"
            >
              Trusted Services
            </h2>
            <div className="space-y-6 text-brand-muted dark:text-slate-400 text-base leading-relaxed">
              <p>
                At <span className="font-semibold text-secondary dark:text-white">Anytime Services</span>, we pride ourselves on offering trusted and reliable solutions for all your offline marketing needs. Whether it's printing, signage, or event setups, our team is dedicated to delivering high-quality results with professionalism and attention to detail.
              </p>
              <p>
                Our specialty at Anytime Services is providing dependable <span className="font-semibold text-primary">printing & marketing services</span> that enhance the visibility of your business. Our team guarantees that every project is carried out with originality, accuracy, and professionalism, whether it involves business cards, brochures, flyers, large-format banners, or promotional signs.
              </p>
              <p>
                With professionally created marketing collateral and superior printing, we prioritize offering outstanding value and dependable service. Our committed staff works closely with you to comprehend your particular needs and develop solutions that are impactful, exceed expectations, and are delivered on schedule, under budget, and with the greatest quality possible.
              </p>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square"
          >
            <img
              src="https://images.unsplash.com/photo-1493238792000-8113da705763?w=800&auto=format&fit=crop"
              alt="HI neon light design by Anytime Services"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
