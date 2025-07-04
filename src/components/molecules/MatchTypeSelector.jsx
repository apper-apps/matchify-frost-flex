import { motion } from 'framer-motion'
import RadioButton from '@/components/atoms/RadioButton'
import ApperIcon from '@/components/ApperIcon'

const MatchTypeSelector = ({ selectedType, onTypeChange }) => {
  const matchTypes = [
    {
      value: 'broad',
      label: 'Broad Match',
      description: 'Keywords as-is',
      icon: 'Target',
      example: 'running shoes'
    },
    {
      value: 'modified',
      label: 'Modified Broad',
      description: 'Add + before each word',
      icon: 'Plus',
      example: '+running +shoes'
    },
    {
      value: 'phrase',
      label: 'Phrase Match',
      description: 'Wrap in quotes',
      icon: 'Quote',
      example: '"running shoes"'
    },
    {
      value: 'exact',
      label: 'Exact Match',
      description: 'Wrap in brackets',
      icon: 'Square',
      example: '[running shoes]'
    }
  ]

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-surface-800 mb-4">Match Type</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {matchTypes.map((type) => (
          <RadioButton
            key={type.value}
            name="matchType"
            value={type.value}
            checked={selectedType === type.value}
            onChange={(e) => onTypeChange(e.target.value)}
          >
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-100 mr-3">
                <ApperIcon name={type.icon} className="w-4 h-4 text-primary-600" />
              </div>
              <div>
                <div className="font-medium text-surface-900">{type.label}</div>
                <div className="text-sm text-surface-600">{type.description}</div>
                <div className="text-xs text-surface-500 font-mono mt-1">{type.example}</div>
              </div>
            </div>
          </RadioButton>
        ))}
      </div>
    </div>
  )
}

export default MatchTypeSelector