function DegreesAnalyticsPage() {
  const data = [
    {
      subject_name: 'قاعة البحث والمكتبة (النحو واللغة)',
      subject_students: {
        subject_students_count: 435,
        subject_succeed_students_count: 403,
        subject_succeed_students_percentage: '92.64',
      },
      subject_degree: {
        total_degree: 31282,
        average_degree: '71.91',
      },
    },
    {
      subject_name: 'ريادة الأعمال',
      subject_students: {
        subject_students_count: 435,
        subject_succeed_students_count: 425,
        subject_succeed_students_percentage: '97.70',
      },
      subject_degree: {
        total_degree: 31332,
        average_degree: '72.03',
      },
    },
    {
      subject_name: 'النحو2',
      subject_students: {
        subject_students_count: 435,
        subject_succeed_students_count: 353,
        subject_succeed_students_percentage: '81.15',
      },
      subject_degree: {
        total_degree: 25644,
        average_degree: '58.95',
      },
    },
    {
      subject_name: 'تدربيات لغوية',
      subject_students: {
        subject_students_count: 435,
        subject_succeed_students_count: 412,
        subject_succeed_students_percentage: '94.71',
      },
      subject_degree: {
        total_degree: 34904,
        average_degree: '80.24',
      },
    },
    {
      subject_name: 'الأدب فى عصر صدر الإسلام وبنى أمية',
      subject_students: {
        subject_students_count: 435,
        subject_succeed_students_count: 357,
        subject_succeed_students_percentage: '82.07',
      },
      subject_degree: {
        total_degree: 25122,
        average_degree: '57.75',
      },
    },
    {
      subject_name: 'اللغات السامية والشرقية',
      subject_students: {
        subject_students_count: 435,
        subject_succeed_students_count: 376,
        subject_succeed_students_percentage: '86.44',
      },
      subject_degree: {
        total_degree: 28866,
        average_degree: '66.36',
      },
    },
    {
      subject_name: 'التاريخ الأموى والعباسى',
      subject_students: {
        subject_students_count: 435,
        subject_succeed_students_count: 406,
        subject_succeed_students_percentage: '93.33',
      },
      subject_degree: {
        total_degree: 32239,
        average_degree: '74.11',
      },
    },
    {
      subject_name: 'النظم والأسلوبية',
      subject_students: {
        subject_students_count: 435,
        subject_succeed_students_count: 366,
        subject_succeed_students_percentage: '84.14',
      },
      subject_degree: {
        total_degree: 26398,
        average_degree: '60.69',
      },
    },
    {
      subject_name: 'العقيدة والمنطق ومناهج البحث',
      subject_students: {
        subject_students_count: 435,
        subject_succeed_students_count: 363,
        subject_succeed_students_percentage: '83.45',
      },
      subject_degree: {
        total_degree: 24676,
        average_degree: '56.73',
      },
    },
    {
      subject_name: 'القران الكريم والأحول الشخصية',
      subject_students: {
        subject_students_count: 435,
        subject_succeed_students_count: 396,
        subject_succeed_students_percentage: '91.03',
      },
      subject_degree: {
        total_degree: 28663,
        average_degree: '65.89',
      },
    },
    {
      subject_name: 'نصوص من الأدب الإسلامى والأموى',
      subject_students: {
        subject_students_count: 435,
        subject_succeed_students_count: 374,
        subject_succeed_students_percentage: '85.98',
      },
      subject_degree: {
        total_degree: 25702,
        average_degree: '59.09',
      },
    },
    {
      subject_name: 'المعاجم وعلم الأصوات',
      subject_students: {
        subject_students_count: 435,
        subject_succeed_students_count: 401,
        subject_succeed_students_percentage: '92.18',
      },
      subject_degree: {
        total_degree: 31956,
        average_degree: '73.46',
      },
    },
    {
      subject_name: 'بلاغة القرآن',
      subject_students: {
        subject_students_count: 435,
        subject_succeed_students_count: 381,
        subject_succeed_students_percentage: '87.59',
      },
      subject_degree: {
        total_degree: 29567,
        average_degree: '67.97',
      },
    },
    {
      subject_name: 'الصرف والعروض1',
      subject_students: {
        subject_students_count: 435,
        subject_succeed_students_count: 358,
        subject_succeed_students_percentage: '82.30',
      },
      subject_degree: {
        total_degree: 26885,
        average_degree: '61.80',
      },
    },
    {
      subject_name: 'اللغة الأوربية',
      subject_students: {
        subject_students_count: 435,
        subject_succeed_students_count: 378,
        subject_succeed_students_percentage: '86.90',
      },
      subject_degree: {
        total_degree: 27527,
        average_degree: '63.28',
      },
    },
  ];

  return (
    <main className="container-fluid py-5" dir="rtl">
      {/* Page Title */}
      <h2
        className="text-center mx-auto border-bottom py-3 px-5 mb-5"
        style={{ width: 'fit-content' }}
      >
        تحليل نتائج الطلاب للعام الدراسي 2025
      </h2>

      {/* Subject Statistics */}
      <section className="py-5  border rounded shadow-sm">
        <h2 className="text-center mb-4">📊 إحصائيات المواد - الفرقة الأولى</h2>

        <div className="row g-4">
          {data.map((subject, idx) => {
            const percentage = parseFloat(
              subject.subject_students.subject_succeed_students_percentage,
            );

            let progressClass = 'bg-danger';
            if (percentage >= 85) progressClass = 'bg-success';
            else if (percentage >= 70) progressClass = 'bg-info';

            return (
              <div className="col-md-6 col-lg-4" key={idx}>
                <div className="card shadow-sm h-100 subject-card">
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title fw-bold mb-3">{subject.subject_name}</h5>

                    <table className="table table-sm table-borderless mb-3">
                      <tbody>
                        <tr>
                          <td>📌 عدد الطلاب:</td>
                          <td className="text-end fw-bold">
                            {subject.subject_students.subject_students_count}
                          </td>
                        </tr>
                        <tr>
                          <td>✅ الناجحون:</td>
                          <td className="text-end fw-bold text-success">
                            {subject.subject_students.subject_succeed_students_count}
                          </td>
                        </tr>
                        <tr>
                          <td>📈 نسبة الناجحين:</td>
                          <td className="text-end fw-bold">{percentage}%</td>
                        </tr>
                        <tr>
                          <td>⚖️ متوسط الدرجات:</td>
                          <td className="text-end fw-bold">
                            {subject.subject_degree.average_degree}
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <div className="progress" style={{ height: '20px' }}>
                      <div
                        className={`progress-bar ${progressClass}`}
                        role="progressbar"
                        style={{ width: `${percentage}%` }}
                        aria-valuenow={percentage}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        {percentage}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Hover effect */}
      <style>{`
        .subject-card:hover {
          transform: translateY(-5px);
          transition: 0.3s ease;
        }
      `}</style>
    </main>
  );
}
export default DegreesAnalyticsPage;
