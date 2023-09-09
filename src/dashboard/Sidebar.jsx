import React, { useContext, useEffect, useState } from 'react'
import styles from './Sidebar.module.scss'
import userImage from '../assets/avatar.jpeg'
import OrdersIcon from '@mui/icons-material/CircleNotifications';
import HistoryIcon from '@mui/icons-material/History';
import ChatIcon from '@mui/icons-material/Chat';
import ContactIcon from '@mui/icons-material/ContactSupport';
import Logout from './Logout'
import { Link } from 'react-router-dom'
import { CustomerContext } from '../stores/Customer'
import logo from '../assets/Screenshot from 2023-03-29 11-27-15.png'

const Sidebar = ({toggleComponent}) => {

  const [active, setActive] = useState(false)
  const { profilePic, getProfilePicture } = useContext(CustomerContext)

  const toggleActive = () => {
    setActive(!active)
  }

  const unToggleActive = () => {
    setActive(false)
  }

  useEffect(() => {getProfilePicture()}, [])

  return (
    <aside className={styles.aside}>
      <ul className={`${styles.hamburger} ${active ? styles.active : ''}`} onClick={toggleActive}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </ul>
      <Link to='/dashboard'>
        <img src={logo} alt="logo" id={styles.logo}/>
        <hr />
      </Link>
      <nav className={`${active ? styles.active : ''}`}>
        <h6>Swahili Plate</h6>
        <ul className={styles.navMenu}>
          <li onClick={unToggleActive}>
            <button onClick={() => toggleComponent(0)} className={styles.btn}>
              <OrdersIcon />
              Orders
            </button>
          </li>
          <li onClick={unToggleActive}>
            <button onClick={() => toggleComponent(1)} className={styles.btn}>
              <HistoryIcon />
              History
            </button>
          </li>
          <li onClick={unToggleActive}>
            <button onClick={() => toggleComponent(2)} className={styles.btn}>
              <ContactIcon />
              Contact Us
            </button>
          </li>
          <li onClick={unToggleActive}>
            <button onClick={() => toggleComponent(3)} id={styles.accImg}>
              <img src={profilePic || userImage} alt="img" height={50} />
            </button>
          </li>
        </ul>
        <ul id={styles.logout}>
          <Logout />
        </ul>
      </nav>
         
    </aside>
  )
}

export default Sidebar