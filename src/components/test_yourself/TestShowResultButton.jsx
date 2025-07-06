import { useNavigate } from 'react-router-dom';
import Button from '../global/Button';

function TestShowResultButton({ questionsLength, score }) {
  const navigate = useNavigate();

  function showResult() {
    navigate('/test_yourself/test_result', { state: { result: score, fullMark: questionsLength } });
  }

  return <Button text="عرض النتيجة" onClick={showResult} />;
}

export default TestShowResultButton;
