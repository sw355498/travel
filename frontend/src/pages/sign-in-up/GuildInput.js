import React from 'react'

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
}) {
  // email, password...etc
  const fieldType = type ? type : 'text'
  console.log('error', error)
  return (
    <>
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
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
        />
        {error !== '' && <div className="invalid-feedback">{error}</div>}
      </div>
    </>
  )
}

export default InputTextField
