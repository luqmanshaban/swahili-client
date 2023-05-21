
import React,{useState} from 'react'
import { Link } from 'react-router-dom';

// import ShoppingCart from '@mui/icons-material/LocalMallRounded';
import Button from '@mui/material/Button';
import {  createTheme,ThemeProvider } from '@mui/system';



//
import styles from './Navbar.module.scss';
import logo from '../../assets/Screenshot from 2023-03-29 11-27-15.png';
import breakPoints from '../../STYLES/BreakPoint.css'

//Mui
const theme = createTheme( {
    palette: {
        primary: {
            main: '#e78d26'
        },
        secondary: {
            main: '#fbf8f2'
        },
        tertiary: {
            main: '#563b13'
        }
    }
})
///



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
        <Link to='/swahili-client' className={styles.logo}>
          <img src={logo} height={30} alt="logo" className={styles.swahililogo}/>
          <p>Swahili Plate</p>
        </Link>
  
        <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
          <li className={`${styles.navItem} ${breakPoints.navItem}`} onClick={handleLinkClick}>
            <Link className={`${styles.link} ${styles.navLink} ${breakPoints.link} `} to='/swahili-client'>Home</Link>
          </li>
          <li className={`${styles.navItem} ${breakPoints.navItem}`} onClick={handleLinkClick}>
            <Link className={`${styles.link} ${styles.navLink} ${breakPoints.link}`} to='/menu'>Menu</Link>
          </li>
          <li className={`${styles.navItem} ${breakPoints.navItem}`} onClick={handleLinkClick}>
            <Link className={`${styles.link} ${styles.navLink} ${breakPoints.link}`} to='/contact'>Contact Us</Link>
          </li>
          <li className={`${styles.navItem} ${breakPoints.navItem}`} onClick={handleLinkClick}>
            <Button sx={{
                color: '#fbf8f2', fontWeight: 'bold',backgroundColor: ' #e78d26', '&:hover': {
                    backgroundColor: '#fbf8f2',
                    color: '#e78d26'
                }
              }} variant='contained' >
              <Link className={styles.link} to='/signup'>Sign Up</Link>
            </Button>
          </li>
          <li className={`${styles.navItem} ${breakPoints.link}`} onClick={handleLinkClick}>
            <Link className={`${styles.navItem} ${breakPoints.link}`} to='/login'>
              <Button sx={{
                  color: '#fbf8f2', fontWeight: 'bold', backgroundColor: ' #e78d26', '&:hover': {
                      backgroundColor: '#fbf8f2',
                      color: '#e78d26'
                  }
                }} variant='contained'>Login
              </Button> 
            </Link>
          </li>
        </ul>
  
        <ThemeProvider theme={theme}>
          {/* <ShoppingCart color='primary' sx={{cursor: 'pointer','&:hover': { scale: '1.2'}, transition: '0.3s ease' }}/> */}
        </ThemeProvider>
  
        <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`} onClick={toggleActiveClass}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </nav>
    );
  }
  


export default Navbar