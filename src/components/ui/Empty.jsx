import { motion } from 'framer-motion'
import Button from '@/components/atoms/Button'
import Card from '@/components/atoms/Card'
import ApperIcon from '@/components/ApperIcon'

const Empty = ({ 
  title = 'No data available',
  message = 'Get started by adding some content.',
  actionText = 'Get Started',
  onAction,
  icon = 'FileText',
  className = ''
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`flex items-center justify-center p-8 ${className}`}
    >
      <Card className="max-w-md text-center">
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-gradient-to-br from-surface-100 to-surface-200 rounded-full flex items-center justify-center">
              <ApperIcon name={icon} className="w-8 h-8 text-surface-400" />
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-surface-900">{title}</h3>
            <p className="text-surface-600">{message}</p>
          </div>
          
          {onAction && (
            <Button
              variant="primary"
              onClick={onAction}
              className="w-full"
            >
              <ApperIcon name="Plus" className="w-4 h-4 mr-2" />
              {actionText}
            </Button>
          )}
        </div>
      </Card>
    </motion.div>
  )
}

export default Empty