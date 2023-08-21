import React from 'react'
import styles from './Messages.module.scss'
import CloseIcon from '@mui/icons-material/Close';

const Messages = ({active, click}) => {
    
  return (
    <div className={styles.main}>
        <div className={styles.background} onClick={click}>
        </div>
        <section className={`${styles.Messages} ${active ? styles.active : ''}`}>
            <button className={styles.cancel} onClick={click}><CloseIcon className={styles.icon}/></button>
            <h1>Messages</h1>
        </section>
    </div>
  )
}

export default Messages;