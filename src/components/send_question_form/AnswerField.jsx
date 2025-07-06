const AnswerField = () => {
  return (
    <>
      <label className="fw-bold fs-5 mb-1">رقم الاختيار الصحيح:</label>
      <select className="form-control" id="options-input">
        <option value="0">1</option>
        <option value="1">2</option>
        <option value="2">3</option>
        <option value="3">4</option>
      </select>
    </>
  );
};

export default AnswerField;
