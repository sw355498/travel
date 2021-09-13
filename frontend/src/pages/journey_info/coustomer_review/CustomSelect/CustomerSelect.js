import React from 'react'
import { useSelect } from 'react-select-search'

const CustomSelect = ({ options, value, multiple }) => {
  const [snapshot, valueProps, optionProps] = useSelect({
    options,
    value,
    multiple,
  })

  return (
    <div>
      <button {...valueProps}>{snapshot.displayValue}</button>
      {snapshot.focus && (
        <ul>
          {snapshot.options.map((option) => (
            <li key={option.value}>
              <button {...optionProps} value={option.value}>
                {option.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default CustomSelect
