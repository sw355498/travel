import React from 'react'

function TribeCheckboxGuild(props) {
  const { value, handleChecked, checked, children } = props
  return (
    <div className="filter-tribe-check col-10">
      <input
        type="checkbox"
        className="tribe-check-input position-relative"
        name="tribeCheckInput"
        id="tribeCheckInput1"
        value={value}
        checked={checked}
        onChange={handleChecked}
      />
      {children}
      <label className="tribe-check-label" htmlFor="tribeCheckInput1">
        <span></span>
      </label>
    </div>
  )
}

export default TribeCheckboxGuild
