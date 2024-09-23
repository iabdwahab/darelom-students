import React from 'react'

function PersonCardImage({ image, name }) {
  const styles = {
    height: '280px',
    objectFit: 'cover'
  }

  return <img src={image} className="card-img-top w-100" alt={name} style={styles} />
}

export default PersonCardImage