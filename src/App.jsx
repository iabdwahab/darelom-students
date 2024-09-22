import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import DegreesPage from './pages/DegreesPage';
import StudentDegreesPage from './pages/StudentDegreesPage';
import ErrorPage from './pages/ErrorPage';
import BooksPage from './pages/BooksPage';
import BookPage from './pages/BookPage';
import TestYourself from './pages/TestYourself'
import TestResult from './components/test_yourself/TestResult';
import PersonPage from './pages/PersonPage';
import InfluencersPage from './pages/InfluencersPage';
import SendQuestion from './pages/SendQuestion';
import TestYourselfSubjectSelector from './pages/TestYourselfSubjectSelector';

const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<MainLayout />} errorElement={<ErrorPage />}>
        <Route path='/' element={<HomePage />} />
        {/* Degrees */}
        <Route path='/degrees/:grade/2023_24' element={<DegreesPage />} />
        <Route path='/degrees/:grade/2023_24/:studentId' element={<StudentDegreesPage />} />

        {/* Books */}
        <Route path=':grade/books/:term' element={<BooksPage />} />
        <Route path='/book/:bookId' element={<BookPage />} />

        {/* Test Yourself */}
        <Route path='/test_yourself' element={<TestYourself />} /> {/* FOR TEST FUNCTIONS */}
        <Route path='/test_yourself/test_result' element={<TestResult />} />
        <Route path=':grade/test_yourself_students/:term' element={<TestYourselfSubjectSelector />} />
        {/* <Route path=':grade/test_yourself_students/:term/:subject' element={<TestYourself />} /> */}
        <Route path='/test_yourself/sended_questions' element={<TestYourself />} />
        <Route path='/:grade/:term/:subject/test_yourself_students' element={<TestYourself />} />

        {/* Influencers */}
        <Route path='/influencers' element={<InfluencersPage />} />

        {/* Person Page */}
        <Route path='/person/:personId' element={<PersonPage />} />

        {/* Send Question Page */}
        <Route path='/:grade/:term/:subject/send_question' element={<SendQuestion />} />
      </Route>
    </>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;