import { motion } from 'framer-motion'

const Card = ({ 
  children, 
  className = '', 
  hover = false,
  padding = 'md',
  ...props 
}) => {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  }

  return (
    <motion.div
      whileHover={hover ? { y: -2, scale: 1.01 } : {}}
      className={`
        bg-white rounded-xl shadow-lg border border-surface-100
        ${hover ? 'hover:shadow-xl transition-all duration-300' : ''}
        ${paddingClasses[padding]}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card