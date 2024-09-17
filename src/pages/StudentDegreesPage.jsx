import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LoadingSpinner from '../components/global/LoadingSpinner';
import { API_URL } from '../utils/global-variables';
import TableBodyTR from '../components/student_degrees_page/TableBodyTR';
import TableHead from '../components/student_degrees_page/TableHead';
import StudentInfo from '../components/student_degrees_page/StudentInfo';
import SectionHeading from '../components/global/SectionHeading';
import { app } from '../utils/firebaseInit';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const db = getFirestore();

const StudentDegreesPage = () => {
  const { grade, studentId } = useParams();
  const [student, setStudent] = useState({});
  const [subjects, setSubjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/darelom-students-data/degrees/2023_24/degrees_${grade}.json`)
      .then(res => res.json())
      .then(data => {
        setSubjects(data.subjects);
      })

    async function func() {
      const docRef = doc(db, `${grade}/degrees/2023_24`, studentId);
      const docSnap = await getDoc(docRef);

      setStudent(docSnap.data());
      setIsLoading(false);
    }

    func()
  }, [])

  return (
    <>
      <SectionHeading fontSize={3}>نتائج المواد</SectionHeading>
      {isLoading ? <LoadingSpinner /> :
        <div className='mt-3'>
          <StudentInfo student={student} />
          <table className="table table-striped border table-bordered mt-4">
            <TableHead />
            <tbody>
              {subjects.map((subject, index) => {
                return <TableBodyTR key={index} subject={subject} student={student} index={index} />
              })}
            </tbody>
          </table>
        </div>
      }
    </>
  )
}

export default StudentDegreesPage