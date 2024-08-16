import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner'

const BookPage = () => {
  const location = useLocation();
  const book = location.state?.book;
  const { book_name, book_gdrive_id } = book;

  const [isIframeLoading, setIsIframeLoading] = useState(true);

  return (
    <>
      <div className='d-flex justify-content-between align-items-center  mb-4'>
        <h3 className='text-center' >
          <span className='fw-bold text-primary'>كتاب: </span>
          <span>"{book_name}".</span>
        </h3>
        <BackButton />
      </div>
      {
        isIframeLoading ? <LoadingSpinner /> : ''
      }
      <iframe src={`https://drive.google.com/file/d/${book_gdrive_id}/preview`} onLoad={() => setIsIframeLoading(false)} className={`${isIframeLoading ? 'd-none' : ''}`} style={{ width: '100%', height: '500px' }}></iframe>
    </>
  )
}

function BackButton() {
  const navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }

  return (
    <button className='btn btn-danger' onClick={goBack}>رجوع</button>
  )
}

export default BookPage