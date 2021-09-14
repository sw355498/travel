import React from 'react'
import DropdownUl from './DropdownUl'

function DropdownFilter(props) {
  const { stars, setStars, starsTypes } = props
  const starCheckHandler = (e) => {
    const value = e.target.value
    if (!stars.includes(value)) {
      return setStars([...stars, value])
    } else {
      const newStars = stars.filter((v) => v !== value)
      setStars(newStars)
    }
  }

  return (
    <>
      <div className="dropdown journeyInfo-dropdown">
        <button
          className="btn btn-lg td-btn-large-Sort-w d-flex align-items-center justify-content-center flex-nowrap"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="text-content-size18 td-me-15 ">篩選評價</span>
          <i class="fas fa-align-right"></i>
        </button>
        <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton1">
          {starsTypes.map((value, i) => (
            <>
              <DropdownUl
                key={i}
                value={value}
                checked={stars?.includes(value)}
                handleChecked={starCheckHandler}
              >
                {' '}
                {value}星評價
              </DropdownUl>
            </>
          ))}
        </ul>
      </div>
    </>
  )
}

export default DropdownFilter
