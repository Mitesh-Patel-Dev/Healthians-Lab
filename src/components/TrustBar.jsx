import { Shield, Award, FlaskConical, Microscope, BadgeCheck } from 'lucide-react'

const items = [
  { icon: Shield, text: 'NABL Accredited' },
  { icon: Award, text: 'CAP Certified' },
  { icon: FlaskConical, text: 'ISO 15189' },
  { icon: Microscope, text: '99.9% Accuracy' },
  { icon: BadgeCheck, text: 'ICMR Approved' },
]

export default function TrustBar() {
  return (
    <section className="bg-surface border-y border-border">
      <div className="container py-5 lg:py-6">
        <div className="flex items-center justify-center gap-6 md:gap-8 lg:gap-10 flex-wrap">
          <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest shrink-0">
            Trusted Accreditations
          </span>
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2.5 text-gray-500">
              <item.icon size={16} className="text-primary" />
              <span className="text-[13px] font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
