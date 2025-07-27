import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { supabase } from '../supabase/initializing';
import LoadingSpinner from '../components/global/LoadingSpinner';

import TableHead from '../components/degrees_page/TableHead';
import { StudentDegreeInterface } from '../types/supabaseStudent';
import SectionHeading from '../components/global/SectionHeading';
import StudentsCount from '../components/degrees_page/StudentsCount';
import { translate } from '../utils/translations';

function RankingByTermPage() {
  const { grade, term, year } = useParams();
  const [rankingList, setRankingList] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    async function getRankingSupabase(grade: string, term: string, year: string) {
      grade = grade.split('_')[1];
      term = term.split('_')[1];

      try {
        setIsLoading(true);
        setIsError(false);

        const { data, error } = await supabase
          .from('degrees')
          .select('student_id, name, seat_number, total_degree, rank')
          .eq('grade', grade)
          .eq('term', term)
          .eq('year', year)
          .order('rank', { ascending: true });

        if (!data?.length) {
          setIsError(true);
        }

        setRankingList(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
    }

    if (grade && term && year) {
      getRankingSupabase(grade, term, year);
    }
  }, [pathname]);

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
        ترتيب نتائج {translate(grade)} - {translate(term)} - {year?.split('_').join('/')}.
      </SectionHeading>
      <StudentsCount studentsCount={rankingList.length} />

      <div className="table-responsive border mt-2">
        <table className="table table-striped table-bordered">
          <TableHead />
          <tbody>
            {rankingList.map((student: StudentDegreeInterface) => {
              const isHided = student.name === 'مريم سمير أحمد عبدالصمد';
              console.log(isHided && student.seat_number);
              return (
                <tr
                  key={student.seat_number}
                  className="degree_tr-linked"
                  onClick={() => {
                    !isHided && navigate(`/students/${student.student_id}`);
                  }}
                >
                  <th scope="row" className="text-center">
                    {student.rank}
                  </th>
                  <td className="text-center">{isHided ? 'محجوب' : student.seat_number}</td>
                  <td style={{ whiteSpace: 'nowrap' }}>{isHided ? 'محجوب' : student.name}</td>
                  <td className="text-center">{student.total_degree.total}</td>
                  <td className="text-center">%{student.total_degree.percentage}</td>
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
export default RankingByTermPage;
