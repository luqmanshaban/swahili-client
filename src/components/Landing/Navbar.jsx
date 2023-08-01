
import React,{useState} from 'react'
import { Link } from 'react-router-dom';

//
import styles from './Navbar.module.scss';
import logo from '../../assets/Screenshot from 2023-03-29 11-27-15.png';
import breakPoints from '../../STYLES/BreakPoint.css'


function Navbar() {
    const [isActive, setIsActive] = useState(false);

    const toggleActiveClass = () => {
      setIsActive(!isActive);
    };
  
    const handleLinkClick = () => {
      setIsActive(false);
    };
  

    /////////////////
    return (
      <nav className={`${styles.navbar} ${isActive ? styles.active : ''}`} >
        <Link to='/' className={styles.logo}>
          <img src={logo} height={30} alt="logo" className={styles.swahililogo}/>
          <p>Swahili Plate</p>
        </Link>
  
        <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
          <li className={`${styles.navItem} ${breakPoints.navItem}`} onClick={handleLinkClick}>
            <Link className={`${styles.link} ${styles.navLink} ${breakPoints.link} `} to='/'>Home</Link>
          </li>
          <li className={`${styles.navItem} ${breakPoints.navItem}`} onClick={handleLinkClick}>
            <Link className={`${styles.link} ${styles.navLink} ${breakPoints.link}`} to='/contact'>Contact Us</Link>
          </li>
          <li className={`${styles.navItem} ${breakPoints.link}`} onClick={handleLinkClick}>
            <Link className={`${styles.navItem} ${breakPoints.link}`} to='/signup'>
              <button id={styles.signupBtn}>
                Get Started
              </button> 
            </Link>
          </li>
          <li className={`${styles.navItem} ${breakPoints.link}`} onClick={handleLinkClick}>
            <Link className={`${styles.navItem} ${breakPoints.link}`} to='/login'>
              <button id={styles.loginBtn}>
                Login
              </button> 
            </Link>
          </li>
        </ul>
  
        <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`} onClick={toggleActiveClass}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </nav>
    );
  }
  


export default Navbar