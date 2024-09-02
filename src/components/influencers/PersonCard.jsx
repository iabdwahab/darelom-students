import React from 'react'
import { Link } from 'react-router-dom'
import { API_URL } from '../../utils/global-variables';

const PersonCard = ({ person }) => {
  const { name, image, id } = person;
  return (
    <>
      <div className="card">
        <CardImage image={API_URL + image} name={name} />
        <CardBody name={name} id={id} />
      </div>
    </>
  )
}

function CardImage({ image, name }) {
  const styles = {
    height: '280px',
    objectFit: 'cover'
  }

  return <img src={image} className="card-img-top w-100" alt={name} style={styles} />
}

function CardBody({ name, id }) {
  return (
    <div className="card-body">
      <CardTitle name={name} />
      <InfoLink id={id} />
    </div>
  )
}

function CardTitle({ name }) {
  return <h5 className="card-title fw-bold mb-3">{name}</h5>
}

function InfoLink({ id }) {
  return <Link to={`/person/${id}`} className="btn btn-primary w-100">عرض المعلومات</Link>
}

export default PersonCard