import React from 'react'

function SelectBill({
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
            請選擇發票處理方式
          </option>
          <option>電子發票</option>
          <option>雲端發票捐贈</option>
          <option>個人紙本發票</option>
        </select>
        {error !== '' && <div className="invalid-feedback">{error}</div>}
      </div>
    </>
  )
}

export default SelectBill
