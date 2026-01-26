import { useEffect, useRef, useState } from 'react';
import ProblemTextAreaField from './ProblemTextAreaField';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { firebaseDB } from '../../utils/firebaseInit';
import FieldContainer from '../form/FieldContainer';
import SpinnerButton from '../global/SpinnerButton';
import SubmitButton from '../form/SubmitButton';
import Form from '../send_question_form/Form';
import SectionHeading from '../global/SectionHeading';

const SendProblemForm = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSended, setIsSended] = useState('initial');
  const formRef = useRef(null);

  useEffect(() => {
    const form = formRef.current;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log('s');

      const problem = form['textarea-field'].value;

      if (form.checkValidity()) {
        try {
          setIsSending(true);

          await addDoc(collection(firebaseDB, `problems`), {
            problem,
            timestamp: serverTimestamp(),
          });

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
      <SectionHeading>الإبلاغ عن مشكلة</SectionHeading>
      <Form formRef={formRef}>
        <FieldContainer field={<ProblemTextAreaField />} />
        {isSending ? <SpinnerButton /> : <SubmitButton text="أرسل المشكلة" />}
      </Form>
      {isSended === 'initial' ? null : isSended === 'success' ? (
        <p className="text-center my-2 p-2 bg-success text-light fw-bold">تم الإرسال بنجاح.</p>
      ) : (
        <p className="text-center my-2 p-2 bg-danger text-light fw-bold">فشل الإرسال.</p>
      )}
    </>
  );
};

export default SendProblemForm;
