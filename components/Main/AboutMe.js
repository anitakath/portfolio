import {useState, useEffect} from 'react'
//STYLES
import styles from '../../styles/Main/Main.module.css'
import styless from '../../styles/Modals/Modal.module.css'
//REDUX
import { useDispatch, useSelector } from 'react-redux'
//MODAL
import ProgrammingModal from '../aboutme_modals/Programming_modal';
import Profile from '../Modals/Profile';
import OtherModal from '../aboutme_modals/Others_modal';


const AboutMe = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const currentLanguage = useSelector((state) => state.language.currentLanguage)
  const [aboutMeData, setAboutMeData] = useState([])
  const [selectedTopicId, setSelectedTopicId] = useState("");
  const [selectedTopic, setSelectedTopic] = useState({
    title: "",
    description: "",
  });

   
  useEffect(() => {
    if (currentLanguage === "ENGLISH") {
        const fetchData = async () => {
          try {
            const response = await fetch("/api/AboutMeData_eng");
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setAboutMeData(data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };

        fetchData();
    } else if (currentLanguage === "GERMAN") {
        const fetchData = async () => {
          try {
            const response = await fetch("/api/AboutMeData");
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setAboutMeData(data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };

        fetchData();
    } else if (currentLanguage === "SPANISH") {
        const fetchData = async () => {
          try {
            const response = await fetch("/api/AboutMeData_es");
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setAboutMeData(data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };

        fetchData();
      
    }
  }, [currentLanguage]);


  

  const openModal = (topic) => {

    setModalIsOpen(true)
    console.log(topic)
    const completeTopic = aboutMeData.filter((item) =>{
      return item.id === topic
    })

    console.log(completeTopic)

    setSelectedTopic(completeTopic)
    setSelectedTopicId(topic);
    setModalIsOpen(true);
  };

  
  const closeModal = () => {
    setModalIsOpen(false);
  };



  const [profile, setProfile] = useState(null);
  const [programming, setProgramming] = useState(null)
  const [elseModal, setElseModal] = useState(null)

  useEffect(() => {
    if (selectedTopicId === " ") {
      return;
    } else if (selectedTopicId === 1) {
      setProfile(true);
      setProgramming(false);
      setElseModal(false);
    } else if (selectedTopicId === 4) {
      setProfile(false);
      setProgramming(true)
      setElseModal(false);
    } else{
      setProfile(false);
      setProgramming(false);
      setElseModal(true)
    }
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