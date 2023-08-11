import React from 'react'
import styles from './Discount.module.scss'

const Discount = ({active, click}) => {
    
  return (
    <div className={styles.main}>
        <div className={styles.background} onClick={click}>
        <section className={`${styles.discount} ${active ? styles.active : ''}`}>
            <h1>Discount</h1>
        </section>
    </div>
    </div>
  )
}

export default Discount;