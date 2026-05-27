import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <div className="loader-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center gap-6"
      >
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #00B7B2, #00D4AA)' }}>
          <span className="text-white text-xl font-bold" style={{ fontFamily: 'Poppins' }}>H</span>
        </div>
        <div className="loader-ring" />
        <div className="loader-text">Healthians Labs</div>
      </motion.div>
    </div>
  )
}
