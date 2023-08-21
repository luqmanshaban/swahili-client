import React, { useState } from 'react'
import styles from './Account.module.scss'
import CustomerProfilePic from './CustomerProfilePic';
import ProfileNav from './ProfileNav';
import DetailsComponent from './components/DetailsComponet'
import Billing from './components/BillingComponent'
import MessagesComponent from './components/MessagesComponent'
import CloseIcon from '@mui/icons-material/Close';


const Account = ({active, click}) => {
  const [activeComponent, setActiveComponent] = useState([true, false, false])

    const toggleComponent = index => setActiveComponent(activeComponent.map((value, i) => i === index))
    
  return (
    <div className={styles.main}>
        <div className={styles.background} onClick={click}>
        </div>
        <section className={`${styles.account} ${active ? styles.active : ''}`}>
        <button className={styles.cancel} onClick={click}><CloseIcon className={styles.icon}/></button>
            {/* <h1>Account</h1> */}
            <CustomerProfilePic />
            <article>
              <ProfileNav toggle={toggleComponent} active={active={activeComponent}}/>
              <hr />
            {activeComponent[0] && < DetailsComponent/>}
            {activeComponent[1] && <Billing />}
            {activeComponent[2] && <MessagesComponent />}
            </article>
        </section>
    </div>
  )
}

export default Account;