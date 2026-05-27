import { CalendarCheck, Home, FlaskConical, FileBarChart } from 'lucide-react'
import { FadeIn, SectionHeader } from './ui.jsx'

const steps = [
  { icon: CalendarCheck, num: '01', title: 'Book Test Online', desc: 'Select your package and choose a convenient time slot.', color: '#00B7B2' },
  { icon: Home, num: '02', title: 'Home Sample Collection', desc: 'Certified phlebotomist arrives for painless sample collection.', color: '#F5C842' },
  { icon: FlaskConical, num: '03', title: 'Lab Testing', desc: 'Samples processed in NABL & CAP accredited labs.', color: '#A78BFA' },
  { icon: FileBarChart, num: '04', title: 'Get Digital Reports', desc: 'Comprehensive reports delivered to your phone within 24-48hrs.', color: '#00D4AA' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section"
      style={{ background: 'linear-gradient(160deg, #0B1120 0%, #132444 100%)' }}>
      <div className="container">
        <SectionHeader
          label="Simple Process"
          title="How It"
          titleHighlight="Works"
          desc="Getting your health checkup done is as easy as 1-2-3-4"
          light
        />

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-[44px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#00B7B2]/30 via-[#F5C842]/30 to-[#00D4AA]/30" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.1}>
                <div className="text-center">
                  {/* Icon container */}
                  <div className="relative inline-flex mb-6">
                    <div className="w-[88px] h-[88px] rounded-2xl flex items-center justify-center mx-auto"
                      style={{ background: `${step.color}10`, border: `1px solid ${step.color}15` }}>
                      <step.icon size={32} style={{ color: step.color }} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-bold text-white"
                      style={{ background: step.color }}>
                      {step.num}
                    </div>
                  </div>

                  <h3 className="text-[15px] font-semibold text-white mb-2" style={{ fontFamily: 'Poppins' }}>
                    {step.title}
                  </h3>
                  <p className="text-white/40 text-[13px] leading-relaxed max-w-[220px] mx-auto">
                    {step.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
