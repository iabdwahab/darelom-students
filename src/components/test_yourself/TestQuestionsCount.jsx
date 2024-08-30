import React from 'react'

const TestYourselfQuestionsCount = ({ currentQuestionIndex, questionsLength }) => {
  const currentQuestion = currentQuestionIndex + 1;

  return (
    <p>
      السؤال
      <span className='fw-bold'> {currentQuestion} </span>
      من
      <span className='fw-bold'> {questionsLength}</span>.
    </p>
  )
}

export default TestYourselfQuestionsCount