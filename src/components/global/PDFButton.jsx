import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const PDFButton = ({ pdf }) => {
  const navigate = useNavigate();
  const [optionsDisplayed, setOptionsDisplayed] = useState(false);

  function downloadBook() {
    window.location.href = `https://drive.google.com/uc?export=download&id=${pdf.book_gdrive_id}`;
  }

  function previewBook() {
    navigate(`/book/${pdf.book_gdrive_id}`, { state: { book_name: pdf.book_name } });
  }

  return optionsDisplayed ? (
    <div className="d-flex gap-2">
      <Button text="استعراض" color="success" onClick={previewBook} />
      <Button text="تحميل" onClick={downloadBook} />
      <Button text="إلغاء" color="danger" onClick={() => setOptionsDisplayed(false)} />
    </div>
  ) : (
    <Button text={pdf.book_name} onClick={() => setOptionsDisplayed(true)} />
  );
};

export default PDFButton;
