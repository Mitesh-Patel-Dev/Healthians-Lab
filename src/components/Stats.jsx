import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'

function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, target, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString('en-IN')}{suffix}
    </span>
  )
}

const stats = [
  { value: 10, suffix: 'L+', label: 'Tests Completed', desc: 'Trusted by millions across India' },
  { value: 250, suffix: '+', label: 'Cities Covered', desc: 'PAN India presence' },
  { value: 5000, suffix: '+', label: 'Professionals', desc: 'Certified phlebotomists' },
  { value: 99, suffix: '.9%', label: 'Accuracy Rate', desc: 'Lab-tested precision' },
]

export default function Stats() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`text-center px-4 py-6 ${i < stats.length - 1 ? 'lg:border-r lg:border-border' : ''}`}>
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2" style={{ fontFamily: 'Poppins' }}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-gray-900 text-sm font-semibold mb-1">{stat.label}</div>
              <div className="text-gray-400 text-xs">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
