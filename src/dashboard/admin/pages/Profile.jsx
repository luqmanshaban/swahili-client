import React, { useState } from 'react'
import styles from './Profile.module.scss'
import AdminProfilePic from '../components/AdminProfilePic'
import ProfileNav from '../components/ProfileNav';
import DetailsComponent from '../components/DetailsComponet';
import Billing from '../components/BillingComponent';
import MessagesComponent from '../components/MessagesComponent';

const Profile = () => {
    const [activeComponent, setActiveComponent] = useState([true, false, false])

    const toggleComponent = index => setActiveComponent(activeComponent.map((value, i) => i === index))

  return (
    <div className={styles.profileContainer}>
        <section className={styles.details}>
            <article>
                <AdminProfilePic />
            </article>
        </section>
        <section className={styles.update}>
            <ProfileNav toggle={toggleComponent} active={activeComponent}/>
            <hr />
            {activeComponent[0] && <DetailsComponent />}
            {activeComponent[1] && <Billing />}
            {activeComponent[2] && <MessagesComponent />}
        </section>
    </div>
  )
}

export default Profile