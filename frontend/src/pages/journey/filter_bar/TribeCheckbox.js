import React from 'react'

function TribeCheckbox(props) {
  const { value, handleChecked, tags } = props
  return (
    <div className="filter-tribe-check col-10">
      <div className="">
        <input
          type="checkbox"
          className="tribe-check-input position-relative"
          name="tribeCheckInput"
          id="tribeCheckInput1"
          value={value}
          checked={tags.includes(value)}
          onChange={handleChecked}
        />
        {value}
        <label className="tribe-check-label" for="tribeCheckInput1">
          <span></span>
        </label>
      </div>
    </div>
  )
}

export default TribeCheckbox
