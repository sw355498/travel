import React from 'react'

// css引入
import '../../../style/button.css'

function QuantityButton(props) {
  const { PeopleQuantity, value } = props

  return (
    <>
      <button
        className="td-btn-people"
        onClick={() => {
          PeopleQuantity(value)
        }}
      >
        {value > 0 ? '+' : '-'}
      </button>
    </>
  )
}

export default QuantityButton
