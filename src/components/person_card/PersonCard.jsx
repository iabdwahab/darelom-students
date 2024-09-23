import React from 'react'
import PersonCardImage from './PersonCardImage';
import PersonCardBody from './PersonCardBody';
import { API_URL } from '../../utils/global-variables'

const PersonCard = ({ person }) => {
  const { name, image, id } = person;

  return (
    <>
      <div className="card">
        <PersonCardImage image={API_URL + image} name={name} />
        <PersonCardBody name={name} id={id} />
      </div>
    </>
  )
}

export default PersonCard