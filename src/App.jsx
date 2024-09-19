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

const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<MainLayout />} errorElement={<ErrorPage />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/degrees/:grade/2023_24' element={<DegreesPage />} />
        <Route path='/degrees/:grade/2023_24/:studentId' element={<StudentDegreesPage />} />
        <Route path=':grade/books/:term' element={<BooksPage />} />
        <Route path='/book/:bookId' element={<BookPage />} />
        <Route path='/test_yourself' element={<TestYourself />} />
        <Route path='/test_yourself/test_result' element={<TestResult />} />
        <Route path='/person/:personId' element={<PersonPage />} />
        <Route path='/influencers' element={<InfluencersPage />} />
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