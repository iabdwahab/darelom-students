import React from 'react'
import TestPrimaryButton from './TestPrimaryButton';

function TestGoNextButton({ currentQuestionIndex, setCurrentQuestionIndex, setIsAnswered }) {
  function goNext() {
    setIsAnswered(false);
    setCurrentQuestionIndex(currentQuestionIndex + 1);

    document.querySelectorAll('.question-answer-btn').forEach(btn => {
      btn.disabled = false;
      btn.classList.remove('btn-danger', 'btn-success');
    });

  }

  return <TestPrimaryButton text='التالي' onClick={goNext} />
}

export default TestGoNextButton