import React from 'react'
import { Link } from 'react-router-dom'

function HomeDropdownFilter(props) {
  const { tribes } = props
  console.log({ tribes })

  return (
    <>
      <div className="dropdown text-center dropend dropdown-row">
        <button
          className="btn dropdown-toggle btn-lg border-1 border-dark td-mt-25"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span className="td-mt-25 fw-bold ">探索行程</span>
        </button>
        <div
          className="dropdown-menu td-mt-50"
          aria-labelledby="dropdownMenuButton"
        >
          <form action="">
            <div className="mt-3 list ml-3">
              <h6 className="mt-3 mr-3 mb-3">搜尋部落:</h6>
              {tribes.map((value, i) => (
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="inlineCheckbox2"
                    key={i}
                  >
                    {value.tribe}
                  </label>
                </div>
              ))}
            </div>
            <div className="mt-3 list ml-3 ">
              <h6 className="mt-3  mb-3">選擇導遊語言:</h6>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="inlineCheckbox1"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="inlineCheckbox1">
                  中文
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="inlineCheckbox2"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="inlineCheckbox2">
                  英文{' '}
                </label>
              </div>
            </div>
            <div className="text-center text-title-size24">
              {' '}
              <Link
                to="/Guide"
                type="submit"
                className="td-mt-25 td-mb-25 fw-bold"
              >
                送出
              </Link>
            </div>
          </form>
        </div>
      </div>
      {/* dropdown */}
      <div className="dropdown text-center dropdown-column">
        <button
          className="btn dropdown-toggle btn-lg border-1 border-dark td-mt-25"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span className="td-mt-25 fw-bold ">探索行程</span>
        </button>
        <div
          className="dropdown-menu td-mt-50"
          aria-labelledby="dropdownMenuButton"
        >
          <form action="">
            <div className="mt-3 list ml-3">
              <h6 className="mt-3 mr-3 mb-3">搜尋部落:</h6>
              {tribes.map((value, i) => (
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="inlineCheckbox2"
                    key={i}
                  >
                    {value.tribe}
                  </label>
                </div>
              ))}
            </div>
            <div className="mt-3 list ml-3 ">
              <h6 className="mt-3  mb-3">選擇導遊語言:</h6>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="inlineCheckbox1"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="inlineCheckbox1">
                  中文
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="inlineCheckbox2"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="inlineCheckbox2">
                  英文{' '}
                </label>
              </div>
            </div>
            <div className="text-center text-title-size24">
              {' '}
              <Link
                to="/Guild"
                type="submit"
                className="td-mt-25 td-mb-25 fw-bold"
              >
                送出
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default HomeDropdownFilter
