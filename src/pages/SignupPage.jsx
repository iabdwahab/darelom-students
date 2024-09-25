import React, { useEffect, useRef, useState } from 'react';
import SectionHeading from '../components/global/SectionHeading';
import { firebaseAuth, firebaseDB } from '../utils/firebaseInit';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';

const SignupPage = () => {
  const navigate = useNavigate();
  const [loggedinUser, setLoggedinUser] = useState(JSON.parse(localStorage.getItem('loggedinUser')));

  const formRef = useRef(null);

  useEffect(() => {
    // if (loggedinUser) {
    //   navigate('/');
    // }

    formRef.current.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = e.target['name-input'].value;
      const email = e.target['email-input'].value;
      const grade = e.target['grade-input'].value;
      const password = e.target['password-input'].value;

      const cred = await createUserWithEmailAndPassword(firebaseAuth, email, password);
      const uid = cred.user.uid;

      await setDoc(doc(firebaseDB, "users", uid), {
        name,
        email,
        grade,
        uid
      });
      console.log(cred);
    });
  }, []);

  return (
    <div>
      <SectionHeading>إنشاء حساب جديد</SectionHeading>
      <form className='mx-auto mt-3' style={{ maxWidth: '480px' }} ref={formRef}>
        <div className="mb-3">
          <label htmlFor="name-input" className="form-label fw-bold">الاسم:</label>
          <input type="text" className="form-control" id="name-input" placeholder='مدحت شلبي' />
        </div>
        <div className="mb-3">
          <label htmlFor="email-input" className="form-label fw-bold">البريد الإلكتروني:</label>
          <input type="email" className="form-control" id="email-input" placeholder='medhat.shalaby@shalaboka.com' aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label className='fw-bold'>اختر فرقتك:</label>
          <select className="form-select mt-2" id="grade-input">
            <option value="grade_1">الفرقة الأولى</option>
            <option value="grade_2">الفرقة الثانية</option>
            <option value="grade_3">الفرقة الثالثة</option>
            <option value="grade_4">الفرقة الرابعة</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="password-input" className="form-label fw-bold">كلمة المرور:</label>
          <input type="password" placeholder='_____' className="form-control" id="password-input" autoComplete="off" />
        </div>
        <button type="submit" className="btn btn-primary w-100 fw-bold">إنشاء حساب جديد</button>
      </form>
    </div>
  )
}

export default SignupPage