import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MdArrowForward, MdPhone } from 'react-icons/md'

export default function CTASection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="section relative overflow-hidden bg-primary"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-black/10 rounded-full" />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-grid opacity-10" />
      </div>

      <div className="container-main relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            Ready to Get Started?
          </span>
          <h2
            id="cta-heading"
            className="font-heading font-black text-3xl md:text-5xl text-white mb-6 leading-tight"
          >
            Let's Build Your Ideal<br />Workforce Today
          </h2>
          <p className="text-red-100 text-lg max-w-xl mx-auto mb-10">
            Request a free consultation and get a customized staffing plan within 24 hours.
            No commitment, just solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="btn btn-lg bg-white text-primary hover:bg-slate-50 shadow-xl"
              aria-label="Request a free quote"
            >
              Request Free Quote
              <MdArrowForward size={20} />
            </Link>
            <a
              href="tel:+919818662234"
              className="btn btn-lg border-2 border-white/50 text-white hover:bg-white/10"
              aria-label="Call us now"
            >
              <MdPhone size={20} />
              +91 9818662234
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
