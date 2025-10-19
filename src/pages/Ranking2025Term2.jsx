import { useParams } from 'react-router-dom';
import SectionHeading from '../components/global/SectionHeading';
import { translate } from '../utils/translations';
import StudentsCount from '../components/degrees_page/StudentsCount';
import TableHead from '../components/degrees_page/TableHead';
import { useEffect, useState } from 'react';
import { API_URL } from '../utils/global-variables';
import LoadingSpinner from '../components/global/LoadingSpinner';

function Ranking2025Term2() {
  const { grade } = useParams();
  const [rankingList, setRankingList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(
          `${API_URL}/darelom-students-data/degrees/temp/${grade}_term_2.json`,
          // `./temp/${grade}_term_2.json`,
        );
        const data = await res.json();

        console.log(data);
        setRankingList(data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    }

    getData();
  }, [grade]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return (
      <main>
        <h2 className="text-center py-5">عذرًا؛ يبدو أن هناك خطأ. يرجى مراجعة رابط الصفحة.</h2>
      </main>
    );
  }

  return (
    <main>
      <SectionHeading fontSize={3} py={3}>
        ترتيب نتائج {translate(grade)} - الفصل الدراسي الثاني - 2025.
      </SectionHeading>
      <StudentsCount studentsCount={rankingList.length} />

      <div className="table-responsive border mt-2">
        <table className="table table-striped table-bordered">
          <TableHead />
          <tbody>
            {rankingList.map((student) => {
              const isHided = student.student_name === 'مريم سمير أحمد عبدالصمد';
              console.log(isHided && student.student_seatnumber);
              return (
                <tr key={student.student_seatnumber} className="degree_tr-linked">
                  <th scope="row" className="text-center">
                    {student.rank}
                  </th>
                  <td className="text-center">{isHided ? 'محجوب' : student.student_seatnumber}</td>
                  <td style={{ whiteSpace: 'nowrap' }}>
                    {isHided ? 'محجوب' : student.student_name}
                  </td>
                  <td className="text-center">{student.total_degree}</td>
                  <td className="text-center">%{(student.total_degree * 100 / 800).toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {isLoading && <LoadingSpinner />}
      </div>
    </main>
  );
}
export default Ranking2025Term2;
