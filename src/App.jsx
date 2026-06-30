import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import AnimatedBackground from './components/AnimatedBackground'
import FloatingHearts from './components/FloatingHearts'
import QuestionOne from './components/QuestionOne'
import CalendarSection from './components/CalendarSection'
import RestaurantSection from './components/RestaurantSection'
import FinalSection from './components/FinalSection'
import './App.css'

const sectionVariants = {
  initial: { opacity: 0, y: 40, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -40, scale: 0.95 }
}

const transition = {
  duration: 0.5,
  ease: [0.4, 0, 0.2, 1]
}

export default function App() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState('')
  const [selectedRestaurant, setSelectedRestaurant] = useState('')
  const [customRestaurant, setCustomRestaurant] = useState('')
  const [speechBubbleText, setSpeechBubbleText] = useState('')
  const [noButtonMoved, setNoButtonMoved] = useState(false)
  const [noButtonPosition, setNoButtonPosition] = useState({ top: '50%', left: '50%' })

  const speechMessages = [
    'Press Yes plsss',
    'Pleaseee',
    'Dont be shy',
    'Just one date'
  ]

  const handleNoClick = () => {
    setNoButtonMoved(true)
    const randomTop = Math.floor(Math.random() * 70) + 15
    const randomLeft = Math.floor(Math.random() * 70) + 15
    setNoButtonPosition({ top: `${randomTop}%`, left: `${randomLeft}%` })
    const randomMessage = speechMessages[Math.floor(Math.random() * speechMessages.length)]
    setSpeechBubbleText(randomMessage)
  }

  const handleYesClick = () => {
    setSpeechBubbleText('')
    setCurrentStep(2)
  }

  const handleDateNext = () => {
    if (selectedDate && selectedTime) {
      setCurrentStep(3)
    }
  }

  const handleRestaurantNext = () => {
    if (selectedRestaurant && (selectedRestaurant !== 'others' || customRestaurant.trim())) {
      setCurrentStep(4)
    }
  }

  return (
    <div className="app">
      <AnimatedBackground />
      <FloatingHearts />
      <div className="content">
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="step1"
              variants={sectionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transition}
              className="section-wrapper"
            >
              <QuestionOne
                onYes={handleYesClick}
                onNo={handleNoClick}
                noButtonMoved={noButtonMoved}
                noButtonPosition={noButtonPosition}
                speechBubbleText={speechBubbleText}
              />
            </motion.div>
          )}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              variants={sectionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transition}
              className="section-wrapper"
            >
              <CalendarSection
                selectedDate={selectedDate}
                onDateSelect={setSelectedDate}
                selectedTime={selectedTime}
                onTimeSelect={setSelectedTime}
                onNext={handleDateNext}
              />
            </motion.div>
          )}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              variants={sectionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transition}
              className="section-wrapper"
            >
              <RestaurantSection
                selectedRestaurant={selectedRestaurant}
                onRestaurantSelect={setSelectedRestaurant}
                customRestaurant={customRestaurant}
                onCustomRestaurantChange={setCustomRestaurant}
                onNext={handleRestaurantNext}
              />
            </motion.div>
          )}
          {currentStep === 4 && (
            <motion.div
              key="step4"
              variants={sectionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transition}
              className="section-wrapper"
            >
              <FinalSection
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                selectedRestaurant={selectedRestaurant}
                customRestaurant={customRestaurant}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
