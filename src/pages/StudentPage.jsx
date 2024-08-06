import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

const StudentPage = () => {
  const { grade, studentId } = useParams();
  const [student, setStudent] = useState({});
  const [subjects, setSubjects] = useState([]);
  const { state } = useLocation();
  const { studentRank } = state;

  useEffect(() => {
    fetch(`http://localhost:5173/src/data/degrees/2023_24/degrees_${grade}.json`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setSubjects(data.subjects);

        data.degrees.forEach((arrStudent) => {
          if (arrStudent.id == studentId) {
            setStudent(arrStudent);
          }
        })
      })
  }, [])

  return (
    <div>
      <div className='d-grid gap-1'>
        <h4>
          <span className='fw-bold'>الاسم: </span>
          <span>
            {student.name}.
          </span>
        </h4>
        <h4>
          <span className='fw-bold'>رقم  الجلوس: </span>
          <span>
            {student.id}.
          </span>
        </h4>
        <h4>
          <span className='fw-bold'>الترتيب: </span>
          <span>
            {studentRank}.
          </span>
        </h4>
        <h4>
          <span className='fw-bold'>التقدير: </span>
          <span>
            {student.total_grade}.
          </span>
        </h4>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">المادة</th>
            <th scope="col" className='text-center'>النتيجة</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject, index) => {
            return (
              <tr key={index}>
                <th key={index} scope="row">{subject.name}</th>
                <td className='text-center'>{student.degrees[index]}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default StudentPage