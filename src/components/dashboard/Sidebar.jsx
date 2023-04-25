
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

//
import styles from './Sidebar.module.scss'
import logo from '../../assets/Screenshot from 2023-03-29 11-27-15.png'
import avatar from '../../assets/avatar.jpeg'

//mui
import  Home  from '@mui/icons-material/Home'
import Menu  from '@mui/icons-material/RestaurantMenu'
import Order from '@mui/icons-material/ShoppingCart';
import  History  from '@mui/icons-material/History'
import Account from '@mui/icons-material/AccountCircle';
import  LogoutOutlined  from '@mui/icons-material/Logout';

function Sidebar() {
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState(false);

    const toggleActiveClass = () => {
      setIsActive(!isActive);
    };
  
    const handleLinkClick = () => {
      setIsActive(false);
    };

    const Logout = () => {
      localStorage.removeItem('authToken');
      navigate('/login')
    }

  return (
    <section className={styles.sidebar}>
     <Link to='/dashboard'>
     <span>Dashboard</span>
      <img src={logo} alt="logo" height={30} id={styles.logo}/>
     </Link>
     



      <div className={`${styles.navLinks} ${isActive ? styles.active : ''}`}>
      <Link to='/dashboard' onClick={handleLinkClick}>
        <Home/>
        Home
      </Link>

      <Link to='/menu' onClick={handleLinkClick}>
        <Menu/>
        Menu
      </Link>

      <Link to='/orders' onClick={handleLinkClick}>
        <Order/>
        Orders
      </Link>

      <Link to='/history' onClick={handleLinkClick}>
        <History/>
        History
      </Link>

      <Link to='/profile' onClick={handleLinkClick}>
        <Account/>
        Account
      </Link>
      <Link to='/profile' id={styles.logo} onClick={handleLinkClick}>
        <img src={avatar} alt="profile pic" height={40}/>
      </Link>
      

      <button onClick={Logout} style={{background: '#fff', display:'flex', alignItems:'center'}}  >
        <LogoutOutlined/>
        Logout
      </button>
      </div>

      <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`} onClick={toggleActiveClass}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>


    </section>
  )
}

export default Sidebar