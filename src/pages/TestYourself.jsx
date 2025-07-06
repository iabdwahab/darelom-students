import { useEffect, useRef, useState } from 'react';
import { API_URL } from '../utils/global-variables';
import { useLocation, useParams } from 'react-router-dom';
import { firebaseDB } from '../utils/firebaseInit';
import { collection, getDocs } from 'firebase/firestore';
import TestYourselfQuestionsCount from '../components/test_yourself/TestQuestionsCount';
import TestYourselfQuestionText from '../components/test_yourself/TestQuestionText';
import TestGoNextButton from '../components/test_yourself/TestGoNextButton';
import TestShowResultButton from '../components/test_yourself/TestShowResultButton';
import Modal from '../components/global/Modal';
import TestReasonButton from '../components/test_yourself/TestReasonButton';
import LoadingSpinner from '../components/global/LoadingSpinner';
import SectionHeading from '../components/global/SectionHeading';
import handleAnswerButtonClick from '../components/test_yourself/handleAnswerButtonClick';

const TestYourself = () => {
  const { grade, term, subject } = useParams();

  const [isAnswered, setIsAnswered] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(
    location.state?.currentQuestionIndex || 0,
  );
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const answerButtons = useRef([]);
  const [isLoading, setIsLoading] = useState(true);

  const currentLocation = useLocation();
  const locationPathname = currentLocation.pathname;

  function handleSettingQuestion(collectionPath) {
    getDocs(collection(firebaseDB, collectionPath)).then((snapshot) => {
      const questions = [];
      snapshot.docs.forEach((doc) => {
        questions.push(doc.data());
      });

      setQuestions(questions);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    if (locationPathname == '/test_yourself/sended_questions') {
      handleSettingQuestion('test_yourself/sended_questions');
    } else if (locationPathname == `/${grade}/${term}/${subject}/test_yourself_students`) {
      handleSettingQuestion(`${grade}/test_yourself_students/questions/${term}/${subject}`);
    } else {
      fetch(`${API_URL}/darelom-students-data/questions/test_questions.json`)
        .then((res) => res.json())
        .then((data) => {
          setQuestions(data);
          setIsLoading(false);
        });
    }
  }, []);

  const isLastQuestion = currentQuestionIndex >= questions.length - 1;

  return (
    <>
      <SectionHeading fontSize="2">اختبر نفسك</SectionHeading>
      {isLoading ? (
        <LoadingSpinner />
      ) : questions.length ? (
        <div className="mt-2">
          <TestYourselfQuestionsCount
            currentQuestionIndex={currentQuestionIndex}
            questionsLength={questions.length}
            creatorName={questions[currentQuestionIndex]?.question_creator?.name}
          />
          <TestYourselfQuestionText questionText={questions[currentQuestionIndex]?.question_text} />
          <div className="row g-2">
            {questions[currentQuestionIndex]?.question_options.map((option, index) => {
              return (
                <div className="col-sm-6" key={index}>
                  <button
                    className="btn btn-primary w-100 p-2"
                    ref={(btn) => (answerButtons.current[index] = btn)}
                    onClick={(e) =>
                      handleAnswerButtonClick(
                        e,
                        index,
                        setIsAnswered,
                        answerButtons,
                        currentQuestionIndex,
                        questions,
                        setScore,
                        score,
                      )
                    }
                  >
                    {option}
                  </button>
                </div>
              );
            })}
          </div>

          <hr />

          <div className="mt-3 d-flex gap-2">
            {isAnswered && isLastQuestion ? (
              <TestShowResultButton questionsLength={questions.length} score={score} />
            ) : (
              isAnswered &&
              !isLastQuestion && (
                <TestGoNextButton
                  currentQuestionIndex={currentQuestionIndex}
                  setCurrentQuestionIndex={setCurrentQuestionIndex}
                  setIsAnswered={setIsAnswered}
                  answerButtons={answerButtons.current}
                />
              )
            )}
            {isAnswered && <TestReasonButton setIsModalOpen={setIsModalOpen} />}
          </div>

          {isModalOpen && (
            <Modal
              setIsModalOpen={setIsModalOpen}
              answerReason={questions[currentQuestionIndex]?.answer_reason}
            />
          )}
        </div>
      ) : (
        <p className="text-center fs-2 fw-bold my-2">لا أسئلة حتى الآن.</p>
      )}
    </>
  );
};

export default TestYourself;
