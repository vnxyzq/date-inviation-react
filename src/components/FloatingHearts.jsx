import { motion } from 'framer-motion'

const hearts = [
  { id: 1, size: 20, x: '10%', delay: 0, duration: 6 },
  { id: 2, size: 16, x: '25%', delay: 1, duration: 8 },
  { id: 3, size: 24, x: '40%', delay: 2, duration: 7 },
  { id: 4, size: 14, x: '55%', delay: 0.5, duration: 9 },
  { id: 5, size: 18, x: '70%', delay: 1.5, duration: 6.5 },
  { id: 6, size: 22, x: '85%', delay: 2.5, duration: 7.5 },
  { id: 7, size: 12, x: '15%', delay: 3, duration: 8.5 },
  { id: 8, size: 26, x: '60%', delay: 1, duration: 6 },
  { id: 9, size: 15, x: '90%', delay: 2, duration: 9 },
  { id: 10, size: 20, x: '5%', delay: 0, duration: 7 },
]

export default function FloatingHearts() {
  return (
    <div className="floating-hearts">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="floating-heart"
          style={{
            left: heart.x,
            fontSize: heart.size,
          }}
          initial={{ y: '110vh', opacity: 0 }}
          animate={{
            y: '-10vh',
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <i className="fa-solid fa-heart"></i>
        </motion.div>
      ))}
    </div>
  )
}
