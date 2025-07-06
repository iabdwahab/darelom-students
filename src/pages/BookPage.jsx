import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import LoadingSpinner from '../components/global/LoadingSpinner';
import BackButton from '../components/book_page/BackButton';
import BookIframe from '../components/book_page/BookIframe';
import SectionHeading from '../components/global/SectionHeading';
import DownloadButton from '../components/book_page/DownloadButton';
import ButtonContainer from '../components/book_page/ButtonContainer';

const BookPage = () => {
  const { bookId } = useParams();
  const location = useLocation();
  const book_name = location.state?.book_name;
  const [isIframeLoading, setIsIframeLoading] = useState(true);

  return (
    <>
      <SectionHeading>"{book_name}".</SectionHeading>
      <div className="my-2 d-flex justify-content-end row gx-2">
        <ButtonContainer>
          <DownloadButton bookId={bookId} />
        </ButtonContainer>

        <ButtonContainer>
          <BackButton />
        </ButtonContainer>
      </div>
      {isIframeLoading && <LoadingSpinner />}
      <BookIframe
        bookId={bookId}
        isIframeLoading={isIframeLoading}
        setIsIframeLoading={setIsIframeLoading}
      />
    </>
  );
};

export default BookPage;
