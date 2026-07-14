import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'
import 'swiper/css'
import SectionHeader from '@components/ui/SectionHeader'
import { clients } from '@data/index'

export default function ClientsSection() {
  return (
    <section aria-labelledby="clients-heading" className="section-sm bg-brand-gray dark:bg-secondary-light">
      <div className="container-main">
        <SectionHeader
          badge="Trusted By"
          title="Our Valued Clients"
          subtitle="Industry leaders who rely on Anytime Services for their workforce needs."
          id="clients-heading"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={2}
            breakpoints={{
              480: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 6 },
            }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop
            aria-label="Client logos slider"
          >
            {[...clients, ...clients].map((client, i) => (
              <SwiperSlide key={`${client.id}-${i}`}>
                <div className="flex items-center justify-center h-20 px-4 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-h-12 max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}
