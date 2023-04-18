import React from 'react';

import styles from '../../STYLES/Sidebar.module.scss'
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
        <h2>Swahili Plate</h2>
        <h5>Dashboard</h5>

            <Link to='/account-information' >
            Account Information
            </Link>
            <Link to='/order-history' >
            Order History
            </Link>
            <Link to='/promotions' >
            Promotions
            </Link>
            <Link to='/reservation' >
            Reservation
            </Link>
            <Link to='/contact' >
            Contact Us
            </Link>
            <Link to='/login' className={styles.logout}>
            Logout
            </Link>
    </div>
  )
}

export default Sidebar;