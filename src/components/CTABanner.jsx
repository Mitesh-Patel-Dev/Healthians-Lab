import { ArrowRight, Phone } from 'lucide-react'
import { FadeIn } from './ui.jsx'

export default function CTABanner() {
  return (
    <section className="section"
      style={{ background: 'linear-gradient(160deg, #0B1120 0%, #132444 100%)' }}>
      <div className="container">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight"
              style={{ fontFamily: 'Poppins' }}>
              Take Charge of Your Health <span className="gradient-text-gold">Today</span>
            </h2>
            <p className="text-white/45 text-base mb-8 max-w-lg mx-auto">
              Book your comprehensive health checkup now and get accurate reports with free home sample collection.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#contact" className="btn btn-primary btn-lg">
                Book Appointment <ArrowRight size={16} />
              </a>
              <a href="tel:+919324219275" className="btn btn-outline-white btn-lg">
                <Phone size={15} /> Call Now
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
