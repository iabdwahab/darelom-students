import React, { useEffect, useState } from 'react'
import { firebaseDB } from '../utils/firebaseInit';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { useNavigate, useParams } from 'react-router-dom';
import BackStepButton from '../components/books_selector/BackStepButton';
import BackHomeButton from '../components/books_selector/BackHomeButton';
import LoadingSpinner from '../components/global/LoadingSpinner';
import { translate } from '../utils/translations';


const GeneralSubjectsSelector = () => {
  const navigate = useNavigate();

  const { grade, term } = useParams();
  const [subjects, setSubjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    async function getSubjectFirestore() {
      const snapshot = await getDoc(doc(firebaseDB, `general_subjects`, 'subjects'));
      const subjects = snapshot.data()?.ids;

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
          <BackHomeButton />
        </div>
      </div>
      {isLoading ? <LoadingSpinner /> :
        <div className='row g-2 my-2'>
          {subjects?.map((subject, index) => {
            return (
              <div className='col-sm-6' key={index}>
                <button className='btn btn-primary w-100' onClick={() => navigate(`/general_subjects/${subject}`)}>{translate(subject)}</button>
              </div>
            )
          })}
        </div>
      }
    </>
  )
}

export default GeneralSubjectsSelector