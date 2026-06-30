import { useEffect, useState } from 'react'
import Confetti from 'react-confetti'
import { motion } from 'framer-motion'

export default function FinalSection({ selectedDate, selectedTime, selectedRestaurant, customRestaurant }) {
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight })
  const [showConfetti, setShowConfetti] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
    window.addEventListener('resize', handleResize)

    const timer = setTimeout(() => setShowConfetti(false), 8000)

    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(timer)
    }
  }, [])

  const restaurantNames = {
    jollibee: 'Jollibee',
    mangInasal: 'Mang Inasal',
    chowking: 'Chowking',
    greenwich: 'Greenwich',
    mcdonalds: 'McDonald',
    burgerKing: 'Burger King',
    starbucks: 'Starbucks',
    donMacchiatos: 'Don Macchiatos',
    samgyupsalamat: 'Samgyupsalamat',
    others: customRestaurant,
  }

  const formatDate = (date) => {
    if (!date) return ''
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="final-section">
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={true}
          numberOfPieces={200}
          gravity={0.2}
          colors={['#FF6B9A', '#FFD6E8', '#FFC2D6', '#FFFFFF', '#FF8FAB']}
        />
      )}

      <motion.div
        className="final-content"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        <motion.div
          className="celebration-icon"
          animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <i className="fa-solid fa-party-horn"></i>
        </motion.div>

        <h2 className="final-title">
          <i className="fa-solid fa-party-horn"></i>
          YAY!!!!
        </h2>

        <p className="final-subtitle">I can't wait for our date!</p>

        {/* Replaced motion.div with a plain div – no entrance animation */}
        <div className="summary-card">
          <div className="summary-item">
            <div className="summary-icon">
              <i className="fa-solid fa-calendar-days"></i>
            </div>
            <div className="summary-content">
              <span className="summary-label">Date</span>
              <span className="summary-value">{formatDate(selectedDate)}</span>
            </div>
          </div>

          <div className="summary-divider"></div>

          <div className="summary-item">
            <div className="summary-icon">
              <i className="fa-solid fa-clock"></i>
            </div>
            <div className="summary-content">
              <span className="summary-label">Time</span>
              <span className="summary-value">{selectedTime}</span>
            </div>
          </div>

          <div className="summary-divider"></div>

          <div className="summary-item">
            <div className="summary-icon">
              <i className="fa-solid fa-utensils"></i>
            </div>
            <div className="summary-content">
              <span className="summary-label">Place</span>
              <span className="summary-value">{restaurantNames[selectedRestaurant] || selectedRestaurant}</span>
            </div>
          </div>
        </div>

        <motion.p
          className="see-you-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          See you soon!
        </motion.p>

        <motion.div
          className="final-heart">
          <i className="fa-solid fa-heart"></i>
        </motion.div>
      </motion.div>
    </div>
  )
}