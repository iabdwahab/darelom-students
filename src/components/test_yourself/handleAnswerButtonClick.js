export default function handleAnswerButtonClick(
  e,
  index,
  setIsAnswered,
  answerButtons,
  currentQuestionIndex,
  questions,
  setScore,
  score,
) {
  function handleDisablingButtons() {
    answerButtons.current.forEach((btn) => {
      btn.disabled = true;
    });
    clickedButton.disabled = false;
  }

  setIsAnswered(true);
  const correctAnswerButton =
    answerButtons.current[questions[currentQuestionIndex].question_answer];
  const clickedButton = e.target;

  if (index == questions[currentQuestionIndex].question_answer) {
    clickedButton.classList.add('btn-success');
    setScore(score + 1);
    handleDisablingButtons();
  } else {
    handleDisablingButtons();
    clickedButton.classList.add('btn-danger');
    correctAnswerButton.classList.add('btn-success');
  }
}
