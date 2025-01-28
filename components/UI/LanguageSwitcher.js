import styles from '../../styles/UI/LanguageSwitcher.module.css'
import { motion } from 'framer-motion';

const LanguageSwitcher = ({ isHovered, languageMap }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5 }} // Dauer der Animation
            style={{ position: 'absolute', right: '15px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
        >
            {Object.keys(languageMap).map((lang) => (
                <button key={lang} onClick={() => updateLanguage(lang)} className={styles.language_btn}>
                    {lang === "GERMAN" ? "🇩🇪" : lang === "ENGLISH" ? "🇬🇧" : "🇪🇸"}
                </button>
            ))}
        </motion.div>
    );
};

export default LanguageSwitcher;