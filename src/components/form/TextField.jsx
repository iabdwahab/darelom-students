const TextField = ({ label, placeholder, id, minLength = 3 }) => {
  return (
    <>
      <label htmlFor={id} className="form-label fw-bold">
        {label}:
      </label>
      <input
        type="text"
        className="form-control"
        minLength={minLength}
        id={id}
        placeholder={placeholder}
        required
      />
      <div className="invalid-feedback">
        {label} يجب أن يتكون من {minLength} على الأقل.
      </div>
    </>
  );
};

export default TextField;
