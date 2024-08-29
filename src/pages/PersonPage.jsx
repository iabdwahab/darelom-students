import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import JsxParser from 'react-jsx-parser';
import LoadingSpinner from '../components/global/LoadingSpinner';
import SectionHeading from '../components/global/SectionHeading'
import { API_URL } from '../utils/global-variables';

const PersonPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [person, setPerson] = useState({});
  const { personId } = useParams();

  useEffect(() => {
    fetch(`${API_URL}/darelom-students-data/people/influencers.json`)
      .then(res => res.json())
      .then(data => {
        setPerson(data[personId]);
        setIsLoading(false);
      })
  }, [])

  return (
    <div className='row'>
      {
        isLoading ? <LoadingSpinner /> : <>
          <div className='col-lg-4'>
            <img src={`${API_URL}${person.image}`} alt="person" className='w-100' />
          </div>
          <div className='col-lg'>
            <SectionHeading>{person.name}</SectionHeading>
            <h2 className='fw-bold mb-2 mt-2'>تعريف:</h2>
            <p dangerouslySetInnerHTML={{ __html: person.description }} />
            <h3 className='fw-bold mb-2'>أبرز الأعمال:</h3>
            {
              person?.work?.map((work, index) => {
                return (
                  <div className='fw-bold my-1' key={index}>
                    <JsxParser components={{ Link }} jsx={`- ${work}`} />
                  </div>
                )
              })
            }
          </div>
        </>
      }
    </div>
  )
}

export default PersonPage