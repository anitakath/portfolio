

import Modal from "../Modals/AboutMe_Modal";

import styles from '../../styles/Modals/Modal.module.css'
import style from "../../styles/Modals/ProgrammingModal.module.css";

const ProgrammingModal = ({ modalIsOpen, closeModal, onRequestClose, selectedTopicTitle, aboutMeData }) => {
  

    console.log(aboutMeData);

    return (
      <Modal
        isOpen={modalIsOpen}
        onClose={closeModal}
        onRequestClose={onRequestClose}
      >
        <div className={styles.infoContainer}>
          <h1>{aboutMeData.title}</h1>
          <p className={styles.description}>{aboutMeData.description}</p>

          {aboutMeData.table.map((categoryItem, index) => (
            <div key={index} className={style.table_div}>
              <h3 className={style.table_title}>{categoryItem.category}</h3>
              <ul className={style.table_table}>
                {categoryItem.items.map((item, itemIndex) => (
                  <li key={itemIndex} className={style.table_item}> - {item} </li>
                ))}
              </ul>
            </div>
          ))}

          <p className={styles.subdescription}>{aboutMeData.subdescription}</p>

          <button onClick={closeModal} className={styles.closeBtn}>
            ×
          </button>
        </div>
      </Modal>
    );};

export default ProgrammingModal;