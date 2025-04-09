import { useEffect, useState, useRef} from 'react';
import { useCallback } from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll'; // REDUX
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '@/store/languageSlice'; // STYLES + FONT AWESOME
import styles from '../../styles/Header/Header.module.css';
import { motion } from 'framer-motion';
//COMPONENTS
import ScrollIndicator from './ScrollIndicator';
import MenuButton from '../UI/MenuButton';
import useSkills from '@/custom-hooks/useSkills';

//CUSTOM HOOK
import useNavigation from '@/custom-hooks/useNavigation';

const languageMap = {
    GERMAN: { 
        aboutMe: "ÜBER MICH", 
        contact: "KONTAKT",
        headerInformation: {
            subTitle: "Ich pflege, tanze und erschaffe",
            description: "Ich erstelle moderne, dynamische und benutzerfreundliche Webanwendungen für jeden Bedarf"
        }
    },
    ENGLISH: { 
        aboutMe: "ABOUT ME", 
        contact: "CONTACT",
        headerInformation: {
            subTitle: "I care, dance, and create",
            description: "I craft modern, dynamic and user-friendly web applications for every need"
        } 
    },
    /*SPANISH: { 
        aboutMe: "SOBRE MI", 
        contact: "CONTACTO",
        headerInformation: {
            subTitle: "Cuido, bailo y creo",
            description: "Creo aplicaciones web modernas, dinámicas y fáciles de usar para cada necesidad"
        }
    },*/
};

const Header = ({ showMobileMenu, setShowMobileMenu, openMobileMenuHandler, }) => {
    const dispatch = useDispatch();
    const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
    const subtitles = ["NOT ANNA", "ANUSHKA", "ANITA"];
    const currentLanguage = useSelector((state) => state.language.currentLanguage);
    const [aboutMe, setAboutMe] = useState(languageMap[currentLanguage]?.aboutMe || "ÜBER MICH");
    const [contact, setContact] = useState(languageMap[currentLanguage]?.contact || "KONTAKT");
    const [isLanguageVisible, setIsLanguageVisible] = useState(false);
    const toggleLanguageVisibility = () => {
        setIsLanguageVisible((prev) => !prev);
    };
    //const [headerInformation, setHeaderInformation] = useState({subTitle: "Ich pflege, tanze und erschaffe", description: "Ich erstelle moderne, dynamische und benutzerfreundliche Webanwendungen für jeden Bedarf"})
    const [headerInformation, setHeaderInformation] = useState(languageMap[currentLanguage]?.headerInformation || languageMap.DEUTSCH.headerInformation);
    const [isHovered, setIsHovered] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);
    const [slideDirection, setSlideDirection] = useState('right');
    const {skills} =useSkills();
    const [isVisible, setIsVisible] = useState(false);


    const onScroll = useCallback(() => {
        setScrollY(window.pageYOffset);
        setIsVisible(window.pageYOffset >= 150);
    }, []);

    const updateLanguage = (language) => {

        dispatch(setLanguage(language));
        setAboutMe(languageMap[language].aboutMe);
        setContact(languageMap[language].contact);
        setHeaderInformation(languageMap[language].headerInformation);

        setIsLanguageVisible(false); 
    };

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        handleResize(); // Setze die Fensterbreite beim ersten Laden

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, [onScroll]);


    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSubtitleIndex((prevIndex) => (prevIndex + 1) % subtitles.length);
        }, 3000); // Wechselt alle 3 Sekunden

        return () => clearInterval(intervalId); // Bereinige den Interval beim Unmount
    }, []);

    
    const headerRowStyle = {
        display: 'flex',
        width: '100vw',
        height: scrollY >= 150 ? '7vh' : '10vh',
        alignItems: 'center',
        position: 'fixed',
        transition: '0.2s ease-in',
        opacity: scrollY >= 150 ? "0.7" : "1",
        zIndex: "10000",
    };

   const handleScroll = () => {
       const headerElement = document.getElementById('header');
       if (headerElement) {
           const rect = headerElement.getBoundingClientRect();
           if (rect.top <= window.innerHeight && rect.bottom >= 0) {
               setIsVisible(true);
               window.removeEventListener('scroll', handleScroll); // Entferne Event Listener nach dem ersten Trigger
           }
       }
   };

   useEffect(() => {
        // Überprüfe Sichtbarkeit beim ersten Rendern
        handleScroll();

        // Füge Event Listener für Scrollen hinzu
        window.addEventListener('scroll', handleScroll);

        // Bereinige den Event Listener bei Unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    useEffect(() => {
        let intervalId;

        if (windowWidth <= 1000) {
            const slideSkills = () => {
                setSlideDirection(prevDirection => (prevDirection === 'right' ? 'left' : 'right'));
            };

            intervalId = setInterval(slideSkills, 3000); // Ändere alle 3 Sekunden
        }

        return () => clearInterval(intervalId);
    }, [windowWidth]);
    



    

   return (
       <div id="header" className='h-screen overflow-hidden w-full relative'>
        <ScrollIndicator />
        <div className={styles.header_space}>
               <div className={styles.header_row} style={headerRowStyle}>
                   <div className={styles.title_container}>
                       <h1> ANNE-KATHRIN WAGNER </h1>
                       <h3>{subtitles[currentSubtitleIndex]}</h3>
                   </div>
                
                   <div className={styles.navigationContainer}>
                       <ul>
                           <li><Link to="aboutMe" smooth={true} duration={500}>{aboutMe}</Link></li>
                           <li><Link to="portfolio" smooth={true} duration={500}>PORTFOLIO</Link></li>
                           <li><Link to="contact" smooth={true} duration={500}>{contact}</Link></li>
                       </ul>
                   </div>
                  
                   <MenuButton isHovered={isHovered} setIsHovered={setIsHovered}/>
                 
                   {/* Sprachumschaltung */}
                   {isHovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.5 }} 
                        style={{ position: 'absolute', right: '15px', top:'65px', backgroundColor: 'white' }}
                    >
                        {Object.keys(languageMap).map((lang) => (
                            <button key={lang} onClick={() => updateLanguage(lang)} className={styles.language_btn}>
                                {/*{lang === "GERMAN" ? "🇩🇪" : lang === "ENGLISH" ? "🇬🇧" : "🇪🇸"}*/}
                                {lang === "GERMAN" ? "🇩🇪 " : "🇬🇧 "}
                            </button>
                        ))}
                        </motion.div>
                   )}
               </div>
        </div>



           {/* Header-Bild */}
        <div className={styles.headerImage_row}>
               <Image src="/images/Anne-Kathrin.jpg" height={1400} width={1400} className={styles.portrait} alt={"a portrait of me"} />
               <div className={styles.gradientOverlay}></div> 
               <div className={styles.innerContextContainer}>

                <div className='md:p-12 md:w-6/12 mt-10 relative top-10 left-4'>
                    <h2 className={styles.subTitle}> {headerInformation.subTitle} </h2>
                    {/* CREATE DYNAMIC &  !!*/}
                    <div className={`${styles.andContainer} ${isVisible ? styles.visible : styles.hidden}`}>
                        & 
                    </div>
                    <h1 className={styles.description}> {headerInformation.description}</h1>
                </div>
               
               </div>
        </div>

        <div className={`  ${styles.skillsContainer}`}> 
            {windowWidth <= 1000 ? (
                skills.map(({ name, logo }) => (
                    <motion.div 
                        key={name} 
                        className={styles.skillsDiv} 
                        initial={{ x: slideDirection === 'right' ? '100%' : '-100%' }} 
                        animate={{ x: slideDirection === 'right' ? '-100%' : '100%' }} 
                        transition={{ duration: 10 }}
                    >
                        <div className={styles.backgroundCircle}></div>
                        <img src={logo} alt={name} className='h-full' />
                    </motion.div>
                ))
            ) : (
                skills.map(({ name, logo }) => (
                    <div key={name} className={styles.skillsDiv}>
                        <div className={styles.backgroundCircle}></div>
                        <img src={logo} alt={name} className='h-full' />
                    </div>
                ))
            )}
        </div>
    </div>
   );
};

export default Header;