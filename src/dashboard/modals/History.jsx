import React from 'react'
import styles from './History.module.scss'
import CloseIcon from '@mui/icons-material/Close';


const History = ({active, click}) => {
    
  return (
    <div className={styles.main}>
        <div className={styles.background} onClick={click}>
        </div>
        <section className={`${styles.history} ${active ? styles.active : ''}`}>
            <button className={styles.cancel} onClick={click}><CloseIcon className={styles.icon}/></button>
            <h1>History</h1>
        </section>
    </div>
  )
}

export default History;