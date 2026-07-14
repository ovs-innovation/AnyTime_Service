import { useState } from 'react'
import { motion } from 'framer-motion'
import { MdEmail, MdCheckCircle, MdSend } from 'react-icons/md'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    // Simulate submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setEmail('')
    }, 800)
  }

  return (
    <section aria-labelledby="newsletter-heading" className="section bg-secondary dark:bg-secondary-dark relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="container-main relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex w-16 h-16 bg-primary/20 rounded-2xl items-center justify-center mb-6 mx-auto">
              <MdEmail size={32} className="text-primary" />
            </div>

            <h2
              id="newsletter-heading"
              className="font-heading font-black text-3xl md:text-4xl text-white mb-4"
            >
              Stay Updated With{' '}
              <span className="text-primary">Anytime Services</span>
            </h2>

            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Subscribe to receive project showcases, industry insights, service updates,
              and exclusive corporate offer packages directly to your inbox.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-4 p-8 bg-white/5 border border-white/10 rounded-3xl"
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                  <MdCheckCircle size={36} className="text-green-400" />
                </div>
                <p className="text-white font-bold text-xl">You're subscribed!</p>
                <p className="text-slate-400 text-sm">
                  Thanks for joining. We'll send you only the best updates.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                aria-label="Newsletter subscription form"
              >
                <div className="flex-1 relative">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Your email address
                  </label>
                  <MdEmail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"
                    aria-hidden="true"
                  />
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your business email address"
                    required
                    className="w-full pl-11 pr-4 py-4 bg-white/10 border border-white/15 rounded-2xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary rounded-2xl py-4 px-6 flex items-center gap-2 justify-center whitespace-nowrap disabled:opacity-70"
                  aria-label="Subscribe to newsletter"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <MdSend size={18} />
                      Subscribe
                    </>
                  )}
                </button>
              </form>
            )}

            <p className="text-slate-600 text-xs mt-4">
              No spam, ever. Unsubscribe anytime. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
