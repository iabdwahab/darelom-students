import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner';

const BooksPage = () => {
  const { grade, term } = useParams();
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://iabdwahab.me/darelom-students-data/books/2023_24/books_${grade}.json`)
      // fetch(`/src/darelom-students-data/books/2023_24/books_${grade}.json`)
      .then(res => res.json())
      .then(data => {

        setBooks(data[term]);
        setIsLoading(false);
      })
  }, []);

  return (
    <>
      <div>
        <div className='d-flex justify-content-between align-content-center'>
          <h2>اختر كتابًا:</h2>
          <div className='d-flex gap-2'>
            <BackButton grade={grade} />
            <BackHomeButton />
          </div>
        </div>
        {
          isLoading ? <LoadingSpinner /> :
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
      </div>
    </>
  )
}

function BookButton({ book }) {
  const navigate = useNavigate();
  const [isOptionsDisplayed, setIsOptionsDisplayed] = useState(false);

  function displayOptions() {
    setIsOptionsDisplayed(true);
  }

  function hideOptions() {
    setIsOptionsDisplayed(false);
  }

  function downloadBook() {
    window.location.href = `https://drive.google.com/uc?export=download&id=${book.book_gdrive_id}`;
  }

  function previewBook() {
    navigate('/book', { state: { book } });
  }

  if (isOptionsDisplayed) {
    return (
      <div className={`d-flex gap-2`}>
        <button className={`btn btn-success w-100 p-2`} onClick={(previewBook)}>استعراض</button>
        <button className={`btn btn-primary w-100 p-2`} onClick={downloadBook}>تحميل</button>
        <button className={`btn btn-danger w-100 p-2`} onClick={hideOptions}>إلغاء</button>
      </div>
    )
  }

  return (
    <button className={`btn btn-primary w-100 p-2`} onClick={displayOptions}>{book.book_name}</button>
  )
}

function BackButton({ grade }) {
  const navigate = useNavigate();
  function goBack() {
    navigate(`/`, { state: { selections: [grade, 'books'], initialStepIndex: 2 } })
  }

  return (
    <button className='btn btn-danger' onClick={goBack}>رجوع</button>
  )
}

function BackHomeButton() {
  const navigate = useNavigate();
  function goHome() {
    navigate(`/`);
  }

  return (
    <button className='btn btn-danger' onClick={goHome}>القائمة الرئيسية</button>
  )
}

export default BooksPage