import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className='d-block text-center py-4'>
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only d-none">Loading...</span>
      </div>
    </div>
  )
}

export default LoadingSpinner