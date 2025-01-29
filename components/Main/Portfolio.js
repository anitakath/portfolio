import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/Main/Main.module.css";
import Image from "next/image";
import Link from "next/link";
//FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaGithub} from "react-icons/fa";
import { faN } from "@fortawesome/free-solid-svg-icons";
//CUSTOM HOOKS
import useSkills from "@/custom-hooks/useSkills";



const Portfolio = () => {
  const currentLanguage = useSelector((state) => state.language.currentLanguage);
  const [portfolioData, setPortfolioData] = useState([]);
  const [activeItemIndex, setActiveItemIndex] = useState(null); 
  const {skills} =useSkills();
  const data = useSelector((state) => state.data.initialData)

  useEffect(() => {
    // Setze portfolioData basierend auf der aktuellen Sprache
    if (data.portfolio[currentLanguage]) {

      setPortfolioData(data.portfolio[currentLanguage]);
    } else {
      //setPortfolioData([]); // Leeres Array setzen, wenn keine Daten vorhanden sind
    }
  }, [currentLanguage, data.portfolio]);



  const handleItemClick = (index) => {
    // toggle the active item index
    setActiveItemIndex(activeItemIndex === index ? null : index);
  };


  return (
    <div className="sub_container" id="portfolio">
      <div className={styles.portfolio_container}>
        <div className={styles.portfolio_field}>
          {portfolioData && portfolioData.map((item, index) => (
            <div >
              <h2 className={styles.item_title}> {item.title} </h2>
            <div
              key={index}
              className={styles.portfolio_item}
              onClick={() => handleItemClick(index)}
            >
              {item.password && (
                 <p className="absolute top-0 right-0 text-red-500 my-2 mx-4" style={{ backgroundColor: "rgba(255,255,255, 0.4)", padding: "2px 5px", borderRadius: "2px"}} > password required!</p>
              )}
             

              <div className={styles.portfolio_item_imageDiv}>
              
                 
                  <div className={styles.item_image}>
                    {/* render image here  */}
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.title}
                        layout="responsive"
                        width={600}
                        height={600}
                        className={styles.portfolio_image}
                      />
                    )}
                  </div>
                  <div className={styles.item_image_skillsDiv}>
                    {item.skills && item.skills.map((skillName, skillIndex) => {
                      
                      const skillObject = skills.find(skill => skill.name === skillName.name);
                     
                      // Render projects skills
                      return skillObject ? (
                        <div key={skillIndex} className={styles.skill}>
                          <img src={skillObject.logo} alt={skillObject.name} className={styles.skillIcon} />
                          <p className={styles.skillIconDescription}>{skillObject.name}</p>
                        </div>
                      ) : null;
                    })}
                  </div>
             
              </div>

              <div className={styles.portfolio_item_description}>
                <div className={styles.description}>
                    <p className={styles.description_p}>{item.description}</p>
                    <p> - </p>
                    <div className={styles.link_div}>
                      <FaGithub />
                      <Link
                        href={item.github_path}
                        className={styles.project_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github
                      </Link>
                    </div>

                    <div className={styles.link_div}>
                      <FontAwesomeIcon icon={faN} />
                      <Link
                        href={item.netlify_path}
                        className={styles.project_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className={styles.span}>etlify</span>
                      </Link>
                    </div>
                  </div>
                  </div>
              </div>
           
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
