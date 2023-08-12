import React from 'react'
import styles from './ProfileNav.module.scss'

const ProfileNav = ({toggle, active}) => {
  return (
    <nav className={styles.ProfileNav}>
        <ul>
            <li onClick={() => toggle(0)} className={`${active[0] ? styles.active : ''}`}>Account Settings</li>
            <li onClick={() => toggle(1)} className={`${active[1] ? styles.active : ''}`}>Billing</li>
            <li onClick={() => toggle(2)} className={`${active[2] ? styles.active : ''}`}>Messages</li>
        </ul>
    </nav>
  )
}

export default ProfileNav