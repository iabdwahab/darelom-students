import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LoadingSpinner from '../components/global/LoadingSpinner';
import TableBodyTR from '../components/student_degrees_page/TableBodyTR';
import TableHead from '../components/student_degrees_page/TableHead';
import StudentInfo from '../components/student_degrees_page/StudentInfo';
import SectionHeading from '../components/global/SectionHeading';
import { getStudentInfoGithub, getStudentInfoFirestore } from '../components/student_degrees_page/getStudentInfo';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { dbSource } from '../utils/global-variables';

const db = getFirestore();

const StudentDegreesPage = () => {
  const { grade, studentId } = useParams();
  const [student, setStudent] = useState({});
  const [subjects, setSubjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function setDataAndHideLoader() {
      let student;

      if (dbSource == 'github') {
        student = await getStudentInfoGithub(grade, studentId, setSubjects);
      } else {
        student = await getStudentInfoFirestore(grade, studentId);
        const subjects = (await getDoc(doc(db, `${grade}`, 'degrees'))).data().subjects;
        setSubjects(subjects)
      }

      setStudent(student);
      setIsLoading(false);
    }

    setDataAndHideLoader();
  }, []);

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