import { useNavigate } from 'react-router-dom';

const BackStepButton = ({ grade, backFrom }) => {
  const navigate = useNavigate();

  function goBack() {
    navigate(`/`, { state: { selections: [grade, backFrom], initialStepIndex: 2 } });
  }

  return (
    <button className="btn btn-danger" onClick={goBack}>
      رجوع
    </button>
  );
};

export default BackStepButton;
