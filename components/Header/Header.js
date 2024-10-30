import { useEffect, useState} from 'react'
import { useCallback } from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll'
//REDUX
import { useDispatch, useSelector } from 'react-redux'
import { setLanguage } from '@/store/languageSlice'
//STYLES + FONT AWESOME
import styles from '../../styles/Header/Header.module.css'
import { FaChevronUp, FaBars } from "react-icons/fa";

const languageMap = {
  GERMAN: { aboutMe: "ÜBER MICH", contact: "KONTAKT" },
  ENGLISH: { aboutMe: "ABOUT ME", contact: "CONTACT" },
  SPANISH: { aboutMe: "SOBRE MI", contact: "CONTACTO" },
};

const Header = ({showMobileMenu, setShowMobileMenu, openMobileMenuHandler, isVisible, setIsVisible}) =>{
  const dispatch = useDispatch()
  const currentLanguage = useSelector((state) => state.language.currentLanguage)

  const [aboutMe, setAboutMe] = useState(
    languageMap[currentLanguage]?.aboutMe || "ÜBER MICH"
  );
  const [contact, setContact] = useState(
    languageMap[currentLanguage]?.contact || "KONTAKT"
  );

   const updateLanguage = (language) => {
     dispatch(setLanguage(language));
     setAboutMe(languageMap[language].aboutMe);
     setContact(languageMap[language].contact);
   };



  //const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const onScroll = useCallback(() => {
   setScrollY(window.pageYOffset);
   setIsVisible(window.pageYOffset >= 150);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);




  //const [showMobileMenu, setShowMobileMenu] = useState(false);




  /*
  const openMobileMenuHandler = () =>{

    setShowMobileMenu(!showMobileMenu)
  }*/





  return (
    <div id="header">
      <div className={styles.header_row}>
        <div className={styles.title_container}>
          <h1> ANNE-KATHRIN WAGNER </h1>
          <h3> NOT ANNA </h3>
        </div>

        <div className={styles.upContainer}>
          <Link to="header" smooth={true} duration={500} className={styles.up}>
            <FaChevronUp />
          </Link>
        </div>

        <div className={styles.navigationContainer}>
          <ul>
            <div>
              <li>
                <Link to="aboutMe" smooth={true} duration={500}>
                  {aboutMe}
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link to="portfolio" smooth={true} duration={500}>
                  PORTFOLIO
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link to="contact" smooth={true} duration={500}>
                  {contact}
                </Link>
              </li>
            </div>
          </ul>
        </div>

        <div className={styles.language}>
          {Object.keys(languageMap).map((lang) => (
            <button key={lang} onClick={() => updateLanguage(lang)}>
              {lang === "GERMAN" ? "🇩🇪" : lang === "ENGLISH" ? "🇬🇧" : "🇪🇸"}
            </button>
          ))}
        </div>
        {isVisible && (
          <div className={styles.menuContainer}>
            <ul>
              <li>
                <Link to="aboutMe" smooth={true} duration={500}>
                  {aboutMe}
                </Link>
              </li>
              <li>
                <Link to="portfolio" smooth={true} duration={500}>
                  PORTFOLIO
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500}>
                  {contact}
                </Link>
              </li>
            </ul>
          </div>
        )}

        {isVisible && (
          <div
            className={`${
              showMobileMenu
                ? styles.mobileMenuContainer_open
                : styles.mobileMenuContainer_closed
            }`}
          >
            <button
              className={styles.menu_button}
              onClick={openMobileMenuHandler}
            >
              <FaBars
                className={`${
                  showMobileMenu ? styles.menu_icon_up : styles.menu_icon_closed
                }`}
              />
            </button>
            {showMobileMenu && (
              <div className={styles.mobileMenu}>
                <ul>
                  <li>
                    <Link to="aboutMe" smooth={true} duration={500}>
                      {aboutMe}
                    </Link>
                  </li>
                  <li>
                    <Link to="portfolio" smooth={true} duration={500}>
                      PORTFOLIO
                    </Link>
                  </li>
                  <li>
                    <Link to="contact" smooth={true} duration={500}>
                      {contact}
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>

      <div className={styles.headerImage_row}>
        <Image
          src="/images/portrait_example.jpg"
          height={1400}
          width={1400}
          className={styles.portrait}
          alt={"a portrait of me"}
        />
      </div>
    </div>
  );
}

export default Header;