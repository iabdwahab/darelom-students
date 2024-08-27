import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import JsxParser from 'react-jsx-parser';
import LoadingSpinner from '../components/LoadingSpinner';


const Person = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [person, setPerson] = useState({});
  const { personId } = useParams();


  useEffect(() => {
    fetch('https://iabdwahab.me/darelom-students-data/people/influencers.json')
      .then(res => res.json())
      .then(data => {
        setPerson(data[personId]);
        setIsLoading(false
        );
      })
  }, [])

  return (
    <div className='row'>
      {
        isLoading ? <LoadingSpinner /> : <>
          <div className='col-lg-4'>
            <img src={person.image} alt="person" className='w-100' />
          </div>
          <div className='col-lg'>
            <h2 className='text-center bg-dark text-light p-2 mb-2 mt-2 mt-lg-0'>{person.name}</h2>
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

export default Person