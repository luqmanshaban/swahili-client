import React, { useContext, useEffect, useState } from 'react'
import styles from './Navbar.module.scss'
import { Link } from 'react-router-dom'
import AdminLogout from './AdminLogout'
import UsersIcon from '@mui/icons-material/Group';
import OrdersIcon from '@mui/icons-material/CircleNotifications';
import AllIcon from '@mui/icons-material/AllInclusive';
import AnalyticsIcon from '@mui/icons-material/SignalCellularAlt';
import MenuIcon from '@mui/icons-material/RestaurantMenu';
import ChatIcon from '@mui/icons-material/Chat';
import DeliveryIcon from '@mui/icons-material/AirportShuttle';
import userImage from '../../assets/avatar.jpeg'
import logo from '../../assets/Screenshot from 2023-03-29 11-27-15.png'
import { AdminContext } from '../../stores/Admin';
import { MenuContext } from '../../stores/MenuContext';

const Navbar = ({ toggleComponent }) => {
    const [active, setActive] = useState(false)
    const { profilePic } = useContext(AdminContext)
    const { activeOrders, getActiveOrders } = useContext(MenuContext)
   
    const toggleActive = () => {
      setActive(!active)
    }
  
    const unToggleActive = () => {
      setActive(false)
    }

    useEffect ( () => {
      getActiveOrders()
    },[])
 
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
      <hr style={{width: '100%'}}/>
      <nav className={`${active ? styles.active : ''}`}>
        <ul className={styles.navMenu}>
          <li onClick={unToggleActive}>
            <button id={styles.orders} className={styles.btn} onClick={() => toggleComponent(1)}>
                <OrdersIcon id={styles.Icons}/>
                {activeOrders !== null && (<div style={{height: '10px', width: '10px',borderRadius: '50%', backgroundColor: 'red', position: 'relative', top: '-30px', right: '-10px'}}></div>)}
                ORDERS
            </button>
          </li>
          <li onClick={unToggleActive}>
            <button className={styles.btn} onClick={() => toggleComponent(2)}>
                <DeliveryIcon id={styles.Icons}/>
                Delivery
            </button>
          </li>
          <li onClick={unToggleActive}>
            <button className={styles.btn} onClick={() => toggleComponent(3)}>
                <AllIcon id={styles.Icons}/>
                History
            </button>
          </li>
          <li onClick={unToggleActive}>
            <button className={styles.btn} onClick={() => toggleComponent(4)}>
                <UsersIcon id={styles.Icons}/>
                USERS
            </button>
          </li>
          <li onClick={unToggleActive}>
            <button className={styles.btn} onClick={() => toggleComponent(5)}>
                <MenuIcon id={styles.Icons}/>
                Menus
            </button>
          </li>
          <li onClick={unToggleActive}>
            <button className={styles.btn} onClick={() => toggleComponent(6)}>
                <AnalyticsIcon id={styles.Icons}/>
                Analytics
            </button>
          </li>
          <li onClick={unToggleActive}>
            <button className={styles.btn} onClick={() => toggleComponent(7)}>
                <ChatIcon id={styles.Icons}/>
                Messages
            </button>
          </li>
          <li onClick={unToggleActive}>
            <button id={styles.accImg} onClick={() => toggleComponent(7)}>
             <img src={ profilePic ||userImage} alt="img" />
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