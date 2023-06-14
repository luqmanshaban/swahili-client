import React from 'react'
import styles from './Account.module.scss'

const Account = ({active, click}) => {
    
  return (
    <div className={styles.main}>
        <div className={styles.background} onClick={click}>
        <section className={`${styles.account} ${active ? styles.active : ''}`}>
            <h1>Account</h1>
        </section>
    </div>
    </div>
  )
}

export default Account;