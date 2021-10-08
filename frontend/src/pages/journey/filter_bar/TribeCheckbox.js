import React from 'react'

function TribeCheckbox(props) {
  const { value, handleChecked, checked, children, pageClick } = props
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
        onClick={pageClick}
      />
      {children}
      <label className="tribe-check-label" htmlFor="tribeCheckInput1">
        <span></span>
      </label>
    </div>
  )
}

export default TribeCheckbox
