import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
const MainLayout = () => {

  return (
    <>
      <Header />
      <div className='container-xl'>
        <div className='row py-3'>
          <div className='col'>
            <Outlet />
          </div>
          <div className='col-md-4'>
            <SideBar />
          </div>
        </div>
      </div>
    </>
  )
}

export default MainLayout