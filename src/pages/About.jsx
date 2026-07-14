import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { MdVerified, MdGroups, MdEmojiEvents, MdTrendingUp } from 'react-icons/md'
import { Link } from 'react-router-dom'
import SectionHeader from '@components/ui/SectionHeader'
import CTASection from '@components/sections/CTASection'
import { team } from '@data/index'

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0 },
}

const milestones = [
  { year: '2014', title: 'Company Founded', desc: 'Started providing corporate printing services in Noida.' },
  { year: '2016', title: 'Expanded to Signages', desc: 'Began fabricating high-durability LED and ACP signboards.' },
  { year: '2018', title: 'ISO Certification', desc: 'Achieved ISO 9001:2015 certification for quality standards.' },
  { year: '2020', title: 'National Retail Accounts', desc: 'Partnered with retail chains and banks across major Indian metros.' },
  { year: '2022', title: 'Expanded Solutions', desc: 'Added corporate handyman teams, IT support, and product photography.' },
  { year: '2024', title: '10 Years of Excellence', desc: 'Serving 500+ clients across 12 sectors with a premium business track record.' },
]

const values = [
  { icon: MdVerified, title: 'Quality Commitment', desc: 'Unmatched attention to material selection, layout precision, and durable finishes.' },
  { icon: MdGroups, title: 'Customer Satisfaction', desc: 'Customized project management keeping corporate branding goals aligned.' },
  { icon: MdEmojiEvents, title: 'Fast Service', desc: 'Express turnaround times for printing orders and field technician deployment.' },
  { icon: MdTrendingUp, title: 'Core Integrity', desc: 'Fully compliant B2B contracts, transparent pricing, and fair employee practices.' },
]

export default function About() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <Helmet>
        <title>About Us — Anytime Services | 10+ Years of Printing & Branding Excellence</title>
        <meta name="description" content="Learn about Anytime Services — India's trusted printing, custom 3D LED signages, vehicle wraps, and corporate branding company with 10+ years of corporate service." />
        <link rel="canonical" href="https://anytimeservices.in/about" />
      </Helmet>

      {/* Page Header */}
      <div className="bg-hero py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
        <div className="container-main relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-badge bg-white/15 text-white border border-white/20">Our Story</span>
            <h1 className="font-heading font-black text-4xl md:text-5xl text-white mt-4 mb-4">
              About Anytime Services
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              A decade of trust, design expertise, and corporate branding solutions — built with precision, one project at a time.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="section bg-white dark:bg-secondary" aria-labelledby="mission-heading">
        <div className="container-main grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge">Our Mission</span>
            <h2 id="mission-heading" className="section-title mt-3 mb-6">
              Empowering Brands Through Superior Visibility
            </h2>
            <p className="text-brand-muted dark:text-slate-400 leading-relaxed mb-6">
              At Anytime Services, our mission is to deliver high-quality printing, custom signage, and brand activation solutions that captivate audiences and increase visibility for our clients. We combine premium materials with state-of-the-art print technology to bring your branding visions to life.
            </p>
            <p className="text-brand-muted dark:text-slate-400 leading-relaxed mb-8">
              Founded in 2014, we have grown from a local printing startup in Noida to an enterprise-grade corporate signage and brand implementation partner trusted by 500+ clients across India.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[['500+', 'Happy Clients'], ['1000+', 'Projects Done'], ['10+', 'Years Experience'], ['20+', 'Cities Covered']].map(([val, lbl]) => (
                <div key={lbl} className="p-4 rounded-2xl bg-brand-gray dark:bg-secondary-light text-center">
                  <p className="font-heading font-black text-3xl text-primary">{val}</p>
                  <p className="text-brand-muted dark:text-slate-400 text-sm font-semibold">{lbl}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden aspect-square"
          >
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&auto=format&fit=crop"
              alt="Anytime Services premium print production facility"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-brand-gray dark:bg-secondary-dark" aria-labelledby="values-heading">
        <div className="container-main">
          <SectionHeader
            badge="Our Values"
            title="The Principles That Guide Us"
            subtitle="Our core values shape every decision we make — from hiring to client service."
            id="values-heading"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card p-6 group hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                  <v.icon className="text-primary group-hover:text-white transition-colors" size={24} />
                </div>
                <h3 className="font-heading font-bold text-secondary dark:text-white mb-2">{v.title}</h3>
                <p className="text-brand-muted dark:text-slate-400 text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-white dark:bg-secondary" aria-labelledby="timeline-heading">
        <div className="container-main">
          <SectionHeader
            badge="Our Journey"
            title="A Decade of Growth"
            subtitle="From a small startup to India's trusted brand implementation partner."
            id="timeline-heading"
          />
          <div className="mt-14 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-brand-border dark:bg-slate-700 hidden md:block" aria-hidden="true" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`md:flex gap-8 items-center ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className={`card p-6 inline-block max-w-sm ${i % 2 === 0 ? 'md:ml-auto' : ''}`}>
                      <span className="font-heading font-black text-primary text-xl">{m.year}</span>
                      <h3 className="font-heading font-bold text-secondary dark:text-white mt-1 mb-2">{m.title}</h3>
                      <p className="text-brand-muted dark:text-slate-400 text-sm">{m.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-10 h-10 bg-primary rounded-full items-center justify-center flex-shrink-0 relative z-10 shadow-primary">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="section bg-brand-gray dark:bg-secondary-dark" aria-labelledby="team-heading">
        <div className="container-main">
          <SectionHeader
            badge="Leadership Team"
            title="Meet the People Behind Anytime Services"
            subtitle="Experienced professionals with a shared passion for design & branding excellence."
            id="team-heading"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {team.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card p-6 text-center group"
              >
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={`Photo of ${member.name}`}
                    className="w-20 h-20 rounded-2xl object-cover"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <a href={member.linkedin} aria-label={`${member.name} LinkedIn`} target="_blank" rel="noopener noreferrer">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                  </div>
                </div>
                <h3 className="font-heading font-bold text-secondary dark:text-white">{member.name}</h3>
                <p className="text-primary text-xs font-semibold mt-0.5 mb-2">{member.designation}</p>
                <p className="text-brand-muted dark:text-slate-400 text-xs leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </motion.div>
  )
}
