import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import HeroSection from '@components/sections/HeroSection'
import StatsSection from '@components/sections/StatsSection'
import ServicesSection from '@components/sections/ServicesSection'
import TrustedServicesSection from '@components/sections/TrustedServicesSection'
import WhyChooseUs from '@components/sections/WhyChooseUs'
import IndustriesSection from '@components/sections/IndustriesSection'
import ClientsSection from '@components/sections/ClientsSection'
import TestimonialsSection from '@components/sections/TestimonialsSection'
import NewsletterSection from '@components/sections/NewsletterSection'
import CTASection from '@components/sections/CTASection'
import BlogPreview from '@components/sections/BlogPreview'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

export default function Home() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <Helmet>
        <title>Anytime Services — Premium Printing, Signage, Branding & Corporate Solutions</title>
        <meta name="description" content="Anytime Services is India's leading provider of custom 3D LED signs, flex board printing, corporate branding, office frost films, vehicle wraps, and product photography." />
        <link rel="canonical" href="https://anytimeservices.in/" />
      </Helmet>

      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <TrustedServicesSection />
      <WhyChooseUs />
      <IndustriesSection />
      <ClientsSection />
      <TestimonialsSection />
      <NewsletterSection />
      <CTASection />
      <BlogPreview />
    </motion.div>
  )
}
