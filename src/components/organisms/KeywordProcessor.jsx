import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import KeywordInput from '@/components/molecules/KeywordInput'
import MatchTypeSelector from '@/components/molecules/MatchTypeSelector'
import CaseSelector from '@/components/molecules/CaseSelector'
import KeywordOutput from '@/components/molecules/KeywordOutput'
import Button from '@/components/atoms/Button'
import ApperIcon from '@/components/ApperIcon'
import { formatKeywords } from '@/utils/keywordFormatter'

const KeywordProcessor = () => {
  const [keywords, setKeywords] = useState('')
  const [matchType, setMatchType] = useState('broad')
  const [caseType, setCaseType] = useState('original')
  const [formattedKeywords, setFormattedKeywords] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)

  // Auto-convert keywords when inputs change
  useEffect(() => {
    if (keywords.trim()) {
      setIsProcessing(true)
      
      // Add slight delay to show processing state
      const timer = setTimeout(() => {
        const formatted = formatKeywords(keywords, matchType, caseType)
        setFormattedKeywords(formatted)
        setIsProcessing(false)
      }, 100)

      return () => clearTimeout(timer)
    } else {
      setFormattedKeywords('')
    }
  }, [keywords, matchType, caseType])

  const handleClear = () => {
    setKeywords('')
    setFormattedKeywords('')
  }

  const handleConvert = () => {
    if (keywords.trim()) {
      setIsProcessing(true)
      
      setTimeout(() => {
        const formatted = formatKeywords(keywords, matchType, caseType)
        setFormattedKeywords(formatted)
        setIsProcessing(false)
      }, 200)
    }
  }

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <KeywordInput
            keywords={keywords}
            onKeywordsChange={setKeywords}
            onClear={handleClear}
          />
          
          <div className="flex justify-center lg:hidden">
            <Button
              variant="primary"
              size="lg"
              onClick={handleConvert}
              disabled={!keywords.trim() || isProcessing}
              loading={isProcessing}
              className="w-full"
            >
              <ApperIcon name="ArrowRight" className="w-5 h-5 mr-2" />
              Convert Keywords
            </Button>
          </div>
        </motion.div>

        {/* Output Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <KeywordOutput
            formattedKeywords={formattedKeywords}
            matchType={matchType}
            caseType={caseType}
          />
        </motion.div>
      </div>

      {/* Controls Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 xl:grid-cols-2 gap-8"
      >
        <MatchTypeSelector
          selectedType={matchType}
          onTypeChange={setMatchType}
        />
        
        <CaseSelector
          selectedCase={caseType}
          onCaseChange={setCaseType}
        />
      </motion.div>

      {/* Desktop Convert Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="hidden lg:flex justify-center"
      >
        <Button
          variant="primary"
          size="xl"
          onClick={handleConvert}
          disabled={!keywords.trim() || isProcessing}
          loading={isProcessing}
          className="px-12"
        >
          <ApperIcon name="Zap" className="w-5 h-5 mr-2" />
          Convert Keywords
        </Button>
      </motion.div>
    </div>
  )
}

export default KeywordProcessor