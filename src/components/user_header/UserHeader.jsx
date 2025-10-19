// import { firebaseAuth } from '../../utils/firebaseInit';
// import { signOut } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';
import ThemeMode from '../theme_mode/ThemeMode';

const UserHeader = () => {
  // const navigate = useNavigate();

  // const loggedinUser = JSON.parse(localStorage.getItem('loggedinUser'));
  // const loggedinUserInfo = JSON.parse(localStorage.getItem('loggedinUserInfo'));

  // async function handleSignout() {
  //   await signOut(firebaseAuth);
  //   localStorage.setItem('loggedinUser', null);
  //   localStorage.setItem('loggedinUserInfo', null);
  //   navigate('/');
  // }

  return (
    <div className="border-bottom">
      <div className="container-xl py-3">
        {/* {loggedinUser && (
          <>
            <p className="fs-4">
              <span>أهلًا، </span>
              <span className="fw-bold">{loggedinUserInfo.name}!</span>
            </p>
          </>
        )} */}
        {/* {loggedinUserInfo ? (
          <div className="d-flex gap-2">
            <button
              className={`btn btn-primary w-100 p-2 ${!loggedinUserInfo?.write_permission && 'disabled'}`}
              onClick={() => navigate(`/${loggedinUserInfo?.grade}/send_question_selector`)}
            >
              أضف سؤالًا {!loggedinUserInfo?.write_permission && '[تتم مراجعة حسابك]'}
            </button>
            <button className="btn btn-danger w-100 p-2" onClick={handleSignout}>
              تسجيل الخروج
            </button>
          </div>
        ) : (
          <button className="btn btn-primary w-100 p-2" onClick={() => navigate('signin')}>
            تسجيل الدخول
          </button>
        )} */}
        <ThemeMode />
      </div>
    </div>
  );
};

export default UserHeader;
