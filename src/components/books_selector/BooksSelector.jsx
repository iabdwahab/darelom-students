import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LoadingSpinner from '../global/LoadingSpinner';
import { API_URL } from '../../utils/global-variables';
import BackHomeButton from './BackHomeButton';
import BackStepButton from './BackStepButton';
import BookButton from './BookButton';
import SectionHeading from '../global/SectionHeading'
import { translate } from '../../utils/translations'

const BooksPage = () => {
  const { grade, term } = useParams();
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/darelom-students-data/books/2023_24/books_${grade}.json`)
      .then(res => res.json())
      .then(data => {

        setBooks(data[term]);
        setIsLoading(false);

      })
  }, []);

  return (
    <>
      <div className='d-flex justify-content-between align-content-center mb-3'>
        <h2>اختر كتابًا:</h2>
        <div className='d-flex gap-2'>
          <BackStepButton grade={grade} backFrom='books' />
          <BackHomeButton />
        </div>
      </div>

      <SectionHeading>{translate(grade)} - {translate(term)}</SectionHeading>

      {isLoading ? <LoadingSpinner /> :
        <div className='row g-2 my-2'>
          {books.map((book, index) => {
            return (
              <div className='col-sm-6' key={index}>
                <BookButton book={book} grade={grade} term={term} />
              </div>
            )
          })}
        </div>
      }
    </>
  )
}

export default BooksPage