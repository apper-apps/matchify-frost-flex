/**
 * Format keywords based on match type and case transformation
 * @param {string} keywordText - Raw keyword text (one per line)
 * @param {string} matchType - Match type: 'broad', 'modified', 'phrase', 'exact'
 * @param {string} caseType - Case type: 'original', 'lowercase', 'uppercase', 'title'
 * @returns {string} - Formatted keywords
 */
export const formatKeywords = (keywordText, matchType, caseType) => {
  if (!keywordText || !keywordText.trim()) {
    return ''
  }

  // Split keywords into lines and filter out empty lines
  const keywords = keywordText
    .split('\n')
    .map(line => line.trim())
    .filter(line => line !== '')

  // Apply match type formatting
  const matchTypeFormatted = keywords.map(keyword => {
    switch (matchType) {
      case 'broad':
        return keyword
      case 'modified':
        return keyword.split(' ').map(word => `+${word}`).join(' ')
      case 'phrase':
        return `"${keyword}"`
      case 'exact':
        return `[${keyword}]`
      default:
        return keyword
    }
  })

  // Apply case transformation
  const caseFormatted = matchTypeFormatted.map(keyword => {
    switch (caseType) {
      case 'original':
        return keyword
      case 'lowercase':
        return keyword.toLowerCase()
      case 'uppercase':
        return keyword.toUpperCase()
      case 'title':
        return toTitleCase(keyword)
      default:
        return keyword
    }
  })

  return caseFormatted.join('\n')
}

/**
 * Convert text to title case
 * @param {string} text - Text to convert
 * @returns {string} - Title case text
 */
const toTitleCase = (text) => {
  return text.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}

/**
 * Count keywords in text
 * @param {string} keywordText - Raw keyword text
 * @returns {number} - Number of keywords
 */
export const countKeywords = (keywordText) => {
  if (!keywordText || !keywordText.trim()) {
    return 0
  }

  return keywordText
    .split('\n')
    .map(line => line.trim())
    .filter(line => line !== '')
    .length
}

/**
 * Validate keyword input
 * @param {string} keywordText - Raw keyword text
 * @param {number} maxKeywords - Maximum allowed keywords
 * @returns {object} - Validation result
 */
export const validateKeywords = (keywordText, maxKeywords = 1000) => {
  const keywordCount = countKeywords(keywordText)
  
  const result = {
    isValid: true,
    keywordCount,
    errors: [],
    warnings: []
  }

  if (keywordCount > maxKeywords) {
    result.warnings.push(`${keywordCount} keywords exceeds recommended limit of ${maxKeywords}`)
  }

  if (keywordCount === 0 && keywordText.trim()) {
    result.errors.push('No valid keywords found')
    result.isValid = false
  }

  return result
}

/**
 * Remove duplicate keywords
 * @param {string} keywordText - Raw keyword text
 * @returns {string} - Deduplicated keyword text
 */
export const removeDuplicateKeywords = (keywordText) => {
  if (!keywordText || !keywordText.trim()) {
    return ''
  }

  const keywords = keywordText
    .split('\n')
    .map(line => line.trim())
    .filter(line => line !== '')

  const uniqueKeywords = [...new Set(keywords)]
  
  return uniqueKeywords.join('\n')
}