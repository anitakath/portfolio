import styles from './EducationsModal.module.css'; // Importiere deine CSS-Datei 
import Image from 'next/image'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { FaDownload } from 'react-icons/fa'; 
import { faChevronDown } from 'react-icons/fa';

const EducationsModal = ({ openItems, educationsTable, onClose }) => { 
    console.log(openItems); 
    console.log(educationsTable); 

    const selectedEducation = educationsTable.find(item => item.name === openItems); 

    console.log(selectedEducation)
    return ( 
        <div className={styles.modalBackdrop} onClick={onClose}> 
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}> 
                {selectedEducation ? ( 
                    <div className={styles.imageDiv}> 
                        <button onClick={onClose} className={styles.closeButton}> 
                            <Image src="/images/icons8-close-50.png" width={20} height={30}/>
                        </button> 
                        <button className={styles.downloadButton}> 
                            <Image src="/images/icons8-download-50.png" width={22} height={30}/>
                    
                        </button> 
                        <Image src={selectedEducation.educationsCertificatePath} width={500} height={200} fetchPriority='high' className={styles.image} /> 
                    </div> 
                ) : ( 
                    <h1>Keine Informationen verfügbar</h1> 
                )} 
            </div> 
        </div> 
    ); 
}; 

export default EducationsModal;