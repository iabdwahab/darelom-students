const StudentInfoLine = ({ title, value }) => {
  return (
    <h4 className="mb-1">
      <span className="fw-bold text-primary">{title}: </span>
      <span>{value}.</span>
    </h4>
  );
};

export default StudentInfoLine;
