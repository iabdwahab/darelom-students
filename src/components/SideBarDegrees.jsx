import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';
import { calculatePercentage } from '../utils/Degrees';

const SideBarDegrees = () => {
  const [degrees, setDegrees] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);

  useEffect(() => {
    fetch("/src/data/top_degrees_2023_24.json")
      // fetch("https://iabdwahab.me/darelom-students-data/top_degrees_2023_24.json")
      .then(res => res.json())
      .then(data => {
        setDegrees(data);
        setIsDataLoading(false);
      })
  }, [])

  return (
    <>
      <h2 className='fs-4 p-2 fw-medium bg-primary text-center text-light rounded-2'>أوائل الفرق</h2>
      {
        isDataLoading ? <LoadingSpinner /> :
          degrees.map((gradeDegree) => {
            return (
              <div key={gradeDegree.id} className='border border-secondary-subtle rounded-2 p-1 my-2'>
                <h3 className='fs-5 bg-success text-light p-2 rounded-2 my-2'>{gradeDegree.grade_ar_name}</h3>
                <table className="table table-striped border">
                  <TableHead />
                  <TableBody gradeDegree={gradeDegree} />
                </table>
                <Link to={`degrees/grade_${gradeDegree.id}/2023_24`} className='d-block my-2 btn btn-warning fw-bold'>عرض القائمة كاملة</Link>
              </div>
            )
          })
      }
    </>
  )
}

function TableHead() {
  return (
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">الاسم</th>
        <th scope="col" className='text-center'>النسبة</th>
      </tr>
    </thead>
  )
}

function TableBody({ gradeDegree }) {
  return (
    <tbody>
      {gradeDegree.list.slice(0, 3).map((student, index) => {
        return (
          <TableBodyTr key={index} rank={index + 1} student={student} grade={gradeDegree.grade} />
        )
      })
      }
    </tbody>
  )
}

function TableBodyTr({ rank, student, grade }) {
  const navigate = useNavigate();

  function navigateToStudentPage() {
    navigate(`/degrees/${grade}/2023_24/${student.id}`, { state: { student: student, studentRank: rank } })
  }

  return (
    <tr className='degree_tr-linked' onClick={navigateToStudentPage}>
      <th scope="row">{rank}</th>
      <td>{student.name}</td>
      <td className='text-center'>{calculatePercentage(student.total, grade)}</td>
    </tr>
  )
}

export default SideBarDegrees