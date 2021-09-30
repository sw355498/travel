import React from 'react'

function TribeCheckboxGuild(props) {
  const { value, handleChecked, checked, children } = props
  return (
    <div>
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
      <label className="tribe-check-label" htmlFor="tribeCheckInput1"></label>
    </div>
  )
}

export default TribeCheckboxGuild
