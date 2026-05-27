import { FadeIn, SectionHeader } from './ui.jsx'
import { Award, Star } from 'lucide-react'

const doctors = [
  { name: 'Dr. Anjali Mehta', role: 'Chief Pathologist', exp: '18+ years', emoji: '👩‍⚕️', specialty: 'Clinical Pathology' },
  { name: 'Dr. Rajiv Sharma', role: 'Senior Biochemist', exp: '15+ years', emoji: '👨‍⚕️', specialty: 'Biochemistry' },
  { name: 'Dr. Priya Nair', role: 'Microbiologist', exp: '12+ years', emoji: '👩‍🔬', specialty: 'Microbiology' },
  { name: 'Dr. Vikram Patel', role: 'Hematologist', exp: '20+ years', emoji: '🧑‍⚕️', specialty: 'Hematology' },
]

export default function Doctors() {
  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeader
          label="Our Experts"
          title="Meet Our"
          titleHighlight="Medical Team"
          desc="Backed by experienced doctors and pathologists ensuring the highest quality of diagnostics"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {doctors.map((doc, i) => (
            <FadeIn key={doc.name} delay={i * 0.08}>
              <div className="card text-center h-full">
                <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl bg-surface">
                  {doc.emoji}
                </div>
                <h4 className="text-sm font-semibold text-gray-900 mb-0.5" style={{ fontFamily: 'Poppins' }}>
                  {doc.name}
                </h4>
                <p className="text-primary text-[11px] font-medium mb-1">{doc.role}</p>
                <p className="text-gray-400 text-[11px] mb-3">{doc.specialty} • {doc.exp}</p>
                <div className="flex items-center justify-center gap-0.5">
                  {[...Array(5)].map((_, si) => (
                    <Star key={si} size={11} fill="#F5C842" className="text-[#F5C842]" />
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
