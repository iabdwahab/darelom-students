import { useEffect, useRef, useState } from 'react';
import { firebaseAuth } from '../../utils/firebaseInit';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import SectionHeading from '../global/SectionHeading';
import PasswordField from '../form/PasswordField';
import EmailField from '../form/EmailField';
import Form from '../form/Form';
import SubmitButton from '../form/SubmitButton';
import FieldContainer from '../form/FieldContainer';
import SpinnerButton from '../global/SpinnerButton';

const SignInComp = () => {
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

          const email = e.target['email-input'].value;
          const password = e.target['password-input'].value;
          await signInWithEmailAndPassword(firebaseAuth, email, password);

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
      <SectionHeading>تسجيل الدخول</SectionHeading>
      <Form formRef={formRef}>
        <FieldContainer field={<EmailField />} />
        <FieldContainer field={<PasswordField />} />
        {isLoading ? <SpinnerButton /> : <SubmitButton text="تسجيل الدخول" />}
        {isFailed && (
          <p className="text-center my-2 p-2 bg-danger text-light fw-bold">فشل التسجيل.</p>
        )}
      </Form>
      <p className="text-center mt-2 fw-bold">
        هل تريد إنشاء حساب؟ <Link to="/signup">إنشاء حساب</Link>.
      </p>
    </div>
  );
};

export default SignInComp;
