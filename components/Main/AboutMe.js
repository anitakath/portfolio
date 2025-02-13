import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
//STYLES
import styles from "./AboutMe.module.css";
//REDUX
import { useSelector } from "react-redux";



const languageMap = {
  GERMAN: { title: "ÜBER MICH", api: "/api/AboutMeData" },
  ENGLISH: { title: "ABOUT ME", api: "/api/AboutMeData_eng" },
  SPANISH: { title: "SOBRE MI", api: "/api/AboutMeData_es" },
};
const AboutMe = ({ setIsVisible }) => {
  const currentLanguage = useSelector((state) => state.language.currentLanguage);
  const [aboutMeData, setAboutMeData] = useState([]);
  const [selectedData, setSelectedData] = useState({ title: "", description: "" });
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [visibleDescriptions, setVisibleDescriptions] = useState({});

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

  const flipCard = (topic) => {
      if (flippedIndex === topic) {
          setFlippedIndex(null);
      } else {
          setFlippedIndex(topic);
          setIsVisible(false);
      }
      setIsVisible(false);
      const completeTopic = aboutMeData.filter((item) => item.id === topic);
      setSelectedData(completeTopic);
  };

  const toggleDescription = (event, itemId) => {
      event.stopPropagation(); // Verhindert das Auslösen des Click-Events für die Karte
      setVisibleDescriptions((prev) => ({
          ...prev,
          [itemId]: !prev[itemId],
      }));
  };

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
          <div className={styles.aboutmeContainer}>
              {aboutMeData.map((data) => (
                  <motion.div key={data.title} className={styles.card} onClick={() => flipCard(data.id)} initial={{ rotateY: 0 }} animate={{ rotateY: flippedIndex === data.id ? 180 : 0 }} transition={{ duration: 0.6 }}>
                      {/* Front side of the card */}
                      <motion.div className={styles.cardFront}>
                          {flippedIndex !== data.id && (
                              <h1 className={styles.cardTitle}>{data.title}</h1>
                          )}
                          <Image src={data.imagePath} width={800} height={800} className={styles.cardImage} alt="sample images from pexel" />
                      </motion.div>
                      {/* Back side of the card */}
                      <motion.div className={styles.cardBack}>
                          {flippedIndex === data.id && (
                              <div className="flex-col overflow-scroll items-center justify-center w-full h-full pl-1 bg-white">
                                {data.description && (
                                  <p className={styles.description}>{data.description}</p>
                                )}
                    
    
                                <ul>
                                  {data.descriptionTable && data.descriptionTable.map((item) => (
                                    <li key={item.listItem} className={styles.listItem}>
                                    <button 
                                      className={styles.listItemButton}
                                      onClick={(event) => toggleDescription(event, item.listItem)} // Event übergeben
                                      style={{ border: 'none', padding: 0, cursor: 'pointer' }}
                                    >
                                      <strong className="px-2">{item.listItem}</strong>
                                    </button>
                                    {visibleDescriptions[item.listItem] && (
                                      <span className={styles.listItemDescription}>{item.listItemDescription}</span>
                                      )}
                                    </li>
                                  ))}
                                  </ul>
                              </div>
                          )}
                      </motion.div>
                  </motion.div>
              ))}
          </div>
      </div>
  );
};

export default AboutMe;