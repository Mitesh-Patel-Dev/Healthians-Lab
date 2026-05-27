import { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import TrustBar from './components/TrustBar.jsx'
import Stats from './components/Stats.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import Packages from './components/Packages.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import About from './components/About.jsx'
import Doctors from './components/Doctors.jsx'
import Testimonials from './components/Testimonials.jsx'
import FAQ from './components/FAQ.jsx'
import Blog from './components/Blog.jsx'
import CTABanner from './components/CTABanner.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import MobileCTA from './components/MobileCTA.jsx'
import Loader from './components/Loader.jsx'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Loader />

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Stats />
        <WhyChooseUs />
        <Packages />
        <HowItWorks />
        <About />
        <Doctors />
        <Testimonials />
        <FAQ />
        <Blog />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCTA />
    </div>
  )
}

export default App
