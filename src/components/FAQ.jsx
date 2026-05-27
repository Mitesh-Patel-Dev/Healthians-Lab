import React from 'react'
import { FAQ as TabbedFAQ } from '@/components/faq-tabs'

const categories = {
  "booking": "Booking & Slots",
  "testing": "Testing & Reports",
  "trust": "Accreditation & Trust",
}

const faqData = {
  "booking": [
    {
      question: "How does home sample collection work?",
      answer: "Once you book a test, our certified phlebotomist will visit your home at the scheduled time. The entire process takes 10-15 minutes and is completely painless."
    },
    {
      question: "Can I book tests for my family members?",
      answer: "Absolutely! You can book tests for multiple family members in a single appointment. Our phlebotomist will collect samples from everyone at your home."
    },
    {
      question: "What if I need to reschedule my appointment?",
      answer: "You can easily reschedule by calling us at +91 93242 19275 or messaging us on WhatsApp at least 2 hours before the scheduled time."
    }
  ],
  "testing": [
    {
      question: "How soon will I receive my reports?",
      answer: "Most reports are generated within 24-48 hours of sample collection. You will receive them digitally on your registered phone number and email."
    },
    {
      question: "Do I need to fast before the test?",
      answer: "For certain tests like Blood Glucose Fasting and Lipid Profile, a 10-12 hour overnight fast is recommended. We will inform you about fasting requirements when you book."
    },
    {
      question: "Is home collection really free?",
      answer: "Yes, home sample collection is completely free for all packages. There are no hidden charges or additional fees."
    }
  ],
  "trust": [
    {
      question: "Are your labs NABL and CAP accredited?",
      answer: "Yes, all our partner laboratories are NABL accredited and many hold CAP certification as well, ensuring the highest quality standards in diagnostic testing."
    },
    {
      question: "Which cities do you serve?",
      answer: "We operate in 250+ cities across India including all major metros and tier-2 cities. Call us to check availability in your area."
    }
  ]
}

export default function FAQ() {
  return (
    <div id="faq">
      <TabbedFAQ
        title="Frequently Asked Questions"
        subtitle="FAQ"
        categories={categories}
        faqData={faqData}
        className="section bg-surface bg-dot-pattern"
      />
    </div>
  )
}
