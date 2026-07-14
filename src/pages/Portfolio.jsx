import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { MdZoomIn, MdLocationOn, MdBusiness } from 'react-icons/md';
import { portfolioItems, portfolioCategories } from '@data/portfolio';
import BeforeAfterSlider from '@components/ui/BeforeAfterSlider';
import SectionHeader from '@components/ui/SectionHeader';
import CTASection from '@components/sections/CTASection';

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0 },
};

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <Helmet>
        <title>Portfolio — Anytime Services | Corporate Projects Portfolio</title>
        <meta name="description" content="View completed projects by Anytime Services: Signages, LED Boards, Fleet wraps, Office Branding, and printing jobs for Tata, Apollo, HDFC & Zoho." />
        <link rel="canonical" href="https://anytimeservices.in/portfolio" />
      </Helmet>

      {/* Page Header */}
      <div className="bg-hero py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
        <div className="container-main relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-badge bg-white/15 text-white border border-white/20">Our Work</span>
            <h1 className="font-heading font-black text-4xl md:text-5xl text-white mt-4 mb-4">
              Project Portfolio
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Showcasing visual branding transformations, LED storefronts, and premium print orders completed across India.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Before & After Interactive Slider Section */}
      <section className="section bg-white dark:bg-secondary border-b border-brand-border dark:border-slate-800" aria-labelledby="comparison-heading">
        <div className="container-main">
          <SectionHeader
            badge="Before vs After"
            title="Branding Transformation Comparison"
            subtitle="Drag the slider on each panel to see how we transform raw spaces into premium, high-impact brand installations."
            id="comparison-heading"
          />

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {/* Slider 1 — Canopy Branding */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-center text-sm font-semibold text-brand-muted dark:text-slate-400 uppercase tracking-wider mb-4">
                Canopy Signage Installation
              </p>
              <BeforeAfterSlider
                beforeImage={new URL('../assets/Canopy-3-scaled.webp', import.meta.url).href}
                afterImage={new URL('../assets/Canopy-1-scaled.webp', import.meta.url).href}
                beforeLabel="Before"
                afterLabel="After"
              />
            </motion.div>

            {/* Slider 2 — Acrylic 3D Sign */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-center text-sm font-semibold text-brand-muted dark:text-slate-400 uppercase tracking-wider mb-4">
                Acrylic Non-Lit 3D Signage
              </p>
              <BeforeAfterSlider
                beforeImage={new URL('../assets/Arylic-Nonlit-3d-5-scaled.webp', import.meta.url).href}
                afterImage={new URL('../assets/Arylic-Nonlit-3d-4-scaled.webp', import.meta.url).href}
                beforeLabel="Before"
                afterLabel="After"
              />
            </motion.div>
          </div>
        </div>
      </section>


      {/* Grid Portfolio Showcase Section */}
      <section className="section bg-brand-gray dark:bg-secondary-dark" aria-labelledby="portfolio-grid-heading">
        <div className="container-main">
          <SectionHeader
            badge="Completed Projects"
            title="Browse Our Major Client Deployments"
            subtitle="Filters by category to review materials, layouts, and specifications of completed projects."
            id="portfolio-grid-heading"
          />

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter projects by category">
            {portfolioCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${activeCategory === cat
                  ? 'bg-primary text-white shadow-primary'
                  : 'bg-white dark:bg-secondary-light text-brand-muted dark:text-slate-400 hover:text-primary border border-brand-border dark:border-slate-700'
                  }`}
                aria-pressed={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="card-hover group flex flex-col cursor-pointer overflow-hidden rounded-3xl"
                  onClick={() => setSelectedProject(project)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View details of ${project.title}`}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(project)}
                >
                  {/* Image container */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/40 transition-all duration-300 flex items-center justify-center">
                      <MdZoomIn className="text-white opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300" size={40} />
                    </div>
                    <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-1 bg-white dark:bg-secondary-light">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-primary mb-2">
                      <MdBusiness size={14} /> {project.client}
                    </div>
                    <h3 className="font-heading font-bold text-lg text-secondary dark:text-white mb-2 leading-snug group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-brand-muted dark:text-slate-400 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500 font-medium">
                      <MdLocationOn size={14} /> {project.location}
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedProject.title} project details`}
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              transition={{ duration: 0.3, type: 'spring' }}
              className="relative max-w-2xl w-full bg-white dark:bg-secondary-light rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Cover Image */}
              <div className="relative aspect-video">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors"
                  aria-label="Close details"
                >
                  ✕
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-8">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                  <span className="px-3 py-1 bg-secondary text-slate-300 text-xs font-semibold rounded-full">
                    {selectedProject.client}
                  </span>
                </div>
                <h2 className="font-heading font-black text-2xl text-secondary dark:text-white mb-4 leading-tight">
                  {selectedProject.title}
                </h2>
                <div className="flex items-center gap-1.5 text-sm text-brand-muted dark:text-slate-400 mb-6 font-medium">
                  <MdLocationOn size={16} className="text-primary" /> {selectedProject.location}
                </div>

                <div className="space-y-4 text-brand-text dark:text-slate-300 text-sm leading-relaxed border-t border-brand-border dark:border-slate-700 pt-6">
                  <p><strong>Overview:</strong> {selectedProject.description}</p>
                  <p><strong>Scope & Deliverables:</strong> {selectedProject.details}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTASection />
    </motion.div>
  );
}
