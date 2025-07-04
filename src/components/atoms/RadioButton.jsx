import { motion } from 'framer-motion'

const RadioButton = ({ 
  name, 
  value, 
  checked, 
  onChange, 
  children, 
  className = '',
  disabled = false,
  ...props 
}) => {
  return (
    <motion.label
      whileHover={{ scale: disabled ? 1 : 1.01 }}
      whileTap={{ scale: disabled ? 1 : 0.99 }}
      className={`
        relative flex items-center cursor-pointer p-3 rounded-lg border-2 transition-all duration-200
        ${checked 
          ? 'border-primary-500 bg-primary-50 shadow-md' 
          : 'border-surface-200 hover:border-surface-300 hover:bg-surface-50'
        }
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="sr-only"
        {...props}
      />
      <div className={`
        w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center transition-all duration-200
        ${checked ? 'border-primary-500 bg-primary-500' : 'border-surface-300'}
      `}>
        {checked && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-2 h-2 rounded-full bg-white"
          />
        )}
      </div>
      <div className="flex-1">
        {children}
      </div>
    </motion.label>
  )
}

export default RadioButton