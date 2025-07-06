import { useEffect, useRef, useState } from 'react';
import SectionHeading from '../global/SectionHeading';
import { firebaseAuth, firebaseDB } from '../../utils/firebaseInit';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import Form from '../form/Form';
import FieldContainer from '../form/FieldContainer';
import EmailField from '../form/EmailField';
import PasswordField from '../form/PasswordField';
import NameField from '../form/NameField';
import GradeField from '../form/GradeField';
import SubmitButton from '../form/SubmitButton';
import TextAreaField from '../form/TextAreaField';
import SpinnerButton from '../global/SpinnerButton';
import { useNavigate } from 'react-router-dom';

const SignUpComp = () => {
  const navigate = useNavigate();
  const [isFailed, setIsFailed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const form = formRef.current;
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (form.checkValidity()) {
        try {
          setIsLoading(true);
          const name = e.target['name-input'].value;
          const email = e.target['email-input'].value;
          const grade = e.target['grade-input'].value;
          const password = e.target['password-input'].value;
          const message = e.target['textarea-field'].value;
          const cred = await createUserWithEmailAndPassword(firebaseAuth, email, password);

          const uid = cred.user.uid;

          await setDoc(doc(firebaseDB, 'users', uid), {
            name,
            email,
            grade,
            uid,
            message,
            write_permission: false,
          });

          navigate('/');
        } catch (error) {
          console.log(error.code);
          setIsFailed(true);
        } finally {
          setIsLoading(false);
          setTimeout(() => {
            setIsFailed(false);
          }, 3000);
        }
      } else {
        form.classList.add('was-validated');
      }
    });
  }, []);

  return (
    <div>
      <SectionHeading>إنشاء حساب جديد</SectionHeading>
      <Form formRef={formRef}>
        <FieldContainer field={<NameField />} />
        <FieldContainer field={<EmailField />} />
        <FieldContainer field={<GradeField />} />
        <FieldContainer
          field={
            <TextAreaField
              placeholder="اكتب رسالة مراعيًا علامات الترقيم."
              label="اكتب رسالة مستخدمًا علامات الترقيم:"
              fontSize={6}
              minLength={100}
              invalidFeedback="الرسالة يجب أن تتكون من 100 حرف على الأقل."
            />
          }
        />
        <FieldContainer field={<PasswordField />} />
        {isLoading ? <SpinnerButton /> : <SubmitButton text="إنشاء حساب جديد" />}
        {isFailed && (
          <p className="text-center my-2 p-2 bg-danger text-light fw-bold">فشل التسجيل.</p>
        )}
      </Form>
    </div>
  );
};

export default SignUpComp;
