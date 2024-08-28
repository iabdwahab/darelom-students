import React from 'react'
import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      className='btn btn-danger d-block mt-2 mb-4 me-auto'
      onClick={() => navigate(-1)}
      style={{ width: '100px' }}>
      رجوع
    </button>
  )
}

export default BackButton