import React from 'react'
import { useNavigate } from 'react-router-dom'
import { calculatePercentage } from '../../utils/Degrees';

const DegreesPageTableBodyTr = ({ index, student, grade }) => {
  const navigate = useNavigate();

  function navigateToStudentPage() {
    navigate(`/degrees/${grade}/2023_24/${student.id}`, { state: { studentRank: index + 1 } })
  }

  return (
    <tr className='degree_tr-linked' onClick={navigateToStudentPage}>
      <th scope="row">{index + 1}</th>
      <td className='text-center'>{student.id}</td>
      <td style={{ whiteSpace: 'nowrap' }}>{student.name}</td>
      <td className='text-center'>{student.total}</td>
      <td className='text-center'>{calculatePercentage(student.total, grade)}</td>
    </tr>
  )
}



export default DegreesPageTableBodyTr