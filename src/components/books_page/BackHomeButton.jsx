import React from 'react'
import { useNavigate } from 'react-router-dom';

const BackHomeButton = () => {
  const navigate = useNavigate();

  return <button className='btn btn-danger' onClick={() => navigate('/')}>القائمة الرئيسية</button>
}

export default BackHomeButton