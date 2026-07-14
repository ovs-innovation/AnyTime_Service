import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import {
  MdLocationOn, MdSchedule, MdWork, MdUploadFile,
  MdCheckCircle, MdExpandMore, MdExpandLess, MdSearch,
} from 'react-icons/md'
import { jobs, departments } from '@data/jobs'
import SectionHeader from '@components/ui/SectionHeader'

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0 },
}

function JobCard({ job }) {
  const [expanded, setExpanded] = useState(false)
  const [applying, setApplying] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (data) => {
    console.log('Application:', data, 'for:', job.title)
    setSubmitted(true)
    reset()
    setTimeout(() => { setApplying(false); setSubmitted(false) }, 3000)
  }

  return (
    <motion.article
      layout
      className="card overflow-visible"
    >
      <div
        className="p-6 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
        role="button"
        aria-expanded={expanded}
        aria-controls={`job-${job.id}`}
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setExpanded(!expanded)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                {job.department}
              </span>
              <span className="px-3 py-1 bg-brand-gray dark:bg-secondary-light text-brand-muted dark:text-slate-400 text-xs rounded-full">
                {job.type}
              </span>
            </div>
            <h3 className="font-heading font-bold text-lg text-secondary dark:text-white">{job.title}</h3>
            <div className="flex flex-wrap gap-4 mt-2 text-sm text-brand-muted dark:text-slate-400">
              <span className="flex items-center gap-1">
                <MdLocationOn size={15} className="text-primary" /> {job.location}
              </span>
              <span className="flex items-center gap-1">
                <MdWork size={15} className="text-primary" /> {job.experience}
              </span>
              <span className="flex items-center gap-1">
                <MdSchedule size={15} className="text-primary" /> {job.salary}
              </span>
            </div>
          </div>
          <div className="text-brand-muted dark:text-slate-400">
            {expanded ? <MdExpandLess size={24} /> : <MdExpandMore size={24} />}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            id={`job-${job.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-brand-border dark:border-slate-700 pt-4">
              <p className="text-brand-muted dark:text-slate-400 text-sm mb-4">{job.description}</p>
              <h4 className="font-semibold text-secondary dark:text-white text-sm mb-2">Requirements:</h4>
              <ul className="space-y-1 mb-6">
                {job.requirements.map((r) => (
                  <li key={r} className="flex items-center gap-2 text-sm text-brand-muted dark:text-slate-400">
                    <MdCheckCircle className="text-primary flex-shrink-0" size={16} />
                    {r}
                  </li>
                ))}
              </ul>

              {!applying ? (
                <button
                  onClick={() => setApplying(true)}
                  className="btn-primary"
                  aria-label={`Apply for ${job.title}`}
                >
                  Apply Now
                </button>
              ) : submitted ? (
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <MdCheckCircle size={20} /> Application submitted! We'll contact you soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" aria-label={`Application form for ${job.title}`}>
                  <h4 className="font-heading font-bold text-secondary dark:text-white">Apply for {job.title}</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="form-label" htmlFor={`name-${job.id}`}>Full Name *</label>
                      <input
                        id={`name-${job.id}`}
                        className="form-input"
                        placeholder="Your full name"
                        {...register('name', { required: 'Name is required' })}
                      />
                      {errors.name && <p className="form-error">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="form-label" htmlFor={`email-${job.id}`}>Email *</label>
                      <input
                        id={`email-${job.id}`}
                        type="email"
                        className="form-input"
                        placeholder="your@email.com"
                        {...register('email', { required: 'Email is required' })}
                      />
                      {errors.email && <p className="form-error">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label className="form-label" htmlFor={`phone-${job.id}`}>Phone *</label>
                      <input
                        id={`phone-${job.id}`}
                        type="tel"
                        className="form-input"
                        placeholder="+91 XXXXX XXXXX"
                        {...register('phone', { required: 'Phone is required' })}
                      />
                      {errors.phone && <p className="form-error">{errors.phone.message}</p>}
                    </div>
                    <div>
                      <label className="form-label" htmlFor={`exp-${job.id}`}>Years of Experience</label>
                      <input
                        id={`exp-${job.id}`}
                        className="form-input"
                        placeholder="e.g. 3 years"
                        {...register('experience')}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="form-label" htmlFor={`cover-${job.id}`}>Cover Letter / Message</label>
                    <textarea
                      id={`cover-${job.id}`}
                      rows={3}
                      className="form-input resize-none"
                      placeholder="Tell us why you're a great fit..."
                      {...register('cover')}
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor={`resume-${job.id}`}>
                      <span className="flex items-center gap-2 cursor-pointer">
                        <MdUploadFile size={18} className="text-primary" />
                        Upload Resume (PDF/DOC)
                      </span>
                    </label>
                    <input
                      id={`resume-${job.id}`}
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="form-input file:mr-3 file:py-1 file:px-3 file:rounded-lg file:border-0 file:bg-primary/10 file:text-primary file:text-xs file:font-semibold cursor-pointer"
                      {...register('resume')}
                    />
                  </div>
                  <div className="flex gap-3">
                    <button type="submit" className="btn-primary">Submit Application</button>
                    <button type="button" onClick={() => setApplying(false)} className="btn-ghost">Cancel</button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}

export default function Careers() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = jobs.filter(
    (j) =>
      (activeFilter === 'All' || j.department === activeFilter) &&
      (j.title.toLowerCase().includes(search.toLowerCase()) ||
        j.location.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <Helmet>
        <title>Careers — Join Anytime Services | Job Openings</title>
        <meta name="description" content="Explore exciting career opportunities at Anytime Services. Apply for jobs in Security, Housekeeping, Technical, HR, Sales and Operations departments." />
        <link rel="canonical" href="https://anytimeservices.in/careers" />
      </Helmet>

      {/* Page Header */}
      <div className="bg-hero py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
        <div className="container-main relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-badge bg-white/15 text-white border border-white/20">Join Our Team</span>
            <h1 className="font-heading font-black text-4xl md:text-5xl text-white mt-4 mb-4">
              Build Your Career with Us
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              We are always looking for driven, passionate professionals to grow with Anytime Services.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="section bg-brand-gray dark:bg-secondary-dark" aria-labelledby="jobs-heading">
        <div className="container-main">
          <SectionHeader
            badge="Open Positions"
            title="Current Job Openings"
            subtitle="Find your next opportunity with one of India's fastest-growing manpower companies."
            id="jobs-heading"
          />

          {/* Filters */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1 max-w-md">
              <MdSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-muted" size={20} />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by role or location..."
                className="form-input pl-11"
                aria-label="Search jobs"
              />
            </div>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by department">
              {departments.map((dep) => (
                <button
                  key={dep}
                  onClick={() => setActiveFilter(dep)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    activeFilter === dep
                      ? 'bg-primary text-white shadow-primary'
                      : 'bg-white dark:bg-secondary-light text-brand-muted dark:text-slate-400 hover:border-primary border border-brand-border dark:border-slate-700'
                  }`}
                  aria-pressed={activeFilter === dep}
                >
                  {dep}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {filtered.length > 0 ? (
              filtered.map((job) => <JobCard key={job.id} job={job} />)
            ) : (
              <div className="text-center py-16 text-brand-muted dark:text-slate-400">
                <div className="text-5xl mb-4">🔍</div>
                <p className="text-lg font-medium">No jobs found matching your criteria.</p>
                <p className="text-sm mt-1">Try a different department or search term.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
