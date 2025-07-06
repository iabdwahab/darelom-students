import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../global/LoadingSpinner';
import SectionHeading from '../global/SectionHeading';
import TableHead from './TableHead';
import { getTopStudentsFirestore, getTopStudentsGithub } from './getTopStudents';
import { dbSource } from '../../utils/global-variables';

const TopStudents = () => {
  const [degrees, setDegrees] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);

  useEffect(() => {
    async function setDataAndHideLoader() {
      let topStudents;

      if (dbSource == 'github') {
        topStudents = await getTopStudentsGithub();
      } else {
        topStudents = await getTopStudentsFirestore();
      }

      setDegrees(topStudents);
      setIsDataLoading(false);
    }

    setDataAndHideLoader();
  }, []);

  return (
    <div className="top-students">
      <SectionHeading>أوائل الفرق</SectionHeading>
      {isDataLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="row g-2 mt-1">
          {degrees.map((gradeDegree, index) => {
            return (
              <div key={index} className="border-secondary-subtle rounded-2 py-1 my-0 col-lg-6">
                <h3 className="fs-5 bg-dark text-light p-2 my-0">{gradeDegree.grade_ar_name}</h3>
                <table className="table table-striped border">
                  <TableHead />
                  <TableBody gradeDegree={gradeDegree} />
                </table>
                <Link
                  to={`degrees/${gradeDegree.grade}/2024_25`}
                  className="d-block my-2 btn btn-primary fw-bold"
                >
                  عرض القائمة كاملة
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

function TableBody({ gradeDegree }) {
  return (
    <tbody>
      {gradeDegree.list.map((student, index) => {
        return <TableBodyTr key={index} student={student} grade={gradeDegree.grade} />;
      })}
    </tbody>
  );
}

function TableBodyTr({ student, grade }) {
  const navigate = useNavigate();

  return (
    <tr
      className="degree_tr-linked"
      onClick={() => navigate(`/degrees/${grade}/2024_25/${student.id}`)}
    >
      <th scope="row">{student.rank}</th>
      <td>{student.name}</td>
      <td className="text-center">%{student.total_percentage}</td>
    </tr>
  );
}

export default TopStudents;
