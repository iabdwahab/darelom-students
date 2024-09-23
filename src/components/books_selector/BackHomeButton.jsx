import React from 'react'
import { useNavigate } from 'react-router-dom';

const BackHomeButton = () => {
  const navigate = useNavigate();

  function goHome() {
    navigate('/');
  }

  return <button className='btn btn-danger' onClick={goHome}>القائمة الرئيسية</button>
}

export default BackHomeButton