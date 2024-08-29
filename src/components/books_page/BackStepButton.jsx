import React from 'react'
import { useNavigate } from 'react-router-dom';

const BackStepButton = ({ grade }) => {
  const navigate = useNavigate();
  function goBack() {
    navigate(`/`, { state: { selections: [grade, 'books'], initialStepIndex: 2 } })
  }

  return (
    <button className='btn btn-danger' onClick={goBack}>رجوع</button>
  )
}

export default BackStepButton