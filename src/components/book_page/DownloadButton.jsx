import React from 'react'

const DownloadButton = ({ bookId }) => {
  return <button className='btn btn-primary p-2 px-5 w-100' onClick={() => window.location.href = `https://drive.google.com/uc?export=download&id=${bookId}`}>تحميل</button>
}

export default DownloadButton