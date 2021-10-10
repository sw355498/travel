import React from 'react'

function StarCheckboxGuild(props) {
  const { value, handleChecked, checked, children, pageClick } = props
  return (
    <div className="filter-tribe-check">
      <input
        type="checkbox"
        className="tribe-check-input position-relative"
        name="starsCheckInput"
        id="starsCheckInput5"
        value={value}
        checked={checked}
        onChange={handleChecked}
        onClick={pageClick}
      />
      {children}
      <label
        className="stars-check-label five-stars-label"
        htmlFor="starsCheckInput5"
      ></label>
    </div>
  )
}

export default StarCheckboxGuild
