import React from 'react'
import { useNavigate } from 'react-router-dom'
import { calculatePercentage } from '../../../utils/Degrees';

const SideBarTableBodyTr = ({ index, student, grade }) => {
  const navigate = useNavigate();

  return (
    <tr className='degree_tr-linked' onClick={() => navigate(`/degrees/${grade}/2023_24/${student.id}`, { state: { student: student, studentRank: index + 1 } })}>
      <th scope="row">{index + 1}</th>
      <td>{student.name}</td>
      <td className='text-center'>{calculatePercentage(student.total, grade)}</td>
    </tr>
  )
}

export default SideBarTableBodyTr