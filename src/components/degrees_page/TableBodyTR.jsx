import React from 'react'
import { useNavigate } from 'react-router-dom';

const TableBodyTR = ({ student, grade }) => {
  const navigate = useNavigate();

  function navigateToStudentPage() {
    navigate(`/degrees/${grade}/2023_24/${student.id}`)
  }

  return (
    <tr className='degree_tr-linked' onClick={navigateToStudentPage}>
      <th scope="row" className='text-center'>{student.rank}</th>
      <td className='text-center'>{student.id}</td>
      <td style={{ whiteSpace: 'nowrap' }}>{student.name}</td>
      <td className='text-center'>{student.total}</td>
      <td className='text-center'>%{student.total_percentage}</td>
    </tr>
  )
}

export default TableBodyTR