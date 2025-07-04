import { forwardRef } from 'react'

const Textarea = forwardRef(({ 
  label, 
  error, 
  className = '', 
  rows = 4,
  required = false,
  ...props 
}, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-surface-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <textarea
        ref={ref}
        rows={rows}
        className={`
          w-full px-4 py-3 rounded-lg border-2 border-surface-200 
          focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 
          transition-all duration-200 outline-none resize-none
          placeholder-surface-400 text-surface-900
          ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  )
})

Textarea.displayName = 'Textarea'

export default Textarea