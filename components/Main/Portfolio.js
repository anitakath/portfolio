import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Portfolio.module.css";
import Image from "next/image";
import Link from "next/link";
//FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons";
import { faDownLeftAndUpRightToCenter } from "@fortawesome/free-solid-svg-icons";

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
  }


  return (
    <div className="sub_container" id="portfolio">
      <div className={styles.portfolio_container}>
        <div className={styles.portfolio_field}>

          {portfolioData && portfolioData.map((item) => (
            <div key={item.id} className="flex flex-col justify-center items-center">
              <div className={styles.portfolio_item_header}>
                <h2 className={styles.item_title}>{item.title}</h2>

                <button 
                  className={styles.item_toggleButton} 
                  onClick={() => handleToggle(item.id)} 
                >
                  {hideProjectIds.includes(item.id) ? (
                    <FontAwesomeIcon icon={faDownLeftAndUpRightToCenter} />
                    
                  )
                    : (
                    <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
                  )}
                
                </button> 
              </div>
             


              {/* Zeige das Portfolio-Item nur an, wenn es nicht in hideProjectIds enthalten ist */}
              {hideProjectIds.includes(item.id) && (
                <div className={styles.portfolio_item}>
                  {item.password && (
                    <p className={styles.password} style={{ backgroundColor: "rgba(255,255,255, 0.4)", padding: "2px 5px", borderRadius: "2px"}}>
                      {messages[currentLanguage] || messages.ENGLISH}
                    </p>
                  )}

    
                    
                    <div className={styles.item_imageDiv}>
                     {item.images && item.images[0] &&  (
                      <Link href={item.detailsPath}>
                         <Image 
                          key="moin" // Verwende den Index als Schlüssel (oder eine eindeutige ID, wenn verfügbar)
                          src={item.image}
                          alt="portfolio image" // Alternativtext für jedes Bild
                          layout="responsive" 
                          width={800} 
                          height={800} 
                          className={styles.image}
                          
                        />
                      </Link>
                      )}

                    </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <h1 className="my-4"> Weitere Projekte folgen ... 💜 </h1>
      </div>
    </div>
  );
};

export default Portfolio;