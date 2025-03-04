
import styles from '../AboutMe.module.css'


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
                      {visibleSkills[skillCategory.category] && (
                        <ul className="mt-2">
                          {skillCategory.items.map((item, itemIndex) => (
                            <li key={itemIndex} className={styles.categoryDescription}>{item}</li>
                          ))}
                        </ul>
                      )}
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