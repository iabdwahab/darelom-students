import React from 'react'
import PersonCard from './PersonCard'
import SectionHeading from '../global/SectionHeading'
import { API_URL } from '../../utils/global-variables'
import Button from '../global/Button'
import { Link, useNavigate } from 'react-router-dom'
import LinkButton from '../global/LinkButton'

const peopleList = [
  {
    id: 'anas_alsultan',
    name: 'الشيخ أنس السلطان',
    image: `/darelom-students-data/people/images/anas_alsultan.jpg`,
  },
  {
    id: 'ibrahim_almali',
    name: 'الشيخ إبراهيم المالي',
    image: `/darelom-students-data/people/images/ibrahim_almali.png`,
  },
  {
    id: 'adham_alasmi',
    name: 'الشيخ أدهم العَاسِمِي',
    image: `/darelom-students-data/people/images/adham_alasmi.jpg`,
  },
  {
    id: 'hisham_alkamel',
    name: 'الشيخ هشام الكامل',
    image: `/darelom-students-data/people/images/hisham_alkamel.jpg`,
  },
]

const Influencers = () => {
  return (
    <div className='my-2'>
      <SectionHeading>أشخاص مؤثرون</SectionHeading>
      <div className='mt-1 mb-2 row g-2'>
        {peopleList.map((person, index) => {
          return (
            <div className='col-lg-3 col-sm-6' key={index}>
              <PersonCard person={person} />
            </div>
          )
        })}
      </div>
      <LinkButton to="/influencers" text="عرض القائمة كاملة" />
    </div >
  )
}


export default Influencers