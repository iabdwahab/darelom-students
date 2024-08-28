import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className='d-block text-center py-4'>
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only d-none">...</span>
      </div>
      <p className='fw-bold fs-5 mt-2'>صلِّ علَى النَّبِيِ.</p>
    </div>
  )
}

export default LoadingSpinner