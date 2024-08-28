import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import LoadingSpinner from '../components/global/LoadingSpinner'
import BackButton from '../components/book_page/BackButton'
import BookIframe from '../components/book_page/BookIframe'
import SectionHeading from '../components/global/SectionHeading'

const BookPage = () => {
  const { bookId } = useParams();
  const location = useLocation();
  const book_name = location.state?.book_name;
  const [isIframeLoading, setIsIframeLoading] = useState(true);

  return (
    <>
      <SectionHeading>كتاب: {book_name}</SectionHeading>
      <BackButton />
      {isIframeLoading ? <LoadingSpinner /> : null}
      <BookIframe bookId={bookId} isIframeLoading={isIframeLoading} setIsIframeLoading={setIsIframeLoading} />
    </>
  )
}

export default BookPage