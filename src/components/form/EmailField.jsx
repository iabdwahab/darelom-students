const EmailField = () => {
  return (
    <>
      <label htmlFor="email-input" className="form-label fw-bold">
        البريد الإلكتروني:
      </label>
      <input
        type="email"
        className="form-control"
        pattern="^[^@]+@[^@]+\.[^@]{2,}$"
        id="email-input"
        placeholder="folan.alfolany@gmail.com"
        aria-describedby="emailHelp"
        required
      />
      <div className="invalid-feedback">يرجى إدخال بريد إلكتروني صحيح.</div>
    </>
  );
};

export default EmailField;
