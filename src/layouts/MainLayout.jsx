import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/header/Header'
import SubHeader from '../components/header/SubHeader'
import SideBar from '../components/sidebar/SideBar'
import Footer from '../components/footer/Footer'
import ScrollToTop from '../utils/ScrollToTop'

const MainLayout = () => {
  const { pathname } = useLocation();

  return (
    <div className='d-flex flex-column min-vh-100'>
      <Header />
      <SubHeader />
      <div className='container-xl flex-grow-1'>
        <div className='row py-3'>
          <div>
            <Outlet />
          </div>
          <div>
            {
              pathname === '/' ? <div>
                <SideBar />
              </div> : ''
            }
          </div>

        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </div >
  )
}

export default MainLayout