import React from 'react'

function SelectField({
  name,
  label,
  state,
  setState,
  error,
  required,
  pattern,
}) {
  return (
    <>
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <select
          id={name}
          name={name}
          className={`form-control bg-white ${
            error !== '' ? 'is-invalid' : ''
          }`}
          value={state}
          onChange={setState}
          required={required}
          pattern={pattern}
        >
          <option selected disabled value="">
            請選擇國家
          </option>
          <option>台灣</option>
          <option>日本</option>
          <option>韓國</option>
          <option>其它</option>
        </select>
        {error !== '' && <div className="invalid-feedback">{error}</div>}
      </div>
    </>
  )
}

export default SelectField
