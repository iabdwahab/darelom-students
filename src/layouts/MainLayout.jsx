import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import SubHeader from '../components/header/SubHeader'
import Footer from '../components/footer/Footer'
import ScrollToTop from '../utils/ScrollToTop'

const MainLayout = () => {

  return (
    <div className='d-flex flex-column min-vh-100'>
      <Header />
      <SubHeader />
      <div className='container-xl flex-grow-1 py-3'>
        <div><Outlet /></div>
      </div>
      <Footer />
      <ScrollToTop />
    </div >
  )
}

export default MainLayout