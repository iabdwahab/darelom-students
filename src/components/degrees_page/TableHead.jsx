import React from 'react'

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th scope="col" className='text-center'>#</th>
        <th scope='col' className='text-center'>رقم الجلوس</th>
        <th scope='col'>الاسم</th>
        <th scope='col' className='text-center'>الإجمالي</th>
        <th scope='col' className='text-center'>النسبة</th>
      </tr>
    </thead>
  )
}

export default TableHead