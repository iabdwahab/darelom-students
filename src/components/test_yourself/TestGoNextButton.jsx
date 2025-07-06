import Button from '../global/Button';

function TestGoNextButton({
  currentQuestionIndex,
  setCurrentQuestionIndex,
  setIsAnswered,
  answerButtons,
}) {
  function goNext() {
    setIsAnswered(false);
    setCurrentQuestionIndex(currentQuestionIndex + 1);

    answerButtons.forEach((btn) => {
      btn.disabled = false;
      btn.classList.remove('btn-danger', 'btn-success');
    });
  }

  return <Button text="التالي" onClick={goNext} />;
}

export default TestGoNextButton;
