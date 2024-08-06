import React from 'react'
import SideBarTableBodyTr from './SideBarTableBodyTr'

const SideBarDegreesTableBody = ({ gradeDegree }) => {
  return (
    <tbody>
      {gradeDegree.list.slice(0, 3).map((student, index) => {
        return (
          <SideBarTableBodyTr key={index} index={index} student={student} grade={gradeDegree.grade} />
        )
      })
      }
    </tbody>
  )
}

export default SideBarDegreesTableBody