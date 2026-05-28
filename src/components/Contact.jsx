import { useState } from 'react'
import { Phone, Mail, MapPin, Send, User, MessageSquare, Calendar } from 'lucide-react'
import { FadeIn, SectionHeader, IconBox } from './ui.jsx'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', package: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  return (
    <section id="contact" className="section bg-surface">
      <div className="container">
        <SectionHeader
          label="Get In Touch"
          title="Book Your"
          titleHighlight="Health Checkup"
          desc="Fill the form or reach out directly. We respond within 30 minutes."
        />

        <div className="max-w-5xl mx-auto rounded-2xl border border-border bg-white shadow-lg overflow-hidden">
         <div className="grid lg:grid-cols-5 gap-0">
          {/* Info card */}
          <FadeIn direction="left" className="lg:col-span-2">
            <div className="rounded-none lg:rounded-l-2xl p-6 lg:p-8 h-full"
              style={{ background: 'linear-gradient(160deg, #0B1120, #15203A)' }}>
              <h3 className="text-lg font-semibold text-white mb-1" style={{ fontFamily: 'Poppins' }}>
                Contact Information
              </h3>
              <p className="text-white/35 text-[13px] mb-8">Reach out for queries or appointments</p>

              <div className="space-y-5">
                <a href="tel:+919324219275" className="flex items-center gap-3.5 group">
                  <IconBox icon={Phone} color="#00B7B2" boxSize="w-10 h-10" size={17} />
                  <div>
                    <div className="text-white/35 text-[11px]">Call Us</div>
                    <div className="text-white text-sm font-medium group-hover:text-primary transition-colors">+91 93242 19275</div>
                  </div>
                </a>
                <div className="flex items-center gap-3.5">
                  <IconBox icon={User} color="#F5C842" boxSize="w-10 h-10" size={17} />
                  <div>
                    <div className="text-white/35 text-[11px]">Contact Person</div>
                    <div className="text-white text-sm font-medium">Abhishek Tiwari</div>
                  </div>
                </div>
                <a href="mailto:info@healthianslabs.com" className="flex items-center gap-3.5 group">
                  <IconBox icon={Mail} color="#A78BFA" boxSize="w-10 h-10" size={17} />
                  <div>
                    <div className="text-white/35 text-[11px]">Email</div>
                    <div className="text-white text-sm font-medium group-hover:text-primary transition-colors">info@healthianslabs.com</div>
                  </div>
                </a>
                <div className="flex items-center gap-3.5">
                  <IconBox icon={MapPin} color="#38BDF8" boxSize="w-10 h-10" size={17} />
                  <div>
                    <div className="text-white/35 text-[11px]">Service Area</div>
                    <div className="text-white text-sm font-medium">PAN India – 250+ Cities</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <a href="https://wa.me/919324219275?text=Hi%2C%20I%20want%20to%20book%20a%20health%20checkup"
                  target="_blank" rel="noopener noreferrer"
                  className="btn w-full text-white text-[13px] justify-center"
                  style={{ background: '#25D366', padding: '13px 24px' }}>
                  <MessageSquare size={15} /> WhatsApp Us
                </a>
                <a href="tel:+919324219275" className="btn btn-primary btn-sm w-full justify-center">
                  <Phone size={15} /> Call Now
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn direction="right" className="lg:col-span-3">
            <div className="p-6 lg:p-8 bg-white">
              <h3 className="text-base font-semibold text-gray-900 mb-6" style={{ fontFamily: 'Poppins' }}>
                Book an Appointment
              </h3>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-3">✅</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1" style={{ fontFamily: 'Poppins' }}>Thank You!</h4>
                  <p className="text-gray-500 text-sm">We'll contact you within 30 minutes.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Full Name</label>
                      <div className="relative">
                        <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300" />
                        <input type="text" required placeholder="Your name" value={form.name} onChange={update('name')}
                          className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-border text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Phone</label>
                      <div className="relative">
                        <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300" />
                        <input type="tel" required placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={update('phone')}
                          className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-border text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Email (Optional)</label>
                    <div className="relative">
                      <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300" />
                      <input type="email" placeholder="your@email.com" value={form.email} onChange={update('email')}
                        className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-border text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Package</label>
                    <div className="relative">
                      <Calendar size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300" />
                      <select value={form.package} onChange={update('package')}
                        className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-border text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all bg-white appearance-none cursor-pointer">
                        <option value="">Choose a package</option>
                        <option value="basic">Swasthya Mitra Basic – ₹1,000</option>
                        <option value="advance">Swasthya Mitra Advance – ₹1,300</option>
                        <option value="premium">Swasthya Mitra Premium – ₹2,100</option>
                        <option value="super">Swasthya Mitra Super – ₹2,300</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Message (Optional)</label>
                    <textarea rows={3} placeholder="Any specific requirements..." value={form.message} onChange={update('message')}
                      className="w-full px-3.5 py-3 rounded-xl border border-border text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none" />
                  </div>

                  <button type="submit" className="btn btn-primary w-full btn-lg justify-center">
                    <Send size={15} /> Book Appointment
                  </button>

                  <p className="text-center text-gray-400 text-[11px]">
                    By submitting, you agree to our Terms & Conditions
                  </p>
                </form>
              )}
            </div>
          </FadeIn>
         </div>
        </div>
      </div>
    </section>
  )
}
