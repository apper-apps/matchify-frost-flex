import { useState, useEffect, useCallback } from 'react'
import { formatKeywords, countKeywords, validateKeywords } from '@/utils/keywordFormatter'

export const useKeywordProcessor = (initialSettings = {}) => {
  const [keywords, setKeywords] = useState('')
  const [matchType, setMatchType] = useState(initialSettings.matchType || 'broad')
  const [caseType, setCaseType] = useState(initialSettings.caseType || 'original')
  const [formattedKeywords, setFormattedKeywords] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [validation, setValidation] = useState({ isValid: true, keywordCount: 0, errors: [], warnings: [] })

  // Process keywords when inputs change
  useEffect(() => {
    if (keywords.trim()) {
      setIsProcessing(true)
      
      // Validate keywords
      const validationResult = validateKeywords(keywords)
      setValidation(validationResult)
      
      // Format keywords with slight delay for UX
      const timer = setTimeout(() => {
        if (validationResult.isValid) {
          const formatted = formatKeywords(keywords, matchType, caseType)
          setFormattedKeywords(formatted)
        } else {
          setFormattedKeywords('')
        }
        setIsProcessing(false)
      }, 100)

      return () => clearTimeout(timer)
    } else {
      setFormattedKeywords('')
      setValidation({ isValid: true, keywordCount: 0, errors: [], warnings: [] })
      setIsProcessing(false)
    }
  }, [keywords, matchType, caseType])

  // Clear all data
  const clear = useCallback(() => {
    setKeywords('')
    setFormattedKeywords('')
    setValidation({ isValid: true, keywordCount: 0, errors: [], warnings: [] })
  }, [])

  // Manual conversion trigger
  const convert = useCallback(() => {
    if (keywords.trim()) {
      setIsProcessing(true)
      
      setTimeout(() => {
        const validationResult = validateKeywords(keywords)
        setValidation(validationResult)
        
        if (validationResult.isValid) {
          const formatted = formatKeywords(keywords, matchType, caseType)
          setFormattedKeywords(formatted)
        }
        setIsProcessing(false)
      }, 200)
    }
  }, [keywords, matchType, caseType])

  // Copy to clipboard
  const copyToClipboard = useCallback(async () => {
    if (formattedKeywords) {
      try {
        await navigator.clipboard.writeText(formattedKeywords)
        return { success: true, message: 'Keywords copied to clipboard!' }
      } catch (error) {
        return { success: false, message: 'Failed to copy keywords' }
      }
    }
    return { success: false, message: 'No keywords to copy' }
  }, [formattedKeywords])

  return {
    // State
    keywords,
    matchType,
    caseType,
    formattedKeywords,
    isProcessing,
    validation,
    
    // Actions
    setKeywords,
    setMatchType,
    setCaseType,
    clear,
    convert,
    copyToClipboard,
    
    // Computed values
    keywordCount: countKeywords(keywords),
    hasKeywords: keywords.trim() !== '',
    hasFormattedKeywords: formattedKeywords.trim() !== ''
  }
}