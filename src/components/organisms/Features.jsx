import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import Card from '@/components/atoms/Card'

const Features = () => {
  const features = [
    {
      icon: 'Target',
      title: 'All Match Types',
      description: 'Convert to Broad, Modified Broad, Phrase, or Exact match formats instantly',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'Type',
      title: 'Case Conversion',
      description: 'Transform text to lowercase, UPPERCASE, or Title Case as needed',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: 'Copy',
      title: 'One-Click Copy',
      description: 'Copy your formatted keywords to clipboard with a single click',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'Zap',
      title: 'Real-Time Processing',
      description: 'See your keywords transform as you type or change settings',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: 'Shield',
      title: 'Privacy First',
      description: 'No data storage, no tracking, no registration required',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: 'Smartphone',
      title: 'Mobile Ready',
      description: 'Works perfectly on desktop, tablet, and mobile devices',
      color: 'from-teal-500 to-green-500'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-surface-900 mb-4">
            Everything You Need for
            <span className="gradient-text"> Keyword Formatting</span>
          </h2>
          <p className="text-lg text-surface-600 max-w-2xl mx-auto">
            Professional-grade keyword conversion tools designed for PPC specialists and digital marketers
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card hover className="h-full">
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                    <ApperIcon name={feature.icon} className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-surface-900">{feature.title}</h3>
                  <p className="text-surface-600">{feature.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Features