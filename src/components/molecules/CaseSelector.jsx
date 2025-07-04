import { motion } from 'framer-motion'
import RadioButton from '@/components/atoms/RadioButton'
import ApperIcon from '@/components/ApperIcon'

const CaseSelector = ({ selectedCase, onCaseChange }) => {
  const caseTypes = [
    {
      value: 'original',
      label: 'As Is',
      description: 'Keep original case',
      icon: 'Type',
      example: 'Running Shoes'
    },
    {
      value: 'lowercase',
      label: 'lowercase',
      description: 'Convert to lowercase',
      icon: 'ArrowDown',
      example: 'running shoes'
    },
    {
      value: 'uppercase',
      label: 'UPPERCASE',
      description: 'Convert to uppercase',
      icon: 'ArrowUp',
      example: 'RUNNING SHOES'
    },
    {
      value: 'title',
      label: 'Title Case',
      description: 'Capitalize first letters',
      icon: 'AlignLeft',
      example: 'Running Shoes'
    }
  ]

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-surface-800 mb-4">Text Case</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {caseTypes.map((caseType) => (
          <RadioButton
            key={caseType.value}
            name="caseType"
            value={caseType.value}
            checked={selectedCase === caseType.value}
            onChange={(e) => onCaseChange(e.target.value)}
          >
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary-100 mr-3">
                <ApperIcon name={caseType.icon} className="w-4 h-4 text-secondary-600" />
              </div>
              <div>
                <div className="font-medium text-surface-900">{caseType.label}</div>
                <div className="text-sm text-surface-600">{caseType.description}</div>
                <div className="text-xs text-surface-500 font-mono mt-1">{caseType.example}</div>
              </div>
            </div>
          </RadioButton>
        ))}
      </div>
    </div>
  )
}

export default CaseSelector