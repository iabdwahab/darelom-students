const TestYourselfQuestionsCount = ({ currentQuestionIndex, questionsLength }) => {
  const currentQuestion = currentQuestionIndex + 1;

  return (
    <div className="d-flex justify-content-between ">
      <p className="mb-0">
        السؤال
        <span className="fw-bold"> {currentQuestion} </span>
        من
        <span className="fw-bold"> {questionsLength}</span>.
      </p>
    </div>
  );
};

export default TestYourselfQuestionsCount;
