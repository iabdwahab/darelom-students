import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../components/global/LoadingSpinner';
import TableBodyTR from '../components/degrees_page/TableBodyTR';
import TableHead from '../components/degrees_page/TableHead';
import SectionHeading from '../components/global/SectionHeading'
import { app } from '../utils/firebaseInit';
import { collection, getFirestore, limit, orderBy, query, startAfter } from 'firebase/firestore';
import { getStudentsCount } from '../utils/Degrees';
import { getDegreesGithub, getDegreesFirestore } from '../components/degrees_page/getDegrees';

const db = getFirestore();

const DegreesPage = () => {
  const [degrees, setDegrees] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const { grade } = useParams();
  const [gradeNameAr, setGradeNameAr] = useState('');
  const [studentsCount, setStudentsCount] = useState(null);
  const [lastStudent, setLastStudent] = useState(null);
  const [lastPage, setLastPage] = useState(false);

  const degreesCollection = collection(db, `${grade}/degrees/2023_24`);

  // Data Retrieved from Firestore
  async function setDataAndHideLoaderFirestore(q) {
    const studentsCount = await getStudentsCount(degreesCollection);
    const { data, last } = await getDegreesFirestore(q);

    setStudentsCount(studentsCount);
    setDegrees([...degrees, ...data]);
    setLastStudent(last);

    if (last.data().rank === studentsCount) {
      setLastPage(true);
    }

    setIsDataLoading(false);
  }

  // Data Retrieved from GitHub
  // async function setDataAndHideLoaderGithub() {
  //   const data = await getDegreesGithub(grade);

  //   setDegrees(data.degrees);
  //   setStudentsCount(data.degrees.length);
  //   setIsDataLoading(false);
  //   setLastPage(true);
  // }

  useEffect(() => {
    // Set Grade Name In Arabic
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

    setDataAndHideLoaderFirestore(query(degreesCollection, orderBy('rank', 'asc'), limit(40)));
    // setDataAndHideLoaderGithub();
  }, []);

  function handleMoreBtn() {
    const q = query(degreesCollection, orderBy('rank', 'asc'), startAfter(lastStudent), limit(40));

    setDataAndHideLoaderFirestore(q);
  }

  return (
    <div>
      <SectionHeading fontSize={3} py={3}>ترتيب نتائج {gradeNameAr} 2023/24</SectionHeading>
      <h3 className='py-2 fs-4'>عدد الطلاب: <span className='fw-bold'>{studentsCount || 'غير محدد.'}</span>.</h3>
      <div className='table-responsive border'>
        <table className="table table-striped table-bordered">
          <TableHead />
          <tbody>
            {degrees.map((student, index) => {
              return <TableBodyTR key={index} student={student} grade={grade} />
            })}
          </tbody>
        </table>
        {isDataLoading ? <LoadingSpinner /> : null}
      </div>
      <div className='mt-3 mb-1'>
        {!lastPage ? <button className='btn btn-primary w-100' onClick={() => handleMoreBtn()}>عرض المزيد</button>
          : <h3 className='fw-bold text-center fs-5'>انتهت النتائج.</h3>
        }
      </div>
    </div>
  )
}

export default DegreesPage