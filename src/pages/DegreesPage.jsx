import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import LoadingSpinner from '../components/global/LoadingSpinner';
import { calculatePercentage, calculateTotal } from '../utils/Degrees';
import { API_URL } from '../utils/global-variables';


const DegreesPage = () => {
  const [degrees, setDegrees] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const { grade } = useParams();
  const [gradeNameAr, setGradeNameAr] = useState('');

  useEffect(() => {
    switch (grade) {
      case 'grade_1':
        setGradeNameAr('الفرقة الأولى');
        break;
      case 'grade_2':
        setGradeNameAr('الفرقة الثانية');
        break;
      case 'grade_3':
        setGradeNameAr('الفرقة الثالثة');
        break;
      case 'grade_4':
        setGradeNameAr('الفرقة الرابعة');
        break;
      default:
        setGradeNameAr('');
    }

    fetch(`${API_URL}/darelom-students-data/degrees/2023_24/degrees_${grade}.json`)
      .then(res => res.json())
      .then(data => {

        data.degrees.forEach(student => {
          student.total = 0;

          calculateTotal(student, grade);
        });

        data.degrees.sort((a, b) => {
          return b.total - a.total;
        });

        setDegrees(data.degrees);
        setIsDataLoading(false);
      })
  }, []);

  return (
    <div>
      <h2 className='text-center mb-4 fw-bold'>ترتيب نتائج {gradeNameAr} 2023/24</h2>
      <div className='table-responsive border'>
        <table className="table table-striped table-bordered">
          <TableHead />

          <tbody>
            {degrees.map((student, index) => {
              return (
                <TableBodyTr key={index} index={index} student={student} grade={grade} />
              )
            })}
          </tbody>
        </table>
        {isDataLoading ? <LoadingSpinner /> : null}
      </div>
    </div>
  )
}

function TableHead() {
  return (
    <thead>
      <tr>
        <th scope="col" className='text-center'>#</th>
        <th scope='col' className='text-center'>رقم الجلوس</th>
        <th scope='col'>الاسم</th>
        <th scope='col' className='text-center'>الإجمالي</th>
        <th scope='col' className='text-center'>النسبة</th>
      </tr>
    </thead>
  )
}

const TableBodyTr = ({ index, student, grade }) => {
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


export default DegreesPage