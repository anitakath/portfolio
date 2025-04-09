import styles from '../../styles/UI/LanguageSwitcher.module.css'
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { setLanguage } from '@/store/languageSlice';

const LanguageSwitcher = ({ isHovered, languageMap }) => {

    const currentLanguage = useSelector((state) => state.language.currentLanguage)
    const dispatch = useDispatch();

    const toggleLanguage = () =>{

        if(currentLanguage === "GERMAN"){
            dispatch(setLanguage("ENGLISH"))

        } else if(currentLanguage === "ENGLISH"){
            dispatch(setLanguage("GERMAN"))

        }

    }

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isHovered ? 1 : 1 }}
            transition={{ duration: 0.5 }} 
        >
       
            <button  className={styles.language_btn} onClick={() => toggleLanguage()}>
                {currentLanguage === "GERMAN" ?  "🇬🇧" : "🇩🇪"}
            </button>
        </motion.div>
    );
};

export default LanguageSwitcher;