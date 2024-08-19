import React, { useState } from 'react'
import TestYourselfHeader from '../components/test_yourself/TestHeader';
import TestYourselfQuestionsCount from '../components/test_yourself/TestQuestionsCount';
import TestYourselfQuestionText from '../components/test_yourself/TestQuestionText';
import TestAnswerOption from '../components/test_yourself/TestAnswerOption';
import TestGoNextButton from '../components/test_yourself/TestGoNextButton';
import TestShowResultButton from '../components/test_yourself/TestShowResultButton';

const TestYourself = () => {
  const [isAnswered, setIsAnswered] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(location.state?.currentQuestionIndex || 0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      "question_text": 'ما علامة إعراب كلمة "أخر" في قوله -تعالى-: "فَعِدَّةٌ مِّنْ أَيَّامٍ أُخَر"',
      "question_options": ["الضمة", "الفتحة", "الكسرة", "السكون"],
      "question_answer": 1
    },
    {
      "question_text": "ما علامة إعراب كلمة \"تَدْعُونَا\" في قوله -سبحانه-: \"قَالُوا يَا صَالِحُ قَدْ كُنتَ فِينَا مَرْجُوًّا قَبْلَ هَٰذَا ۖ أَتَنْهَانَا أَن نَّعْبُدَ مَا يَعْبُدُ آبَاؤُنَا وَإِنَّنَا لَفِي شَكٍّ مِّمَّا تَدْعُونَا إِلَيْهِ مُرِيبٍ\"؟",
      "question_options": ["ثبوت النون", "الضمة", "الواو", "حذف النون"],
      "question_answer": 1
    },
    {
      "question_text": "ما علامة إعراب كلمة \"تَدْعُونَنَا\" في قوله -سبحانه-: \"وَقَالُواْ إِنَّا كَفَرْنَا بِمَا أُرْسِلْتُم بِهِ وَإِنَّا لَفِي شَكٍّ مِّمَّا تَدْعُونَنَا إِلَيْهِ مُرِيبٍ\"؟",
      "question_options": ["ثبوت النون", "الضمة", "الواو", "الألف"],
      "question_answer": 0
    },
    {
      "question_text": "ما المحل الإعرابي لجملة \"لَا إِلَٰهَ إِلَّا هُوَ\" في قوله -تعالى-: \"رَّبُّ الْمَشْرِقِ وَالْمَغْرِبِ لَا إِلَٰهَ إِلَّا هُوَ فَاتَّخِذْهُ وَكِيلًا\"؟",
      "question_options": ["مبتدأ", "مفعول به", "مضاف إليه", "خبر"],
      "question_answer": 3
    },
  ];

  const isLastQuestion = currentQuestionIndex >= questions.length - 1;

  function handleClick(e, index) {
    setIsAnswered(true);

    const correctAnswerButton = document.querySelectorAll('.question-answer-btn')[questions[currentQuestionIndex].question_answer];
    const clickedButton = e.target;

    if (index === questions[currentQuestionIndex].question_answer) {
      clickedButton.classList.add('btn-success');
      setScore(score + 1);
      document.querySelectorAll('.question-answer-btn').forEach(btn => {
        btn.disabled = true;
      });
      clickedButton.disabled = false;

    } else {

      document.querySelectorAll('.question-answer-btn').forEach(btn => {
        btn.disabled = true;
      });
      clickedButton.classList.add('btn-danger');
      clickedButton.disabled = false;
      correctAnswerButton.classList.add('btn-success');
    }
  }

  return (
    <>
      <TestYourselfHeader />
      <TestYourselfQuestionsCount currentQuestionIndex={currentQuestionIndex} questionsLength={questions.length} />
      <TestYourselfQuestionText questionText={questions[currentQuestionIndex].question_text} />
      <div className='row g-2'>
        {
          questions[currentQuestionIndex].question_options.map((option, index) => {
            return <TestAnswerOption key={index} onClick={(e) => handleClick(e, index)} optionText={option} />
          })
        }
      </div>

      <div className='mt-3'>
        {
          isAnswered && isLastQuestion ? <TestShowResultButton questionsLength={questions.length} score={score} /> :
            isAnswered && !isLastQuestion ? <TestGoNextButton currentQuestionIndex={currentQuestionIndex} setCurrentQuestionIndex={setCurrentQuestionIndex} setIsAnswered={setIsAnswered} />
              : null
        }
      </div>
    </>
  )
}


export default TestYourself