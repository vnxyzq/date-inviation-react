import { motion } from 'framer-motion'

export default function Button({ children, onClick, variant = 'primary', icon, disabled, type = 'button' }) {
  const baseClass = `btn btn-${variant}`

  return (
    <motion.button
      type={type}
      className={baseClass}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {icon && <i className={`fa-solid ${icon}`}></i>}
      <span>{children}</span>
    </motion.button>
  )
}
