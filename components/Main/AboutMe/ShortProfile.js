

import styles from './Shortprofile.module.css'

const ShortProfile = ({data}) =>{

    const description = data.description

    return(
        <div className='flex justify-center overflow-scroll'>

        <p className={styles.description} >{description}</p>

        </div>
    )
}

export default ShortProfile