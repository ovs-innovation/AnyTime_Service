import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MdPhone, MdArrowForward, MdVerified, MdStar } from 'react-icons/md'

const stagger = {
  animate: { transition: { staggerChildren: 0.12 } },
}
const item = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function HeroSection() {
  return (
    <section
      aria-label="Hero section"
      className="relative min-h-[92vh] flex items-center bg-hero bg-grid overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container-main relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div variants={stagger} initial="initial" animate="animate">
            {/* Trust Badge */}
            <motion.div variants={item} className="inline-flex items-center gap-2 mb-8">
              <div className="flex items-center gap-2 bg-secondary/5 dark:bg-white/10 backdrop-blur-sm border border-secondary/10 dark:border-white/20 rounded-full px-4 py-2">
                <MdVerified className="text-accent" size={18} />
                <span className="text-secondary dark:text-white text-xs font-semibold tracking-wide">ISO Certified · Background Verified</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="font-heading font-black text-4xl sm:text-5xl xl:text-6xl text-secondary dark:text-white leading-[1.05] mb-6"
            >
              Professional{' '}
              <span className="relative inline-block">
                <span className="text-gradient bg-gradient-to-r from-primary via-red-400 to-accent bg-clip-text text-transparent">
                  Branding
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-accent"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </span>{' '}
              & Corporate Solutions
              <br />Across India
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={item}
              className="text-brand-muted dark:text-slate-300 text-lg leading-relaxed mb-10 max-w-xl"
            >
              Trusted Printing, 3D LED Sign Boards, Office Branding, Vehicle Wraps, and Professional Support Services — executed with design precision and high-impact visibility.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-4 mb-12">
              <Link
                to="/contact"
                className="btn-primary btn-lg group"
                aria-label="Request a quote"
              >
                Request Quote
                <MdArrowForward className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <a
                href="tel:+919818662234"
                className="btn btn-lg border-2 border-secondary/20 dark:border-white/30 text-secondary dark:text-white hover:bg-secondary/5 dark:hover:bg-white/10 hover:border-secondary/40 dark:hover:border-white/60 backdrop-blur-sm transition-all"
                aria-label="Call us now"
              >
                <MdPhone size={20} />
                Call Now
              </a>
            </motion.div>

            {/* Ratings */}
            <motion.div variants={item} className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {['men/10', 'women/11', 'men/12', 'women/13', 'men/14'].map((u, i) => (
                  <img
                    key={i}
                    src={`https://randomuser.me/api/portraits/${u}.jpg`}
                    alt={`Client ${i + 1}`}
                    className="w-9 h-9 rounded-full border-2 border-secondary object-cover"
                    loading="lazy"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <MdStar key={i} className="text-accent" size={16} />
                  ))}
                </div>
                <p className="text-brand-muted dark:text-slate-400 text-xs mt-0.5">
                  <span className="text-secondary dark:text-white font-bold">4.9/5</span> from 500+ clients
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] max-h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&auto=format&fit=crop"
                alt="Professional workforce team"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />

              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute top-6 left-6 glass rounded-2xl p-4 text-white"
              >
                <p className="text-2xl font-heading font-black text-primary">500+</p>
                <p className="text-xs text-slate-300">Happy Clients</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
                className="absolute bottom-24 right-6 glass rounded-2xl p-4 text-white"
              >
                <p className="text-2xl font-heading font-black text-accent">1000+</p>
                <p className="text-xs text-slate-300">Completed Projects</p>
              </motion.div>

              <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <MdVerified className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">ISO 9001:2015 Certified</p>
                    <p className="text-slate-300 text-xs">High-quality materials & expert execution</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative ring */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-primary/30 rounded-full" aria-hidden="true" />
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-accent/20 rounded-full blur-lg" aria-hidden="true" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        aria-hidden="true"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-secondary/30 dark:to-white/40" />
        <span className="text-secondary/40 dark:text-white/40 text-xs tracking-widest">SCROLL</span>
      </motion.div>
    </section>
  )
}
