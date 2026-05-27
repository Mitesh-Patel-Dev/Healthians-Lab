import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { FadeIn, SectionHeader } from './ui.jsx'

const testimonials = [
  { name: 'Priya Sharma', location: 'Mumbai', rating: 5, text: 'Excellent service! The phlebotomist arrived on time and the entire process was smooth. Got my reports within 24 hours. Highly recommended!', emoji: '👩‍💼' },
  { name: 'Rajesh Kumar', location: 'Delhi', rating: 5, text: 'Been using Healthians for my family\'s annual checkups for 3 years. Accuracy and convenience of home collection is unmatched. Great value!', emoji: '👨‍💻' },
  { name: 'Anita Desai', location: 'Bangalore', rating: 5, text: 'As a working professional, I barely get time for lab visits. Healthians made it easy with doorstep collection. Reports are comprehensive.', emoji: '👩‍🔬' },
  { name: 'Vikram Singh', location: 'Pune', rating: 5, text: 'My parents got their checkup from home. The phlebotomist was gentle and professional. Reports came with health tips. Amazing!', emoji: '👨‍⚕️' },
  { name: 'Meera Patel', location: 'Ahmedabad', rating: 5, text: 'The Premium package covers everything needed. Very affordable compared to other labs and quality is top-notch. Will recommend!', emoji: '👩‍🏫' },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const next = () => setCurrent((p) => (p + 1) % testimonials.length)
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length)

  const getVisible = () => {
    const arr = []
    for (let i = 0; i < 3; i++) arr.push(testimonials[(current + i) % testimonials.length])
    return arr
  }

  return (
    <section className="section" style={{ background: 'linear-gradient(160deg, #0B1120 0%, #132444 100%)' }}>
      <div className="container">
        <SectionHeader
          label="Testimonials"
          title="What Our"
          titleHighlight="Patients Say"
          desc="Real stories from real people who trust us with their health"
          light
        />

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {getVisible().map((t, i) => (
            <FadeIn key={`${current}-${i}`} delay={i * 0.08}>
              <div className="card-dark h-full">
                <Quote size={28} className="text-primary/15 mb-4" />
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.rating)].map((_, si) => (
                    <Star key={si} size={13} fill="#F5C842" className="text-[#F5C842]" />
                  ))}
                </div>
                <p className="text-white/55 text-[13px] leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-xl">
                    {t.emoji}
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">{t.name}</div>
                    <div className="text-white/30 text-[11px]">{t.location}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button onClick={prev}
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all">
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-1.5">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all ${i === current ? 'w-6 bg-primary' : 'w-1.5 bg-white/15'}`} />
            ))}
          </div>
          <button onClick={next}
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
