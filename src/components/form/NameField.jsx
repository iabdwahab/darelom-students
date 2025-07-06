const NameField = () => {
  return (
    <>
      <label htmlFor="name-input" className="form-label fw-bold">
        الاسم:
      </label>
      <input
        type="text"
        className="form-control"
        minLength={3}
        id="name-input"
        placeholder="فلان الفلاني"
        required
      />
      <div className="invalid-feedback">الاسم يجب أن يتكون من 3 أحرف على الأقل.</div>
    </>
  );
};

export default NameField;
