import { useState } from 'react'
import Calendar from 'react-calendar'
import { motion, AnimatePresence } from 'framer-motion'
import 'react-calendar/dist/Calendar.css'
import Button from './Button'

const timeOptions = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
  '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
  '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
  '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM',
  '9:00 PM', '9:30 PM', '10:00 PM', '10:30 PM',
  '11:00 PM'
]

export default function CalendarSection({ selectedDate, onDateSelect, selectedTime, onTimeSelect, onNext }) {
  const [step, setStep] = useState('date') // 'date' | 'time'

  const handleDateChange = (date) => {
    onDateSelect(date)
    setStep('time') // move to time step after date is selected
  }

  const handlePrevious = () => {
    setStep('date') // go back to date step
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
    <div className="calendar-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Pick our Date
      </motion.h2>

      {/* Date step: show calendar only when step === 'date' */}
      {step === 'date' && (
        <motion.div
          className="calendar-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ delay: 0.2 }}
        >
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            minDate={new Date()}
            className="cute-calendar"
          />
        </motion.div>
      )}

      {/* Show selected date (visible in both steps) */}
      {selectedDate && (
        <motion.div
          className="selected-date-display"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <i className="fa-solid fa-circle-check"></i>
          {formatDate(selectedDate)}
        </motion.div>
      )}

      {/* Time step: show time selector + navigation buttons */}
      <AnimatePresence>
        {step === 'time' && (
          <motion.div
            className="time-section"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <h3 className="time-title">
              Choose Time
            </h3>

            <div className="time-selector">
              <select
                value={selectedTime}
                onChange={(e) => onTimeSelect(e.target.value)}
                className="time-dropdown"
                aria-label="Select a time for the date"
              >
                <option value="">Select a time...</option>
                {timeOptions.map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
              <i className="fa-solid fa-chevron-down dropdown-icon"></i>
            </div>

            {/* Navigation buttons */}
            <div className="step-navigation">
              <Button onClick={handlePrevious} variant="primary" icon="fa-arrow-left">
                PREVIOUS
              </Button>
              {selectedTime && (
                <Button onClick={onNext} variant="primary" icon="fa-arrow-right">
                  NEXT
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}