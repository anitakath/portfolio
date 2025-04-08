import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
//STYLES
import styles from "./AboutMe.module.css";
//REDUX
import { useSelector } from "react-redux";
//COMPONENTS
import Education from "./AboutMe/Education";
import Link from "next/link";


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
  const [visibleSkillGroups, setVisibleSkillGroups] = useState({});
  const [visibleSkills, setVisibleSkills] = useState({});


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
    event.stopPropagation();
    setVisibleDescriptions((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const toggleSkillsGroups = (event, category, groupTitle) => {

    console.log(groupTitle)

    event.stopPropagation();
    // Toggle der Sichtbarkeit für die spezifische Skill-Gruppe
    setVisibleSkillGroups((prev) => ({
        ...prev,
        [groupTitle]: !prev[groupTitle],
    }));
  };

  const toggleSkills = (event, category) => {
    event.stopPropagation(); 
    setVisibleSkills((prev) => ({
      ...prev,
      [category]: !prev[category],
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


  console.log(visibleSkillGroups)
  console.log(aboutMeData)

  return (
      <div id="aboutMe" className="sub_container">
          <div className={styles.aboutmeContainer}>
              {aboutMeData.map((data) => (
                  <motion.div key={data.title} className={styles.card} onClick={() => flipCard(data.id)} initial={{ rotateY: 0 }} animate={{ rotateY: flippedIndex === data.id ? 180 : 0 }} transition={{ duration: 0.6 }}>
                      {/* Front side of the card */}
                      <motion.div className={styles.cardFront}>
                          {flippedIndex !== data.id && (
                              <h1 className={styles.cardTitle}>{data.title} </h1>
                          )}
                          <Image src={data.imagePath} width={800} height={800} className={styles.cardImage} alt="sample images from pexel" />
                      </motion.div>
                      {/* Back side of the card */}
                      <motion.div className={styles.cardBack}>
                          {flippedIndex === data.id && (
                              <div className="flex-col overflow-scroll items-center justify-center w-full h-full pl-1 bg-white">
                  
                                {data.skillstable && data.skillstable.map((skillGroup) => (
                                  <div >

                                    {/* CREATE A NEW SEPARATE COMPONENT FOR THE FOLLOWING CONTENT!!! */}
                                    {/* CREATE A NEW SEPARATE COMPONENT FOR THE FOLLOWING CONTENT!!! */}
                                    {/* CREATE A NEW SEPARATE COMPONENT FOR THE FOLLOWING CONTENT!!! */}
                                    {/* CREATE A NEW SEPARATE COMPONENT FOR THE FOLLOWING CONTENT!!! */}
                                    {/* CREATE A NEW SEPARATE COMPONENT FOR THE FOLLOWING CONTENT!!! */}
                                    {/* CREATE A NEW SEPARATE COMPONENT FOR THE FOLLOWING CONTENT!!! */}


                                    <div key={skillGroup.title} className={styles.cardContainer}>
                                      <button className={styles.title} onClick={(event) => toggleSkillsGroups(event, null, skillGroup.title)}>
                                        {skillGroup.title}  
                                      </button>

                                      <motion.div 
                                        className={styles.detailsContainer}
                                        initial={{ opacity: 0, height: 0 }} 
                                        animate={{ opacity: visibleSkillGroups[skillGroup.title] ? 1 : 0, height: visibleSkillGroups[skillGroup.title] ? 'auto' : 0 }} 
                                        exit={{ opacity: 0, height: 0 }} 
                                        transition={{ duration: 0.3 }} 
                                      >
                                        {visibleSkillGroups[skillGroup.title] && skillGroup.table.length > 0 && (
                                          <ul className={styles.table}>
                                            {skillGroup.table.map((skillCategory) => (
                                              <li key={skillCategory.category} className="m-2 mb-4 w-full">
                                                <button
                                                  className={styles.listItemButton}
                                                  onClick={(event) => toggleSkills(event, skillCategory.category)}
                                                  style={{ border: 'none', padding: 0, cursor: 'pointer' }}
                                                >
                                                  {skillCategory.category} 
                                                </button>


                                      <motion.div 
                                        className={styles.detailsContainer}
                                        initial={{ opacity: 0, height: 0 }} 
                                        animate={{ opacity: visibleSkills[skillCategory.category] ? 1 : 0, height: visibleSkills[skillCategory.category] ? 'auto' : 0 }} 
                                        exit={{ opacity: 0, height: 0 }} 
                                        transition={{ duration: 0 }} 
                                      >
                                        {visibleSkills[skillCategory.category] && (
                                          <ul className="mt-2 flex flex-wrap">
                                            {skillCategory.items.map((item, itemIndex) => (
                                              <li key={itemIndex} className={styles.categoryDescription}>
                                                <div className={styles.categoryDescriptionImageDiv}> </div>
                                               <span className={styles.categoryDescriptionText}>{item}</span>
                                              </li>
                                            ))}
                                          </ul>
                                        )}

                                        {/*
                                         {visibleSkills[skillCategory.category] && (
                                          <ul className="mt-2 border-2">
                                            {skillCategory.items.map((subCategory, subIndex) => (
                                              <li key={subIndex} >
                                               
                                                <span className="my-2">{subCategory.subtitle}</span>
                                                <ul className="ml-4 border-2 flex relative"> 
                                                  <div className={styles.two}>
                                                  
                                                  </div>
                                                  {subCategory.skills.map((item, itemIndex) => (
                                                    <li key={itemIndex} className={styles.softSkillLink}>
                                                      {item}
                                                    </li>
                                                  ))}
                                                </ul>
                                              </li>
                                            ))}
                                          </ul>
                                        )}*/}
                                      </motion.div>
                                    </li>
                                  ))}
                                </ul>
                                  )}
                                </motion.div>
                              </div> 

                              {/* CREATED A NEW SEPARATE COMPONENT FOR THE PREVIOUS CONTENT??? */}  
                              {/* CREATED A NEW SEPARATE COMPONENT FOR THE PREVIOUS CONTENT??? */}
                              {/* CREATED A NEW SEPARATE COMPONENT FOR THE PREVIOUS CONTENT??? */}
                              {/* CREATED A NEW SEPARATE COMPONENT FOR THE PREVIOUS CONTENT??? */}
                              {/* CREATED A NEW SEPARATE COMPONENT FOR THE PREVIOUS CONTENT??? */}
                              </div>
                            ))}
                       
                              

                                {data.description && (
                                  <div >
                                    <p className={styles.description}>{data.description}</p>
                                  </div>
                                )}


                                {data.educationsTable && (
                                  <div>
                                    <Education data={data} />
                                  </div>
                                )}
                    
    
                        <ul>
                          {data.descriptionTable && data.descriptionTable.map((item) => (
                            <li key={item.listItem} className={styles.listItem}>
                              <button 
                                className={styles.listItemButton} 
                                onClick={(event) => toggleDescription(event, item.listItem)} // Event übergeben
                                style={{ border: 'none', padding: 0, cursor: 'pointer' }}
                              >
                                <strong className="px-2 text-start">{item.listItem}</strong>
                              </button>

                            

                              {/* Hier wird der motion.div hinzugefügt */}
                              <motion.div 
                                initial={{ opacity: 0, height: 0 }} 
                                animate={{ opacity: visibleDescriptions[item.listItem] ? 1 : 0, height: visibleDescriptions[item.listItem] ? 'auto' : 0 }} 
                                exit={{ opacity: 0, height: 0 }} 
                                transition={{ duration: 0.3 }} 
                              >
                                {visibleDescriptions[item.listItem] && (
                                  <span className={styles.listItemDescription}>
                                    {item.listItemDescription} 
                                  </span>
                                )}
                              </motion.div>
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