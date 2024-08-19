import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import SubHeader from '../components/SubHeader'

const MainLayout = () => {
  const { pathname } = useLocation();

  return (
    <div className='d-flex flex-column min-vh-100'>
      <Header />
      <SubHeader />
      <div className='container-xl flex-grow-1'>
        <div className='row py-3'>
          <div className='col'>
            <Outlet />
          </div>
          {
            pathname === '/' ? <div className='col-lg-4'>
              <SideBar />
            </div> : ''
          }

        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </div >
  )
}

export default MainLayout