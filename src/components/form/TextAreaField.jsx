const TextAreaField = ({
  label,
  placeholder,
  invalidFeedback,
  minLength = 10,
  rows = 4,
  fontSize = 5,
  id = 'textarea-field',
}) => {
  return (
    <>
      <label className={`fw-bold fs-${fontSize} mb-1`} htmlFor={id}>
        {label}
      </label>
      <textarea
        className="form-control"
        id={id}
        rows={rows}
        placeholder={placeholder}
        minLength={minLength}
        required
      ></textarea>
      <div className="invalid-feedback">{invalidFeedback}</div>
    </>
  );
};

export default TextAreaField;
