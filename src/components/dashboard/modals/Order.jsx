import React from 'react'
import styles from './Order.module.scss'

const Order = ({active, click}) => {
    
  return (
    <div className={styles.main}>
        <div className={styles.background} onClick={click}>
        <section className={`${styles.orders} ${active ? styles.active : ''}`}>
            <h1>Orders</h1>
        </section>
    </div>
    </div>
  )
}

export default Order