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
import TestYourselfSubjectSelector from './pages/TestYourselfSubjectSelector';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { firebaseAuth, firebaseDB } from './utils/firebaseInit';
import SendQuestionTermSelector from './pages/SendQuestionTermSelector';
import SendQuestionSubjectSelector from './pages/SendQuestionSubjectSelector';
import { doc, getDoc } from 'firebase/firestore';
import SignUpComp from './components/users_accounts/SignUpComp';
import SignInComp from './components/users_accounts/SignInComp';
import SendQuestionForm from './components/send_question_form/SendQuestionForm';
import SendSuggestionForm from './components/send_suggestion_form/SendSuggestionForm'
import SendProblemForm from './components/send_problem_form/SendProblemForm';
import Schedule from './components/schedule/Schedule';
import LecturesRecordingsSelector from './components/lectures_recordings/LecturesRecordingsSelector';
import MoreResourcesSubjectSelector from './pages/MoreResourcesSubjectSelector';
import MoreResources from './pages/MoreResources';
import FinalExamsSelector from './components/final_exams_selector/FinalExamsSelector';
import GeneralSubjectsSelector from './pages/GeneralSubjectsSelector';

function App() {
  const [loggedinUser, setLoggedinUser] = useState(null);
  const [loggedinUserInfo, setLoggedinUserInfo] = useState(JSON.parse(localStorage.getItem('loggedInUserInfo')));

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, async user => {
      if (user) {
        const userSnapshot = await getDoc(doc(firebaseDB, `users/${user.uid}`));
        const data = userSnapshot.data();

        localStorage.setItem('loggedinUserInfo', JSON.stringify(data));
        setLoggedinUserInfo(data);
      } else {
        localStorage.setItem('loggedinUserInfo', JSON.stringify(null));
        setLoggedinUserInfo(null);
      }

      setLoggedinUser(user);
      localStorage.setItem('loggedinUser', JSON.stringify(user));
    });
  }, []);

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

          {/* Final Exams */}
          <Route path=':grade/final_exams/:term' element={<FinalExamsSelector />} />
          <Route path='/final_exam/:examId' element={<BookPage />} />

          {/* More Resources */}
          <Route path=':grade/more_resources/:term' element={<MoreResourcesSubjectSelector />} />
          <Route path=':grade/:term/more_resources/:subject' element={<MoreResources />} />

          <Route path='/general_subjects' element={<GeneralSubjectsSelector />} />
          <Route path='/general_subjects/:subject' element={<MoreResources />} />


          {/* Test Yourself */}
          <Route path='/test_yourself' element={<TestYourself />} /> {/* FOR TEST FUNCTIONS */}
          <Route path='/test_yourself/test_result' element={<TestResult />} />
          <Route path=':grade/test_yourself_students/:term' element={<TestYourselfSubjectSelector />} />
          <Route path='/test_yourself/sended_questions' element={<TestYourself />} />
          <Route path='/:grade/:term/:subject/test_yourself_students' element={<TestYourself />} />


          {/* Influencers */}
          {/* <Route path='/influencers' element={<InfluencersPage />} /> */}

          {/* Person Page */}
          {/* <Route path='/person/:personId' element={<PersonPage />} /> */}

          {/* Send Question Page */}
          <Route path='/:grade/send_question_selector' element={(loggedinUserInfo?.write_permission) ? <SendQuestionTermSelector /> : <ErrorPage />} />
          <Route path='/:grade/send_question_selector/:term' element={(loggedinUserInfo?.write_permission) ? <SendQuestionSubjectSelector /> : <ErrorPage />} />
          <Route path='/:grade/:term/:subject/send_question' element={(loggedinUserInfo?.write_permission) ? <SendQuestionForm /> : <ErrorPage />} />

          {/* Users Functions */}
          <Route path='/signup' element={!loggedinUser ? <SignUpComp /> : <Navigate to='/' />} />
          <Route path='/signin' element={!loggedinUser ? <SignInComp /> : <Navigate to='/' />} />

          <Route path='/send_suggestion' element={<SendSuggestionForm />} />
          <Route path='/send_problem' element={<SendProblemForm />} />

          <Route path='/:grade/schedule' element={<Schedule />} />

          <Route path='/:grade/lectures_recordings/:term' element={<LecturesRecordingsSelector />} />
        </Route>
      </>
    )
  )
  return (
    <RouterProvider router={router} />
  );
}

export default App;