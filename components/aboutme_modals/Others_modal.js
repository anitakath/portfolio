import Modal from "../Modals/AboutMe_Modal";

import styles from "../../styles/Modals/Modal.module.css";

const OtherModal = ({
  modalIsOpen,
  closeModal,
  onRequestClose,
  selectedTopicTitle,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onClose={closeModal}
      onRequestClose={onRequestClose}
    >
      <div className={styles.infoContainer}>
        <h1> other modal: </h1>
        <h1>{selectedTopicTitle}</h1>

        <button onClick={closeModal} className={styles.closeBtn}>
          ×
        </button>
      </div>
    </Modal>
  );
};

export default OtherModal;
