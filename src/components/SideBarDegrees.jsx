import React, { useState, useEffect } from 'react'
import SideBarTableBodyTr from './sub_components/sidebar_degrees/SideBarTableBodyTr';
import { Link } from 'react-router-dom';
import SideBarDegreesTableHead from './sub_components/sidebar_degrees/SideBarDegreesTableHead';
import SideBarDegreesTableBody from './sub_components/sidebar_degrees/SideBarDegreesTableBody';

const SideBarDegrees = () => {
  const [degrees, setDegrees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5173/src/data/top_degrees_2023_24.json")
      .then(res => res.json())
      .then(data => {
        setDegrees(data);
      })
  }, [])

  return (
    <>
      <h2 className='fs-4 p-2 fw-medium bg-primary text-center text-light rounded-2'>أوائل الفرق</h2>
      {
        degrees.map((gradeDegree) => {
          return (
            <div key={gradeDegree.id}>
              <h3 className='fs-5 bg-success text-light p-2 rounded-2 my-2'>{gradeDegree.grade_ar_name}</h3>
              <table className="table table-striped">
                <SideBarDegreesTableHead />
                <SideBarDegreesTableBody gradeDegree={gradeDegree} />
              </table>
              <Link to={`degrees/grade_${gradeDegree.id}/2023_24`} className='d-block my-2'>القائمة كاملة</Link>
            </div>
          )
        })
      }
    </>
  )
}

export default SideBarDegrees