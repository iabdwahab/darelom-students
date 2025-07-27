import { useEffect, useState, useRef } from 'react';
import { supabase } from '../supabase/initializing';
import { calculateMaxAndTotal } from '../utils/studentOverall';
import { Link, useParams } from 'react-router-dom';
import { translate } from '../utils/translations';
import LoadingSpinner from '../components/global/LoadingSpinner';

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
  const [degreesData, setDegreesData] = useState<Record<number, any[]>>({});
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const { student_id } = useParams();
  const accordionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLoading(true);
    fetchData();
    // eslint-disable-next-line
  }, [student_id]);

  async function fetchData() {
    const { data, error } = await supabase
      .from('degrees')
      .select('*')
      .eq('student_id', student_id)
      .order('grade', { ascending: true })
      .order('term', { ascending: true });

    if (data && data.length) {
      setStudentInfo({
        name: data[0].name,
        totalDegree: calculateMaxAndTotal(data),
        firstGradeInPlatform: data[0].grade,
      });
      // Group by grade
      const grouped: Record<number, any[]> = {};
      data.forEach((rec: any) => {
        if (!grouped[rec.grade]) grouped[rec.grade] = [];
        grouped[rec.grade].push(rec);
      });
      setDegreesData(grouped);
      setNotFound(false);
    } else {
      setNotFound(true);
    }
    setLoading(false);
  }

  if (loading) {
    return <LoadingSpinner />;
  }

  if (notFound) {
    return (
      <main>
        <div className="alert alert-danger text-center my-5">
          عذرًا؛ لم يتم العثور على بيانات الطالب في قاعدة البيانات. يرجى التأكد من{' '}
          <button
            type="button"
            className="text-decoration-underline p-0 m-0 align-baseline"
            style={{
              color: 'rgb(110 168 254)',
              fontSize: '1em',
              verticalAlign: 'middle',
              background: 'none',
              border: 'none',
            }}
            data-bs-toggle="modal"
            data-bs-target="#idInfoModal"
            tabIndex={0}
            aria-label="ما هو الرقم التعريفي؟"
          >
            الرقم التعريفي
          </button>
          ، أو <Link to="/send_problem">أبلغنا عن مشكلة</Link>. يمكنك الذهاب إلى{' '}
          <Link to="/find_student">صفحة البحث عن الطالب</Link>.
        </div>
        {/* الرقم التعريفي Modal */}
        <div
          className="modal fade"
          id="idInfoModal"
          tabIndex={-1}
          aria-labelledby="idInfoModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="idInfoModalLabel">
                  ما هو الرقم التعريفي؟
                </h5>
              </div>
              <div className="modal-body text-end">
                الرقم التعريفي هو رقم جلوس أول فرقة التحق بها الطالب + العام الدراسي، وهذا يعني
                -افتراضًا-:
                <br />
                <br />
                - إذا كان الطالب بدأ من الفرقة الأولى عام 2024، وكان رقم جلوسه: "12345"؛ فإن رقمه
                التعريفي: "123452024".
                <br />
                <br />
                - إذا كان الطالب مُحَوَّلًا أو بدأ من فرقة أعلى، وكان رقم جلوسه: "34567"، وبدأ من
                العام الدراسي 2025؛ فإن رقمه التعريفي: "345672025".
                <br />
                <br />- الدرجات المتوفرة في المنصة تبدأ من العام الدراسي 2024، لذلك تم استخدام رقم
                جلوس هذا العام لجميع الفرق في إنشاء الرقم التعريفي، فإن كان الطالب في هذا العام في
                الفرقة الثالثة وكان رقم جلوسه "34567"؛ فإن رقمه التعريفي "345672024".
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger w-100" data-bs-dismiss="modal">
                  إغلاق
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (student_id === '201252024') {
    return <h2 className="text-center py-4">عذرًا؛ البيانات غير متاحة.</h2>;
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
      <div className="accordion mt-4" id="gradesAccordion" ref={accordionRef}>
        {Object.entries(degreesData).map(([grade, terms], idx) => (
          <div className="accordion-item" key={grade}>
            <h2 className="accordion-header" id={`heading${grade}`}>
              <button
                className={`accordion-button ${idx !== 0 ? 'collapsed' : ''}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${grade}`}
                aria-expanded={idx === 0}
                aria-controls={`collapse${grade}`}
              >
                {translate(`grade_${grade}`)}
              </button>
            </h2>
            <div
              id={`collapse${grade}`}
              className={`accordion-collapse collapse ${idx === 0 ? 'show' : ''}`}
              aria-labelledby={`heading${grade}`}
              data-bs-parent="#gradesAccordion"
            >
              <div className="accordion-body">
                {terms.map((termData: any) => (
                  <div key={termData.term} className="mb-4">
                    <div className="table-responsive border-secondary-subtle rounded-2 py-1 my-0 ">
                      <div className="mb-4">
                        <h4 className="mb-1 fs-5">
                          <span className="fw-bold text-primary">الفصل الدراسي: </span>
                          <span>{termData.term}.</span>
                        </h4>
                        <h4 className="mb-1 fs-5">
                          <span className="fw-bold text-primary">العام الدراسي: </span>
                          <span>{termData.year}.</span>
                        </h4>
                        <h4 className="mb-1 fs-5">
                          <span className="fw-bold text-primary">النتيجة: </span>
                          <span className="fs-5">
                            {termData.total_degree.total}{' '}
                            <span className="fs-6">({termData.total_degree.percentage}%)</span>.
                          </span>
                        </h4>
                        <h4 className="mb-1 fs-5">
                          <span className="fw-bold text-primary">المركز: </span>
                          <span className="fs-5">{termData.rank}#.</span>
                        </h4>
                      </div>
                      <table className="table table-striped border">
                        <thead>
                          <tr>
                            <th className="bg-dark text-white border-start py-2">المادة</th>
                            <th className="text-center bg-dark text-white py-2">الدرجة</th>
                          </tr>
                        </thead>
                        <tbody>
                          {termData.degrees.map((degreeObj: any, idx: number) => {
                            const subject = degreeObj.name || degreeObj.id;
                            let degree = degreeObj.degree;
                            if (typeof degree === 'string' && degree.startsWith('/')) {
                              degree = degree.slice(1);
                            }
                            const degreeValue = parseInt(degree, 10);
                            const degreeClass =
                              degreeValue >= 50 ? 'text-bg-success' : 'text-bg-danger';
                            return (
                              <tr key={idx}>
                                <td className="fw-bold">{subject}</td>
                                <td className={`${degreeClass} text-center`}>{degree}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
export default StudentOverallPage;
