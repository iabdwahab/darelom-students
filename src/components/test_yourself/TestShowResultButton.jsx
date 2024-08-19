import React from 'react'
import { useNavigate } from 'react-router-dom';
import TestPrimaryButton from './TestPrimaryButton';

function TestShowResultButton({ questionsLength, score }) {
  const navigate = useNavigate();

  function showResult() {
    navigate('test_result', { state: { result: score, fullMark: questionsLength } });
  }

  return <TestPrimaryButton text='عرض النتيجة' onClick={showResult} />
}

export default TestShowResultButton