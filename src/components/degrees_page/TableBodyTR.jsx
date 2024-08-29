import React from 'react'
import { useNavigate } from 'react-router-dom';
import { calculatePercentage } from '../../utils/Degrees';

const TableBodyTR = ({ index, student, grade }) => {
  const navigate = useNavigate();
  const studentRank = index + 1;

  function navigateToStudentPage() {
    navigate(`/degrees/${grade}/2023_24/${student.id}`, { state: { studentRank: studentRank } })
  }

  return (
    <tr className='degree_tr-linked' onClick={navigateToStudentPage}>
      <th scope="row" className='text-center'>{studentRank}</th>
      <td className='text-center'>{student.id}</td>
      <td style={{ whiteSpace: 'nowrap' }}>{student.name}</td>
      <td className='text-center'>{student.total}</td>
      <td className='text-center'>{calculatePercentage(student.total, grade)}</td>
    </tr>
  )
}

export default TableBodyTR