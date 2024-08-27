import React, { useState } from 'react'
const peopleList = [
  {
    id: 'anas_alsultan',
    name: 'الشيخ أنس السلطان',
    image: 'https://iabdwahab.me/darelom-students-data/people/images/anas_alsultan.jpg',
  },
  {
    id: 'ibrahim_almali',
    name: 'الشيخ إبراهيم المالي',
    image: 'https://iabdwahab.me/darelom-students-data/people/images/ibrahim_almali.png',
  },
  {
    id: 'adham_alasmi',
    name: 'الشيخ أدهم العاسمي',
    image: 'https://iabdwahab.me/darelom-students-data/people/images/adham_alasmi.jpg',
  },
  {
    id: 'hisham_alkamel',
    name: 'الشيخ هشام الكامل',
    image: 'https://iabdwahab.me/darelom-students-data/people/images/hisham_alkamel.jpg',
  },
]

const People = () => {

  return (
    <div className='my-3'>
      <h2 className='fs-4 p-2 fw-medium bg-dark text-center text-light'>أشخاص مؤثرون</h2>
      <div className='my-1 row g-2'>
        {peopleList.map((person, index) => {
          return (
            <div className='col-lg-3 col-sm-6' key={index}>
              <Card details={person} />
            </div>
          )
        })}
      </div>
    </div >
  )
}

function Card({ details }) {
  const { name, image } = details;
  return (
    <>
      <div className="card">
        <img src={image} className="card-img-top w-100" alt={name} style={{ height: '280px', objectFit: 'cover' }} />
        <div className="card-body">
          <h5 className="card-title fw-bold mb-3">{name}</h5>
          <a href={`/#/person/${details.id}`} className="btn btn-primary w-100">عرض التفاصيل</a>
        </div>
      </div>
    </>
  )
}

export default People