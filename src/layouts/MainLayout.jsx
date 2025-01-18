import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import SubHeader from '../components/header/SubHeader'
import Footer from '../components/footer/Footer'
import ScrollToTop from '../utils/ScrollToTop'
import UserHeader from '../components/user_header/UserHeader'
import LoadingSpinner from '../components/global/LoadingSpinner'
import { onAuthStateChanged } from 'firebase/auth'
import { firebaseAuth } from '../utils/firebaseInit'

const MainLayout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    onAuthStateChanged(firebaseAuth, user => {
      setIsLoading(false);
    })

  }, []);

  return (
    <div className='d-flex flex-column min-vh-100'>
      <Header />
      <SubHeader />
      <div className='subheader border-top bg-dark text-light fs-6' style={{ padding: '11px 0' }}>
        <div className='container-xl text-center'>
          يمكنكم الآن الاطلاع على: <Link to='exams_schedule/schedule'>جدول الامتحانات.</Link>
        </div>
      </div>
      <UserHeader />

      <div className='container-xl flex-grow-1 py-3'>
        <div>
          {
            isLoading ? <LoadingSpinner /> :
              <Outlet />
          }
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </div >
  )
}

export default MainLayout