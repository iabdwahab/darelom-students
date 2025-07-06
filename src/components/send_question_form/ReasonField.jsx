const ReasonField = () => {
  return (
    <>
      <label className="fw-bold fs-5 mb-1">التعليل:</label>
      <input
        type="text"
        className="form-control"
        placeholder="اكتب التعليل."
        id="answer-reason-input"
      />
    </>
  );
};

export default ReasonField;
