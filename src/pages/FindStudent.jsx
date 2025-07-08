import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase/initializing';
import SectionHeading from '../components/global/SectionHeading';

function FindStudent() {
  const [studentId, setStudentId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!/^\d{9}$/.test(studentId)) {
      setError('الرقم التعريفي يجب أن يتكون من 9 أرقام بالضبط.');
      setLoading(false);
      return;
    }

    try {
      const studentIdAsNumber = parseInt(studentId, 10);

      const { data, error } = await supabase
        .from('degrees')
        .select('student_id')
        .eq('student_id', studentIdAsNumber)
        .limit(1);

      if (error) {
        throw error;
      }

      if (data && data.length > 0) {
        navigate(`/students/${studentIdAsNumber}`);
      } else {
        setError('لم يتم العثور على الطالب. يرجى التأكد من الرقم التعريفي والمحاولة مرة أخرى.');
      }
    } catch (error) {
      setError('حدث خطأ أثناء البحث. يرجى المحاولة مرة أخرى.');
      console.error("Error searching for student:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container">
      <div className="row justify-content-center">
        <div>
          <div className=" shadow-sm">
            <div className="card-body">
              <SectionHeading>البحث عن بيانات الطالب</SectionHeading>
              <form onSubmit={handleSearch} className='col-md-6 mx-auto'>
                <div className="my-3">
                  <label htmlFor="studentId" className="form-label d-flex align-items-center gap-1">
                    الرقم التعريفي:
                    <button
                      type="button"
                      className="btn btn-sm"
                      style={{ fontSize: '1.2em', verticalAlign: 'middle', padding: 0, lineHeight: 1 }}
                      data-bs-toggle="modal"
                      data-bs-target="#idInfoModal"
                      tabIndex={-1}
                      aria-label="ما هو الرقم التعريفي؟"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6" style={{ width: '25px', height: '25px', transform: 'scaleX(-1)' }}>
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                      </svg>

                    </button>
                  </label>

                  {/* Modal for ID info */}
                  <div className="modal fade" id="idInfoModal" tabIndex={-1} aria-labelledby="idInfoModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="idInfoModalLabel">ما هو الرقم التعريفي؟</h5>
                        </div>
                        <div className="modal-body">
                          الرقم التعريفي هو رقم جلوس أول فرقة التحق بها الطالب + العام الدراسي، وهذا يعني -افتراضًا-:
                          <br /><br />
                          - إذا كان الطالب بدأ من الفرقة الأولى عام 2024، وكان رقم جلوسه: "12345"؛ فإن رقمه التعريفي: "123452024".
                          <br /><br />
                          - إذا كان الطالب مُحَوَّلًا أو بدأ من فرقة أعلى، وكان رقم جلوسه: "34567"، وبدأ من العام الدراسي 2025؛ فإن رقمه التعريفي: "345672025".
                          <br /><br />
                          - الدرجات المتوفرة في المنصة تبدأ من العام الدراسي 2024، لذلك تم استخدام رقم جلوس هذا العام لجميع الفرق في إنشاء الرقم التعريفي، فإن كان الطالب في هذا العام في الفرقة الثالثة وكان رقم جلوسه "34567"؛ فإن رقمه التعريفي "345672024".
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-danger w-100" data-bs-dismiss="modal">إغلاق</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <input
                    type="number"
                    className="form-control"
                    id="studentId"
                    placeholder='123456789'
                    value={studentId}
                    onChange={(e) => {
                      if (e.target.value.length <= 9) {
                        setStudentId(e.target.value);
                      }
                    }}
                    required
                  />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      <span className="visually-hidden">Loading...</span>
                    </>
                  ) : (
                    'بحث'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div >
    </main >
  );
}

export default FindStudent;