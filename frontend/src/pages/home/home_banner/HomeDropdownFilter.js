import React, { useState, useMemo } from 'react'
import { Link, useHistory } from 'react-router-dom'
import qs from 'qs'

function HomeDropdownFilter(props) {
  const history = useHistory()
  const tribesObject = useMemo(() => {
    const ret = {}
    props.tribes.forEach((tribe) => {
      ret[tribe.tribe] = false
    })
    return ret
  }, [props.tribes])
  const [tribesInput, setTribesInput] = useState(tribesObject)
  const { tribes } = props

  const handleTribesObjectChanged = (e) => {
    const value = e.target.value
    const checked = e.target.checked
    const newState = { ...tribesInput }
    newState[value] = checked
    setTribesInput(newState)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const tribes = []
    Object.entries(tribesInput).forEach(([key, value]) => {
      if (value) {
        tribes.push(key)
      }
    })
    const query = qs.stringify({ tribes })
    history.push(`/journey?${query}`)
  }

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
          <span className="td-mt-25 fw-bold ">尋找在地導遊</span>
        </button>
        <div
          className="dropdown-menu td-mt-50"
          aria-labelledby="dropdownMenuButton"
        >
          <form action="" onSubmit={handleSubmit}>
            <div className="mt-3 list ml-3">
              <h6 className="mt-3 mr-3 mb-3">選擇部落:</h6>
              {tribes.map((value, i) => (
                <div className="form-check form-check-inline mt-3" key={i}>
                  <input
                    className="form-check-input tribe-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value={value.tribe}
                    checked={tribesInput[value.tribe]}
                    onChange={handleTribesObjectChanged}
                  />
                  <label
                    className="form-check-label align-center"
                    htmlFor="inlineCheckbox2"
                  >
                    <span className="align-center">{value.tribe}</span>
                  </label>
                </div>
              ))}
            </div>
            <div className="mt-3 list ml-3 ">
              <h6 className="mt-3  mb-3">選擇導遊語言:</h6>
              <div className="form-check form-check-inline  mt-3">
                <input
                  className="form-check-input "
                  type="checkbox"
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
                  type="checkbox"
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
              <button type="submit" className="td-mt-25 td-mb-25 fw-bold">
                送出
              </button>
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
          <form action="" onSubmit={handleSubmit}>
            <div className="mt-3 list ml-3">
              <h6 className="mt-3 mr-3 mb-3">搜尋部落:</h6>
              {tribes.map((value, i) => (
                <div className="form-check form-check-inline mt-3" key={i}>
                  <input
                    className="form-check-input tribe-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value={value.tribe}
                    checked={tribesInput[value.tribe]}
                    onChange={handleTribesObjectChanged}
                  />
                  <label
                    className="form-check-label align-center"
                    htmlFor="inlineCheckbox2"
                  >
                    <span className="align-center">{value.tribe}</span>
                  </label>
                </div>
              ))}
            </div>
            <div className="mt-3 list ml-3 ">
              <h6 className="mt-3  mb-3">選擇導遊語言:</h6>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
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
                  type="checkbox"
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
              <button type="submit" className="td-mt-25 td-mb-25 fw-bold">
                送出
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default HomeDropdownFilter
