import React from 'react'

const TestYourselfQuestionsCount = ({ currentQuestionIndex, questionsLength, creatorName }) => {
  const currentQuestion = currentQuestionIndex + 1;

  return (
    <div className='d-flex justify-content-between '>
      <p className='mb-0'>
        السؤال
        <span className='fw-bold'> {currentQuestion} </span>
        من
        <span className='fw-bold'> {questionsLength}</span>.
      </p>
      {
        creatorName && <p className='mb-0'>
          السؤال من:
          <span className='fw-bold'> {creatorName}</span>.
        </p>
      }

    </div>
  )
}

export default TestYourselfQuestionsCount