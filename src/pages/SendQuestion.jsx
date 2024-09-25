import React, { useEffect, useRef } from 'react'
import SectionHeading from '../components/global/SectionHeading'
import { firebaseDB } from '../utils/firebaseInit';
import { addDoc, collection } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { translate } from '../utils/translations';

const SendQuestion = () => {
  const { grade, term, subject } = useParams();

  const questionRef = useRef(null);
  const optionsRef = useRef([]);
  const correctRef = useRef(null);
  const answerReasonRef = useRef(null);
  const submitBtnRef = useRef(null);
  const formRef = useRef(null);
  const successMsgRef = useRef(null);
  const msgRef = useRef(null);

  useEffect(() => {

    function showMessage(msgRef, status) {
      const msgEl = msgRef.current;

      if (status === 'success') {
        msgEl.innerHTML = 'تم الإرسال بنجاح.';
        msgEl.classList.remove('bg-danger');
        msgEl.classList.add('bg-success');
      } else {
        msgEl.innerHTML = 'فشل الإرسال.';
        msgEl.classList.remove('bg-success');
        msgEl.classList.add('bg-danger');
      }

      msgEl.classList.remove('d-none');
      setTimeout(() => {
        msgEl.classList.add('d-none');
      }, 3000);
    }

    formRef.current.addEventListener('submit', async (e) => {
      e.preventDefault();
      const question_text = questionRef.current?.value;
      const answer_reason = answerReasonRef.current?.value;
      const question_answer = Number(correctRef.current?.value);
      const question_options = [];

      optionsRef.current.forEach((option) => {
        question_options.push(option.value);
      });

      let isOptionsFilled = true;

      question_options.forEach(option => {
        if (!option) {
          isOptionsFilled = false;
        }
      });

      if (question_text && isOptionsFilled) {
        try {
          await addDoc(collection(firebaseDB, `${grade}/test_yourself_students/questions/${term}/${subject}`), {
            question_text,
            question_answer,
            question_options,
            answer_reason
          });

          showMessage(msgRef, 'success');

          formRef.current.reset();

        } catch (error) {
          console.log(error.message)
          showMessage(msgRef, 'failed');
        };
      }
    });
  }, []);

  const optionsInputsNames = ['الأول', 'الثاني', 'الثالث', 'الرابع'];
  const selectOptions = ['1', '2', '3', '4'];
  return (
    <>
      <SectionHeading>أرسل سؤالًا [تجريبية]</SectionHeading>
      <p className='text-center mt-2 fw-bold'>{`${translate(grade)} - ${translate(term)} - ${translate(subject)}`}.</p>
      <form ref={formRef}>
        <div className="form-group">
          <InputLabel text='اكتب السؤال:' htmlFor='question-input' />
          <textarea className="form-control mb-3" id="question-input" rows={4} placeholder='اكتب نص السؤال هنا.' ref={questionRef} required></textarea>
        </div>
        <div className="form-group d-flex flex-column flex-wrap gap-2">
          <InputLabel text='اكتب الاختيارات:' />
          <div className='row g-2'>
            {optionsInputsNames.map((el, index) => {
              return (
                <div key={index} className='col-sm-6'>
                  <input type="text" className="form-control" placeholder={`الاختيار ${el}.`} required ref={(element) => optionsRef.current[index] = element} />
                </div>
              )
            })}
          </div>
        </div>
        <div className="form-group my-3 d-flex flex-column gap-2" >
          <InputLabel text='ما هو رقم الاختيار الصحيح؟' htmlFor='options-input' />
          <select className="form-control" id="options-input" ref={correctRef}>
            {selectOptions.map((el, index) => {
              return <option key={index} value={index}>{el}</option>
            })}
          </select>
        </div>
        <div className="form-group mb-3 d-flex flex-column gap-2">
          <InputLabel text='اكتب التعليل: [اتركها فارغة إن لم يكن هناك تعليل].' htmlFor='answer-reason-input' />
          <input type="text" className="form-control" placeholder='اكتب التعليل.' id='answer-reason-input' ref={answerReasonRef} />
        </div>
        <button type="submit" className="btn btn-primary w-100" ref={submitBtnRef}>أرسل السؤال</button>
      </form>
      <p className='text-center fw-bold bg-success text-light py-2 mt-2 d-none' ref={msgRef}>تم الإرسال.</p>
    </>
  )
}

function InputLabel({ text, htmlFor }) {
  return <label className='fw-bold fs-5 mb-1' htmlFor={htmlFor}>{text}</label>
}


export default SendQuestion