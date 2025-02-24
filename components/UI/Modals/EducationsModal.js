import styles from './EducationsModal.module.css'; // Importiere deine CSS-Datei 
import Image from 'next/image'; 

const EducationsModal = ({ openItems, educationsTable, onClose }) => { 
    const selectedEducation = educationsTable.find(item => item.name === openItems); 

    return ( 
        <div className={styles.modalBackdrop} onClick={onClose}> 
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}> 
                {selectedEducation ? ( 
                    <div className={styles.imageDiv}> 
                        <button onClick={onClose} className={styles.closeButton}> 
                            <Image src="/images/icons8-close-50.png" width={20} height={30} alt="educations details"/>
                        </button> 
                        {/*
                        <button className={styles.downloadButton}> 
                            <Image src="/images/icons8-download-50.png" width={22} height={30}/>
                    
                        </button> 
                        */}
                        <Image src={selectedEducation.educationsCertificatePath} alt="educations details" width={500} height={200} fetchPriority='high' className={styles.image} /> 
                    </div> 
                ) : ( 
                    <h1>Keine Informationen verfügbar</h1> 
                )} 
            </div> 
        </div> 
    ); 
}; 

export default EducationsModal;