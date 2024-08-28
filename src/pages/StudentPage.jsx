import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import LoadingSpinner from '../components/global/LoadingSpinner';
import { API_URL } from '../utils/global-variables';
const StudentPage = () => {
  const { grade, studentId } = useParams();
  const [student, setStudent] = useState({});
  const [subjects, setSubjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { state } = useLocation();
  const { studentRank } = state;

  useEffect(() => {
    fetch(`${API_URL}/darelom-students-data/degrees/2023_24/degrees_${grade}.json`)
      .then(res => res.json())
      .then(data => {

        setSubjects(data.subjects);

        data.degrees.forEach((arrStudent) => {
          if (arrStudent.id == studentId) {
            setStudent(arrStudent);
            setIsLoading(false);
          }
        })
      })
  }, [])

  return (
    <>
      <h2 className='text-center fw-bold mb-4'>نتائج المواد</h2>
      {isLoading ? <LoadingSpinner /> :
        <div>
          <StudentPersonalInfo student={student} studentRank={studentRank} />

          <table className="table table-striped border table-bordered mt-4">
            <TableHead />

            <tbody>
              {subjects.map((subject, index) => {
                return <TableBodyTr key={index} subject={subject} student={student} index={index} />
              })}
            </tbody>
          </table>
        </div>
      }
    </>

  )
}

function StudentPersonalInfo({ student, studentRank }) {
  const personalData = [
    {
      title: "الاسم",
      value: student.name
    },
    {
      title: "رقم الجلوس",
      value: student.id
    },
    {
      title: "الترتيب",
      value: studentRank
    },
    {
      title: "التقدير",
      value: student.total_grade
    },
  ]

  return (
    <div>
      {
        personalData.map((data, index) => {
          return <StudentPersonalInfoLine key={index} title={data.title} value={data.value} />
        })
      }
    </div>
  )
}

function StudentPersonalInfoLine({ title, value }) {
  return (
    <h4 className='mb-1'>
      <span className='fw-bold text-primary'>{title}: </span>
      <span>
        {value}.
      </span>
    </h4>
  )
}

function TableHead() {
  return (
    <thead>
      <tr>
        <th scope="col">المادة</th>
        <th scope="col" className='text-center'>النتيجة</th>
      </tr>
    </thead>
  )
}

function TableBodyTr({ subject, student, index }) {
  const subjectDegree = student.degrees[index]

  const isSucceed = subjectDegree >= 50 ? 'bg-success' : 'bg-danger';

  return (
    <tr>
      <th key={index} scope="row">{subject.name}</th>
      <td className={`text-center text-light ${isSucceed}`}>{subjectDegree}</td>
    </tr>
  )
}

export default StudentPage