const StudentsCount = ({ studentsCount }) => {
  const count = <span className="fw-bold">{studentsCount || 'غير محدد'}</span>;

  return <h3 className="py-2 fs-4">عدد الطلاب: {count}.</h3>;
};

export default StudentsCount;
