
//STYLES 
import styles from '../../styles/Main/Main.module.css'
import { FaPhone, FaEnvelope, FaInstagram, FaTiktok } from "react-icons/fa";
//REDUX
import { useSelector } from 'react-redux';


const Contact = () =>{


  const handleEmailClick = () => {
   window.location.href = "mailto:example@example.com"; // Ersetze example@example.com durch deine E-Mail-Adresse
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:1234567890"; // Ersetze 1234567890 durch deine Telefonnummer
  };

  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );

  let title = ""

  if(currentLanguage === "GERMAN"){
    title = "KONTAKTIERE MICH"
  } else if ( currentLanguage === "ENGLISH"){
    title = "CONTACT ME"
  } else if ( currentLanguage === "SPANISH"){
    title = "CONTÁCTAME / PÓNGASE EN CONTACTO CONMIGO";
  }


  return (
      <div className={styles.flexContainer} id="contact">
        <div>
          <FaPhone className={styles.icon} onClick={handlePhoneClick} />
          <p> +49 17632951307 </p>
        </div>
        <div>
          <FaEnvelope className={styles.icon} onClick={handleEmailClick} />
          <p> wagner.annekathrin@gmx.de</p>
        </div>
        {/*}
        <div>
          <Link
            href="https://www.instagram.com/ankaath/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className={styles.icon} />
          </Link>

          <p> ankaath </p>
        </div>
        <div>
          <Link
            href="https://www.tiktok.com/@ankaathh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok className={styles.icon} style={{ cursor: "pointer" }} />
          </Link>

          <p> ankaathh </p>
        </div> 
        */}
      </div>

  );
}

export default Contact;