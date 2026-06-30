import { motion, AnimatePresence } from 'framer-motion'

export default function SpeechBubble({ text }) {
  return (
    <AnimatePresence>
      {text && (
        <motion.div
          className="speech-bubble"
          initial={{ opacity: 0, scale: 0.5, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 10 }}
          transition={{ type: 'spring', stiffness: 500, damping: 25 }}
        >
          <span>{text}</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
