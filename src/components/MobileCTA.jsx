import { Phone, MessageSquare } from 'lucide-react'

export default function MobileCTA() {
  return (
    <div className="mobile-cta">
      <a href="tel:+919324219275"
        className="btn btn-outline btn-sm flex-1 justify-center text-[13px]">
        <Phone size={14} /> Call
      </a>
      <a href="https://wa.me/919324219275?text=Hi%2C%20I%20want%20to%20book%20a%20health%20checkup"
        target="_blank" rel="noopener noreferrer"
        className="btn btn-primary btn-sm flex-1 justify-center text-[13px]">
        <MessageSquare size={14} /> Book Now
      </a>
    </div>
  )
}
