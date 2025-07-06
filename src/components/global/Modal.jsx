import ModalHeader from '../modal/ModalHeader';
import ModalBody from '../modal/ModalBody';
import ModalFooter from '../modal/ModalFooter';
import Button from '../global/Button';

const Modal = ({ setIsModalOpen, answerReason }) => {
  return (
    <div className="modal d-block bg-black bg-opacity-75" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <ModalHeader>"وَقُل رَّبِّ زِدْنِي عِِلْمًا"</ModalHeader>
          <ModalBody>{answerReason || 'للأسف، لا يوجد تعليل لهذه الإجابة حاليًا.'}</ModalBody>
          <ModalFooter>
            <Button text="إغلاق" color="danger" onClick={() => setIsModalOpen(false)} />
          </ModalFooter>
        </div>
      </div>
    </div>
  );
};

export default Modal;
