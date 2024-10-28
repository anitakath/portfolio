

import Modal from "../Modals/AboutMe_Modal";

import styles from '../../styles/Modals/Modal.module.css'

const ProgrammingModal = ({ modalIsOpen, closeModal, onRequestClose, selectedTopicTitle }) => {
  

    return(
        <Modal
            isOpen={modalIsOpen}
            onClose={closeModal}
            onRequestClose={onRequestClose}
        >
            <div className={styles.infoContainer}>
            <h1> JOO </h1>
            <h1>programming</h1>

            <button onClick={closeModal} className={styles.closeBtn}>
                ×
            </button>
            </div>
        </Modal>
    )};

export default ProgrammingModal;