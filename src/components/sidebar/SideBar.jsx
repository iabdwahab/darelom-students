import React from 'react'
import { useLocation } from 'react-router-dom';
import SideBarDegrees from './SideBarDegrees';

const SideBar = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <aside className='py-1'>
      {/* <SideBarDegrees /> */}
      {pathname === '/' ? <SideBarDegrees /> : ''}
    </aside >
  )
}

export default SideBar