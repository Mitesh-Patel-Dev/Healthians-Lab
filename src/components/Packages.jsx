import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, ChevronDown, ArrowRight, Sparkles, X } from 'lucide-react'
import { FadeIn, SectionHeader } from './ui.jsx'

const packages = [
  { id: 'basic', name: 'Swasthya Mitra Basic', price: 1000, params: 83, color: '#00B7B2', popular: false },
  { id: 'advance', name: 'Swasthya Mitra Advance', price: 1300, params: 89, color: '#F5C842', popular: true },
  { id: 'premium', name: 'Swasthya Mitra Premium', price: 2100, params: 91, color: '#A78BFA', popular: false },
  { id: 'super', name: 'Swasthya Mitra Super', price: 2300, params: 93, color: '#00D4AA', popular: false },
]

const allTests = [
  'ESR Automated', 'Blood Glucose Fasting', 'Liver Function Test (LFT)',
  'Thyroid Profile (T3, T4 & TSH)', 'Urine Routine & Microscopy', 'Complete Blood Count (CBC)',
  'KFT With K', 'Lipid Profile', 'Lipid Profile Advance', 'Iron Studies',
  'HbA1c', 'Vitamin B12', 'Vitamin D Total', 'RA Test (Rheumatoid Arthritis Factor)',
  'CRP (C-Reactive Protein)',
]

const inclusion = {
  basic:   [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
  advance: [1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
  premium: [1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
  super:   [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
}

function PackageCard({ pkg, isExpanded, onToggle }) {
  const tests = allTests.filter((_, i) => inclusion[pkg.id][i])

  return (
    <FadeIn>
      <div className={`card relative h-full transition-all ${
        pkg.popular
          ? '!border-amber-300 shadow-lg shadow-amber-500/8 bg-white'
          : 'hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5'
      }`}>
        {/* Popular label */}
        {pkg.popular && (
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
            <div className="flex items-center gap-1 px-3.5 py-1 rounded-full text-[11px] font-bold text-gray-900 bg-gradient-to-r from-[#F5C842] to-[#FFE082] shadow-sm">
              <Sparkles size={11} /> Most Popular
            </div>
          </div>
        )}

        <div>
          {/* Header */}
          <div className="mb-5">
            <h3 className="text-[15px] font-semibold text-gray-900 mb-0.5" style={{ fontFamily: 'Poppins' }}>
              {pkg.name}
            </h3>
            <p className="text-gray-400 text-xs">{pkg.params} Parameters</p>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-1 mb-6">
            <span className="text-3xl font-bold" style={{ color: pkg.color, fontFamily: 'Poppins' }}>
              ₹{pkg.price.toLocaleString()}
            </span>
            <span className="text-gray-400 text-xs">/pkg</span>
          </div>

          {/* Key features */}
          <div className="space-y-2.5 mb-5">
            {['Free Home Collection', 'Digital Reports in 24hrs', 'Certified Phlebotomist'].map((f) => (
              <div key={f} className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ background: `${pkg.color}15` }}>
                  <Check size={10} style={{ color: pkg.color }} strokeWidth={3} />
                </div>
                <span className="text-gray-600 text-[13px]">{f}</span>
              </div>
            ))}
          </div>

          {/* Accordion toggle */}
          <button
            onClick={onToggle}
            className="flex items-center gap-1.5 text-[13px] font-medium mb-5 transition-colors"
            style={{ color: pkg.color }}
          >
            {isExpanded ? 'Hide' : 'View'} Tests
            <ChevronDown size={14} className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          </button>

          {/* Expandable test list */}
          <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[400px] mb-5' : 'max-h-0'}`}>
            <div className="space-y-2 pb-2 pr-1 max-h-[360px] overflow-y-auto">
              {allTests.map((test, ti) => {
                const included = inclusion[pkg.id][ti]
                return (
                  <div key={test} className="flex items-center gap-2 text-[12px]">
                    {included ? (
                      <Check size={13} className="text-green-500 shrink-0" strokeWidth={2.5} />
                    ) : (
                      <div className="w-4 h-[1.5px] bg-gray-200 rounded mx-auto" />
                    )}
                    <span className={included ? 'text-gray-600' : 'text-gray-300'}>{test}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className={`btn w-full ${pkg.popular ? 'btn-gold' : 'btn-primary'} btn-sm justify-center`}
          >
            Book Now <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </FadeIn>
  )
}

/* ─── Comparison Table ─── */
function ComparisonTable() {
  return (
    <FadeIn>
      <div className="mt-16 lg:mt-20">
        <h3 className="text-xl font-bold text-gray-900 text-center mb-8" style={{ fontFamily: 'Poppins' }}>
          Package Comparison
        </h3>

        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[640px]">
            <thead>
              <tr style={{ background: 'linear-gradient(135deg, #0B1120, #15203A)' }}>
                <th className="text-left py-4 px-6 text-white/60 text-xs font-semibold w-[220px] sticky left-0 z-10"
                  style={{ background: 'linear-gradient(135deg, #0B1120, #15203A)' }}>
                  Tests Included
                </th>
                {packages.map((pkg) => (
                  <th key={pkg.id} className="py-4 px-5 text-center w-[120px]">
                    <div className="text-xs font-semibold" style={{ color: pkg.color }}>
                      {pkg.name.replace('Swasthya Mitra ', '')}
                    </div>
                    <div className="text-white/30 text-[10px] mt-0.5">₹{pkg.price.toLocaleString()}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allTests.map((test, ti) => (
                <tr key={test} className={`border-t border-gray-50 ${ti % 2 === 0 ? 'bg-gray-50/40' : 'bg-white'} hover:bg-primary/[0.02] transition-colors`}>
                  <td className="py-3.5 px-6 text-[13px] text-gray-600 sticky left-0 z-10"
                    style={{ background: ti % 2 === 0 ? '#FAFBFC' : '#ffffff' }}>
                    {test}
                  </td>
                  {packages.map((pkg) => (
                    <td key={pkg.id} className="py-3.5 px-5 text-center">
                      {inclusion[pkg.id][ti] ? (
                        <Check size={16} className="text-green-500 mx-auto" strokeWidth={2.5} />
                      ) : (
                        <div className="w-4 h-[1.5px] bg-gray-200 rounded mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              {/* CTA row */}
              <tr className="border-t border-gray-100">
                <td className="py-5 px-6 sticky left-0 z-10 bg-white" />
                {packages.map((pkg) => (
                  <td key={pkg.id} className="py-5 px-5 text-center">
                    <a href="#contact" className={`btn btn-sm text-[11px] ${pkg.popular ? 'btn-gold' : 'btn-primary'}`}>
                      Book
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </FadeIn>
  )
}

export default function Packages() {
  const [expanded, setExpanded] = useState(null)

  return (
    <section id="packages" className="section bg-white">
      <div className="container">
        <SectionHeader
          label="Health Packages"
          title="Choose Your"
          titleHighlight="Health Package"
          desc="Comprehensive health checkups designed for peace of mind. All packages include free home sample collection."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {packages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              isExpanded={expanded === pkg.id}
              onToggle={() => setExpanded(expanded === pkg.id ? null : pkg.id)}
            />
          ))}
        </div>

        <ComparisonTable />
      </div>
    </section>
  )
}
