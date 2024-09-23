import React, { useEffect, useState } from 'react'
import { API_URL } from '../utils/global-variables'
import PersonCard from '../components/person_card/PersonCard'
import LoadingSpinner from '../components/global/LoadingSpinner'
import SectionHeading from '../components/global/SectionHeading'

const InfluencersPage = () => {
  const [influencers, setInfluencers] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    fetch(`${API_URL}/darelom-students-data/people/influencers.json`)
      .then(res => res.json())
      .then(data => {
        setInfluencers(data);
        setIsLoading(false);
      })

  }, []);

  if (Object.keys(influencers).length) {
    return (
      <>
        <SectionHeading>أشخاص مؤثرون</SectionHeading>
        {isLoading ? <LoadingSpinner /> :
          <div className='my-1 row g-2'>
            {Object.values(influencers).map((influencer, index) => {
              return (
                <div key={index} className='col-lg-3 col-sm-6'>
                  <PersonCard person={influencer} />
                </div>
              )
            })}
          </div>
        }
      </>
    )
  }
}

export default InfluencersPage