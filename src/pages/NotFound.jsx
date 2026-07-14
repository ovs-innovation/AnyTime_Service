import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MdHome, MdArrowForward } from 'react-icons/md'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0 },
}

export default function NotFound() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <Helmet>
        <title>404 — Page Not Found | Anytime Services</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="min-h-[85vh] flex items-center justify-center bg-brand-gray dark:bg-secondary-dark relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container-main text-center relative z-10">
          {/* Animated 404 */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, type: 'spring' }}
            className="mb-8"
          >
            <div className="font-heading font-black text-[12rem] leading-none text-primary/10 dark:text-primary/5 select-none">
              404
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="-mt-20 relative z-10"
          >
            <img
              src="/anytime logo.jpg"
              alt="Anytime Services Logo"
              className="w-20 h-20 rounded-full object-cover shadow-lg border border-brand-border dark:border-slate-700 mx-auto mb-6"
            />
            <h1 className="font-heading font-black text-3xl md:text-4xl text-secondary dark:text-white mb-4">
              Oops! Page Not Found
            </h1>
            <p className="text-brand-muted dark:text-slate-400 text-lg max-w-md mx-auto mb-8">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/" className="btn-primary btn-lg" aria-label="Go to homepage">
                <MdHome size={20} />
                Back to Home
              </Link>
              <Link to="/contact" className="btn-outline btn-lg" aria-label="Contact us">
                Contact Us
                <MdArrowForward size={20} />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm">
              {[
                { label: 'Services', to: '/services' },
                { label: 'About Us', to: '/about' },
                { label: 'Careers', to: '/careers' },
                { label: 'Blog', to: '/blog' },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-brand-muted dark:text-slate-400 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
