const Form = ({ formRef, children }) => {
  return (
    <form className="mt-3 needs-validation" noValidate ref={formRef}>
      {children}
    </form>
  );
};

export default Form;
