import { motion } from 'framer-motion'
import Button from '@/components/atoms/Button'
import Card from '@/components/atoms/Card'
import ApperIcon from '@/components/ApperIcon'

const Error = ({ 
  title = 'Something went wrong',
  message = 'An unexpected error occurred. Please try again.',
  onRetry,
  className = ''
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`flex items-center justify-center p-8 ${className}`}
    >
      <Card className="max-w-md text-center">
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <ApperIcon name="AlertCircle" className="w-8 h-8 text-red-600" />
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-surface-900">{title}</h3>
            <p className="text-surface-600">{message}</p>
          </div>
          
          {onRetry && (
            <Button
              variant="primary"
              onClick={onRetry}
              className="w-full"
            >
              <ApperIcon name="RefreshCw" className="w-4 h-4 mr-2" />
              Try Again
            </Button>
          )}
        </div>
      </Card>
    </motion.div>
  )
}

export default Error