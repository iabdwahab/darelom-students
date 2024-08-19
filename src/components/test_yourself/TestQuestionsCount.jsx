import React from 'react'

const TestYourselfQuestionsCount = ({ currentQuestionIndex, questionsLength }) => {
  return (
    <p>
      السؤال <span className='fw-bold'> {currentQuestionIndex + 1} </span> من <span className='fw-bold'> {questionsLength}.</span>
    </p>
  )
}

export default TestYourselfQuestionsCount