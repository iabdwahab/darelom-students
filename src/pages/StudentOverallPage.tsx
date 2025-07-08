import { useEffect, useState } from 'react';
import { supabase } from '../supabase/initializing';
import { calculateMaxAndTotal } from '../utils/studentOverall';
import { useParams } from 'react-router-dom';
import { translate } from '../utils/translations';

function StudentOverallPage() {
  const [studentInfo, setStudentInfo] = useState<{
    name: string;
    totalDegree: { max: number; total: number };
    firstGradeInPlatform: number;
  }>({
    name: '',
    totalDegree: { max: 0, total: 0 },
    firstGradeInPlatform: 2024,
  });

  const { student_id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const { data, error } = await supabase
      .from('degrees')
      .select('*')
      .eq('student_id', student_id)
      .order('grade', { ascending: true })
      .order('term', { ascending: true });
    console.log(data);
    if (data && data.length) {
      setStudentInfo({
        name: data[0].name,
        totalDegree: calculateMaxAndTotal(data),
        firstGradeInPlatform: data[0].grade,
      });
    }
  }

  return (
    <main>
      <section className="d-grid gap-1">
        {studentInfo.firstGradeInPlatform > 1 && (
          <span className="fs-6 text-danger mb-3">
            * تم جمع البيانات بداية من {translate(`grade_${studentInfo.firstGradeInPlatform}`)}.
          </span>
        )}
        <h4 className="mb-1">
          <span className="fw-bold text-primary">الاسم: </span>
          <span>{studentInfo.name}.</span>
        </h4>
        <h4 className="mb-1">
          <span className="fw-bold text-primary">الرقم التعريفي: </span>
          <span>{student_id}.</span>
        </h4>
        <h4 className="mb-1">
          <span className="fw-bold text-primary">النتيجة الإجمالية: </span>
          <span className="fs-5">
            {studentInfo.totalDegree.total}/{studentInfo.totalDegree.max}{' '}
            <span className="fs-6">
              ({((studentInfo.totalDegree.total * 100) / studentInfo.totalDegree.max).toFixed(2)}
              %).
            </span>
          </span>
        </h4>
      </section>
    </main>
  );
}
export default StudentOverallPage;
