import React from 'react'

const TestModal = ({ setIsModalOpen, answerReason }) => {

  return (
    <div className="modal d-block bg-black bg-opacity-75" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-center w-100">"وَقُل رَّبِّ زِدْنِي عِِلْمًا"</h5>
          </div>
          <div className="modal-body pb-1">
            <p className='text-center fw-bold'>{answerReason || 'للأسف، لا يوجد تعليل لهذه الإجابة حاليًا.'}</p>
          </div>
          <div className="modal-footer border-0 pt-0">
            <button type="button" className="btn btn-danger w-100" onClick={() => setIsModalOpen(false)}>إغلاق</button>
          </div>
        </div>
      </div>
    </div>)
}

export default TestModal