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
import OptionPage from './pages/OptionPage';

const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<MainLayout />} errorElement={<ErrorPage />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/degrees/:grade/2023_24' element={<DegreesPage />} />
        <Route path='/degrees/:grade/2023_24/:studentId' element={<StudentPage />} />
        <Route path='/:grade/:term/:option' element={<OptionPage />} />
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