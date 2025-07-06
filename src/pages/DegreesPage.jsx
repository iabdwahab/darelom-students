import { useEffect, useRef, useState } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { firebaseDB } from '../utils/firebaseInit';
import { collection, limit, orderBy, query } from 'firebase/firestore';
import {
  getDegreesGithub,
  getDegreesFirestore,
  getStudentsCount,
} from '../components/degrees_page/getData';
import { dbSource } from '../utils/global-variables';
import { translate } from '../utils/translations';
import LoadingSpinner from '../components/global/LoadingSpinner';
import TableBodyTR from '../components/degrees_page/TableBodyTR';
import TableHead from '../components/degrees_page/TableHead';
import SectionHeading from '../components/global/SectionHeading';
import StudentsCount from '../components/degrees_page/StudentsCount';
import LoadMoreButton from '../components/degrees_page/LoadMoreButton';
import ResultsEnded from '../components/degrees_page/ResultsEnded';
import IDSearch from '../components/degrees_page/IDSearch';
import { handleSortingMethod } from '../utils/Degrees';

const DegreesPage = () => {
  const [degrees, setDegrees] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const { grade, year } = useParams();
  const [studentsCount, setStudentsCount] = useState(null);
  const [lastStudent, setLastStudent] = useState(null);
  const [lastPage, setLastPage] = useState(false);
  const [sortMethod, setSortMethod] = useState('normal');
  const selectElRef = useRef(null);
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const degreesCollection = collection(firebaseDB, `${grade}/degrees/${year}`);

  // Data Retrieved from Firestore
  async function setDataAndHideLoaderFirestore(q) {
    const studentsCount = await getStudentsCount(degreesCollection);
    const { degreesData, lastStudentData } = await getDegreesFirestore(q);

    setStudentsCount(studentsCount);
    setDegrees([...degrees, ...degreesData]);
    setLastStudent(lastStudentData);

    // If Degrees Data Ended
    if (lastStudentData.data().rank === studentsCount) {
      setLastPage(true);
    }

    setIsDataLoading(false);
  }

  // Data Retrieved from GitHub
  async function setDataAndHideLoaderGithub() {
    const data = await getDegreesGithub(grade, year);

    setDegrees(data.degrees);
    setStudentsCount(data.degrees.length);
    setIsDataLoading(false);
    setLastPage(true);
  }

  function handleSortMehtodChange(e) {
    setSortMethod(e.target.value);
    handleSortingMethod(degrees, e.target.value);
    setSearchParams({ sortMethod: e.target.value });
  }

  useEffect(() => {
    if (dbSource == 'github') {
      setDataAndHideLoaderGithub();

      if (selectElRef.current) {
        selectElRef.current.value = 'normal';
      }
    } else {
      setDataAndHideLoaderFirestore(query(degreesCollection, orderBy('rank', 'asc'), limit(40)));
    }
  }, [pathname]);

  handleSortingMethod(degrees, searchParams.get('sortMethod') || 'normal');

  return (
    <div>
      <SectionHeading fontSize={3} py={3}>
        ترتيب نتائج {translate(grade)} {year.split('_').join('/')}
      </SectionHeading>
      <StudentsCount studentsCount={studentsCount} />
      <IDSearch />

      <div className="d-flex flex-column gap-2 mb-4">
        <h5>طريقة الترتيب:</h5>
        <select
          ref={selectElRef}
          onChange={handleSortMehtodChange}
          className="form-select w-100"
          aria-label="Default select example"
          style={{ width: '100%', maxWidth: '400px' }}
        >
          <option value="normal" defaultValue>
            الرتيب العادي
          </option>
          <option value="duplicated">باعتبار المركز المكرر</option>
        </select>
      </div>

      <div className="table-responsive border">
        <table className="table table-striped table-bordered">
          <TableHead />
          <tbody>
            {degrees.map((student) => {
              return <TableBodyTR key={student.id} student={student} grade={grade} year={year} />;
            })}
          </tbody>
        </table>
        {isDataLoading && <LoadingSpinner />}
      </div>

      <div className="mt-3 mb-1">
        {lastPage ? (
          <ResultsEnded />
        ) : (
          <LoadMoreButton
            degreesCollection={degreesCollection}
            lastStudent={lastStudent}
            setDataAndHideLoaderFirestore={setDataAndHideLoaderFirestore}
          />
        )}
      </div>
    </div>
  );
};

export default DegreesPage;
