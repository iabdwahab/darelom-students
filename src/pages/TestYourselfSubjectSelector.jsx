import React, { useEffect, useState } from 'react'
import { app } from '../utils/firebaseInit';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useNavigate, useParams } from 'react-router-dom';
import BackStepButton from '../components/books_selector/BackStepButton';
import BackHomeButton from '../components/books_selector/BackHomeButton';
import LoadingSpinner from '../components/global/LoadingSpinner';

const db = getFirestore();

const TestYourselfSubjectSelector = () => {
  const navigate = useNavigate();

  const { grade, term } = useParams();
  const [subjects, setSubjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    async function getSubjectFirestore() {
      const snapshot = await getDoc(doc(db, `${grade}/test_yourself_students/subjects`, term));
      const subjects = snapshot.data().subjects_list;

      setSubjects(subjects);
      setIsLoading(false);
    }

    getSubjectFirestore();

  }, []);

  return (
    <>
      <div className='d-flex justify-content-between align-content-center'>
        <h2>اختر مادة:</h2>
        <div className='d-flex gap-2'>
          <BackStepButton grade={grade} backFrom='test_yourself_students' />
          <BackHomeButton />
        </div>
      </div>
      {isLoading ? <LoadingSpinner /> :
        <div className='row g-2 my-2'>
          {subjects?.map((subject, index) => {
            return (
              <div className='col-sm-6' key={index}>
                <button className='btn btn-primary w-100' onClick={() => navigate(`/${grade}/test_yourself_students/${term}/${subject.id}`)}>{subject.text}</button>
              </div>
            )
          })}
        </div>
      }
    </>
  )
}

export default TestYourselfSubjectSelector