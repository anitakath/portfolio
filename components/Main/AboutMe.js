import { useState, useEffect } from "react";
//STYLES
import styles from "../../styles/Main/Main.module.css";

//REDUX
import { useSelector } from "react-redux";
//MODAL
import ProgrammingModal from "../aboutme_modals/Programming_modal";
import Profile from "../Modals/Profile";
import OtherModal from "../aboutme_modals/Others_modal";



const languageMap = {
  GERMAN: { title: "ÜBER MICH", api: "/api/AboutMeData" },
  ENGLISH: { title: "ABOUT ME", api: "/api/AboutMeData_eng" },
  SPANISH: { title: "SOBRE MI", api: "/api/AboutMeData_es" },
};

const AboutMe = ({  setIsVisible, isVisible }) => {
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

  const [profile, setProfile] = useState(null);
  const [programming, setProgramming] = useState(null);
  const [elseModal, setElseModal] = useState(null);

  useEffect(() => {
    if (selectedTopicId === " ") return;
    setProfile(selectedTopicId === 1);
    setProgramming(selectedTopicId === 4);
    setElseModal(!(selectedTopicId === 1 || selectedTopicId === 4));
  }, [selectedTopicId]);



  let title = "";

  if (currentLanguage === "GERMAN") {
    title = "ÜBER MICH";
  } else if (currentLanguage === "ENGLISH") {
    title = "ABOUT ME";
  } else if (currentLanguage === "SPANISH") {
    title = "SOBRE MI";
  }


  return (
    <div id="aboutMe" className="sub_container">
      <h1 className={styles.aboutme_title}> {title} </h1>
      <div className={styles.aboutmeContainer}>
        {modalIsOpen && programming && (
          <ProgrammingModal
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            onRequestClose={closeModal}
            selectedTopicTitle={selectedTopicId}
          />
        )}

        {modalIsOpen && profile && (
          <Profile
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            onRequestClose={closeModal}
            selectedTopicTitle={selectedTopicId}
            selectedTopic={selectedTopic}
          />
        )}

        {modalIsOpen && elseModal && (
          <OtherModal
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            onRequestClose={closeModal}
            selectedTopicTitle={selectedTopicId}
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




/*
import { useState, useEffect } from "react";
//STYLES
import styles from "../../styles/Main/Main.module.css";
//REDUX
import { useSelector } from "react-redux";
//MODAL
import ProgrammingModal from "../aboutme_modals/Programming_modal";
import Profile from "../Modals/Profile";
import OtherModal from "../aboutme_modals/Others_modal";

const languageMap = {
  GERMAN: { title: "ÜBER MICH", api: "/api/AboutMeData" },
  ENGLISH: { title: "ABOUT ME", api: "/api/AboutMeData_eng" },
  SPANISH: { title: "SOBRE MI", api: "/api/AboutMeData_es" },
};

const AboutMe = ({ showMobileMenu, setShowMobileMenu, openMobileMenuHandler, setIsVisible, isVisible }) => {
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
    setIsVisible(false);
    const completeTopic = aboutMeData.find((item) => item.id === topic);
    if (completeTopic) {
      setSelectedTopic(completeTopic);
      setSelectedTopicId(topic);
      setModalIsOpen(true);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setIsVisible(true);
  };

 

  const [profile, setProfile] = useState(null);
  const [programming, setProgramming] = useState(null);
  const [elseModal, setElseModal] = useState(null);

   useEffect(() => {
     if (selectedTopicId === " ") return;
     setProfile(selectedTopicId === 1);
     setProgramming(selectedTopicId === 4);
     setElseModal(!(selectedTopicId === 1 || selectedTopicId === 4));
   }, [selectedTopicId]);




  return (
    <div id="aboutMe" className="sub_container">
      <h1 className={styles.aboutme_title}>
        {languageMap[currentLanguage].title}
      </h1>
      <div className={styles.aboutmeContainer}>
        {modalIsOpen && programming && (
          <ProgrammingModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
        )}
        {modalIsOpen && profile && (
          <Profile
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            selectedTopic={selectedTopic}
          />
        )}
        {modalIsOpen && elseModal && (
          <OtherModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
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
*/
