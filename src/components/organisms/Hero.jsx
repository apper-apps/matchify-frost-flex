import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="flex justify-center">
            <div className="flex items-center justify-center w-20 h-20 bg-white/10 rounded-2xl backdrop-blur-sm">
              <ApperIcon name="Target" className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Convert Google Ads Keywords
            <br />
            <span className="text-secondary-200">Fast, Clean, and Easy</span>
          </h2>
          
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Transform your keyword lists into any match type format in seconds. No signup required, no limits, just results.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center space-x-3"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg">
                <ApperIcon name="Zap" className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Instant Conversion</div>
                <div className="text-sm text-primary-200">Real-time formatting</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center space-x-3"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg">
                <ApperIcon name="Shield" className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold">No Registration</div>
                <div className="text-sm text-primary-200">Use immediately</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center space-x-3"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg">
                <ApperIcon name="Copy" className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold">One-Click Copy</div>
                <div className="text-sm text-primary-200">Ready to paste</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero