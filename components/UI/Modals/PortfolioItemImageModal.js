import styles from './PortfolioItemImageModal.module.css'; // Importiere deine CSS-Datei 
import Image from 'next/image'; 

const PortfolioItemImageModal = ({ openItems, educationsTable, onClose }) => { 
   

    console.log(openItems)
    return ( 
        <div className={styles.modalBackdrop} onClick={onClose}> 
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}> 
                <button onClick={onClose} className={styles.closeButton}> 
                    <Image src="/images/icons8-close-50.png" width={20} height={30} alt="educations details"/>
                </button> 

                <Image 
                    src={openItems} 
                    width={600} 
                    height={600} 
                    alt="enlarged image"
                    className={styles.enlargedImage}
                />


                <div className={styles.detailedInformationsContainer}> 
                    
                </div>
                
            </div> 
        </div> 
    ); 
}; 

export default PortfolioItemImageModal;