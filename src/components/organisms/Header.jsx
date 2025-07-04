import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const Header = () => {
  return (
    <header className="bg-white border-b border-surface-200 sticky top-0 z-50 backdrop-blur-lg bg-white/95">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl shadow-lg">
              <ApperIcon name="Zap" className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">Matchify</h1>
              <p className="text-sm text-surface-600">Google Ads Keyword Converter</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm text-surface-600">
              <ApperIcon name="Zap" className="w-4 h-4" />
              <span>One-click conversion</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-surface-600">
              <ApperIcon name="Shield" className="w-4 h-4" />
              <span>No login required</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-surface-600">
              <ApperIcon name="Clock" className="w-4 h-4" />
              <span>Instant results</span>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  )
}

export default Header