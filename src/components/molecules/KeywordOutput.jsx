import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/atoms/Button'
import ApperIcon from '@/components/ApperIcon'
import { toast } from 'react-toastify'

const KeywordOutput = ({ formattedKeywords, matchType, caseType }) => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(formattedKeywords)
      setCopied(true)
      toast.success('Keywords copied to clipboard!')
      
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      toast.error('Failed to copy keywords')
    }
  }

  const keywordCount = formattedKeywords.split('\n').filter(line => line.trim() !== '').length

  const getMatchTypeLabel = () => {
    const labels = {
      broad: 'Broad Match',
      modified: 'Modified Broad',
      phrase: 'Phrase Match',
      exact: 'Exact Match'
    }
    return labels[matchType] || 'Unknown'
  }

  const getCaseLabel = () => {
    const labels = {
      original: 'Original Case',
      lowercase: 'Lowercase',
      uppercase: 'Uppercase',
      title: 'Title Case'
    }
    return labels[caseType] || 'Unknown'
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-surface-800">Output</h3>
          <div className="flex items-center space-x-4 text-sm text-surface-600">
            <span>{getMatchTypeLabel()}</span>
            <span>•</span>
            <span>{getCaseLabel()}</span>
            <span>•</span>
            <span>{keywordCount} keywords</span>
          </div>
        </div>
        
        {formattedKeywords && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Button
              variant={copied ? 'success' : 'secondary'}
              size="sm"
              onClick={copyToClipboard}
              className="min-w-[100px]"
            >
              {copied ? (
                <>
                  <ApperIcon name="Check" className="w-4 h-4 mr-2" />
                  Copied
                </>
              ) : (
                <>
                  <ApperIcon name="Copy" className="w-4 h-4 mr-2" />
                  Copy
                </>
              )}
            </Button>
          </motion.div>
        )}
      </div>

      <div className="relative">
        <div className="bg-surface-50 rounded-lg border-2 border-surface-200 p-4 min-h-[300px]">
          {formattedKeywords ? (
            <pre className="font-mono text-sm text-surface-800 whitespace-pre-wrap leading-relaxed">
              {formattedKeywords}
            </pre>
          ) : (
            <div className="flex items-center justify-center h-full text-surface-500">
              <div className="text-center">
                <ApperIcon name="FileText" className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">Your formatted keywords will appear here</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {formattedKeywords && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center text-xs text-surface-500"
        >
          <ApperIcon name="Info" className="w-4 h-4 mr-1" />
          Ready to paste into Google Ads Editor or campaign setup
        </motion.div>
      )}
    </div>
  )
}

export default KeywordOutput