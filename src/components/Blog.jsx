import { ArrowRight, Clock } from 'lucide-react'
import { FadeIn, SectionHeader } from './ui.jsx'

const posts = [
  {
    title: 'Why Annual Health Checkups Are Essential After 30',
    desc: 'Preventive health checkups can detect potential health issues before they become serious. Learn why you should start early.',
    tag: 'Preventive Care',
    time: '5 min read',
    emoji: '🩺',
    color: '#00B7B2',
  },
  {
    title: 'Understanding Your Blood Test Report: A Complete Guide',
    desc: 'Confused by CBC, LFT, or thyroid reports? Our simple guide breaks down every parameter in plain language.',
    tag: 'Health Education',
    time: '8 min read',
    emoji: '📊',
    color: '#F5C842',
  },
  {
    title: 'Top 10 Vitamins & Minerals You Should Test Regularly',
    desc: 'Vitamin D, B12, Iron — learn which deficiencies are most common in India and how to test for them.',
    tag: 'Nutrition',
    time: '6 min read',
    emoji: '💊',
    color: '#A78BFA',
  },
]

export default function Blog() {
  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeader
          label="Health Tips"
          title="Latest Health"
          titleHighlight="Insights"
          desc="Expert articles and tips to help you stay informed about your health"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post, i) => (
            <FadeIn key={post.title} delay={i * 0.08}>
              <div className="card overflow-hidden h-full flex flex-col group">
                {/* Image placeholder */}
                <div className="h-44 flex items-center justify-center text-5xl"
                  style={{ background: `linear-gradient(135deg, ${post.color}08, ${post.color}15)` }}>
                  {post.emoji}
                </div>
                <div className="p-5 lg:p-7 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md"
                      style={{ color: post.color, background: `${post.color}10` }}>
                      {post.tag}
                    </span>
                    <span className="flex items-center gap-1 text-gray-400 text-[11px]">
                      <Clock size={11} /> {post.time}
                    </span>
                  </div>
                  <h4 className="text-[15px] font-semibold text-gray-900 mb-2 leading-snug group-hover:text-primary transition-colors"
                    style={{ fontFamily: 'Poppins' }}>
                    {post.title}
                  </h4>
                  <p className="text-gray-500 text-[13px] leading-relaxed flex-1 mb-4">{post.desc}</p>
                  <span className="inline-flex items-center gap-1 text-primary text-[13px] font-medium group-hover:gap-2 transition-all cursor-pointer">
                    Read More <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
