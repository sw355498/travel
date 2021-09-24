import React from 'react'

function InputTextField({
  name,
  label,
  type,
  state,
  setState,
  setFocus,
  error,
  required,
  minLength,
  maxLength,
  pattern,
}) {
  // email, password...etc
  const fieldType = type ? type : 'text'
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
          onFocus={(e) => setFocus(e.target.name)}
        />
        {error !== '' && <div className="invalid-feedback">{error}</div>}
      </div>
    </>
  )
}

export default InputTextField
