import ReactModal from "react-modal";

// Stelle sicher, dass das Modal-Element an den Body angehängt wird.
ReactModal.setAppElement("#__next");

//STYLES
import styles from '../../styles/Modals/Modal.module.css'

const Modal = ({ isOpen, onClose, onRequestClose, children }) => {


  const closeModal = () =>{
    onClose();
  }

  return (
    <ReactModal
      className={styles.container}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal"
      onClick={closeModal}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
