import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase/initializing';
import SectionHeading from '../components/global/SectionHeading';

function FindStudents() {
  const [studentId, setStudentId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!/^\d{9}$/.test(studentId)) {
      setError('الرقم الجامعي يجب أن يتكون من 9 أرقام بالضبط.');
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
        setError('لم يتم العثور على الطالب. يرجى التأكد من الرقم الجامعي والمحاولة مرة أخرى.');
      }
    } catch (error) {
      setError('حدث خطأ أثناء البحث. يرجى المحاولة مرة أخرى.');
      console.error("Error searching for student:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <SectionHeading>البحث عن بيانات طالب</SectionHeading>
              <form onSubmit={handleSearch}>
                <div className="my-3">
                  <label htmlFor="studentId" className="form-label">الرقم التعريفي:</label>
                  <input
                    type="number"
                    className="form-control"
                    id="studentId"
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
      </div>
    </main>
  );
}

export default FindStudents;