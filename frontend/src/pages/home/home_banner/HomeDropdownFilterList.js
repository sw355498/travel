import React from 'react'
import { useHistory } from 'react-router-dom'
import qs from 'qs'

function HomeDropdownFilterLust(props) {
  const history = useHistory()
  const {
    tribesInput,
    langsInput,
    setTribesInput,
    setlangsInput,
    tribes,
    langs,
  } = props
  const handleTribesObjectChanged = (e) => {
    const value = e.target.value
    const checked = e.target.checked
    const newState = { ...tribesInput }
    const newlangState = { ...langsInput }
    newState[value] = checked
    newlangState[value] = checked
    setTribesInput(newState)
    setlangsInput(newlangState)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const tribes = []
    const langs = []
    Object.entries(tribesInput).forEach(([key, value]) => {
      if (value) {
        tribes.push(key)
      }
    })
    Object.entries(langsInput).forEach(([key, value]) => {
      if (value) {
        langs.push(key)
      }
    })
    const query = qs.stringify({ tribes, langs })
    history.push(`/Guild?${query}`)
  }
  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="mt-3 list ml-3">
        <h6 className="mt-3 mr-3 mb-3 text-center fw-bold">搜尋部落:</h6>
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
        <h6 className="mt-3  mb-3 text-center fw-bold">選擇導遊語言:</h6>
        {langs.map((value, i) => (
          <div className="form-check form-check-inline" key={i}>
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value={value.lang}
              checked={langsInput[value.lang]}
              onChange={handleTribesObjectChanged}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">
              {value.lang}
            </label>
          </div>
        ))}
      </div>
      <div className="text-center text-title-size24">
        {' '}
        <button type="submit" className="td-mt-25 td-mb-25 fw-bold">
          送出
        </button>
      </div>
    </form>
  )
}

export default HomeDropdownFilterLust
