import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import DegreesPage from './pages/DegreesPage';
import StudentPage from './pages/StudentPage';
import ErrorPage from './pages/ErrorPage';
import BooksPage from './pages/BooksPage';
import BookPage from './pages/BookPage';
import TestYourself from './pages/TestYourself'
import TestResult from './components/TestResult';

const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<MainLayout />} errorElement={<ErrorPage />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/degrees/:grade/2023_24' element={<DegreesPage />} />
        <Route path='/degrees/:grade/2023_24/:studentId' element={<StudentPage />} />
        <Route path=':grade/books/:term' element={<BooksPage />} />
        <Route path='/book' element={<BookPage />} />
        <Route path='/test_yourself' element={<TestYourself />} />
        <Route path='/test_yourself/test_result' element={<TestResult />} />
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