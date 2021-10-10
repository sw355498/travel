import React from 'react'

function LanCheckboxGuild(props) {
  const { value, handleChecked, checked, children, pageClick } = props
  return (
    <div className="filter-tribe-check col-10">
      <input
        type="checkbox"
        className="tribe-check-input position-relative"
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
