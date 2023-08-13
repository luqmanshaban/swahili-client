import React, { useContext, useState } from 'react'
import styles from './Navbar.module.scss'
import { Link } from 'react-router-dom'
import AdminLogout from './AdminLogout'
import UsersIcon from '@mui/icons-material/Group';
import OrdersIcon from '@mui/icons-material/CircleNotifications';
import AllIcon from '@mui/icons-material/AllInclusive';
import AnalyticsIcon from '@mui/icons-material/SignalCellularAlt';
import ChatIcon from '@mui/icons-material/Chat';
import userImage from '../../assets/avatar.jpeg'
import logo from '../../assets/Screenshot from 2023-03-29 11-27-15.png'
import { AdminContext } from '../../stores/Admin';

const Navbar = ({ toggleComponent }) => {
    const [active, setActive] = useState(false)
    const { profilePic } = useContext(AdminContext)
   
    const toggleActive = () => {
      setActive(!active)
    }
  
    const unToggleActive = () => {
      setActive(false)
    }


  
  
 
  return (
    <header className={styles.aside}>
    <ul className={`${styles.hamburger} ${active ? styles.active : ''}`} onClick={toggleActive}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </ul>
      <Link to='/admin' onClick={() => toggleComponent(0)}>
        <img src={logo} alt="Logo" className={styles.logo}/>
      </Link>
      <nav className={`${active ? styles.active : ''}`}>
        <ul className={styles.navMenu}>
          <li onClick={unToggleActive}>
            <button className={styles.btn} onClick={() => toggleComponent(1)}>
                <OrdersIcon id={styles.Icons}/>
                ORDERS
            </button>
          </li>
          <li onClick={unToggleActive}>
            <button className={styles.btn} onClick={() => toggleComponent(2)}>
                <AllIcon id={styles.Icons}/>
                History
            </button>
          </li>
          <li onClick={unToggleActive}>
            <button className={styles.btn} onClick={() => toggleComponent(3)}>
                <UsersIcon id={styles.Icons}/>
                USERS
            </button>
          </li>
          <li onClick={unToggleActive}>
            <button className={styles.btn} onClick={() => toggleComponent(4)}>
                <AnalyticsIcon id={styles.Icons}/>
                Analytics
            </button>
          </li>
          <li onClick={unToggleActive}>
            <button className={styles.btn} onClick={() => toggleComponent(5)}>
                <ChatIcon id={styles.Icons}/>
                Messages
            </button>
          </li>
          <li onClick={unToggleActive}>
            <button id={styles.accImg} onClick={() => toggleComponent(6)}>
             {profilePic === null && (<img src={userImage} alt="img" />)}
             {profilePic !== null && (<img src={profilePic} alt="img"/>)}
            </button>
          </li>
          <li onClick={unToggleActive}>
            <AdminLogout />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar