import React from 'react'
import TestPrimaryButton from './TestPrimaryButton'

const TestReasonButton = ({ setIsModalOpen }) => {
  return (
    <TestPrimaryButton text='عرض التعليل' onClick={() => setIsModalOpen(true)} />
  )
}

export default TestReasonButton