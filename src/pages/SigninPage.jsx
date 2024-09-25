import React, { useEffect, useRef } from 'react';
import SectionHeading from '../components/global/SectionHeading';
import { firebaseAuth } from '../utils/firebaseInit';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

const SigninPage = () => {
  const formRef = useRef(null);

  useEffect(() => {

    formRef.current.addEventListener('submit', async (e) => {
      e.preventDefault();

      const email = e.target['email-input'].value;
      const password = e.target['password-input'].value;

      const cred = await signInWithEmailAndPassword(firebaseAuth, email, password);
    });
  }, []);

  return (
    <div>
      <SectionHeading>تسجيل الدخول</SectionHeading>
      <form className='mx-auto mt-3' style={{ maxWidth: '480px' }} ref={formRef}>
        <div className="mb-3">
          <label htmlFor="email-input" className="form-label fw-bold">البريد الإلكتروني:</label>
          <input type="email" className="form-control" id="email-input" placeholder='medhat@shalaby.com' aria-describedby="emailHelp" required />
        </div>
        <div className="mb-3">
          <label htmlFor="password-input" className="form-label fw-bold">كلمة المرور:</label>
          <input type="password" placeholder='_____' defaultValue='123456' className="form-control" id="password-input" autoComplete="off" required />
        </div>
        <button type="submit" className="btn btn-primary w-100 fw-bold">تسجيل الدخول</button>
      </form>
      <p className='text-center mt-2 fw-bold'>هل تريد إنشاء حساب؟ <Link to="/signup">إنشاء حساب</Link>.</p>
    </div>
  )
}

export default SigninPage