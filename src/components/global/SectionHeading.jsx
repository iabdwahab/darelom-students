const SectionHeading = ({ children, fontSize, py }) => {
  return (
    <h2 className={`fs-${fontSize || 4} py-${py || 2} fw-medium bg-dark text-center text-light`}>
      {children}
    </h2>
  );
};

export default SectionHeading;
