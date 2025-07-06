const Form = ({ formRef, children }) => {
  return (
    <form
      className="mx-auto mt-3 needs-validation"
      noValidate
      style={{ maxWidth: '480px' }}
      ref={formRef}
    >
      {children}
    </form>
  );
};

export default Form;
