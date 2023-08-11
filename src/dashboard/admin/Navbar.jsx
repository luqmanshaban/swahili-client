import React, { useState } from 'react'
import styles from './Navbar.module.scss'
import { Link } from 'react-router-dom'
import AdminLogout from './AdminLogout'
import UsersIcon from '@mui/icons-material/Group';
import OrdersIcon from '@mui/icons-material/CircleNotifications';
import AllIcon from '@mui/icons-material/AllInclusive';
import AnalyticsIcon from '@mui/icons-material/SignalCellularAlt';
import AccountIcon from '@mui/icons-material/AccountCircle';
import userImage from '../../assets/avatar.jpeg'

const Navbar = () => {
    const [active, setActive] = useState(false)
    const toggleActive = () => {
      setActive(!active)
    }
  
    const unToggleActive = () => {
      setActive(false)
    }
  return (
    <>
    <ul className={`${styles.hamburger} ${active ? styles.active : ''}`} onClick={toggleActive}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </ul>
      <Link to='/admin'>
        <h1>Admin</h1>
      </Link>
      <nav className={`${active ? styles.active : ''}`}>
        <h6>Swahili Plate</h6>
        <ul className={styles.navMenu}>
          <li onClick={unToggleActive}>
            <button className={styles.btn}>
                <OrdersIcon />
                ORDERS
            </button>
          </li>
          <li onClick={unToggleActive}>
            <button className={styles.btn}>
                <AllIcon />
                History
            </button>
          </li>
          <li onClick={unToggleActive}>
            <button className={styles.btn}>
                <UsersIcon id={styles.Icons}/>
                USERS
            </button>
          </li>
          <li onClick={unToggleActive}>
            <button className={styles.btn}>
                <AnalyticsIcon />
                Analytics
            </button>
          </li>
          <li onClick={unToggleActive}>
            <button className={styles.btn}>
                <AccountIcon />
                Account
            </button>
          </li>
          <li onClick={unToggleActive}>
            <button id={styles.accImg}>
              <img src={userImage} alt="img" height={50} />
            </button>
          </li>
          <li onClick={unToggleActive}>
            <AdminLogout />
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar