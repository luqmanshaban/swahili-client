import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import styles from './PaymentSuccess.module.scss'

const PaymentSuccess = () => {
  return (
    <div className={styles.success}>
        <CheckCircleIcon id={styles.icon}/>
        <h1>payment successful</h1>
    </div>
  )
}

export default PaymentSuccess