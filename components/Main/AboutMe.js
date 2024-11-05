import { useState, useEffect } from "react";
//STYLES
import styles from "../../styles/Main/Main.module.css";

//REDUX
import { useSelector } from "react-redux";
//MODAL
import ProgrammingModal from "../aboutme_modals/Programming_modal";
import Profile from "../Modals/Profile";

import ProfessionalModal from "../aboutme_modals/Professional_modal";



const languageMap = {
  GERMAN: { title: "ÜBER MICH", api: "/api/AboutMeData" },
  ENGLISH: { title: "ABOUT ME", api: "/api/AboutMeData_eng" },
  SPANISH: { title: "SOBRE MI", api: "/api/AboutMeData_es" },
};

const AboutMe = ({  setIsVisible, isVisible }) => {

  const [isModalOpen, setIsModalOpen] = useState(null)
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );
  const [aboutMeData, setAboutMeData] = useState([]);
  const [selectedTopicId, setSelectedTopicId] = useState("");
  const [selectedTopic, setSelectedTopic] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(languageMap[currentLanguage].api);
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setAboutMeData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [currentLanguage]);




  const openModal = (topic) => {
    console.log(topic)

    if(topic === 1){
       setIsModalOpen("profile")
    } else if(topic === 2){
       setIsModalOpen("school")
    } else if(topic === 3){
       setIsModalOpen("career")
    } else if(topic === 4){
       setIsModalOpen("programming")
    } else if(topic === 5){
       setIsModalOpen("hobbies")
    } else if(topic === 6){
       setIsModalOpen("future")
    }


    setModalIsOpen(true);
    setIsVisible(false)
    const completeTopic = aboutMeData.filter((item) => {
      return item.id === topic;
    });

    setSelectedTopic(completeTopic);
    setSelectedTopicId(topic);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setIsVisible(true)
  };


  let title = "";

  if (currentLanguage === "GERMAN") {
    title = "ÜBER MICH";
  } else if (currentLanguage === "ENGLISH") {
    title = "ABOUT ME";
  } else if (currentLanguage === "SPANISH") {
    title = "SOBRE MI";
  }

  console.log(selectedTopicId);
  console.log(aboutMeData);



  return (
    <div id="aboutMe" className="sub_container">
      <h1 className={styles.aboutme_title}> {title} </h1>
      <div className={styles.aboutmeContainer}>
        {modalIsOpen && isModalOpen === "profile" && (
          <Profile
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            onRequestClose={closeModal}
            selectedTopicTitle={selectedTopicId}
            selectedTopic={selectedTopic}
          />
        )}

        {modalIsOpen && isModalOpen === "career" && (
          <ProfessionalModal
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            onRequestClose={closeModal}
            selectedTopicTitle={selectedTopicId}
            aboutMeData={aboutMeData[2]}
          />
        )}

        {modalIsOpen && isModalOpen === "programming" && (
          <ProgrammingModal
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            onRequestClose={closeModal}
            selectedTopicTitle={selectedTopicId}
            aboutMeData={aboutMeData[3]}
          />
        )}

        {aboutMeData.map((data) => (
          <div key={data.title}>
            <button onClick={() => openModal(data.id)}>{data.title}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;


