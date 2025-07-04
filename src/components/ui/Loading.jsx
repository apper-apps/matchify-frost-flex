import { motion } from 'framer-motion'

const Loading = ({ className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`flex items-center justify-center p-8 ${className}`}
    >
      <div className="space-y-4 w-full max-w-md">
        {/* Header skeleton */}
        <div className="shimmer h-8 w-3/4 rounded-lg"></div>
        <div className="shimmer h-4 w-1/2 rounded-lg"></div>
        
        {/* Input area skeleton */}
        <div className="space-y-2">
          <div className="shimmer h-4 w-1/4 rounded-lg"></div>
          <div className="shimmer h-32 w-full rounded-lg"></div>
        </div>
        
        {/* Controls skeleton */}
        <div className="grid grid-cols-2 gap-4">
          <div className="shimmer h-16 w-full rounded-lg"></div>
          <div className="shimmer h-16 w-full rounded-lg"></div>
        </div>
        
        {/* Button skeleton */}
        <div className="shimmer h-12 w-full rounded-lg"></div>
      </div>
    </motion.div>
  )
}

export default Loading