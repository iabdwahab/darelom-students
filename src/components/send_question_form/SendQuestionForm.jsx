import { useEffect, useRef, useState } from 'react';
import { firebaseDB } from '../../utils/firebaseInit';
import { addDoc, collection } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { translate } from '../../utils/translations';
import SectionHeading from '../global/SectionHeading';
import Form from './Form';
import FieldContainer from '../form/FieldContainer';
import OptionsField from './OptionsField';
import AnswerField from './AnswerField';
import ReasonField from './ReasonField';
import SubmitButton from '../form/SubmitButton';
import SpinnerButton from '../global/SpinnerButton';
import QuestionTextAreaField from './QuestionTextAreaField';

const SendQuestionForm = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSended, setIsSended] = useState('initial');
  const { grade, term, subject } = useParams();

  const optionsRef = useRef([]);
  const formRef = useRef(null);

  useEffect(() => {
    const form = formRef.current;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      e.stopPropagation();

      const question = form['textarea-field'].value;
      const options = [];
      const answer = Number(form['options-input'].value);
      const reason = form['answer-reason-input'].value;
      optionsRef.current.forEach((option) => {
        options.push(option.value);
      });

      if (form.checkValidity()) {
        try {
          setIsSending(true);
          const { name, uid } = JSON.parse(localStorage.getItem('loggedinUserInfo'));

          await addDoc(
            collection(firebaseDB, `${grade}/test_yourself_students/questions/${term}/${subject}`),
            {
              question_text: question,
              question_answer: answer,
              question_options: options,
              answer_reason: reason,
              question_creator: {
                name,
                uid,
              },
            },
          );

          formRef.current.reset();
          form.classList.remove('was-validated');
          setIsSended('success');
        } catch (error) {
          console.log(error.code);
          form.classList.add('was-validated');

          setIsSended('failed');
        } finally {
          setIsSending(false);

          setTimeout(() => {
            setIsSended('initial');
          }, 3000);
        }
      } else {
        form.classList.add('was-validated');
      }
    });
  }, []);

  return (
    <>
      <SectionHeading>أرسل سؤالًا [تجريبية]</SectionHeading>
      <p className="text-center mt-2 fw-bold">
        {`${translate(grade)} - ${translate(term)} - ${translate(subject)}`}.
      </p>
      <Form formRef={formRef}>
        <FieldContainer field={<QuestionTextAreaField />} />
        <FieldContainer field={<OptionsField optionsRef={optionsRef} />} />
        <FieldContainer field={<AnswerField />} />
        <FieldContainer field={<ReasonField />} />
        {isSending ? <SpinnerButton /> : <SubmitButton text="أرسل السؤال" />}
      </Form>

      {isSended === 'initial' ? null : isSended === 'success' ? (
        <p className="text-center my-2 p-2 bg-success text-light fw-bold">تم الإرسال بنجاح.</p>
      ) : (
        <p className="text-center my-2 p-2 bg-danger text-light fw-bold">فشل الإرسال.</p>
      )}
    </>
  );
};

export default SendQuestionForm;
