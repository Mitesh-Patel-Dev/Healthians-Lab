import { Home, Shield, FileText, Users, Wallet, Clock } from 'lucide-react'
import { FadeIn, SectionHeader, IconBox } from './ui.jsx'

const features = [
  { icon: Home, title: 'Free Home Collection', desc: 'Certified phlebotomists visit your doorstep for hassle-free sample collection at zero extra cost.', color: '#00B7B2' },
  { icon: Shield, title: 'NABL & CAP Labs', desc: 'All tests processed in NABL & CAP accredited laboratories with highest quality standards.', color: '#F5C842' },
  { icon: FileText, title: 'Smart Digital Reports', desc: 'Comprehensive digital reports with easy-to-understand insights delivered to your phone.', color: '#A78BFA' },
  { icon: Users, title: 'Expert Professionals', desc: '5000+ certified phlebotomists trained for safe and comfortable sample collection.', color: '#38BDF8' },
  { icon: Wallet, title: 'Affordable Pricing', desc: 'Premium healthcare at honest prices. No hidden charges, no surprises.', color: '#00D4AA' },
  { icon: Clock, title: 'Fast Turnaround', desc: 'Get accurate test reports delivered digitally within 24-48 hours of collection.', color: '#F97316' },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section bg-surface">
      <div className="container">
        <SectionHeader
          label="Why Choose Us"
          title="The Healthians"
          titleHighlight="Advantage"
          desc="Experience healthcare the way it should be — reliable, convenient, and affordable"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.06}>
              <div className="card h-full">
                <IconBox icon={f.icon} color={f.color} />
                <h3 className="text-base font-semibold text-gray-900 mt-4 mb-2" style={{ fontFamily: 'Poppins' }}>
                  {f.title}
                </h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{f.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
