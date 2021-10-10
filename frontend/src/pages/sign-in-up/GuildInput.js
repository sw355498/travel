import React from 'react'
import { Placeholder } from 'react-bootstrap'

function InputTextField({
  name,
  label,
  type,
  state,
  setState,
  error,
  required,
  minLength,
  maxLength,
  pattern,
  placeholder,
}) {
  // email, password...etc
  const fieldType = type ? type : 'text'
  console.log('error', error)
  return (
    <>
      <div className="form-group">
        <div>
          <label htmlFor={name}>{label}</label>
          <span>*必填</span>
        </div>
        <input
          id={name}
          name={name}
          type={fieldType}
          className={`form-control ${error !== '' ? 'is-invalid' : ''}`}
          value={state}
          onChange={setState}
          required={required}
          minLength={minLength}
          maxLength={maxLength}
          pattern={pattern}
          placeholder={placeholder}
        />
        {error !== '' && <div className="invalid-feedback">{error}</div>}
      </div>
    </>
  )
}

export default InputTextField
