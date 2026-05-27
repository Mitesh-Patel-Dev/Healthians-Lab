import { motion } from 'framer-motion'
import { ArrowRight, Shield, Award, Clock, MapPin } from 'lucide-react'

const badges = [
  { icon: Shield, text: 'NABL Accredited', color: '#00B7B2' },
  { icon: Award, text: 'CAP Certified', color: '#F5C842' },
  { icon: Clock, text: 'Reports in 24hrs', color: '#A78BFA' },
  { icon: MapPin, text: '250+ Cities', color: '#38BDF8' },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0B1120 0%, #0E1930 40%, #132444 100%)' }}>

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* Gradient orbs — subtle, not distracting */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, #00B7B2, transparent 70%)' }} />
      <div className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #00D4AA, transparent 70%)' }} />

      <div className="container relative z-10 pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Live badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/60 text-[13px] font-medium">India's #1 Home Diagnostics Partner</span>
            </div>

            <h1 className="text-[2.5rem] sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-5">
              Complete Health<br />
              Checkup at Your{' '}
              <span className="gradient-text-gold">Doorstep</span>
            </h1>

            <p className="text-white/45 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg">
              India's Leading Diagnostics Service Provider with free home sample collection by certified professionals.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#contact" className="btn btn-primary btn-lg">
                Book Health Checkup <ArrowRight size={16} />
              </a>
              <a href="#packages" className="btn btn-outline-white btn-lg">
                View Packages
              </a>
            </div>

            {/* Trust badges — horizontal strip */}
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {badges.map((b) => (
                <div key={b.text} className="flex items-center gap-2">
                  <b.icon size={15} style={{ color: b.color }} />
                  <span className="text-white/50 text-[13px] font-medium">{b.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main dashboard card */}
              <div className="w-full max-w-[440px] ml-auto bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-6 lg:p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-white/40 text-xs font-medium mb-1">Health Dashboard</div>
                    <div className="text-white text-lg font-semibold" style={{ fontFamily: 'Poppins' }}>Your Wellness Score</div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                    <span className="text-lg">💚</span>
                  </div>
                </div>

                {/* Score circle */}
                <div className="flex items-center gap-6 mb-6">
                  <div className="relative w-24 h-24 shrink-0">
                    <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                      <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
                      <motion.circle
                        cx="50" cy="50" r="42" fill="none" stroke="url(#scoreGrad)" strokeWidth="6"
                        strokeLinecap="round" strokeDasharray="264" strokeDashoffset="264"
                        animate={{ strokeDashoffset: 264 * 0.12 }}
                        transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
                      />
                      <defs>
                        <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#00B7B2" />
                          <stop offset="100%" stopColor="#00D4AA" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold text-white" style={{ fontFamily: 'Poppins' }}>88</span>
                      <span className="text-white/30 text-[10px]">/ 100</span>
                    </div>
                  </div>
                  <div className="space-y-2.5 flex-1">
                    {[
                      { label: 'Blood Sugar', value: 'Normal', color: '#22C55E' },
                      { label: 'Cholesterol', value: 'Good', color: '#00B7B2' },
                      { label: 'Vitamin D', value: 'Low', color: '#F5C842' },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between pb-2 border-b border-white/[0.04] last:border-b-0 last:pb-0">
                        <span className="text-white/60 text-[13px] font-medium">{item.label}</span>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md" style={{ color: item.color, background: `${item.color}15` }}>
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom stats */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Tests Done', value: '10L+', emoji: '🧪' },
                    { label: 'Cities', value: '250+', emoji: '📍' },
                    { label: 'Happy Users', value: '5L+', emoji: '😊' },
                  ].map((s) => (
                    <div key={s.label} className="bg-white/[0.03] border border-white/[0.04] rounded-xl p-3 text-center">
                      <div className="text-lg mb-1">{s.emoji}</div>
                      <div className="text-white text-sm font-bold" style={{ fontFamily: 'Poppins' }}>{s.value}</div>
                      <div className="text-white/30 text-[10px] whitespace-nowrap">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating notification card */}
              <motion.div
                className="absolute -bottom-5 -left-5 bg-white rounded-xl p-3.5 shadow-xl shadow-black/5 flex items-center gap-3"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-9 h-9 rounded-lg bg-green-50 flex items-center justify-center text-lg">✅</div>
                <div>
                  <div className="text-xs font-semibold text-gray-900">Report Ready</div>
                  <div className="text-[10px] text-gray-400">CBC report generated</div>
                </div>
              </motion.div>

              {/* Floating badge top-right */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-xl shadow-black/5"
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div className="flex items-center gap-2">
                  <div className="text-lg">⭐</div>
                  <div>
                    <div className="text-xs font-bold text-gray-900">4.8 Rating</div>
                    <div className="text-[10px] text-gray-400">50K+ reviews</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
