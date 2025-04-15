import { supabase } from '@/services/supabaseClient'
import styles from '../../styles/PortfolioPage.module.css'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { useEffect, useState} from 'react'
import { FaGithub} from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faN } from "@fortawesome/free-solid-svg-icons";
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import LanguageSwitcher from '@/components/UI/LanguageSwitcher'
//MODAL
import PortfolioItemImageModal from '@/components/UI/Modals/PortfolioItemImageModal'
import Footer from '@/components/Footer.js/Footer'


const PortfolioItem = ({item}) =>{
    const currentLanguage = useSelector((state) => state.language.currentLanguage);
    const [portfolioData, setPortfolioData] = useState([]);
    const [openItems, setOpenItems] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false)
       // Handler zum Schließen des Modals
       const closeModal = () => {
        setIsModalOpen(false);
    };


    const fetchPortfolioItemFromSupabase = async () => {
        // Extrahiere den Pfad aus der URL
        const path = window.location.pathname; // z.B. "/portfolio/sports-diary"
    
        try {
          let tableName;
          if (currentLanguage === "GERMAN") {
            tableName = 'portfolio_german';
          } /*else if (currentLanguage === "SPANISH") {
            tableName = 'portfolio_spanish';
          }*/ else if (currentLanguage === "ENGLISH") {
            tableName = 'portfolio_english';
          }
    
          // Führe die Abfrage durch
          const { data, error } = await supabase
            .from(tableName)
            .select('*')
            .eq('detailsPath', path)
            .single(); // Wir erwarten nur ein einzelnes Objekt
    
          if (error) {
            console.error("Error fetching portfolio item:", error);
          } else {
            setPortfolioData(data); // Setze die erhaltenen Daten in den State
          }
        } catch (err) {
          console.error("Unexpected error:", err);
        }
      };
    
      useEffect(() => {
        fetchPortfolioItemFromSupabase();
      }, [currentLanguage]); // Fetch erneut, wenn sich die Sprache ändert

      
      const handleEnlargeClick = (image) => {

        console.log(image)
       // event.stopPropagation();
        setIsModalOpen(true);
        setOpenItems(image)
    };

      const scrollIntoView = () => {
        const element = document.getElementById("imageContainer");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      };
    return(
        <div className={styles.container}>
            <div className={styles.linkContainer}>
              <div className='flex justify-center items-center'>
                <Link href="/"> 
                  <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
                <button onClick={() => scrollIntoView()} className={styles.cameraButtonContainer}>  
                 <FontAwesomeIcon icon={faCamera} />
                </button>
              </div>
               
                <LanguageSwitcher/>
            </div>

         
            <h1 className={styles.title}>{portfolioData.title} </h1>
        

            <div className='flex mt-4 mb-2 lg:w-6/12 justify-start w-full '>

              <div className={styles.link_div}>
                    
                    {portfolioData && portfolioData.netlify_path ? (
                        <Link href={portfolioData.netlify_path} className={styles.project_link} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faN}  className={styles.iconN}/>
                        <span className={styles.span}>Netlify</span>
                        </Link>
                    ) : (
                        <span className={styles.disabled_link}>Netlify link not available</span>
                    )}
              </div>

              <div className={styles.link_div}>

                  {portfolioData && portfolioData.github_path ? (
                      <Link href={portfolioData.github_path} className={styles.project_link} target="_blank" rel="noopener noreferrer">
                      <FaGithub   className={styles.iconG}/>
                      Github
                      </Link>
                  ) : (
                      <span className={styles.disabled_link}>Github link not available</span>
                  )}
              </div>
            
            </div>

           
        

            <div className={styles.descriptionsContainer}>
                <div className={styles.mainDescription}>
                    <p> 
                      {portfolioData.description}
                    </p>
                </div>

                <div  className={styles.subDescription}>
                   <h1 className={styles.descriptionTitle}> {currentLanguage === "GERMAN" ? 'Möglichkeiten für den User:' : 'Options for the user:'}</h1>
                   <ul className={styles.descriptionsTable}>
                    {portfolioData.subDescriptions && portfolioData.subDescriptions.map((data, index) => {
                      // Den Text bei den Doppelpunkten aufteilen
                      const [boldText, normalText] = data.split(':');

                      return (
                        <li key={index} className={styles.descriptionsTableLinks}>
                          <strong> - {boldText}:</strong> {normalText}
                        </li>
                      );
                    })}
                  </ul>
                </div>
            </div>

            <div className={styles.descriptionsContainer}>
              <div className={styles.subDescription}>
                <h1 className={styles.descriptionTitle}> Skills & Tools:</h1>
                <ul className={styles.descriptionsTable}>
                  {portfolioData.skills && portfolioData.skills.length > 0 &&  portfolioData.skills.map((skill, index) => (
                    <li key={index} className={styles.descriptionsTableLinks}> - {skill} </li>
                  ))}
                </ul>
                
              </div>

              <div className={styles.mainDescription}>
                <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
              </div> 
            </div>
 



            <div className={styles.imageGridContainer} id="imageContainer">
                {portfolioData.images && portfolioData.images.map((image, index) => (
                    <img 
                        key={index} 
                        src={image} 
                        alt={`Image ${index + 1}`}
                        onClick={() => handleEnlargeClick(image)}
                    />
                ))}

                {isModalOpen && (
                    <PortfolioItemImageModal  
                        onClose={closeModal} 
                        openItems={openItems} 
                    />
                ) }
            </div>

            <Footer/>

        </div>
    )
}

export default PortfolioItem