import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import DegreesPage from './pages/DegreesPage';
import StudentPage from './pages/StudentPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/degrees/:grade/2023_24' element={<DegreesPage />} />
        <Route path='/degrees/:grade/2023_24/:studentId' element={<StudentPage />} />
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