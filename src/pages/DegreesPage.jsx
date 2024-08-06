import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import DegreesPageTableHeadTr from '../components/sub_components/DegreesPageTableHeadTr';
import LoadingSpinner from '../components/LoadingSpinner';
import DegreesPageTableBodyTr from '../components/sub_components/DegreesPageTableBodyTr';
import { calculateTotal } from '../utils/Degrees';

const DegreesPage = () => {
  const [degrees, setDegrees] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const { grade } = useParams();

  useEffect(() => {
    fetch(`/src/data/degrees/2023_24/degrees_${grade}.json`)
      .then(res => res.json())
      .then(data => {

        data.degrees.forEach(student => {
          student.total = 0;

          calculateTotal(student, grade);
        });

        data.degrees.sort((a, b) => {
          return b.total - a.total;
        });

        setDegrees(data.degrees);
        setIsDataLoading(false);
      })
  }, []);

  return (
    <div className='table-responsive'>
      <table className="table table-striped">
        <thead>
          <DegreesPageTableHeadTr />
        </thead>

        <tbody>
          {degrees.map((student, index) => {
            return (
              <DegreesPageTableBodyTr key={index} index={index} student={student} grade={grade} />
            )
          })}
        </tbody>
      </table>
      {isDataLoading ? <LoadingSpinner /> : null}
    </div>
  )
}



export default DegreesPage