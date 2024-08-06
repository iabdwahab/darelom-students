import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='text-center border-bottom border- py-2' >
      <h1 className='fw-bold'>
        <Link to="/" className='text-dark'>
          منصة طلاب دار العلوم
        </Link>
      </h1>
      <p className='text-danger fw-medium'>[منصة غير تابعة لإدارة الكلية]</p>
    </header>
  )
}

export default Header