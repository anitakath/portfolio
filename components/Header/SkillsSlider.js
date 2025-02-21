import styles from './SkillsSlider.module.css';
import { motion } from 'framer-motion';

const SkillsSlider = ({ windowWidth, skills }) => {
  const slideDirection = 'right'; // Du kannst die Richtung hier anpassen

  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        {windowWidth <= 1000 ? (
          skills.map(({ name, logo }) => (
            <motion.div
              key={name}
              className={styles.skillsDiv}
              initial={{ x: slideDirection === 'right' ? '-100%' : '100%' }}
              animate={{ x: slideDirection === 'right' ? '100%' : '-100%' }}
              exit={{ x: slideDirection === 'right' ? '100%' : '-100%' }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <div className={styles.backgroundCircle}></div>
              <img src={logo} alt={name} className='h-full' />
            </motion.div>
          ))
        ) : (
          skills.map(({ name, logo }) => (
            <div key={name} className={styles.skillsDiv}>
              <img src={logo} alt={name} className='h-full' />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SkillsSlider;