import React from 'react'
import PersonCardTitle from './PersonCardTitle'
import PersonCardLink from './PersonCardLink'

const PersonCardBody = ({ name, id }) => {
  return (
    <div className="card-body">
      <PersonCardTitle name={name} />
      <PersonCardLink id={id} />
    </div>
  )
}

export default PersonCardBody