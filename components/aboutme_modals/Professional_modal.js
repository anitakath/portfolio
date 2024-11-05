import Modal from "../Modals/AboutMe_Modal";

import styles from "../../styles/Modals/Modal.module.css";


const ProfessionalModal = ({
  modalIsOpen,
  closeModal,
  onRequestClose,
  selectedTopicTitle,
  aboutMeData,
}) => {

  return (
    <Modal
      isOpen={modalIsOpen}
      onClose={closeModal}
      onRequestClose={onRequestClose}
    >
      <div className={styles.infoContainer}>
        <h1 className={styles.title}>{aboutMeData.title}</h1>
        <p className={styles.description}>{aboutMeData.description}</p>
        <ul className={styles.table}>
          {aboutMeData && aboutMeData.table.map((description) => (
            <li>{description.description}</li>
          ))}
        </ul>
        <p className={styles.subdescription}>{aboutMeData.subdescription}</p>

        <button onClick={closeModal} className={styles.closeBtn}>
          ×
        </button>
      </div>
    </Modal>
  );
};

export default ProfessionalModal;
