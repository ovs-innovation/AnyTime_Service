import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MdArrowForward } from 'react-icons/md'
import {
  MdPrint, MdBrandingWatermark, MdCampaign, MdColorLens,
  MdPhotoCamera, MdConstruction, MdComputer, MdAttachMoney,
  MdAccountBalance, MdFeaturedPlayList, MdPhotoSizeSelectActual,
  MdLightbulb, MdDashboard, MdWallpaper, MdViewQuilt,
  MdBusiness, MdDirectionsCar, MdHomeWork, MdPublic,
  MdHandyman, MdCardGiftcard, MdDomain,
} from 'react-icons/md'
import SectionHeader from '@components/ui/SectionHeader'
import { services } from '@data/services'

const iconMap = {
  MdPrint, MdBrandingWatermark, MdCampaign, MdColorLens,
  MdPhotoCamera, MdConstruction, MdComputer, MdAttachMoney,
  MdAccountBalance, MdFeaturedPlayList, MdPhotoSizeSelectActual,
  MdLightbulb, MdDashboard, MdWallpaper, MdViewQuilt,
  MdBusiness, MdDirectionsCar, MdHomeWork, MdPublic,
  MdHandyman, MdCardGiftcard, MdDomain,
}

const colorVariants = {
  '#D62828': 'bg-red-50 dark:bg-red-950/30 text-primary border-red-100 dark:border-red-900/30',
  '#0F172A': 'bg-slate-50 dark:bg-slate-800/50 text-secondary dark:text-white border-slate-100 dark:border-slate-700',
  '#F59E0B': 'bg-amber-50 dark:bg-amber-950/30 text-accent border-amber-100 dark:border-amber-900/30',
}

function ServiceCard({ service, index }) {
  const IconComp = iconMap[service.icon]
  const colorClass = colorVariants[service.color] || colorVariants['#D62828']

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className="card-hover group flex flex-col"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/10]">
        <img
          src={service.gallery?.[0] || 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&auto=format&fit=crop'}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
        {/* Icon badge */}
        <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl border ${colorClass} flex items-center justify-center backdrop-blur-sm`}>
          {IconComp && <IconComp size={24} />}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-heading font-bold text-lg text-secondary dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <p className="text-brand-muted dark:text-slate-400 text-sm leading-relaxed flex-1 mb-4">
          {service.shortDesc}
        </p>
        <Link
          to={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group/link"
          aria-label={`Learn more about ${service.title}`}
        >
          Learn More
          <MdArrowForward
            size={16}
            className="group-hover/link:translate-x-1.5 transition-transform duration-200"
          />
        </Link>
      </div>
    </motion.article>
  )
}

export default function ServicesSection({ showAll = false }) {
  const displayed = showAll ? services : services.slice(0, 8)

  return (
    <section aria-labelledby="services-heading" className="section bg-brand-gray dark:bg-secondary-dark">
      <div className="container-main">
        <SectionHeader
          badge="Our Services"
          title="Comprehensive Branding & Support Solutions"
          subtitle="From high-impact printing and LED signs to office decals and vehicle wraps — we deliver premium visibility solutions."
          id="services-heading"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {displayed.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/services" className="btn-outline btn-lg" aria-label="View all services">
              View All Services
              <MdArrowForward size={20} />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}
