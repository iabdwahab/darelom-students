import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../global/Button';

const BookButton = ({ book }) => {
  const navigate = useNavigate();
  const [isOptionsDisplayed, setIsOptionsDisplayed] = useState(false);

  function downloadBook() {
    window.location.href = `https://drive.google.com/uc?export=download&id=${book.book_gdrive_id}`;
  }

  function previewBook() {
    navigate(`/book/${book.book_gdrive_id}`, { state: { book_name: book.book_name } });
  }

  if (isOptionsDisplayed) {
    return (
      <div className='d-flex gap-2'>
        <Button text="استعراض" color="success" onClick={previewBook} />
        <Button text="تحميل" onClick={downloadBook} />
        <Button text="إلغاء" color="danger" onClick={() => setIsOptionsDisplayed(false)} />
      </div>
    )
  }

  return <Button text={book.book_name} onClick={() => setIsOptionsDisplayed(true)} />
}

export default BookButton