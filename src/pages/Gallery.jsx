import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { MdClose, MdZoomIn, MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import SectionHeader from '@components/ui/SectionHeader'
import CTASection from '@components/sections/CTASection'
import { galleryItems, galleryCategories } from '@data/gallery'

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0 },
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const [visibleCount, setVisibleCount] = useState(8)

  const filtered = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter((img) => img.category === activeFilter)

  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  const openLightbox = (img) => setLightbox(img)
  const closeLightbox = () => setLightbox(null)

  const navigate = (dir) => {
    const idx = filtered.findIndex(i => i.id === lightbox.id)
    const next = (idx + dir + filtered.length) % filtered.length
    setLightbox(filtered[next])
  }

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <Helmet>
        <title>Gallery — Anytime Services | Corporate Projects Gallery</title>
        <meta name="description" content="Browse our gallery of printing, branding, LED signage, vehicle wraps, office branding, and product photography projects across India." />
        <link rel="canonical" href="https://anytimeservices.in/gallery" />
      </Helmet>

      {/* Page Header */}
      <div className="bg-hero py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
        <div className="container-main relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-badge bg-white/15 text-white border border-white/20">Photo Gallery</span>
            <h1 className="font-heading font-black text-4xl md:text-5xl text-white mt-4 mb-4">
              Work Gallery
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              A visual collection of our completed printing, branding, signage, photography, and installation projects.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="section bg-brand-gray dark:bg-secondary-dark" aria-labelledby="gallery-heading">
        <div className="container-main">
          <SectionHeader
            badge="Our Projects"
            title="Completed Work Across India"
            subtitle="Filter by service category to explore our project outputs for corporate, retail, and industrial clients."
            id="gallery-heading"
          />

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter gallery by category">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveFilter(cat); setVisibleCount(8) }}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${activeFilter === cat
                    ? 'bg-primary text-white shadow-primary'
                    : 'bg-white dark:bg-secondary-light text-brand-muted dark:text-slate-400 hover:text-primary border border-brand-border dark:border-slate-700'
                  }`}
                aria-pressed={activeFilter === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Fixed Uniform Grid — Perfectly aligned layout */}
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
            <AnimatePresence mode="popLayout">
              {visible.map((img) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-[#111827] dark:bg-secondary-light rounded-2xl overflow-hidden cursor-pointer shadow-card hover:shadow-card-hover flex flex-col aspect-video"
                  onClick={() => openLightbox(img)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${img.alt}`}
                  onKeyDown={(e) => e.key === 'Enter' && openLightbox(img)}
                >
                  {/* Image Container */}
                  <div className="w-full h-full relative overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/50 transition-colors duration-300 flex items-center justify-center">
                      <MdZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={36} />
                    </div>

                    {/* Badge Overlay */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2.5 py-0.5 bg-primary text-white text-[10px] font-bold rounded-md uppercase tracking-wider">
                        {img.category}
                      </span>
                    </div>
                  </div>

                  {/* Info Text Strip Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/90 via-black/70 to-transparent translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-xs leading-tight line-clamp-1">{img.alt}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Load More */}
          {hasMore && (
            <div className="text-center mt-10">
              <button
                onClick={() => setVisibleCount(v => v + 8)}
                className="btn-outline btn-lg"
                aria-label="Load more gallery images"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="w-full h-full object-contain rounded-2xl"
              />

              {/* Caption */}
              <div className="text-center mt-4">
                <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-wider mr-2">
                  {lightbox.category}
                </span>
                <span className="text-slate-300 text-sm">{lightbox.alt}</span>
              </div>

              {/* Controls */}
              <button
                onClick={closeLightbox}
                className="absolute top-3 right-3 w-10 h-10 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                aria-label="Close lightbox"
              >
                <MdClose size={20} />
              </button>
              <button
                onClick={() => navigate(-1)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                aria-label="Previous image"
              >
                <MdArrowBackIos size={18} />
              </button>
              <button
                onClick={() => navigate(1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                aria-label="Next image"
              >
                <MdArrowForwardIos size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTASection />
    </motion.div>
  )
}