import { useNavigate } from 'react-router-dom';

function BackButton() {
  const className = 'btn btn-danger p-2 px-5 w-100';
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <button className={className} onClick={goBack}>
      رجوع
    </button>
  );
}

export default BackButton;
