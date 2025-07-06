const PasswordField = () => {
  return (
    <>
      <label htmlFor="password-input" className="form-label fw-bold">
        كلمة المرور:
      </label>
      <input
        type="password"
        placeholder="_____"
        minLength="6"
        className="form-control"
        id="password-input"
        autoComplete="off"
        required
      />
      <div className="invalid-feedback">كلمة المرور يجب أن تتكون من 6 أحرف على الأقل.</div>
    </>
  );
};

export default PasswordField;
