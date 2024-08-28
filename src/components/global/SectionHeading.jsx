import React from 'react'

const SectionHeading = ({ children, fontSize }) => {
  return (
    <h2 className={`fs-${fontSize || 4} p-2 fw-medium bg-dark text-center text-light`}>{children}</h2>
  )
}

export default SectionHeading