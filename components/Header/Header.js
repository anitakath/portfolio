import { useEffect, useState} from 'react'
import { useCallback } from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll'
//REDUX
import { useDispatch, useSelector } from 'react-redux'
import { setLanguage } from '@/store/languageSlice'
//STYLES + FONT AWESOME
import styles from '../../styles/Header/Header.module.css'
import { FaChevronUp } from "react-icons/fa";

const Header = () =>{
  const dispatch = useDispatch()
  const currentLanguage = useSelector((state) => state.language.currentLanguage)
  const [aboutMe, setAboutMe] = useState('ÜBER MICH')
  const [contact, setContact] = useState('KONTAKT')

 
  useEffect(()=>{
    if (currentLanguage === "ENGLISH") {
      setAboutMe("ABOUT ME");
      setContact("CONTACT");
    } else if (currentLanguage === "GERMAN") {
      setAboutMe("ÜBER MICH");
      setContact("KONTAKT");
    } else if (currentLanguage === "SPANISH") {
      setAboutMe("SOBRE MI");
      setContact("CONTACTO");
    }
    
  }, [])

  const selectLanguageHandler = (language) =>{

    if(language === 'GERMAN'){
      dispatch(setLanguage("GERMAN"));
      setAboutMe("ÜBER MICH");
      setContact("KONTAKT");
    } else if(language === 'ENGLISH'){
      dispatch(setLanguage("ENGLISH")); 
      setAboutMe("ABOUT ME")
      setContact("CONTACT");
    } else if(language === 'SPANISH'){ 
      dispatch(setLanguage("SPANISH"));
      setAboutMe("SOBRE MI")
      setContact("CONTACTO");
    }
  }

  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

    
    const onScroll = useCallback((event) => {
      const { pageYOffset, scrollY } = window;
     
      setScrollY(window.pageYOffset);
    }, []);

    useEffect(() => {
      //add eventlistener to window
      window.addEventListener("scroll", onScroll, { passive: true });
      // remove event on unmount to prevent a memory leak with the cleanup
      return () => {
        window.removeEventListener("scroll", onScroll, { passive: true });
      };
    }, []);


    useEffect(()=>{
       if (scrollY >= 150) {
         setIsVisible(true);
       } else if ( scrollY <= 150){
         setIsVisible(false)
       }
    }, [scrollY])

  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const openMobileMenuHandler = () =>{

    setShowMobileMenu(!showMobileMenu)
  }





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
          <div>
            <button onClick={() => selectLanguageHandler("GERMAN")}>🇩🇪</button>
          </div>
          <div>
            <button onClick={() => selectLanguageHandler("ENGLISH")}>🇬🇧</button>
          </div>
          <div>
            <button onClick={() => selectLanguageHandler("SPANISH")}>🇪🇸</button>
          </div>
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
          <div className={styles.mobileMenuContainer}>
            <button
              className={styles.menu_button}
              onClick={openMobileMenuHandler}
            >
              menu
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
        />
      </div>
    </div>
  );
}

export default Header;