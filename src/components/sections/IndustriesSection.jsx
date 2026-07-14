import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MdArrowForward } from 'react-icons/md'
import SectionHeader from '@components/ui/SectionHeader'
import { industries } from '@data/industries'

export default function IndustriesSection() {
  return (
    <section aria-labelledby="industries-heading" className="section bg-brand-gray dark:bg-secondary-dark">
      <div className="container-main">
        <SectionHeader
          badge="Industries We Serve"
          title="Across Every Sector, Every Scale"
          subtitle="Our premium printing, signage, and branding solutions are tailored to the unique visual identity needs of every industry."
          id="industries-heading"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-14">
          {industries.map((ind, i) => (
            <motion.article
              key={ind.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: (i % 5) * 0.07 }}
              className="group card-hover p-6 text-center cursor-default"
              aria-label={ind.title}
            >
              <div className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110 inline-block" aria-hidden="true">
                {ind.icon}
              </div>
              <h3 className="font-heading font-bold text-sm text-secondary dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-primary transition-colors">
                {ind.title}
              </h3>
              <p className="text-xs text-brand-muted dark:text-slate-500 leading-relaxed line-clamp-2">
                {ind.description}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link to="/industries" className="btn-outline" aria-label="View all industries">
            Explore All Industries
            <MdArrowForward size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
