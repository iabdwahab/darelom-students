import React from 'react'

function TestPrimaryButton({ text, onClick }) {
  return (
    <button className='btn btn-primary w-100 p-2' onClick={onClick}>{text}</button>
  )
}

export default TestPrimaryButton