import { motion } from 'framer-motion'
import { MdCheckCircle } from 'react-icons/md'
import SectionHeader from '@components/ui/SectionHeader'

const features = [
  {
    step: '01',
    title: 'Verified Staff',
    description: 'Every candidate undergoes thorough police verification, identity checks, and employment history validation.',
    icon: '🔍',
  },
  {
    step: '02',
    title: 'Background Checked',
    description: 'Multi-layer background screening including criminal records, reference checks, and address verification.',
    icon: '✅',
  },
  {
    step: '03',
    title: 'Quick Deployment',
    description: 'We deploy skilled manpower within 24–72 hours of requirement confirmation — even for bulk orders.',
    icon: '⚡',
  },
  {
    step: '04',
    title: '24×7 Support',
    description: 'Our operations team is available round the clock to handle any issue or replacement request.',
    icon: '🛎️',
  },
  {
    step: '05',
    title: 'Affordable Pricing',
    description: 'Competitive, transparent pricing with no hidden costs. Flexible contract terms for all business sizes.',
    icon: '💰',
  },
  {
    step: '06',
    title: 'Professional Team',
    description: 'All staff are uniformed, trained, insured, and compliant with Labour Law regulations.',
    icon: '👔',
  },
]

const leftFeatures = features.slice(0, 3)
const rightFeatures = features.slice(3)

export default function WhyChooseUs() {
  return (
    <section aria-labelledby="why-us-heading" className="section bg-white dark:bg-secondary overflow-hidden">
      <div className="container-main">
        <SectionHeader
          badge="Why Choose Us"
          title="What Makes Anytime Services Different"
          subtitle="Trusted by 500+ companies across India for our unmatched reliability, verified professionals, and 24×7 operational support."
        />

        <div className="mt-16 grid lg:grid-cols-3 gap-8 items-center">
          {/* Left Timeline */}
          <div className="space-y-6">
            {leftFeatures.map((f, i) => (
              <motion.div
                key={f.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-primary/20 group-hover:bg-primary flex items-center justify-center text-xl transition-all duration-300 flex-shrink-0">
                    <span className="group-hover:scale-110 transition-transform">{f.icon}</span>
                  </div>
                  {i < leftFeatures.length - 1 && (
                    <div className="flex-1 w-px bg-brand-border dark:bg-slate-700 mt-2 min-h-[2rem]" />
                  )}
                </div>
                <div className="pb-6">
                  <span className="text-xs font-bold text-primary tracking-widest">{f.step}</span>
                  <h3 className="font-heading font-bold text-secondary dark:text-white mt-0.5 mb-1">{f.title}</h3>
                  <p className="text-brand-muted dark:text-slate-400 text-sm leading-relaxed">{f.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&auto=format&fit=crop"
                alt="Professional team at Anytime Services"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-transparent to-transparent" />

              {/* Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white dark:bg-secondary-light rounded-2xl p-4 shadow-card">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                    <MdCheckCircle className="text-white" size={22} />
                  </div>
                  <div>
                    <p className="font-bold text-secondary dark:text-white text-sm">Labour Law Compliant</p>
                    <p className="text-brand-muted dark:text-slate-400 text-xs">PF, ESI & Statutory Compliant</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ring decorations */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-accent/30 rounded-full" aria-hidden="true" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary/20 rounded-full blur-lg" aria-hidden="true" />
          </motion.div>

          {/* Right Timeline */}
          <div className="space-y-6">
            {rightFeatures.map((f, i) => (
              <motion.div
                key={f.step}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-primary/20 group-hover:bg-primary flex items-center justify-center text-xl transition-all duration-300 flex-shrink-0">
                    <span className="group-hover:scale-110 transition-transform">{f.icon}</span>
                  </div>
                  {i < rightFeatures.length - 1 && (
                    <div className="flex-1 w-px bg-brand-border dark:bg-slate-700 mt-2 min-h-[2rem]" />
                  )}
                </div>
                <div className="pb-6">
                  <span className="text-xs font-bold text-primary tracking-widest">{f.step}</span>
                  <h3 className="font-heading font-bold text-secondary dark:text-white mt-0.5 mb-1">{f.title}</h3>
                  <p className="text-brand-muted dark:text-slate-400 text-sm leading-relaxed">{f.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
