import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const Footer = () => {
  return (
    <footer className="bg-surface-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
        >
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg">
              <ApperIcon name="Zap" className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-semibold text-lg">Matchify</div>
              <div className="text-sm text-surface-400">Google Ads Keyword Converter</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2 text-sm text-surface-400">
              <ApperIcon name="Shield" className="w-4 h-4" />
              <span>Privacy-first design</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-surface-400">
              <ApperIcon name="Zap" className="w-4 h-4" />
              <span>Built for speed</span>
            </div>
          </div>
        </motion.div>
        
        <div className="mt-8 pt-8 border-t border-surface-700 text-center text-sm text-surface-400">
          <p>
            © 2024 Matchify. Built for PPC professionals who value speed and simplicity.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer