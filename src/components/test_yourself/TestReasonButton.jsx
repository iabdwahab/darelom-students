import React from 'react'
import Button from '../global/Button'

const TestReasonButton = ({ setIsModalOpen }) => {
  return (
    <Button text='عرض التعليل' onClick={() => setIsModalOpen(true)} />
  )
}

export default TestReasonButton