import { motion } from 'framer-motion'
import { Heart, Target, ShieldCheck, Home } from 'lucide-react'
import { FadeIn, SectionHeader, IconBox } from './ui.jsx'

const highlights = [
  { icon: ShieldCheck, text: 'Trusted Diagnostics Partner', color: '#00B7B2' },
  { icon: Heart, text: 'Focus on Preventive Healthcare', color: '#F97316' },
  { icon: Target, text: 'Affordable & Accurate Testing', color: '#A78BFA' },
  { icon: Home, text: 'Doorstep Healthcare Solutions', color: '#00D4AA' },
]

export default function About() {
  return (
    <section id="about" className="section bg-surface">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Visual card */}
          <FadeIn direction="left">
            <div className="rounded-2xl p-6 lg:p-8 relative overflow-hidden"
              style={{ background: 'linear-gradient(160deg, #0B1120, #15203A)' }}>

              <div className="text-center relative z-10">
                <div className="text-6xl mb-5">🏥</div>
                <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: 'Poppins' }}>
                  Healthians Labs
                </h3>
                <p className="text-primary text-xs font-medium mb-8">Authorised Partner</p>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { val: '10L+', label: 'Tests Done', grad: 'gradient-text' },
                    { val: '15+', label: 'Years Exp.', grad: 'gradient-text-gold' },
                    { val: '250+', label: 'Cities', grad: 'gradient-text' },
                    { val: '5000+', label: 'Professionals', grad: 'gradient-text-gold' },
                  ].map((s) => (
                    <div key={s.label} className="card-dark rounded-xl p-4">
                      <div className={`text-xl font-bold ${s.grad} mb-0.5`} style={{ fontFamily: 'Poppins' }}>{s.val}</div>
                      <div className="text-white/35 text-[11px]">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right — Content */}
          <FadeIn direction="right">
            <span className="section-label">About Us</span>
            <h2 className="section-title !text-left !mb-5">
              Your Trusted Partner in <span className="gradient-text">Preventive Healthcare</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-4">
              Healthians Labs is India's leading diagnostics service provider, committed to making
              preventive healthcare accessible, affordable, and convenient for every Indian household.
            </p>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
              With NABL and CAP accredited laboratories, certified phlebotomists, and cutting-edge
              technology, we deliver accurate diagnostic results right at your doorstep.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((h) => (
                <div key={h.text} className="flex items-center gap-3">
                  <IconBox icon={h.icon} color={h.color} boxSize="w-9 h-9" size={16} />
                  <span className="text-gray-700 text-[13px] font-medium">{h.text}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn btn-primary">
              Get In Touch <Heart size={14} />
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
