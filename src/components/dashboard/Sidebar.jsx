
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

//
import styles from './Sidebar.module.scss'
import logo from '../../assets/Screenshot from 2023-03-29 11-27-15.png'
import avatar from '../../assets/avatar.jpeg'

//mui
import  Home  from '@mui/icons-material/Home'
import Order from '@mui/icons-material/ShoppingCart';
import  History  from '@mui/icons-material/History'
import Account from '@mui/icons-material/AccountCircle';
import  LogoutOutlined  from '@mui/icons-material/Logout';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


//animation
const animationVariations = {
  hidden: {opacity: 0, x: -100},
  visible: {opacity: 1, x: 0, transition: {duration:0.5}}
}


function Sidebar() {
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState(false);
  //Animation
  const controls = useAnimation()
  const [ref, inView] = useInView({triggerOnce: true})

  useEffect( () => {
    if(inView){
      controls.start('visible')
    }
  },[controls, inView])

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
    <motion.section className={styles.sidebar} ref={ref} initial='hidden' animate={controls} variants={animationVariations}>
     <Link to='/dashboard'>
     <span>Dashboard</span>
      <img src={logo} alt="logo" height={30} id={styles.logo}/>
     </Link>
     



      <div className={`${styles.navLinks} ${isActive ? styles.active : ''}`}>
      <Link to='/dashboard' onClick={handleLinkClick}>
        <Home/>
        Home
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


    </motion.section>
  )
}

export default Sidebar