import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../supabase/initializing";
import LoadingSpinner from "../components/global/LoadingSpinner";
import SectionHeading from "../components/global/SectionHeading";

function StudentOverall() {
  const [studentData, setStudentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { student_id } = useParams();

  useEffect(() => {
    async function getSupabaseStudentData() {
      try {
        let { data, error } = await supabase
          .from('degrees')
          .select('*')
          .eq('student_id', student_id);

        if (error) {
          throw error;
        }

        // Group data by grade
        const groupedData = data.reduce((acc, item) => {
          const { grade } = item;
          if (!acc[grade]) {
            acc[grade] = [];
          }
          acc[grade].push(item);
          // Sort terms within the grade
          acc[grade].sort((a, b) => a.term - b.term);
          return acc;
        }, {});

        setStudentData(groupedData);
      } catch (error) {
        console.error("Error fetching student data:", error);
      } finally {
        setLoading(false);
      }
    }

    getSupabaseStudentData();
  }, [student_id]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (Object.keys(studentData).length === 0) {
    return <SectionHeading>لا توجد بيانات لهذا الطالب</SectionHeading>;
  }

  const firstRecord = studentData[Object.keys(studentData)[0]][0];

  return (
    <main className="container my-5">
      <div className="card shadow-sm mb-4">
        <div className="card-header bg-primary text-white">
          <h2 className="mb-0">بيانات الطالب</h2>
        </div>
        <div className="card-body">
          <p><strong>اسم الطالب:</strong> {firstRecord.name}.</p>
          <p><strong>الرقم التعريفي:</strong> {firstRecord.student_id}.</p>
        </div>
      </div>

      <div className="accordion" id="gradesAccordion">
        {Object.entries(studentData).map(([grade, terms], index) => (
          <div className="accordion-item" key={grade}>
            <h2 className="accordion-header" id={`heading${grade}`}>
              <button
                className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${grade}`}
                aria-expanded={index === 0}
                aria-controls={`collapse${grade}`}
              >
                الفرقة: {grade}
              </button>
            </h2>
            <div
              id={`collapse${grade}`}
              className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
              aria-labelledby={`heading${grade}`}
              data-bs-parent="#gradesAccordion"
            >
              <div className="accordion-body">
                {terms.map((termData) => (
                  <div key={termData.term} className="mb-4">
                    <h4>الفصل: {termData.term} - العام الدراسي: {termData.year}.</h4>
                    <p><strong>رقم الجلوس:</strong> {termData.seat_number}.</p>
                    <div className="table-responsive">
                      <table className="table table-bordered table-striped">
                        <thead className="table-light">
                          <tr>
                            <th>المادة</th>
                            <th>الدرجة</th>
                          </tr>
                        </thead>
                        <tbody>
                          {termData.degrees.map((degreeObj, index) => {
                            const subject = Object.keys(degreeObj)[0];
                            const degree = degreeObj[subject];
                            const degreeValue = parseInt(degree, 10);
                            const degreeClass = degreeValue >= 50 ? 'text-bg-success' : 'text-bg-danger';
                            return (
                              <tr key={index}>
                                <td>{subject}</td>
                                <td className={degreeClass}>{degree}</td>
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

export default StudentOverall;