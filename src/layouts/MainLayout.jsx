import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import SubHeader from '../components/header/SubHeader';
import Footer from '../components/footer/Footer';
import ScrollToTop from '../utils/ScrollToTop';
import UserHeader from '../components/user_header/UserHeader';
import LoadingSpinner from '../components/global/LoadingSpinner';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebaseInit';

const MainLayout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, () => {
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <SubHeader />
      <UserHeader />

      <div className="container-xl flex-grow-1 py-3">
        <div>{isLoading ? <LoadingSpinner /> : <Outlet />}</div>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default MainLayout;
