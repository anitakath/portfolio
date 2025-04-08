import { useState, useEffect} from 'react';
import Image from 'next/image';
import styles from '../../styles/UI/LanguageSwitcher.module.css'

const MenuButton = ({isHovered, setIsHovered}) => {
    const [hoverTimeout, setHoverTimeout] = useState(null);


    const handleMouseEnter = () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout); 
      }
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
        const timeout = setTimeout(() => {
          setIsHovered(false);
        }, 5000);
        setHoverTimeout(timeout);
    };

    useEffect(() => {
        return () => {
          if (hoverTimeout) {
            clearTimeout(hoverTimeout);
          } 
        };
      }, [hoverTimeout]);

    return (
        <button 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} 
            className={styles.menuButton}
            style={{  background: 'transparent', cursor: 'pointer', marginRight: '30px' }}
        >
            {isHovered ? (
                <Image src="/images/button-icons/icons8-menu-50.png" width={30} height={30} alt="Close Menu" className={styles.menuIcon}/>
            ) : (
                <Image src="/images/button-icons/icons8-menu-50.png" width={30} height={30} alt="Open Menu" className={styles.menuIcon}/>
            )}
        </button>
    );
};

export default MenuButton;