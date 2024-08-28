import React from 'react'

const BookIframe = ({ bookId, isIframeLoading, setIsIframeLoading }) => {
  return (
    <iframe src={`https://drive.google.com/file/d/${bookId}/preview`}
      onLoad={() => setIsIframeLoading(false)}
      className={`${isIframeLoading ? 'd-none' : ''} w-100`}
      style={{ height: '500px' }}>
    </iframe>
  )
}

export default BookIframe