import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MdSearch, MdCalendarToday, MdArrowForward } from 'react-icons/md'
import SectionHeader from '@components/ui/SectionHeader'
import { blogPosts, blogCategories } from '@data/index'

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0 },
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = blogPosts.filter(
    (p) =>
      (activeCategory === 'All' || p.category === activeCategory) &&
      (p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <Helmet>
        <title>Blog — Anytime Services | Industry Insights & Updates</title>
        <meta name="description" content="Read the latest articles on workforce management, facility services, compliance, and industry trends from the Anytime Services team." />
        <link rel="canonical" href="https://anytimeservices.in/blog" />
      </Helmet>

      {/* Page Header */}
      <div className="bg-hero py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
        <div className="container-main relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-badge bg-white/15 text-white border border-white/20">Insights</span>
            <h1 className="font-heading font-black text-4xl md:text-5xl text-white mt-4 mb-4">
              Blog & Resources
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Expert insights on workforce management, compliance, and industry trends.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="section bg-brand-gray dark:bg-secondary-dark" aria-labelledby="blog-page-heading">
        <div className="container-main">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start mb-10">
            <div>
              <SectionHeader
                badge="Latest Posts"
                title="Industry Insights"
                center={false}
                id="blog-page-heading"
              />
            </div>
            <div className="relative w-full md:w-72">
              <MdSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-muted" size={20} />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search articles..."
                className="form-input pl-11"
                aria-label="Search blog posts"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter by category">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-primary'
                    : 'bg-white dark:bg-secondary-light text-brand-muted dark:text-slate-400 hover:text-primary border border-brand-border dark:border-slate-700'
                }`}
                aria-pressed={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          {filtered.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
                  className="card-hover flex flex-col"
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-xs text-brand-muted dark:text-slate-500 mb-3">
                      <span className="flex items-center gap-1">
                        <MdCalendarToday size={12} />
                        {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </span>
                      <span>· {post.readTime} read</span>
                    </div>
                    <h2 className="font-heading font-bold text-lg text-secondary dark:text-white mb-3 leading-snug line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-brand-muted dark:text-slate-400 text-sm leading-relaxed flex-1 line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-brand-border dark:border-slate-700">
                      <span className="text-xs text-brand-muted dark:text-slate-500">By {post.author}</span>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="text-sm font-semibold text-primary flex items-center gap-1 hover:gap-2 transition-all"
                        aria-label={`Read ${post.title}`}
                      >
                        Read More <MdArrowForward size={14} />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-brand-muted dark:text-slate-400">
              <div className="text-5xl mb-4">📝</div>
              <p className="text-lg font-medium">No articles found.</p>
              <p className="text-sm mt-1">Try a different category or search term.</p>
            </div>
          )}
        </div>
      </section>
    </motion.div>
  )
}
