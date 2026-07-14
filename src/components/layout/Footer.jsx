import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MdPhone, MdEmail, MdLocationOn, MdSend,
  MdChevronRight, MdCheckCircle,
} from 'react-icons/md'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const footerLinks = {
  company: [
    { label: 'About Us', to: '/about' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Industries', to: '/industries' },
    { label: 'Careers', to: '/careers' },
    { label: 'Blog', to: '/blog' },
    { label: 'Testimonials', to: '/testimonials' },
    { label: 'Contact Us', to: '/contact' },
  ],
  services: [
    { label: 'Printing Services', to: '/services/printing' },
    { label: 'Corporate Branding', to: '/services/branding' },
    { label: 'LED Sign Boards', to: '/services/led-sign-boards' },
    { label: 'Office Branding', to: '/services/office-branding' },
    { label: 'Vehicle Branding', to: '/services/vehicle-branding' },
    { label: 'IT & Hardware Support', to: '/services/it-hardware-support' },
  ],
  industries: [
    { label: 'Corporate Offices', to: '/industries' },
    { label: 'Retail & Malls', to: '/industries' },
    { label: 'Warehouses', to: '/industries' },
    { label: 'Factories', to: '/industries' },
    { label: 'Banks', to: '/industries' },
    { label: 'Hospitals', to: '/industries' },
  ],
  legal: [
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms & Conditions', to: '/terms' },
    { label: 'Cookie Policy', to: '/cookies' },
    { label: 'Sitemap', to: '/sitemap.xml' },
  ],
}

const socials = [
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer role="contentinfo" className="bg-secondary text-slate-300">
      {/* Newsletter Banner */}
      <div className="bg-gradient-to-r from-primary to-primary-dark">
        <div className="container-main py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading font-bold text-xl text-white">Stay Updated with Industry Insights</h3>
              <p className="text-red-100 text-sm mt-1">Subscribe to our newsletter for branding trends, printing insights & more.</p>
            </div>
            {subscribed ? (
              <div className="flex items-center gap-2 text-white font-semibold">
                <MdCheckCircle size={22} className="text-accent" />
                Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 w-full md:w-auto" aria-label="Newsletter signup">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  aria-label="Email address for newsletter"
                  className="px-4 py-3 rounded-xl text-secondary text-sm flex-1 md:w-64 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="btn bg-secondary text-white hover:bg-secondary-light px-5 rounded-xl"
                >
                  <MdSend size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="container-main py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" aria-label="Anytime Services home">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/anytime logo.jpg"
                  alt="Anytime Services Logo"
                  className="w-14 h-14 rounded-full object-cover shadow-md border border-white/10"
                />
                <span className="font-heading font-black text-xl text-white">
                  Anytime<span className="text-primary">Services</span>
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Trusted partner for premium printing, signage systems, corporate branding, product photography, and facility support services across India.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:+919818662234" className="flex items-center gap-3 text-sm hover:text-primary transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                  <MdPhone size={16} className="text-primary" />
                </div>
                +91 9818662234
              </a>
              <a href="mailto:support@anytimeservices.in" className="flex items-center gap-3 text-sm hover:text-primary transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                  <MdEmail size={16} className="text-primary" />
                </div>
                support@anytimeservices.in
              </a>
              <div className="flex items-start gap-3 text-sm">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MdLocationOn size={16} className="text-primary" />
                </div>
                <span className="text-slate-400">
                  C-61, 2nd Floor, Sector-10,<br />Noida, Uttar Pradesh - 201301
                </span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3 mt-6">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${label} page`}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary flex items-center justify-center transition-all duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-widest mb-5">Company</h4>
            <ul className="space-y-2.5" aria-label="Company links">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-primary transition-colors group"
                  >
                    <MdChevronRight size={14} className="opacity-0 group-hover:opacity-100 -ml-3 group-hover:ml-0 transition-all duration-200 text-primary" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-widest mb-5">Services</h4>
            <ul className="space-y-2.5" aria-label="Services links">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-primary transition-colors group"
                  >
                    <MdChevronRight size={14} className="opacity-0 group-hover:opacity-100 -ml-3 group-hover:ml-0 transition-all duration-200 text-primary" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries + Legal */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-widest mb-5">Industries</h4>
            <ul className="space-y-2.5 mb-8" aria-label="Industries links">
              {footerLinks.industries.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-primary transition-colors group"
                  >
                    <MdChevronRight size={14} className="opacity-0 group-hover:opacity-100 -ml-3 group-hover:ml-0 transition-all duration-200 text-primary" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-widest mb-5">Legal</h4>
            <ul className="space-y-2.5" aria-label="Legal links">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-400 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-main py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Anytime Services. All rights reserved.</p>
          <p className="text-center">
            Designed & Built with ❤️ in India&nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="/sitemap.xml" className="hover:text-primary transition-colors">Sitemap</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
