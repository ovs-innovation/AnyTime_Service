import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'
import {
  MdPhone, MdEmail, MdLocationOn, MdSchedule,
  MdSend, MdCheckCircle, MdBusiness,
} from 'react-icons/md'

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0 },
}

const serviceOptions = [
  'Printing Services',
  'Corporate Branding',
  'LED Sign Boards',
  'Office Branding',
  'Vehicle Branding',
  'Product Photography',
  'IT & Hardware Support',
  'Handyman Services',
  'Other',
]

const businessHours = [
  { day: 'Monday – Friday', hours: '9:00 AM – 7:00 PM' },
  { day: 'Saturday', hours: '9:00 AM – 4:00 PM' },
  { day: 'Sunday', hours: 'Emergency Calls Only' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      company: '',
      phone: '',
      email: '',
      service: '',
      subject: '',
      message: '',
    }
  })

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/api/contact', data);
      if (response.data.success) {
        toast.success(response.data.message || 'Message sent successfully!');
        setSubmitted(true);
        reset();
      } else {
        toast.error(response.data.message || 'Failed to send message.');
      }
    } catch (error) {
      console.error('Contact submission error:', error);
      const serverMessage = error.response?.data?.message;
      const validationErrors = error.response?.data?.errors;
      
      if (validationErrors) {
        const firstError = Object.values(validationErrors)[0];
        toast.error(firstError || 'Please correct the validation errors.');
      } else {
        toast.error(serverMessage || 'Could not connect to the mail server. Please try again later.');
      }
    }
  }

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <Helmet>
        <title>Contact Us — Anytime Services | Get a Free Quote</title>
        <meta name="description" content="Contact Anytime Services for printing, LED signage, corporate branding, vehicle wraps, or office branding requirements. Get a free quote within 4 hours." />
        <link rel="canonical" href="https://anytimeservices.in/contact" />
      </Helmet>

      {/* Page Header */}
      <div className="bg-hero py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
        <div className="container-main relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-badge bg-white/15 text-white border border-white/20">Get In Touch</span>
            <h1 className="font-heading font-black text-4xl md:text-5xl text-white mt-4 mb-4">
              Contact Us
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Tell us your requirements and our team will respond within 4 hours with a customized solution.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="section bg-brand-gray dark:bg-secondary-dark" aria-labelledby="contact-heading">
        <div className="container-main">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 id="contact-heading" className="font-heading font-bold text-2xl text-secondary dark:text-white mb-6">
                  Let's Start a Conversation
                </h2>

                <div className="space-y-4">
                  {[
                    { icon: MdPhone, label: 'Phone', value: '+91 9818662234', href: 'tel:+919818662234' },
                    { icon: MdEmail, label: 'Email', value: 'support@anytimeservices.in', href: 'mailto:support@anytimeservices.in' },
                    { icon: MdBusiness, label: 'Sales', value: 'support@anytimeservices.in', href: 'mailto:support@anytimeservices.in' },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-secondary-light border border-brand-border dark:border-slate-700 hover:border-primary/40 transition-all group"
                    >
                      <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary rounded-xl flex items-center justify-center transition-colors flex-shrink-0">
                        <item.icon className="text-primary group-hover:text-white transition-colors" size={22} />
                      </div>
                      <div>
                        <p className="text-xs text-brand-muted dark:text-slate-500 font-medium">{item.label}</p>
                        <p className="font-semibold text-secondary dark:text-white text-sm">{item.value}</p>
                      </div>
                    </a>
                  ))}

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-secondary-light border border-brand-border dark:border-slate-700">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MdLocationOn className="text-primary" size={22} />
                    </div>
                    <div>
                      <p className="text-xs text-brand-muted dark:text-slate-500 font-medium mb-1">Head Office</p>
                      <p className="font-semibold text-secondary dark:text-white text-sm leading-relaxed">
                        123, Business Park, Andheri East,<br />Mumbai – 400069, Maharashtra, India
                      </p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="mt-6 p-5 rounded-2xl bg-white dark:bg-secondary-light border border-brand-border dark:border-slate-700">
                  <div className="flex items-center gap-2 mb-4">
                    <MdSchedule className="text-primary" size={20} />
                    <h3 className="font-semibold text-secondary dark:text-white">Business Hours</h3>
                  </div>
                  <div className="space-y-2">
                    {businessHours.map((bh) => (
                      <div key={bh.day} className="flex justify-between text-sm">
                        <span className="text-brand-muted dark:text-slate-400">{bh.day}</span>
                        <span className="font-medium text-secondary dark:text-white">{bh.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="card p-8"
              >
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <MdCheckCircle className="text-primary" size={40} />
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-secondary dark:text-white mb-3">
                      Message Received!
                    </h3>
                    <p className="text-brand-muted dark:text-slate-400 max-w-sm mx-auto">
                      Thank you for reaching out. Our team will contact you within 4 business hours with a customized proposal.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-primary mt-6"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-heading font-bold text-xl text-secondary dark:text-white mb-6">
                      Request a Free Quote
                    </h2>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-5"
                      aria-label="Contact form"
                      noValidate
                    >
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="form-label" htmlFor="contact-name">Full Name *</label>
                          <input
                            id="contact-name"
                            type="text"
                            className="form-input"
                            placeholder="Your full name"
                            {...register('name', {
                              required: 'Name is required',
                              minLength: { value: 2, message: 'Name must be at least 2 characters long' }
                            })}
                          />
                          {errors.name && <p className="form-error">{errors.name.message}</p>}
                        </div>
                        <div>
                          <label className="form-label" htmlFor="contact-company">Company Name</label>
                          <input
                            id="contact-company"
                            type="text"
                            className="form-input"
                            placeholder="Your company name"
                            {...register('company')}
                          />
                        </div>
                        <div>
                          <label className="form-label" htmlFor="contact-phone">Phone Number *</label>
                          <input
                            id="contact-phone"
                            type="tel"
                            className="form-input"
                            placeholder="+91 XXXXX XXXXX"
                            {...register('phone', {
                              required: 'Phone is required',
                              pattern: { value: /^[+\d\s-]{8,15}$/, message: 'Invalid phone number' },
                            })}
                          />
                          {errors.phone && <p className="form-error">{errors.phone.message}</p>}
                        </div>
                        <div>
                          <label className="form-label" htmlFor="contact-email">Email Address *</label>
                          <input
                            id="contact-email"
                            type="email"
                            className="form-input"
                            placeholder="your@email.com"
                            {...register('email', {
                              required: 'Email is required',
                              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
                            })}
                          />
                          {errors.email && <p className="form-error">{errors.email.message}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="form-label" htmlFor="contact-service">Service Required *</label>
                        <select
                          id="contact-service"
                          className="form-input"
                          {...register('service', { required: 'Please select a service' })}
                        >
                          <option value="">Select a service...</option>
                          {serviceOptions.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                        {errors.service && <p className="form-error">{errors.service.message}</p>}
                      </div>

                      <div>
                        <label className="form-label" htmlFor="contact-subject">Subject *</label>
                        <input
                          id="contact-subject"
                          type="text"
                          className="form-input"
                          placeholder="Subject of your enquiry"
                          {...register('subject', {
                            required: 'Subject is required',
                            minLength: { value: 5, message: 'Subject must be at least 5 characters long' }
                          })}
                        />
                        {errors.subject && <p className="form-error">{errors.subject.message}</p>}
                      </div>

                      <div>
                        <label className="form-label" htmlFor="contact-message">Message *</label>
                        <textarea
                          id="contact-message"
                          rows={5}
                          className="form-input resize-none"
                          placeholder="Describe your requirements — number of staff, location, duration, etc."
                          {...register('message', {
                            required: 'Message is required',
                            minLength: { value: 20, message: 'Please provide more detail (min 20 characters)' }
                          })}
                        />
                        {errors.message && <p className="form-error">{errors.message.message}</p>}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary btn-lg w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Submit contact form"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            <MdSend size={20} />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </motion.div>
            </div>
          </div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 rounded-2xl overflow-hidden shadow-card border border-brand-border dark:border-slate-700"
          >
            <iframe
              title="Anytime Services Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.6499!2d72.8561!3d19.1136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA2JzQ5LjAiTiA3MsKwNTEnMjEuOSJF!5e0!3m2!1sen!2sin!4v1680000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Anytime Services office location on Google Maps"
            />
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
