import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Portfolio.module.css";
import Image from "next/image";
import Link from "next/link";
//FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaGithub} from "react-icons/fa";
import { faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons";
import { faDownLeftAndUpRightToCenter } from "@fortawesome/free-solid-svg-icons";
import { faN } from "@fortawesome/free-solid-svg-icons";
//CUSTOM HOOKS
import useSkills from "@/custom-hooks/useSkills";
const Portfolio = () => {
  const currentLanguage = useSelector((state) => state.language.currentLanguage);
  const [portfolioData, setPortfolioData] = useState([]);
  const { skills } = useSkills();
  const data = useSelector((state) => state.data.initialData);
  const [hideProjectIds, setHideProjectIds] = useState([]);

  useEffect(() => {
    if (data.portfolio[currentLanguage]) {
      setPortfolioData(data.portfolio[currentLanguage]);
    }
  }, [currentLanguage, data.portfolio]);

  const handleToggle = (id) => {
    // Überprüfen, ob die ID bereits im hideProjectIds-Array vorhanden ist
    if (hideProjectIds.includes(id)) {
      // Wenn ja, entferne sie
      setHideProjectIds(hideProjectIds.filter(projectId => projectId !== id));
    } else {
      // Wenn nein, füge sie hinzu
      setHideProjectIds([...hideProjectIds, id]);
    }
  };

  const messages = {
    ENGLISH: "Password required!",
    GERMAN: "Passwort erforderlich!",
    SPANISH: "¡Se requiere contraseña!"
  };

  console.log(portfolioData)

  return (
    <div className="sub_container" id="portfolio">
      <div className={styles.portfolio_container}>
        <div className={styles.portfolio_field}>

          {portfolioData && portfolioData.map((item) => (
            <div key={item.id}>
              <div className={styles.portfolio_item_header}>
                <h2 className={styles.item_title}>{item.title}</h2>

                <button 
                  className={styles.item_toggleButton} 
                  onClick={() => handleToggle(item.id)} 
                >
                  {hideProjectIds.includes(item.id) ? (
                    <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
                  )
                    : (
                    <FontAwesomeIcon icon={faDownLeftAndUpRightToCenter} />
                  )}
                
                </button> 
              </div>
             


              {/* Zeige das Portfolio-Item nur an, wenn es nicht in hideProjectIds enthalten ist */}
              {!hideProjectIds.includes(item.id) && (
                <div className={styles.portfolio_item}>
                  {item.password && (
                    <p className={styles.password} style={{ backgroundColor: "rgba(255,255,255, 0.4)", padding: "2px 5px", borderRadius: "2px"}}>
                      {messages[currentLanguage] || messages.ENGLISH}
                    </p>
                  )}

                  <div className={styles.portfolio_item_subContainer}>
                    
                    <div className={styles.item_imageDiv}>
                      {item.images && item.images.map((image, index) => (
                        <Image 
                          key={index} // Verwende den Index als Schlüssel (oder eine eindeutige ID, wenn verfügbar)
                          src={image} 
                          alt={`${item.title} image ${index + 1}`} // Alternativtext für jedes Bild
                          layout="responsive" 
                          width={600} 
                          height={600} 
                          
                        />
                      ))}
                    </div>
                  </div>

                  <div className={styles.portfolio_item_subContainer}>
                    <div className={styles.descriptionDiv}>

                      <div className={styles.skills_div}>
                        {item.skills && item.skills.length > 0 && (
                          <ul className="w-full flex justify-center items-center">
                            {item.skills.map((description, index) => (
                              <li key={index} className={styles.skill}>{description}</li>
                            ))}
                          </ul>
                        )}
                        
                      </div>
                      <p className={styles.description_p}>{item.description}</p>
                      {/* Hier wird auf subDescriptions des aktuellen Items zugegriffen */}
                      {/*{item.subDescriptions && item.subDescriptions.length > 0 && (
                        <ul className="w-full">
                          {item.subDescriptions.map((description, index) => (
                            <li key={index} className={styles.description_table_link}>{description}</li>
                          ))}
                        </ul>
                      )}*/}

                  
                      <div className={styles.link_div}>
                        <FaGithub />
                        <Link href={item.github_path} className={styles.project_link} target="_blank" rel="noopener noreferrer"> Github </Link>
                      </div>
                      <div className={styles.link_div}>
                        <FontAwesomeIcon icon={faN} />
                        <Link href={item.netlify_path} className={styles.project_link} target="_blank" rel="noopener noreferrer">
                          <span className={styles.span}>etlify</span>
                        </Link>
                      </div>
                     
                     
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;