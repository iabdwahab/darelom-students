import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createHashRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import DegreesPage from './pages/DegreesPage';
import StudentDegreesPage from './pages/StudentDegreesPage';
import ErrorPage from './pages/ErrorPage';
import BooksSelector from './components/books_selector/BooksSelector';
import BookPage from './pages/BookPage';
import TestYourself from './pages/TestYourself'
import TestResult from './components/test_yourself/TestResult';
import PersonPage from './pages/PersonPage';
import InfluencersPage from './pages/InfluencersPage';
import SendQuestion from './pages/SendQuestion';
import TestYourselfSubjectSelector from './pages/TestYourselfSubjectSelector';
import SignupPage from './pages/SignupPage';
import SigninPage from './pages/SigninPage';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { firebaseAuth, firebaseDB } from './utils/firebaseInit';
import SendQuestionTermSelector from './pages/SendQuestionTermSelector';
import SendQuestionSubjectSelector from './pages/SendQuestionSubjectSelector';
import { doc, getDoc } from 'firebase/firestore';

function App() {
  const [loggedinUser, setLoggedinUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, async user => {
      if (user) {
        const userSnapshot = await getDoc(doc(firebaseDB, `users/${user.uid}`));
        const data = userSnapshot.data();
        localStorage.setItem('loggedinUserInfo', JSON.stringify(data));
      } else {
        localStorage.setItem('loggedinUserInfo', JSON.stringify(null));
      }

      setLoggedinUser(user);
      localStorage.setItem('loggedinUser', JSON.stringify(user));
    });
  }, [])

  const router = createHashRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<MainLayout />} errorElement={<ErrorPage />}>
          <Route path='/' element={<HomePage />} />
          {/* Degrees */}
          <Route path='/degrees/:grade/2023_24' element={<DegreesPage />} />
          <Route path='/degrees/:grade/2023_24/:studentId' element={<StudentDegreesPage />} />

          {/* Books */}
          <Route path=':grade/books/:term' element={<BooksSelector />} />
          <Route path='/book/:bookId' element={<BookPage />} />

          {/* Test Yourself */}
          <Route path='/test_yourself' element={<TestYourself />} /> {/* FOR TEST FUNCTIONS */}
          <Route path='/test_yourself/test_result' element={<TestResult />} />
          <Route path=':grade/test_yourself_students/:term' element={<TestYourselfSubjectSelector />} />
          <Route path='/test_yourself/sended_questions' element={<TestYourself />} />
          <Route path='/:grade/:term/:subject/test_yourself_students' element={<TestYourself />} />

          {/* Influencers */}
          <Route path='/influencers' element={<InfluencersPage />} />

          {/* Person Page */}
          <Route path='/person/:personId' element={<PersonPage />} />

          {/* Send Question Page */}
          <Route path='/:grade/send_question_selector' element={loggedinUser ? <SendQuestionTermSelector /> : <SigninPage />} />
          <Route path='/:grade/send_question_selector/:term' element={<SendQuestionSubjectSelector />} />
          <Route path='/:grade/:term/:subject/send_question' element={<SendQuestion />} />

          {/* Users */}
          <Route path='/signup' element={!loggedinUser ? <SignupPage /> : <Navigate to="/" />} />
          <Route path='/signin' element={!loggedinUser ? <SigninPage /> : <Navigate to="/" />} />
        </Route>
      </>
    )
  )
  return (
    <RouterProvider router={router} />
  );
}

export default App;