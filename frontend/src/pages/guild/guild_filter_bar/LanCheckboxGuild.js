import React from 'react'

function LanCheckboxGuild(props) {
  const { value, handleChecked, checked, children, pageClick } = props
  return (
    <div>
      <input
        type="checkbox"
        className="lan-check-input position-relative"
        name="lanCheckInput"
        id="lanCheckInput1"
        value={value}
        checked={checked}
        onChange={handleChecked}
        onClick={pageClick}
      />
      {children}
      <label className="lan-check-label" htmlFor="lanCheckInput1"></label>
    </div>
  )
}

export default LanCheckboxGuild
