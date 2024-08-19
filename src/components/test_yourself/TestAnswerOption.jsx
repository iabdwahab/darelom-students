import React from 'react'

const TestAnswerOption = ({ onClick, optionText }) => {
  return (
    <div className='col-sm-6'>
      <button className='question-answer-btn btn btn-primary w-100 p-2' onClick={onClick}>{optionText}</button>
    </div>
  )
}

export default TestAnswerOption