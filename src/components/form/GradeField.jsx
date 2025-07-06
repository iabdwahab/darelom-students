const GradeField = () => {
  return (
    <>
      <label className="fw-bold">اختر فرقتك:</label>
      <select className="form-select mt-2" id="grade-input" required>
        <option value="grade_1">الفرقة الأولى</option>
        <option value="grade_2">الفرقة الثانية</option>
        <option value="grade_3">الفرقة الثالثة</option>
        <option value="grade_4">الفرقة الرابعة</option>
      </select>
      <div className="invalid-feedback">يجب تحديد فرقتك.</div>
    </>
  );
};

export default GradeField;
