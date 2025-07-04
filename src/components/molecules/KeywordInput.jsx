import { useState } from 'react'
import { motion } from 'framer-motion'
import Textarea from '@/components/atoms/Textarea'
import Button from '@/components/atoms/Button'
import ApperIcon from '@/components/ApperIcon'

const KeywordInput = ({ keywords, onKeywordsChange, onClear }) => {
  const [characterCount, setCharacterCount] = useState(0)
  const maxKeywords = 1000

  const handleInputChange = (e) => {
    const value = e.target.value
    const lines = value.split('\n').filter(line => line.trim() !== '')
    
    setCharacterCount(value.length)
    onKeywordsChange(value)
  }

  const keywordCount = keywords.split('\n').filter(line => line.trim() !== '').length

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-surface-800">Keywords</h3>
          <p className="text-sm text-surface-600">Paste your keywords here, one per line</p>
        </div>
        <div className="text-right">
          <div className="text-sm text-surface-600">
            {keywordCount} keywords
          </div>
          <div className="text-xs text-surface-500">
            {characterCount} characters
          </div>
        </div>
      </div>

      <div className="relative">
        <Textarea
          value={keywords}
          onChange={handleInputChange}
          placeholder="running shoes&#10;nike sneakers&#10;athletic footwear&#10;..."
          rows={12}
          className="font-mono text-sm leading-relaxed"
        />
        
        {keywords && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-3 right-3"
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={onClear}
              className="h-8 w-8 p-0 hover:bg-red-50 hover:text-red-600"
            >
              <ApperIcon name="X" className="w-4 h-4" />
            </Button>
          </motion.div>
        )}
      </div>

      {keywordCount > maxKeywords && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center text-red-600 text-sm"
        >
          <ApperIcon name="AlertTriangle" className="w-4 h-4 mr-2" />
          Warning: {keywordCount} keywords exceeds recommended limit of {maxKeywords}
        </motion.div>
      )}
    </div>
  )
}

export default KeywordInput