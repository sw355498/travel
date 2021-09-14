import React from 'react'

function DropdownUl(props) {
  const { value, handleChecked, children, checked } = props

  return (
    <>
      <li className="fw-bolder text-content-size18 p-2 ">
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
      </li>
    </>
  )
}

export default DropdownUl
