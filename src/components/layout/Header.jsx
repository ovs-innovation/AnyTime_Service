import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useDarkMode } from '@context/DarkModeContext'
import {
  MdMenu, MdClose, MdDarkMode, MdLightMode, MdPhone, MdChevronRight,
  MdKeyboardArrowDown,
  MdPrint, MdBrandingWatermark, MdLightbulb, MdBusiness,
  MdDirectionsCar, MdPhotoCamera, MdComputer, MdConstruction
} from 'react-icons/md'

const serviceLinks = [
  { icon: MdPrint, label: 'Printing Services', to: '/services/printing' },
  { icon: MdBrandingWatermark, label: 'Corporate Branding', to: '/services/branding' },
  { icon: MdLightbulb, label: 'LED Sign Boards', to: '/services/led-sign-boards' },
  { icon: MdBusiness, label: 'Office Branding', to: '/services/office-branding' },
  { icon: MdDirectionsCar, label: 'Vehicle Branding', to: '/services/vehicle-branding' },
  { icon: MdPhotoCamera, label: 'Product Photography', to: '/services/product-photography' },
  { icon: MdComputer, label: 'IT & Hardware', to: '/services/it-hardware-support' },
  { icon: MdConstruction, label: 'Handyman Services', to: '/services/handyman-services' },
]

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services', hasMega: true },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Industries', to: '/industries' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Blog', to: '/blog' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  const { isDark, toggle } = useDarkMode()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const location = useLocation()
  const megaRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setMegaOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-secondary text-slate-300 text-xs py-2">
        <div className="container-main flex justify-between items-center">
          <span className="flex items-center gap-1">
            <span className="text-primary font-bold">📍</span> C-61, 2nd Floor, Sector-10, Noida, UP - 201301
          </span>
          <div className="flex items-center gap-6">
            <a href="tel:+919818662234" className="flex items-center gap-1 hover:text-primary transition-colors">
              <MdPhone size={14} /> +91 9818662234
            </a>
            <a href="mailto:support@anytimeservices.in" className="hover:text-primary transition-colors">
              support@anytimeservices.in
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        role="banner"
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 dark:bg-secondary/95 backdrop-blur-md shadow-lg border-b border-brand-border dark:border-slate-700'
            : 'bg-white dark:bg-secondary border-b border-brand-border dark:border-slate-700'
        }`}
      >
        <div className="container-main flex items-center justify-between h-16 lg:h-20">
          <Link to="/" aria-label="Anytime Services Home" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/anytime logo.jpg"
              alt="Anytime Services Logo"
              className="w-12 h-12 lg:w-16 lg:h-16 rounded-full object-cover shadow-md border border-brand-border dark:border-slate-700"
            />
            <div>
              <span className="font-heading font-black text-lg lg:text-xl text-secondary dark:text-white tracking-tight">
                Anytime<span className="text-primary">Services</span>
              </span>
              <p className="hidden lg:block text-[10px] text-brand-muted dark:text-slate-400 font-medium leading-none">
                Printing & Branding Solutions
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav role="navigation" aria-label="Main navigation" className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.hasMega ? (
                <div
                  key={link.label}
                  className="relative"
                  ref={megaRef}
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <button
                    aria-haspopup="true"
                    aria-expanded={megaOpen}
                    className={`nav-link flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-brand-gray dark:hover:bg-secondary-light ${
                      location.pathname.startsWith('/services') ? 'text-primary' : ''
                    }`}
                  >
                    {link.label}
                    <MdKeyboardArrowDown
                      className={`transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[640px] bg-white dark:bg-secondary-light rounded-2xl shadow-2xl border border-brand-border dark:border-slate-700 p-6 z-50"
                        role="menu"
                        aria-label="Services submenu"
                      >
                        <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted dark:text-slate-400 mb-4 pb-3 border-b border-brand-border dark:border-slate-700">
                          Our Services
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          {serviceLinks.map((sl) => (
                            <Link
                              key={sl.to}
                              to={sl.to}
                              role="menuitem"
                              className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 dark:hover:bg-primary/10 group transition-all duration-200"
                            >
                              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-200">
                                <sl.icon className="text-primary group-hover:text-white transition-colors duration-200" size={18} />
                              </div>
                              <span className="text-sm font-medium text-brand-text dark:text-slate-200 group-hover:text-primary dark:group-hover:text-primary transition-colors">
                                {sl.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-brand-border dark:border-slate-700">
                          <Link
                            to="/services"
                            className="flex items-center justify-between p-3 rounded-xl bg-primary/5 hover:bg-primary hover:text-white group transition-all duration-200"
                          >
                            <span className="text-sm font-semibold text-primary group-hover:text-white">View All Services</span>
                            <MdChevronRight className="text-primary group-hover:text-white" size={18} />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={link.label}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `nav-link px-3 py-2 rounded-lg hover:bg-brand-gray dark:hover:bg-secondary-light ${
                      isActive ? 'text-primary bg-primary/5 dark:bg-primary/10' : ''
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Dark Mode */}
            <button
              onClick={toggle}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 rounded-lg text-brand-muted dark:text-slate-400 hover:text-primary dark:hover:text-primary hover:bg-brand-gray dark:hover:bg-secondary-light transition-all duration-200"
            >
              {isDark ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
            </button>

            {/* CTA */}
            <Link
              to="/contact"
              className="hidden md:inline-flex btn-primary btn-sm lg:btn text-sm"
              aria-label="Request a quote"
            >
              Request Quote
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="lg:hidden p-2 rounded-lg text-brand-text dark:text-slate-200 hover:bg-brand-gray dark:hover:bg-secondary-light transition-colors"
            >
              {mobileOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              id="mobile-menu"
              role="navigation"
              aria-label="Mobile navigation"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white dark:bg-secondary z-50 overflow-y-auto shadow-2xl"
            >
              <div className="flex items-center justify-between p-5 border-b border-brand-border dark:border-slate-700">
                <Link to="/" className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-black text-sm">A</span>
                  </div>
                  <span className="font-heading font-black text-secondary dark:text-white">
                    Anytime<span className="text-primary">Services</span>
                  </span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="p-2 rounded-lg hover:bg-brand-gray dark:hover:bg-secondary-light"
                >
                  <MdClose size={20} className="text-brand-text dark:text-slate-200" />
                </button>
              </div>

              <div className="p-5 space-y-1">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                          isActive
                            ? 'bg-primary text-white'
                            : 'text-brand-text dark:text-slate-200 hover:bg-brand-gray dark:hover:bg-secondary-light'
                        }`
                      }
                    >
                      {link.label}
                      <MdChevronRight size={16} />
                    </NavLink>
                    {link.hasMega && (
                      <div className="pl-4 mt-1 space-y-0.5">
                        {serviceLinks.map((sl) => (
                          <Link
                            key={sl.to}
                            to={sl.to}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-brand-muted dark:text-slate-400 hover:text-primary dark:hover:text-primary hover:bg-primary/5 transition-colors"
                          >
                            <sl.icon size={14} />
                            {sl.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="p-5 border-t border-brand-border dark:border-slate-700 space-y-3">
                <Link to="/contact" className="btn-primary w-full justify-center">Request Quote</Link>
                <a href="tel:+919818662234" className="btn-outline w-full justify-center">
                  <MdPhone size={16} /> Call Now
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
