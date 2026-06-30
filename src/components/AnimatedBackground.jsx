import { motion } from 'framer-motion'

const sparkles = [
  { id: 1, x: '20%', y: '30%', delay: 0, size: 12 },
  { id: 2, x: '70%', y: '20%', delay: 1, size: 10 },
  { id: 3, x: '40%', y: '60%', delay: 2, size: 14 },
  { id: 4, x: '80%', y: '70%', delay: 0.5, size: 8 },
  { id: 5, x: '10%', y: '80%', delay: 1.5, size: 11 },
  { id: 6, x: '50%', y: '40%', delay: 2.5, size: 9 },
  { id: 7, x: '90%', y: '50%', delay: 3, size: 13 },
  { id: 8, x: '30%', y: '10%', delay: 1, size: 10 },
]

const circles = [
  { id: 1, x: '15%', y: '25%', size: 60, delay: 0, duration: 8 },
  { id: 2, x: '75%', y: '15%', size: 40, delay: 2, duration: 10 },
  { id: 3, x: '45%', y: '75%', size: 50, delay: 1, duration: 9 },
  { id: 4, x: '85%', y: '55%', size: 30, delay: 3, duration: 7 },
  { id: 5, x: '25%', y: '85%', size: 45, delay: 0.5, duration: 11 },
]

export default function AnimatedBackground() {
  return (
    <div className="animated-background">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      {circles.map((circle) => (
        <motion.div
          key={circle.id}
          className="floating-circle"
          style={{
            left: circle.x,
            top: circle.y,
            width: circle.size,
            height: circle.size,
          }}
          animate={{ y: [0, -30, 0], x: [0, 10, 0] }}
          transition={{
            duration: circle.duration,
            delay: circle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="sparkle"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            fontSize: sparkle.size,
          }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
          transition={{
            duration: 3,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <i className="fa-solid fa-star"></i>
        </motion.div>
      ))}

      <div className="gradient-overlay"></div>
    </div>
  )
}
