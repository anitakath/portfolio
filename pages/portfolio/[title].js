import { supabase } from '@/services/supabaseClient'
import styles from '../../styles/PortfolioPage.module.css'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { useEffect, useState} from 'react'
import { FaGithub} from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faN } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
//MODAL
import PortfolioItemImageModal from '@/components/UI/Modals/PortfolioItemImageModal'
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
          } else if (currentLanguage === "SPANISH") {
            tableName = 'portfolio_spanish';
          } else if (currentLanguage === "ENGLISH") {
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


      console.log(portfolioData)
      console.log(openItems)



    return(
        <div className={styles.container}>

            
            <div className={styles.linkContainer}>
                <Link href="/"> 
                  <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
            </div>

         
            <h1 className={styles.title}>{portfolioData.title}</h1>
            
              <div className={styles.skills_div}>
                {portfolioData.skills && portfolioData.skills.length > 0 &&  portfolioData.skills.map((description, index) => (
                  <div key={index} className={styles.skill}> {description}</div>
                ))}
              </div>   
        

            <div className={styles.descriptionsContainer}>
                <div className={styles.mainDescription}>
                    <h1 className={styles.descriptionTitle}> 
                      {portfolioData.description}
                    </h1>
                </div>
                <div  className={styles.subDescription}>
                   <h1 className={styles.descriptionTitle}> Möglichkeiten für den User: </h1>
                    <ul className={styles.descriptionsTable}>
                    {portfolioData.subDescriptions && portfolioData.subDescriptions.map((data, index) =>(
                       
                        <li className={styles.descriptionsTableLinks}> {data}</li>
                        
                    ))}
                    </ul>
                </div>
            </div>

            <div className={styles.imageGridContainer}>
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


            <div className={styles.link_div}>
                <FaGithub />
                {portfolioData && portfolioData.github_path ? (
                    <Link href={portfolioData.github_path} className={styles.project_link} target="_blank" rel="noopener noreferrer">
                    Github
                    </Link>
                ) : (
                    <span className={styles.disabled_link}>Github link not available</span>
                )}
                </div>

                <div className={styles.link_div}>
                  <FontAwesomeIcon icon={faN} />
                  {portfolioData && portfolioData.netlify_path ? (
                      <Link href={portfolioData.netlify_path} className={styles.project_link} target="_blank" rel="noopener noreferrer">
                      <span className={styles.span}>Netlify</span>
                      </Link>
                  ) : (
                      <span className={styles.disabled_link}>Netlify link not available</span>
                  )}
                  </div>
             
    


        </div>
    )
}

export default PortfolioItem