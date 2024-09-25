import React from 'react'
import { firebaseAuth } from '../../utils/firebaseInit';
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

const UserHeader = () => {
  const navigate = useNavigate();

  const loggedinUser = JSON.parse(localStorage.getItem('loggedinUser'));
  const loggedinUserInfo = JSON.parse(localStorage.getItem('loggedinUserInfo'));

  async function handleSignout() {
    await signOut(firebaseAuth);
  }

  return (
    <div className='border-bottom'>
      <div className='container-xl py-3 d-flex gap-2'>
        {loggedinUser ? <>
          <button className='btn btn-primary w-100 p-2' onClick={() => navigate(`/${loggedinUserInfo?.grade}/send_question_selector`)}>أضف سؤالًا</button>
          <button className='btn btn-primary w-100 p-2' onClick={handleSignout}>تسجيل الخروج</button>
        </> : <button className='btn btn-primary w-100 p-2' onClick={() => navigate('signin')}>تسجيل الدخول</button>
        }
      </div>
    </div>
  )
}

export default UserHeader