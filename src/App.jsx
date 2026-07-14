import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from '@components/layout/Layout'
import PageLoader from '@components/ui/PageLoader'
import { useEffect } from 'react'
import AOS from 'aos'
import { Toaster } from 'react-hot-toast'

// Lazy-load all pages
const Home = lazy(() => import('@pages/Home'))
const About = lazy(() => import('@pages/About'))
const Services = lazy(() => import('@pages/Services'))
const ServiceDetail = lazy(() => import('@pages/ServiceDetail'))
const Industries = lazy(() => import('@pages/Industries'))
const Careers = lazy(() => import('@pages/Careers'))
const Gallery = lazy(() => import('@pages/Gallery'))
const Portfolio = lazy(() => import('@pages/Portfolio'))
const Testimonials = lazy(() => import('@pages/Testimonials'))
const Blog = lazy(() => import('@pages/Blog'))
const Contact = lazy(() => import('@pages/Contact'))
const NotFound = lazy(() => import('@pages/NotFound'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default function App() {
  const location = useLocation()

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    })
  }, [])

  return (
    <>
      <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
      <ScrollToTop />
      <Layout>
        <AnimatePresence mode="wait">
          <Suspense fallback={<PageLoader />}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </Layout>
    </>
  )
}
