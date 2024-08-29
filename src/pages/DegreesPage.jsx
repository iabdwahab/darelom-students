import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../components/global/LoadingSpinner';
import { calculateTotal } from '../utils/Degrees';
import { API_URL } from '../utils/global-variables';
import TableBodyTR from '../components/degrees_page/TableBodyTR';
import TableHead from '../components/degrees_page/TableHead';
import SectionHeading from '../components/global/SectionHeading'

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
      <SectionHeading fontSize={3} py={3}>ترتيب نتائج {gradeNameAr} 2023/24</SectionHeading>
      <div className='table-responsive border'>
        <table className="table table-striped table-bordered">
          <TableHead />
          <tbody>
            {degrees.map((student, index) => {
              return <TableBodyTR key={index} index={index} student={student} grade={grade} />
            })}
          </tbody>
        </table>
        {isDataLoading ? <LoadingSpinner /> : null}
      </div>
    </div>
  )
}

export default DegreesPage