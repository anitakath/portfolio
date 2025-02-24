import { useState } from 'react';
import styles from './Education.module.css';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Link from 'next/link';
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
    let noFileInfo = ""


    if (currentLanguage === "GERMAN") {
        downloadText = "Datei herunterladen",
        enlargeText = "Datei vergößern"
        noFileInfo = "bisher noch keine Datei hinterlegt..."
    } else if (currentLanguage === "ENGLISH") {
        downloadText = "Download file";
        enlargeText = "Enlarge file";
        noFileInfo = "no file stored yet..."
    } else if (currentLanguage === "SPANISH") {
        downloadText = "Descargar archivo";
        enlargeText = "Ampliar archivo";
        noFileInfo = "ningún archivo almacenado todavía.."
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
                            {education.subTitle && (
                                 <span className={styles.titleSpan}> {education.subTitle} </span>
                            )}
                           
                        </button>
                        {/* Check if the current education is the selected one */}
                        {openItems === education.name && (
                           
                           <motion.div 
                           className={styles.detailsContainer}
                           initial={{ opacity: 0, height: 0 }} 
                           animate={{ opacity: 1, height: 'auto' }} 
                           exit={{ opacity: 0, height: 0 }} 
                           transition={{ duration: 0.3 }} 
                       >
                           <div className='w-full relative flex items-center justify-center'>
                            
                               {education.educationsCertificatePath && (
                                   <div className={styles.detailsDiv}>
                                       <Image 
                                           src={education.educationsCertificatePath}
                                           width={200}
                                           height={200}
                                           className={styles.certificateImage}
                                           alt="educations details infos"
                                       />
                                       <div className={styles.downloadLinkDiv}>
                                           <p className={styles.description}> {education.description}</p>
                                           {/*<button
                                               className={styles.downloadLink}
                                               download
                                           >
                                               {downloadText}
                                           </button> */}

                                           <button 
                                               className={styles.enlargeLink} 
                                               onClick={(event) => handleEnlargeClick(event)}
                                           >
                                               {enlargeText}
                                           </button>
                                       </div>
                                   </div>
                               )}
                               {!education.educationsCertificatePath && (
                                <div className='w-full relative flex-col justify-center items-center'>
                                   <p className={styles.noFileInfo}> {noFileInfo} </p>
                                  
                                </div>
                               )}

                                {education.educationsPlatformPath && (
                                    <Link href={education.educationsPlatformPath} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        <img 
                                            src="/gifs/icons8-link.gif" 
                                            alt="Udemy Link" 
                                            style={{ width: '20px', height: '20px' }} 
                                            className={styles.linkGif}
                                        />
                                        <span> udemy </span>
                                    </Link>
                                )}

                           </div>
                       </motion.div>
                        )}
                    </li>
                ))}
            </ul>


             {/* EducationsModal */}
             {isModalOpen && (
                <EducationsModal 
                    onClose={closeModal} 
                    openItems={openItems} 
                    educationsTable={educationsTable}
                />
            )}
        </div>
    );
};

export default Education;