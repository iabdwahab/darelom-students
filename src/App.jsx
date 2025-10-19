import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth, firebaseDB } from './utils/firebaseInit';
import { doc, getDoc } from 'firebase/firestore';
import {
  createHashRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import DegreesPage from './pages/DegreesPage';
import RankingByTermPage from './pages/RankingByTermPage';
import Ranking2025Term2 from './pages/Ranking2025Term2.jsx';
import StudentDegreesPage from './pages/StudentDegreesPage';
import ErrorPage from './pages/ErrorPage';
import BooksSelector from './components/books_selector/BooksSelector';
import BookPage from './pages/BookPage';
import TestYourself from './pages/TestYourself';
import TestResult from './components/test_yourself/TestResult';
import TestYourselfSubjectSelector from './pages/TestYourselfSubjectSelector';
import SendQuestionTermSelector from './pages/SendQuestionTermSelector';
import SendQuestionSubjectSelector from './pages/SendQuestionSubjectSelector';
import SignUpComp from './components/users_accounts/SignUpComp';
import SignInComp from './components/users_accounts/SignInComp';
import SendQuestionForm from './components/send_question_form/SendQuestionForm';
import SendSuggestionForm from './components/send_suggestion_form/SendSuggestionForm';
import SendProblemForm from './components/send_problem_form/SendProblemForm';
import Schedule from './components/schedule/Schedule';
import LecturesRecordingsSelector from './components/lectures_recordings/LecturesRecordingsSelector';
import MoreResourcesSubjectSelector from './pages/MoreResourcesSubjectSelector';
import MoreResources from './pages/MoreResources';
import FinalExamsSelector from './components/final_exams_selector/FinalExamsSelector';
import GeneralSubjectsSelector from './pages/GeneralSubjectsSelector';

import StudentOverallPage from './pages/StudentOverallPage'
import FindStudent from './pages/FindStudent';
import DegreesAnalyticsPage from './pages/DegreesAnalyticsPage';
// import RecordingsContact from './pages/RecordingsContact';

function App() {
  const [loggedinUser, setLoggedinUser] = useState(null);
  const [loggedinUserInfo, setLoggedinUserInfo] = useState(
    JSON.parse(localStorage.getItem('loggedInUserInfo')),
  );

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, async (user) => {
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
        <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
          <Route path="/" element={<HomePage />} />
          {/* Degrees */}
          <Route path="/degrees/:grade/:year" element={<DegreesPage />} />
          <Route path="/degrees/:grade/:year/:studentId" element={<StudentDegreesPage />} />
          <Route path='/ranking/:grade/:term/:year' element={<RankingByTermPage />} />

          <Route path='/ranking/:grade/term_2/2025' element={<Ranking2025Term2 />} />


          {/* Books */}
          <Route path=":grade/books/:term" element={<BooksSelector />} />
          <Route path="/book/:bookId" element={<BookPage />} />
          {/* Final Exams */}
          <Route path=":grade/final_exams/:term" element={<FinalExamsSelector />} />
          <Route path="/final_exam/:examId" element={<BookPage />} />
          {/* More Resources */}
          <Route path=":grade/more_resources/:term" element={<MoreResourcesSubjectSelector />} />
          <Route path=":grade/:term/more_resources/:subject" element={<MoreResources />} />
          <Route path="/general_subjects" element={<GeneralSubjectsSelector />} />
          <Route path="/general_subjects/:subject" element={<MoreResources />} />
          {/* Test Yourself */}
          <Route path="/test_yourself" element={<TestYourself />} /> {/* FOR TEST FUNCTIONS */}
          <Route path="/test_yourself/test_result" element={<TestResult />} />
          <Route
            path=":grade/test_yourself_students/:term"
            element={<TestYourselfSubjectSelector />}
          />
          <Route path="/test_yourself/sended_questions" element={<TestYourself />} />
          <Route path="/:grade/:term/:subject/test_yourself_students" element={<TestYourself />} />
          {/* Send Question Page */}
          <Route
            path="/:grade/send_question_selector"
            element={
              loggedinUserInfo?.write_permission ? <SendQuestionTermSelector /> : <SignInComp />
            }
          />
          <Route
            path="/:grade/send_question_selector/:term"
            element={
              loggedinUserInfo?.write_permission ? <SendQuestionSubjectSelector /> : <SignInComp />
            }
          />
          <Route
            path="/:grade/:term/:subject/send_question"
            element={loggedinUserInfo?.write_permission ? <SendQuestionForm /> : <SignInComp />}
          />
          {/* Users Functions */}
          <Route path="/signup" element={!loggedinUser ? <SignUpComp /> : <Navigate to="/" />} />
          <Route path="/signin" element={!loggedinUser ? <SignInComp /> : <Navigate to="/" />} />
          <Route path="/send_suggestion" element={<SendSuggestionForm />} />
          <Route path="/send_problem" element={<SendProblemForm />} />
          <Route path="/:grade/schedule" element={<Schedule />} />
          <Route
            path="/:grade/lectures_recordings/:term"
            element={<LecturesRecordingsSelector />}
          />

          {/* Student Overall */}
          <Route
            path="/students/:student_id"
            element={<StudentOverallPage />}
          />

          <Route
            path="/find_student"
            element={<FindStudent />}
          />

          <Route
            path="/degrees_analytics/2025"
            element={<DegreesAnalyticsPage />}
          />

        </Route>
      </>,
    ),
  );
  return <RouterProvider router={router} />;
}

export default App;
