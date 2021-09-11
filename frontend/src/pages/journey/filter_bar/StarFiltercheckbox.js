import React from 'react'

function StarFiltercheckbox(props) {
  const { star, starCheck, value } = props
  return (
    <div className="filter-stars">
      <div className="filter-stars-title col-2 position-relative">
        <p className="position-absolute text-white">星等</p>
        <div className="filter-stars-title-bg"></div>
      </div>
      <div className="filter-stars-check my-auto d-flex flex-wrap col-10">
        <div>
          <input
            type="checkbox"
            className="stars-check-input position-relative"
            name="starsCheckInput"
            id="starsCheckInput5"
            value={value}
            checked={star.includes(value)}
            onChange={starCheck}
          />
          {value}
          <label
            className="stars-check-label five-stars-label"
            labelFor="starsCheckInput5"
          >
            <div className="stars-label-group">{value}</div>
          </label>
        </div>
      </div>
    </div>
  )
}

export default StarFiltercheckbox
