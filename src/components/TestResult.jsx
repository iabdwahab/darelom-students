import React from 'react'
import { useLocation } from 'react-router-dom'

const TestResult = () => {
  const location = useLocation();

  return (
    <>
      <h2>نتيجتك هي:</h2>
      <p className='text-center fs-1'>
        <span className='fw-bold'>{location.state.result} </span>
        من
        <span className='fw-bold'> {location.state.fullMark}</span>.
      </p>
    </>
  )
}

export default TestResult