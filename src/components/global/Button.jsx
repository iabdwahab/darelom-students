import React from 'react'

function Button({ text, color, onClick }) {
  return (
    <button className={`btn btn-${color || 'primary'} w-100 p-2`} onClick={onClick}>{text}</button>
  )
}

export default Button