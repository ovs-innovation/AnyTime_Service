import { Helmet } from 'react-helmet-async'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MdCheckCircle, MdArrowBack, MdPhone, MdArrowForward } from 'react-icons/md'
import {
  MdPrint, MdBrandingWatermark, MdCampaign, MdColorLens,
  MdPhotoCamera, MdConstruction, MdComputer, MdAttachMoney,
  MdAccountBalance, MdFeaturedPlayList, MdPhotoSizeSelectActual,
  MdLightbulb, MdDashboard, MdWallpaper, MdViewQuilt,
  MdBusiness, MdDirectionsCar, MdHomeWork, MdPublic,
  MdHandyman, MdCardGiftcard, MdDomain,
} from 'react-icons/md'
import { services } from '@data/services'
import CTASection from '@components/sections/CTASection'

const iconMap = {
  MdPrint, MdBrandingWatermark, MdCampaign, MdColorLens,
  MdPhotoCamera, MdConstruction, MdComputer, MdAttachMoney,
  MdAccountBalance, MdFeaturedPlayList, MdPhotoSizeSelectActual,
  MdLightbulb, MdDashboard, MdWallpaper, MdViewQuilt,
  MdBusiness, MdDirectionsCar, MdHomeWork, MdPublic,
  MdHandyman, MdCardGiftcard, MdDomain,
}

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0 },
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  if (!service) return <Navigate to="/services" replace />

  const IconComp = iconMap[service.icon]
  // Use first gallery image as the hero image; fall back to a placeholder
  const heroImage = service.gallery?.[0] || 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=900&auto=format&fit=crop'

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <Helmet>
        <title>{service.title} — Anytime Services</title>
        <meta name="description" content={service.shortDesc} />
        <link rel="canonical" href={`https://anytimeservices.in/services/${service.slug}`} />
      </Helmet>

      {/* Page Header */}
      <div className="bg-hero py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
        <div className="container-main relative z-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors text-sm">
            <MdArrowBack size={16} /> Back to Services
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-primary">
                {IconComp && <IconComp className="text-white" size={28} />}
              </div>
              <h1 className="font-heading font-black text-4xl md:text-5xl text-white">{service.title}</h1>
            </div>
            <p className="text-slate-300 text-lg max-w-2xl">{service.shortDesc}</p>
          </motion.div>
        </div>
      </div>

      <section className="section bg-white dark:bg-secondary">
        <div className="container-main grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={heroImage}
                alt={service.title}
                className="w-full rounded-2xl object-cover aspect-video shadow-card"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="font-heading font-bold text-2xl text-secondary dark:text-white mb-4">Overview</h2>
              <p className="text-brand-muted dark:text-slate-400 leading-relaxed text-lg">{service.description}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="font-heading font-bold text-2xl text-secondary dark:text-white mb-6">What We Provide</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {service.features.map((f) => (
                  <div key={f} className="flex items-center gap-3 p-4 rounded-xl bg-brand-gray dark:bg-secondary-light">
                    <MdCheckCircle className="text-primary flex-shrink-0" size={20} />
                    <span className="text-secondary dark:text-slate-200 font-medium text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            {service.benefits?.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h2 className="font-heading font-bold text-2xl text-secondary dark:text-white mb-6">Key Benefits</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.benefits.map((b) => (
                    <div key={b} className="flex items-start gap-3 p-4 rounded-xl border border-primary/20 bg-primary/5 dark:bg-primary/10">
                      <MdCheckCircle className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-secondary dark:text-slate-200 text-sm">{b}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Our Process */}
            {service.process?.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className="font-heading font-bold text-2xl text-secondary dark:text-white mb-6">Our Process</h2>
                <ol className="space-y-4">
                  {service.process.map((step, idx) => (
                    <li key={step} className="flex items-start gap-4 p-4 rounded-xl bg-brand-gray dark:bg-secondary-light">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                        {idx + 1}
                      </span>
                      <span className="text-secondary dark:text-slate-200 text-sm pt-1">{step}</span>
                    </li>
                  ))}
                </ol>
              </motion.div>
            )}

            {/* Industries Served */}
            {service.industries?.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <h2 className="font-heading font-bold text-2xl text-secondary dark:text-white mb-4">Industries Served</h2>
                <div className="flex flex-wrap gap-2">
                  {service.industries.map((ind) => (
                    <span key={ind} className="px-4 py-1.5 bg-secondary/5 dark:bg-slate-700 border border-brand-border dark:border-slate-600 text-brand-muted dark:text-slate-300 rounded-full text-sm font-medium">
                      {ind}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* FAQ */}
            {service.faqs?.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h2 className="font-heading font-bold text-2xl text-secondary dark:text-white mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {service.faqs.map((faq) => (
                    <div key={faq.q} className="p-5 rounded-xl border border-brand-border dark:border-slate-700 bg-white dark:bg-secondary-light">
                      <p className="font-semibold text-secondary dark:text-white mb-2 text-sm">{faq.q}</p>
                      <p className="text-brand-muted dark:text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Gallery */}
            {service.gallery?.length > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <h2 className="font-heading font-bold text-2xl text-secondary dark:text-white mb-6">Project Gallery</h2>
                <div className="grid grid-cols-2 gap-4">
                  {service.gallery.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${service.title} project ${i + 1}`}
                      className="w-full rounded-xl object-cover aspect-video"
                      loading="lazy"
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <div className="card p-6 sticky top-24">
              <h3 className="font-heading font-bold text-secondary dark:text-white text-lg mb-4">Get a Quick Quote</h3>
              <p className="text-brand-muted dark:text-slate-400 text-sm mb-6">
                Tell us your requirements and our team will get back within 4 hours.
              </p>
              <Link to="/contact" className="btn-primary w-full justify-center mb-3">
                Request Quote
                <MdArrowForward size={18} />
              </Link>
              <a href="tel:+919818662234" className="btn-outline w-full justify-center">
                <MdPhone size={18} />
                Call Us Now
              </a>

              <div className="mt-6 pt-6 border-t border-brand-border dark:border-slate-700">
                <h4 className="font-semibold text-secondary dark:text-white text-sm mb-3">Other Services</h4>
                <div className="space-y-2">
                  {services.filter(s => s.slug !== slug).slice(0, 5).map((s) => {
                    const Ic = iconMap[s.icon]
                    return (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        className="flex items-center gap-2.5 text-sm text-brand-muted dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors py-1.5"
                      >
                        {Ic && <Ic size={16} className="text-primary" />}
                        {s.title}
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </motion.div>
  )
}
