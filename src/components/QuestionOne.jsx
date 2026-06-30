import { motion } from 'framer-motion'
import SpeechBubble from './SpeechBubble'

export default function QuestionOne({ onYes, onNo, noButtonMoved, noButtonPosition, speechBubbleText }) {
  return (
    <div className="question-one">
      <motion.h1
        className="title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <i className="fa-solid fa-heart"></i>
        Will you go on a date with me?
      </motion.h1>

      <motion.div
        className="buttons-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <motion.button
          className="btn-yes"
          onClick={onYes}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          aria-label="Yes, I will go on a date with you"
        >
          <i className="fa-solid fa-heart"></i>
          <span>YES</span>
        </motion.button>

        {noButtonMoved ? (
          <motion.div
            className="no-button-fixed"
            style={{
              position: 'fixed',
              top: noButtonPosition.top,
              left: noButtonPosition.left,
              zIndex: 100,
            }}
            animate={{
              top: noButtonPosition.top,
              left: noButtonPosition.left,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <SpeechBubble text={speechBubbleText} />
            <motion.button
              className="btn-no"
              onClick={onNo}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="No, I will not go on a date"
            >
              <i className="fa-solid fa-circle-xmark"></i>
              <span>NO</span>
            </motion.button>
          </motion.div>
        ) : (
          <motion.button
            className="btn-no"
            onClick={onNo}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="No, I will not go on a date"
          >
            <i className="fa-solid fa-circle-xmark"></i>
            <span>NO</span>
          </motion.button>
        )}
      </motion.div>
    </div>
  )
}
