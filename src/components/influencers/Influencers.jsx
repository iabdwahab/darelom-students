import React from 'react'
import PersonCard from './PersonCard'
import SectionHeading from '../global/SectionHeading'
import { API_URL } from '../../utils/global-variables'
const peopleList = [
  {
    id: 'anas_alsultan',
    name: 'الشيخ أنس السلطان',
    image: `${API_URL}/darelom-students-data/people/images/anas_alsultan.jpg`,
  },
  {
    id: 'ibrahim_almali',
    name: 'الشيخ إبراهيم المالي',
    image: `${API_URL}/darelom-students-data/people/images/ibrahim_almali.png`,
  },
  {
    id: 'adham_alasmi',
    name: 'الشيخ أدهم العَاسِمِي',
    image: `${API_URL}/darelom-students-data/people/images/adham_alasmi.jpg`,
  },
  {
    id: 'hisham_alkamel',
    name: 'الشيخ هشام الكامل',
    image: `${API_URL}/darelom-students-data/people/images/hisham_alkamel.jpg`,
  },
]

const Influencers = () => {

  return (
    <div className='my-3'>
      <SectionHeading>أشخاص مؤثرون</SectionHeading>
      <div className='my-1 row g-2'>
        {peopleList.map((person, index) => {
          return (
            <div className='col-lg-3 col-sm-6' key={index}>
              <PersonCard person={person} />
            </div>
          )
        })}
      </div>
    </div >
  )
}


export default Influencers