import { useEffect, useState } from 'react';
import { useCallback } from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll'; // REDUX
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '@/store/languageSlice'; // STYLES + FONT AWESOME
import styles from '../../styles/Header/Header.module.css';
import { FaChevronUp, FaGlobe } from "react-icons/fa";

const languageMap = {
    GERMAN: { aboutMe: "ÜBER MICH", contact: "KONTAKT" },
    ENGLISH: { aboutMe: "ABOUT ME", contact: "CONTACT" },
    SPANISH: { aboutMe: "SOBRE MI", contact: "CONTACTO" },
};

const Header = ({ showMobileMenu, setShowMobileMenu, openMobileMenuHandler, isVisible, setIsVisible }) => {
    const dispatch = useDispatch();
    const currentLanguage = useSelector((state) => state.language.currentLanguage);

    const [aboutMe, setAboutMe] = useState(languageMap[currentLanguage]?.aboutMe || "ÜBER MICH");
    const [contact, setContact] = useState(languageMap[currentLanguage]?.contact || "KONTAKT");
    const [isLanguageVisible, setIsLanguageVisible] = useState(false);

    const toggleLanguageVisibility = () => {
        setIsLanguageVisible((prev) => !prev);
    };

    const updateLanguage = (language) => {
        dispatch(setLanguage(language));
        setAboutMe(languageMap[language].aboutMe);
        setContact(languageMap[language].contact);
        setIsLanguageVisible(false); // Schließe das Sprachmenü nach Auswahl
    };

    const [scrollY, setScrollY] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);

    const onScroll = useCallback(() => {
        setScrollY(window.pageYOffset);
        setIsVisible(window.pageYOffset >= 150);
    }, []);

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

    const headerRowStyle = {
        display: 'flex',
        width: '100vw',
        height: scrollY >= 150 ? '13vh' : '20vh',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        transition: '0.2s ease-in',
        backgroundColor: 'var(--foreground-dark)',
        opacity: scrollY >= 150 ? "0.7" : "1"
    };

    const upContainer = {
        position: "fixed",
        left: "20px",
        top: scrollY >= 150 ? "20px" : (windowWidth <= 600 ? "0px" : "50px"),
        width: "50px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bolder",
    };

    // Styles für die Sprache
    const languageStyle = {
        width: "7%",
        display: isLanguageVisible || windowWidth >= 900 ? "flex" : "none",
        justifyContent: "center",
        margin: "0px 40px",
        position:  'absolute',
        top: windowWidth >= 900 ? '55px' : (windowWidth <= 600 ? '0px' : '50px'), 
        right: "5px", 
    };

    const mobileLanguageButtonStyle = {
      display: windowWidth < 900 ? (isLanguageVisible ? 'none' : 'inline-block') : 'none', 
      position: 'absolute', 
      top: windowWidth <= 600 ? '10px' : '63px', 
      right: '20px', 
      opacity: isLanguageVisible || windowWidth >= 900 ? '0.3' : '1'
   };

   return (
       <div id="header">
           <div className={styles.header_space}>
               <div className={styles.header_row} style={headerRowStyle}>
                   <div className={styles.title_container}>
                       <h1> ANNE-KATHRIN WAGNER </h1>
                       <h3> NOT ANNA </h3>
                   </div>
                   <div style={upContainer}>
                       <Link to="header" smooth={true} duration={500} className={styles.up}>
                           <FaChevronUp />
                       </Link>
                   </div>
                   <div className={styles.navigationContainer}>
                       <ul>
                           <li><Link to="aboutMe" smooth={true} duration={500}>{aboutMe}</Link></li>
                           <li><Link to="portfolio" smooth={true} duration={500}>PORTFOLIO</Link></li>
                           <li><Link to="contact" smooth={true} duration={500}>{contact}</Link></li>
                       </ul>
                   </div>

                   {/* Sprachumschaltung */}
                   <div style={languageStyle}>
                       {Object.keys(languageMap).map((lang) => (
                           <button key={lang} onClick={() => updateLanguage(lang)} className={styles.language_btn}>
                               {lang === "GERMAN" ? "🇩🇪" : lang === "ENGLISH" ? "🇬🇧" : "🇪🇸"}
                           </button>
                       ))}
                   </div>

                   {/* Globus Button */}
                   <button onClick={toggleLanguageVisibility} style={mobileLanguageButtonStyle}>
                       <FaGlobe />
                   </button>
               </div>
           </div>

           {/* Header-Bild */}
           <div className={styles.headerImage_row}>
               <Image src="/images/portrait_example.jpg" height={1400} width={1400} className={styles.portrait} alt={"a portrait of me"} />
           </div>
       </div>
   );
};

export default Header;