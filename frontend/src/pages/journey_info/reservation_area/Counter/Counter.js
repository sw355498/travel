import React from 'react'

function Counter(props) {
  const { count, setCount } = props
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1)
  }
  const handleDecrement = () => {
    if (count >= 1) {
      setCount((prevCount) => prevCount - 1)
    }
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center td-mt-15">
        <button
          className="td-me-15 td-btn-medium-blueborder"
          onClick={handleDecrement}
        >
          <i className="fas fa-minus"></i>
        </button>
        <h5>參加人數 {count + 1}</h5>
        <button
          className="td-ms-15 td-btn-medium-blueborder"
          onClick={handleIncrement}
        >
          <i className="fas fa-plus"></i>
        </button>
        <button
          className="td-ms-25 td-btn-medium-b"
          onClick={() => setCount(0)}
        >
          重設
        </button>
      </div>
    </>
  )
}

export default Counter
