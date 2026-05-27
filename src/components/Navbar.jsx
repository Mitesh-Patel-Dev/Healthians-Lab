import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const links = [
  { name: 'Home', href: '#home' },
  { name: 'Packages', href: '#packages' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'About', href: '#about' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)

      // Active section detection
      const sections = links.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-[0_1px_0_0_#E8ECF1]'
          : 'bg-transparent'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-[68px]">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #00B7B2, #00D4AA)' }}>
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <div className="leading-tight">
              <div className={`font-semibold text-[15px] tracking-tight ${scrolled ? 'text-gray-900' : 'text-white'}`}
                style={{ fontFamily: 'Poppins' }}>
                Healthians <span className="gradient-text">Labs</span>
              </div>
              <div className={`text-[9px] font-medium tracking-wider uppercase ${scrolled ? 'text-gray-400' : 'text-white/50'}`}>
                Authorised Partner
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-5">
            {links.map((link) => {
              const isActive = activeSection === link.href.slice(1)
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-[13px] font-medium transition-colors ${
                    scrolled
                      ? isActive ? 'text-primary' : 'text-gray-600 hover:text-gray-900'
                      : isActive ? 'text-white' : 'text-white/65 hover:text-white'
                  }`}
                >
                  {link.name}
                  {/* Active underline */}
                  <span className={`absolute bottom-0.5 left-3.5 right-3.5 h-[2px] rounded-full bg-primary transition-transform origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`} />
                </a>
              )
            })}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="tel:+919324219275"
              className={`flex items-center gap-1.5 text-[13px] font-medium ${
                scrolled ? 'text-gray-500 hover:text-primary' : 'text-white/60 hover:text-white'
              } transition-colors`}>
              <Phone size={14} />
              +91 93242 19275
            </a>
            <a href="#contact" className="btn btn-primary btn-sm">Book Appointment</a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 -mr-2 rounded-xl ${scrolled ? 'text-gray-700' : 'text-white'}`}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 top-16 bg-white z-40"
          >
            <div className="px-6 py-8 flex flex-col gap-1 h-full overflow-auto">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3.5 rounded-xl text-[15px] font-medium transition-colors ${
                    activeSection === link.href.slice(1)
                      ? 'text-primary bg-primary/5'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                <a href="tel:+919324219275" className="flex items-center gap-2 px-4 py-2 text-gray-500 text-sm">
                  <Phone size={15} /> +91 93242 19275
                </a>
                <a href="#contact" onClick={() => setMobileOpen(false)} className="btn btn-primary btn-lg w-full">
                  Book Appointment
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
