import { useState } from 'react';
import styles from './Education.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector } from 'react-redux';
//COMPONENTS
import EducationsModal from '@/components/UI/Modals/EducationsModal';

const Education = ({ data }) => {
    const [openItems, setOpenItems] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const educationsTable = data.educationsTable;
    const currentLanguage = useSelector((state) => state.language.currentLanguage);


    const toggleEducation = (event, name) => {
        event.stopPropagation();
        // Toggle the open item; if it's already open, close it
        setOpenItems(prev => (prev === name ? null : name));
    };

    let downloadText= "";
    let enlargeText = "";


    if (currentLanguage === "GERMAN") {
        downloadText = "Datei herunterladen",
        enlargeText = "Datei vergößern"
    } else if (currentLanguage === "ENGLISH") {
        downloadText = "Download file";
        enlargeText = "Enlarge file";
    } else if (currentLanguage === "SPANISH") {
        downloadText = "Descargar archivo";
        enlargeText = "Ampliar archivo";
    }

    // Handler zum Öffnen des Modals
    const handleEnlargeClick = (event) => {
        event.stopPropagation();
        setIsModalOpen(true);
    };

    // Handler zum Schließen des Modals
    const closeModal = () => {
        setIsModalOpen(false);
    };


    return (
        <div className={styles.container}>
            <ul className='px-2'>
                {educationsTable && educationsTable.map((education) => (
                    <li key={education.name} className={styles.listItem}>
                        <button className={styles.itemButton} onClick={(event) => toggleEducation(event, education.name)}>
                            <strong>{education.name}</strong>
                        </button>
                        {/* Check if the current education is the selected one */}
                        {openItems === education.name && (
                            <div className={styles.detailsContainer}>
                               
                               {/* <p>Zertifikatspfad: {education.educationsZertificatePath || "Kein Zertifikatspfad verfügbar"}</p>*/}
                                {/* Füge hier weitere Details hinzu, falls vorhanden */}
                                <div className='w-full flex items-center'>
                                    <Image
                                            src="/images/portfolio/aec/example.jpg"
                                            width={200}
                                            height={200}
                                            alt={`Zertifikat für ${education.name}`}
                                            className={styles.certificateImage}
                                            onError={(e) => {
                                                e.target.onerror = null; 
                                                e.target.src='/path/to/default/image.jpg'; // Optional: Fallback image
                                            }}
                                    />
                                    <div
                                        className={styles.downloadLinkDiv}
                                    >
                                        <p className={styles.downloadLinkDivDescription}> {education.description}</p>
                                        <button
                                            className={styles.downloadLink}
                                            /*href={`images/education/Zertifikat-${education.name}.jpg`} */
                                            download
                                        >
                                            {downloadText}
                                        </button>

                                        <button 
                                            className={styles.downloadLink} 
                                            onClick={(event) => handleEnlargeClick(event)}
                                        >
                                            {enlargeText}
                                        </button>
                                      
                                    </div>
                                   
                                    
                                </div>
                                
                            </div>
                        )}
                    </li>
                ))}
            </ul>


             {/* EducationsModal */}
             {isModalOpen && (
                <EducationsModal onClose={closeModal} openItems={openItems} educationsTable={educationsTable}/>
            )}
        </div>
    );
};

export default Education;