const ModalBody = ({ children }) => {
  return (
    <div className="modal-body pb-1">
      <p className="text-center fw-bold">{children}</p>
    </div>
  );
};

export default ModalBody;
