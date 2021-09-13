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
          className="btn btn-lg dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          全部
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {starsTypes.map((value, i) => (
            <>
              <DropdownUl
                key={i}
                value={value}
                checked={stars?.includes(value)}
                handleChecked={starCheckHandler}
              >
                {' '}
                {value}
              </DropdownUl>
            </>
          ))}
        </ul>
      </div>
    </>
  )
}

export default DropdownFilter
