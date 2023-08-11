import React from 'react'
import styles from './History.module.scss'

const History = ({active, click}) => {
    
  return (
    <div className={styles.main}>
        <div className={styles.background} onClick={click}>
        <section className={`${styles.history} ${active ? styles.active : ''}`}>
            <h1>History</h1>
        </section>
    </div>
    </div>
  )
}

export default History;