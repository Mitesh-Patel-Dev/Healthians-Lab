import { Heart, ArrowUp, Phone, Mail, MapPin } from 'lucide-react'

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Packages', href: '#packages' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'About', href: '#about' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
]

const pkgLinks = [
  'Swasthya Mitra Basic',
  'Swasthya Mitra Advance',
  'Swasthya Mitra Premium',
  'Swasthya Mitra Super',
]

export default function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(160deg, #0B1120, #0E1930)' }}>
      {/* Top accent */}
      <div className="h-px bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0" />

      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #00B7B2, #00D4AA)' }}>
                <span className="text-white font-bold text-xs">H</span>
              </div>
              <div className="leading-tight">
                <div className="text-white font-semibold text-sm">Healthians <span className="gradient-text">Labs</span></div>
                <div className="text-white/30 text-[8px] tracking-wider uppercase">Authorised Partner</div>
              </div>
            </div>
            <p className="text-white/30 text-[13px] leading-relaxed mb-5">
              India's Leading Diagnostics Service Provider with free home sample collection.
            </p>
            {/* Social */}
            <div className="flex gap-2">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((s) => (
                <a key={s} href="#"
                  className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/30 hover:text-white hover:bg-white/[0.08] transition-all text-xs">
                  {s[0].toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-[13px] font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  <a href={l.href} className="text-white/30 text-[13px] hover:text-primary transition-colors">{l.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Packages */}
          <div>
            <h4 className="text-white text-[13px] font-semibold mb-4">Packages</h4>
            <ul className="space-y-2.5">
              {pkgLinks.map((p) => (
                <li key={p}>
                  <a href="#packages" className="text-white/30 text-[13px] hover:text-primary transition-colors">{p}</a>
                </li>
              ))}
            </ul>
            <h4 className="text-white text-[13px] font-semibold mt-6 mb-3">Legal</h4>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms & Conditions'].map((l) => (
                <li key={l}><a href="#" className="text-white/30 text-[13px] hover:text-primary transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-[13px] font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+919324219275" className="flex items-center gap-2 text-white/30 text-[13px] hover:text-primary transition-colors">
                <Phone size={13} className="text-primary shrink-0" /> +91 93242 19275
              </a>
              <a href="mailto:info@healthianslabs.com" className="flex items-center gap-2 text-white/30 text-[13px] hover:text-primary transition-colors">
                <Mail size={13} className="text-primary shrink-0" /> info@healthianslabs.com
              </a>
              <div className="flex items-start gap-2 text-white/30 text-[13px]">
                <MapPin size={13} className="text-primary shrink-0 mt-0.5" /> PAN India – 250+ Cities
              </div>
            </div>
            <a href="#contact" className="btn btn-primary btn-sm mt-6">
              Book Checkup
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/[0.04]">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-[12px]">
            © {new Date().getFullYear()} Healthians Labs – Authorised Partner
          </p>
          <div className="flex items-center gap-1.5 text-white/20 text-[12px]">
            Made with <Heart size={11} className="text-red-400" fill="currentColor" /> for your health
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-24 md:bottom-8 right-24 md:right-8 w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] text-white/40 hover:text-white hover:bg-white/[0.1] transition-all z-40 flex items-center justify-center">
        <ArrowUp size={16} />
      </button>
    </footer>
  )
}
