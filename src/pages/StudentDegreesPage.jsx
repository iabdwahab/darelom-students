import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../components/global/LoadingSpinner';
import TableBodyTR from '../components/student_degrees_page/TableBodyTR';
import TableHead from '../components/student_degrees_page/TableHead';
import StudentInfo from '../components/student_degrees_page/StudentInfo';
import SectionHeading from '../components/global/SectionHeading';
import {
  getStudentInfoGithub,
  getStudentInfoFirestore,
} from '../components/student_degrees_page/getStudentInfo';
import { firebaseDB } from '../utils/firebaseInit';
import { doc, getDoc } from 'firebase/firestore';
import { dbSource } from '../utils/global-variables';

const StudentDegreesPage = () => {
  const { grade, year, studentId } = useParams();
  const [student, setStudent] = useState({});
  const [subjects, setSubjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function setDataAndHideLoader() {
      let student;

      if (dbSource == 'github') {
        student = await getStudentInfoGithub(grade, year, studentId, setSubjects);
      } else {
        student = await getStudentInfoFirestore(grade, year, studentId);
        const subjects = (await getDoc(doc(firebaseDB, `${grade}`, 'degrees'))).data().subjects;
        setSubjects(subjects);
      }

      setStudent(student);
      setIsLoading(false);
    }

    setDataAndHideLoader();
  }, []);


  if (student?.name === 'مريم سمير أحمد عبدالصمد') {
    return <h2 className='text-center py-4'>عذرًا؛ البيانات غير متاحة.</h2>
  }

  return (
    <>
      <SectionHeading fontSize={3}>نتائج المواد</SectionHeading>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="mt-3">
          <StudentInfo student={student} />
          <table className="table table-striped border table-bordered mt-4">
            <TableHead />
            <tbody>
              {subjects.map((subject, index) => {
                return (
                  <TableBodyTR key={index} subject={subject} student={student} index={index} />
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default StudentDegreesPage;
