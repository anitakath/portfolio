
import styles from '../AboutMe.module.css'
import { motion } from 'framer-motion'

const Skills = ({data}) =>{


    return(
        <div>

            {data.skillstable && data.skillstable.map((skillGroup) => (
             <div key={skillGroup.title}>
              <h2>{skillGroup.title}</h2>
              {skillGroup.table.length > 0 && (
                <ul className={styles.table}>
                  {skillGroup.table.map((skillCategory) => (
                    <li key={skillCategory.category} className="m-2 mb-4">
                      <button
                        className={styles.listItemButton}
                        onClick={(event) => toggleSkills(event, skillCategory.category)}
                        style={{ border: 'none', padding: 0, cursor: 'pointer' }}
                      >
                        <strong>{skillCategory.category}</strong>
                      </button>
                 
                      <motion.div 
                           className={styles.detailsContainer}
                           initial={{ opacity: 0, height: 0 }} 
                           animate={{ opacity: 1, height: 'auto' }} 
                           exit={{ opacity: 0, height: 0 }} 
                           transition={{ duration: 0.3 }} 
                       >
                         {visibleSkills[skillCategory.category] && (
                            <ul className="mt-2  border-2">
                              {skillCategory.items.map((item, itemIndex) => (
                                <li key={itemIndex} className={styles.categoryDescription}>{item}</li>
                              ))}
                            </ul>
                          )}
                       </motion.div>
                     
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

        </div>
        
    )
}

export default Skills