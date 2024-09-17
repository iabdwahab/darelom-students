import React from 'react'
import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();

  return <button className='btn btn-danger p-2 px-5 w-100' onClick={() => navigate(-1)}>رجوع</button>
}

export default BackButton