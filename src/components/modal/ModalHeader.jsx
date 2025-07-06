const ModalHeader = ({ children }) => {
  return (
    <div className="modal-header">
      <h5 className="modal-title text-center w-100">{children}</h5>
    </div>
  );
};

export default ModalHeader;
