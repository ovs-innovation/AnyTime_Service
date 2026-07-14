import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { motion } from 'framer-motion'
import { MdStar, MdFormatQuote, MdLocationOn, MdBuild } from 'react-icons/md'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import SectionHeader from '@components/ui/SectionHeader'
import { testimonials } from '@data/testimonials'

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`} role="img">
      {[...Array(5)].map((_, i) => (
        <MdStar
          key={i}
          size={16}
          className={i < rating ? 'text-accent' : 'text-slate-300 dark:text-slate-600'}
        />
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section aria-labelledby="testimonials-heading" className="section bg-white dark:bg-secondary overflow-hidden">
      <div className="container-main">
        <SectionHeader
          badge="Client Testimonials"
          title="Trusted by Leading Companies Across India"
          subtitle="Here's what our corporate clients say about our printing, signage, branding, and facility support services."
          id="testimonials-heading"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 relative"
        >
          {/* Custom nav buttons */}
          <button
            id="ts-prev"
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-8 z-10 w-10 h-10 bg-white dark:bg-secondary-light border border-brand-border dark:border-slate-700 rounded-full items-center justify-center text-brand-muted hover:text-primary hover:border-primary shadow-card transition-all duration-200"
            aria-label="Previous testimonial"
          >
            ‹
          </button>
          <button
            id="ts-next"
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-8 z-10 w-10 h-10 bg-white dark:bg-secondary-light border border-brand-border dark:border-slate-700 rounded-full items-center justify-center text-brand-muted hover:text-primary hover:border-primary shadow-card transition-all duration-200"
            aria-label="Next testimonial"
          >
            ›
          </button>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={{ prevEl: '#ts-prev', nextEl: '#ts-next' }}
            className="pb-12"
            aria-label="Client testimonials slider"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <article className="card p-7 h-full flex flex-col group hover:border-primary/30 dark:hover:border-primary/30 transition-colors">
                  {/* Quote icon */}
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <MdFormatQuote className="text-primary" size={24} />
                  </div>

                  <StarRating rating={t.rating} />

                  <blockquote className="text-brand-muted dark:text-slate-400 text-sm leading-relaxed mt-4 flex-1 line-clamp-4">
                    "{t.review}"
                  </blockquote>

                  {/* Service badge */}
                  {t.service && (
                    <div className="flex items-center gap-1.5 mt-4">
                      <MdBuild size={12} className="text-primary flex-shrink-0" />
                      <span className="text-xs text-primary font-semibold line-clamp-1">{t.service}</span>
                    </div>
                  )}

                  <div className="flex items-center gap-3 mt-5 pt-5 border-t border-brand-border dark:border-slate-700">
                    <img
                      src={t.avatar}
                      alt={`Photo of ${t.name}`}
                      className="w-11 h-11 rounded-full object-cover border-2 border-brand-border dark:border-slate-600"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-semibold text-secondary dark:text-white text-sm">{t.name}</p>
                      <p className="text-brand-muted dark:text-slate-500 text-xs">{t.designation} · {t.company}</p>
                      {t.location && (
                        <p className="flex items-center gap-0.5 text-slate-400 text-xs mt-0.5">
                          <MdLocationOn size={11} /> {t.location}
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}
