import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MdArrowForward, MdCalendarToday } from 'react-icons/md'
import SectionHeader from '@components/ui/SectionHeader'
import { blogPosts } from '@data/index'

export default function BlogPreview() {
  const posts = blogPosts.slice(0, 3)

  return (
    <section aria-labelledby="blog-heading" className="section bg-brand-gray dark:bg-secondary-dark">
      <div className="container-main">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeader
            badge="Latest Insights"
            title="Industry News & Updates"
            subtitle="Stay informed with the latest trends in manpower and facility services."
            center={false}
          />
          <Link to="/blog" className="btn-outline flex-shrink-0" aria-label="View all blog posts">
            View All Posts
            <MdArrowForward size={18} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-hover group flex flex-col"
            >
              <div className="relative overflow-hidden aspect-[16/9]">
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
                  <div className="flex items-center gap-1">
                    <MdCalendarToday size={12} />
                    {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </div>
                  <span>·</span>
                  <span>{post.readTime} read</span>
                </div>

                <h3 className="font-heading font-bold text-secondary dark:text-white text-lg leading-snug mb-3 group-hover:text-primary dark:group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-brand-muted dark:text-slate-400 text-sm leading-relaxed flex-1 line-clamp-2 mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-brand-border dark:border-slate-700">
                  <span className="text-xs text-brand-muted dark:text-slate-500">By {post.author}</span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-sm font-semibold text-primary flex items-center gap-1 group/link"
                    aria-label={`Read more about ${post.title}`}
                  >
                    Read More
                    <MdArrowForward size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
