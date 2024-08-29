import React from 'react'
import StudentInfoLine from './StudentInfoLine'

const StudentInfo = ({ student, studentRank }) => {
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
  ];

  return (
    <div>
      {personalData.map((data, index) => {
        return <StudentInfoLine key={index} title={data.title} value={data.value} />
      })}
    </div>
  )
}

export default StudentInfo