import { motion } from 'framer-motion'

export default function Card({ children, selected, onClick }) {
  return (
    <motion.div
      className={`glass-card ${selected ? 'selected' : ''}`}
      onClick={onClick}
      whileHover={{ scale: 1.03, y: -4 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      }}
    >
      {children}
    </motion.div>
  )
}
