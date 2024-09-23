import React from 'react'
import { Link } from 'react-router-dom'

const PersonCardLink = ({ id }) => {
  return <Link to={`/person/${id}`} className="btn btn-primary w-100">عرض المعلومات</Link>

}

export default PersonCardLink