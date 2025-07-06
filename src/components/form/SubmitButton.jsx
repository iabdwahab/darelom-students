const SubmitButton = ({ text }) => {
  return (
    <button type="submit" className={`btn btn-primary w-100 fw-bold`}>
      {text}
    </button>
  );
};

export default SubmitButton;
