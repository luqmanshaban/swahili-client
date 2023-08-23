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
    const [isBtnActive, toggleBtnActive] = useState([false, false, false, false, false, false,false,false, false, false])
    const { profilePic } = useContext(AdminContext)
    const { activeOrders, getActiveOrders } = useContext(MenuContext)
   
    const toggleActive = () => {
      setActive(!active)
    }
  
    const unToggleActive = () => {
      setActive(false)
    }

    const toggleActiveBtnClass = (index) => {
      toggleBtnActive(isBtnActive.map((value, i) => i === index))
    }
    

    const onBtnClick = (index) => {
      toggleComponent(index)
      toggleActiveBtnClass(index);
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
      <Link to='/admin' onClick={() => onBtnClick(0)}>
        <img src={logo} alt="Logo" className={`${styles.logo} ${isBtnActive[0] ? styles.active: ""}`}/>
      </Link>
      <hr style={{width: '100%'}}/>
      <nav className={`${active ? styles.active : ''}`}>
        <ul className={styles.navMenu}>
          <li onClick={unToggleActive}>
            <button id={styles.orders} className={` ${styles.btn} ${isBtnActive[1] ? styles.active : ''}`} onClick={() => onBtnClick(1)}>
                <OrdersIcon />
                {activeOrders.length > 0 && (<div style={{height: '10px', width: '10px',borderRadius: '50%', backgroundColor: 'red', position: 'relative', top: '-50px', right: '-10px'}}></div>)}
                ORDERS
            </button>
          </li>
          <li onClick={unToggleActive}>
            <button className={`${styles.btn} ${isBtnActive[2] ? styles.active : ''}`} onClick={() => onBtnClick(2)}>
                <DeliveryIcon id={styles.Icons}/>
                DELIVERY
            </button>
          </li>
          <li onClick={unToggleActive}>
            <button className={`${styles.btn} ${isBtnActive[3] ? styles.active : ''}`} onClick={() => onBtnClick(3)}>
                <AllIcon id={styles.Icons}/>
                HISTORY
            </button>
          </li>
          <li onClick={unToggleActive}>
            <button className={`${styles.btn} ${isBtnActive[4] ? styles.active : ''}`} onClick={() => onBtnClick(4)}>
                <UsersIcon id={styles.Icons}/>
                USERS
            </button>
          </li>
          <li onClick={unToggleActive}>
            <button className={`${styles.btn} ${isBtnActive[5] ? styles.active : ''}`} onClick={() => onBtnClick(5)}>
                <MenuIcon id={styles.Icons}/>
                MENUS
            </button>
          </li>
          <li onClick={unToggleActive}>
            <button className={`${styles.btn} ${isBtnActive[6] ? styles.active : ''}`} onClick={() => onBtnClick(6)}>
                <AnalyticsIcon id={styles.Icons}/>
                ANALYTICS
            </button>
          </li>
          <li onClick={unToggleActive}>
            <button className={`${styles.btn} ${isBtnActive[7] ? styles.active : ''}`} onClick={() => onBtnClick(7)}>
                <ChatIcon id={styles.Icons}/>
                
                  MESSAGES
                
            </button>
          </li>
          <li onClick={unToggleActive}>
            <button id={styles.accImg} onClick={() => onBtnClick(8)}>
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