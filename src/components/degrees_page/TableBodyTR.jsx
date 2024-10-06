import React from 'react'
import { useNavigate } from 'react-router-dom';

const TableBodyTR = ({ student, grade }) => {
  const { id, name, rank, total, total_percentage } = student
  const navigate = useNavigate();

  function navigateToStudentPage() {
    navigate(`/degrees/${grade}/2023_24/${student.id}`)
  }

  return (
    <tr className='degree_tr-linked' onClick={navigateToStudentPage}>
      <th scope="row" className='text-center'>{rank}</th>
      <td className='text-center'>{id}</td>
      <td style={{ whiteSpace: 'nowrap' }}>{name}</td>
      <td className='text-center'>{total}</td>
      <td className='text-center'>%{total_percentage}</td>
    </tr>
  )
}

export default TableBodyTR