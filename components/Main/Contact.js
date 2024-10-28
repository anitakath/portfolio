


//STYLES 
import styles from '../../styles/Main/Main.module.css'
import { FaPhone, FaEnvelope, FaInstagram, FaTiktok } from "react-icons/fa";

import Link from 'next/link';

const Contact = () =>{


   const handleEmailClick = () => {
     window.location.href = "mailto:example@example.com"; // Ersetze example@example.com durch deine E-Mail-Adresse
   };

    const handlePhoneClick = () => {
      window.location.href = "tel:1234567890"; // Ersetze 1234567890 durch deine Telefonnummer
    };


    return (
      <div className="sub_container" id="contact">
        <div className={styles.flexContainer}>
          <div>
            <FaPhone className={styles.icon} onClick={handlePhoneClick} />
            <p> +49 17632951307 </p>
          </div>
          <div>
            <FaEnvelope className={styles.icon} onClick={handleEmailClick} />
            <p> wagner.annekathrin@gmx.de</p>
          </div>
          <div>
            <Link href="https://www.instagram.com/ankaath/">
              <FaInstagram className={styles.icon} />
            </Link>

            <p> ankaath </p>
          </div>
          <div>
            <Link href="https://www.tiktok.com/@ankaathh">
              <FaTiktok className={styles.icon} />
            </Link>

            <p> ankaathh </p>
          </div>
        </div>
      </div>
    );
}

export default Contact;