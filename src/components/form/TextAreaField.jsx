import React from 'react'

const TextAreaField = ({ label, placeholder, invalidFeedback, minLength = 10, rows = 4, fontSize = 5 }) => {
  return (
    <>
      <label className={`fw-bold fs-${fontSize} mb-1`} htmlFor='textarea-field'>{label}</label>
      <textarea className="form-control" id="textarea-field" rows={rows} placeholder={placeholder} minLength={minLength} required></textarea>
      <div className="invalid-feedback">{invalidFeedback}</div>
    </>
  )
}

export default TextAreaField