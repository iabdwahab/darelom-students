import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LoadingSpinner from '../global/LoadingSpinner';
import { API_URL } from '../../utils/global-variables';
import BackHomeButton from './BackHomeButton';
import BackStepButton from './BackStepButton';
import ExamButton from './ExamButton';
import SectionHeading from '../global/SectionHeading'
import { translate } from '../../utils/translations'

const FinalExamsSelector = () => {
  const [isError, setIsError] = useState(false);
  const { grade, term } = useParams();
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/darelom-students-data/final_exams/final_exams_${grade}.json`)
      .then(res => res.json())
      .then(data => {

        if (data[term].length) {
          setBooks(data[term]);
          setIsLoading(false);
        } else {
          isError(true);
        }

      }).catch(error => {
        setIsError(true);
      })
  }, []);

  return (
    <>
      <div className='d-flex justify-content-between align-content-center mb-3'>
        <h2>اختر امتحانًا:</h2>
        <div className='d-flex gap-2'>
          <BackStepButton grade={grade} backFrom='final_exams' />
          <BackHomeButton />
        </div>
      </div>

      <SectionHeading>{translate(grade)} - {translate(term)}</SectionHeading>

      {
        !isError ?
          isLoading ? <LoadingSpinner /> :
            <div className='row g-2 my-2'>
              {books.map((book, index) => {
                return (
                  <div className='col-sm-6' key={index}>
                    <ExamButton book={book} grade={grade} term={term} />
                  </div>
                )
              })}
            </div>
          : <p className='fw-bold text-center fs-4 mt-4'>عذرًا، لا توجد امتحانات.</p>}
    </>
  )
}

export default FinalExamsSelector