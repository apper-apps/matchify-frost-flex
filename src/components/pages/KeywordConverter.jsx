import { motion } from 'framer-motion'
import Header from '@/components/organisms/Header'
import Hero from '@/components/organisms/Hero'
import KeywordProcessor from '@/components/organisms/KeywordProcessor'
import Features from '@/components/organisms/Features'
import Footer from '@/components/organisms/Footer'

const KeywordConverter = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50"
    >
      <Header />
      <Hero />
      
      <main className="py-16">
        <KeywordProcessor />
      </main>
      
      <Features />
      <Footer />
    </motion.div>
  )
}

export default KeywordConverter