


import Modal from "./AboutMe_Modal";

//STYLES & IMAGES 
import styles from "../../styles/Modals/Modal.module.css";
import styless from "../../styles/ShortBio.module.css";
import Image from "next/image";

const Profile = ({ modalIsOpen, closeModal, onRequestClose, selectedTopicTitle, selectedTopic }) =>{


  console.log(selectedTopic);
    return (
      <Modal
        isOpen={modalIsOpen}
        onClose={closeModal}
        onRequestClose={onRequestClose}
      >
        <div className={styles.infoContainer}>
          <h1>{selectedTopic[0].title}</h1>

          <div className={styless.container}>
            <div className={styless.text_container}>
              <h2>{selectedTopic[0].description}</h2>
            </div>

            <div className={styless.image_container}>
              <Image
                src="/images/portrait_vertical.jpg"
                height={200}
                width={200}
                className={styless.portrait}
              />
            </div>
          </div>

          <button onClick={closeModal} className={styles.closeBtn}>
            ×
          </button>
        </div>
      </Modal>
    );
}

export default Profile;