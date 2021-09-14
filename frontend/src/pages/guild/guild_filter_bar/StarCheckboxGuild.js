import React from 'react'

function StarCheckboxGuild(props) {
  const { value, handleChecked, checked, children } = props
  return (
    <div>
      <input
        type="checkbox"
        className="stars-check-input position-relative"
        name="starsCheckInput"
        id="starsCheckInput5"
        value={value}
        checked={checked}
        onChange={handleChecked}
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
