import React, { useEffect, useRef, useState } from 'react'
import TestYourselfHeader from '../components/test_yourself/TestHeader';
import TestYourselfQuestionsCount from '../components/test_yourself/TestQuestionsCount';
import TestYourselfQuestionText from '../components/test_yourself/TestQuestionText';
import TestGoNextButton from '../components/test_yourself/TestGoNextButton';
import TestShowResultButton from '../components/test_yourself/TestShowResultButton';
import TestModal from '../components/test_yourself/TestModal';
import TestReasonButton from '../components/test_yourself/TestReasonButton';

const TestYourself = () => {
  const [isAnswered, setIsAnswered] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(location.state?.currentQuestionIndex || 0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const answerButtons = useRef([]);

  useEffect(() => {
    // fetch('/src/darelom-students-data/questions/test_questions.json')
    fetch('https://iabdwahab.me/darelom-students-data/questions/test_questions.json')
      .then(res => res.json())
      .then(data => {
        setQuestions(data);
      })
  }, []);

  const isLastQuestion = currentQuestionIndex >= questions.length - 1;

  return (
    <>
      <TestYourselfHeader />
      <TestYourselfQuestionsCount currentQuestionIndex={currentQuestionIndex} questionsLength={questions.length} />
      <TestYourselfQuestionText questionText={questions[currentQuestionIndex]?.question_text} />
      <div className='row g-2'>
        {
          questions[currentQuestionIndex]?.question_options.map((option, index) => {
            return (
              <div className='col-sm-6' key={index}>
                <button className='btn btn-primary w-100 p-2' ref={(btn) => answerButtons.current[index] = btn} onClick={(e) => handleAnswerButtonClick(e, index, setIsAnswered, answerButtons, currentQuestionIndex, questions, setScore, score)}>{option}</button>
              </div>
            )
          })
        }
      </div>

      <hr />

      <div className='mt-3 d-flex gap-2'>
        {
          isAnswered && isLastQuestion ?
            <>
              <TestShowResultButton questionsLength={questions.length} score={score} />
              <TestReasonButton setIsModalOpen={setIsModalOpen} />
            </> :
            isAnswered && !isLastQuestion ?
              <>
                <TestGoNextButton currentQuestionIndex={currentQuestionIndex} setCurrentQuestionIndex={setCurrentQuestionIndex} setIsAnswered={setIsAnswered} answerButtons={answerButtons.current} />
                <TestReasonButton setIsModalOpen={setIsModalOpen} />
              </>
              : null
        }
      </div>

      {
        isModalOpen ? <TestModal setIsModalOpen={setIsModalOpen} answerReason={questions[currentQuestionIndex]?.answer_reason} /> : null
      }
    </>
  )
}

function handleAnswerButtonClick(e, index, setIsAnswered, answerButtons, currentQuestionIndex, questions, setScore, score) {
  function handleDisablingButtons() {
    answerButtons.current.forEach((btn) => {
      btn.disabled = true;
    });
    clickedButton.disabled = false;
  }

  setIsAnswered(true);
  const correctAnswerButton = answerButtons.current[questions[currentQuestionIndex].question_answer];
  const clickedButton = e.target;

  if (index === questions[currentQuestionIndex].question_answer) {
    clickedButton.classList.add('btn-success');
    setScore(score + 1);
    handleDisablingButtons();

  } else {

    handleDisablingButtons();
    clickedButton.classList.add('btn-danger');
    correctAnswerButton.classList.add('btn-success');
  }
}

export default TestYourself;