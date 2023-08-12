import React, { useEffect, useState } from 'react'
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
import axios from 'axios';

const Navbar = ({ toggleComponent }) => {
    const [active, setActive] = useState(false)
    const [profilePic, setProfilePic] = useState(null);

    const toggleActive = () => {
      setActive(!active)
    }
  
    const unToggleActive = () => {
      setActive(false)
    }

    const getProfilePicture = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8000/api/profiles', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setProfilePic(response.data.profilePic);
      } catch (error) {
        console.error('Error fetching profile picture:', error);
      }
    };

    useEffect(() => {
      getProfilePicture();
    }, []);
  
 
  return (
    <header className={styles.aside} onLoad={getProfilePicture}>
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
                <OrdersIcon />
                ORDERS
            </button>
          </li>
          <li onClick={unToggleActive}>
            <button className={styles.btn} onClick={() => toggleComponent(2)}>
                <AllIcon />
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
                <AnalyticsIcon />
                Analytics
            </button>
          </li>
          <li onClick={unToggleActive}>
            <button className={styles.btn} onClick={() => toggleComponent(5)}>
                <ChatIcon />
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