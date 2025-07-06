import { useLocation } from 'react-router-dom';

const TestResult = () => {
  const location = useLocation();
  const { result, fullMark } = location.state;

  return (
    <>
      <h2>نتيجتك هي:</h2>
      <p className="text-center fs-1">
        <span className="fw-bold">{result} </span>
        من
        <span className="fw-bold"> {fullMark}</span>.
      </p>
    </>
  );
};

export default TestResult;
