/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useRef, useEffect } from 'react';

import {Link}  from 'react-router-dom';
// MUI //
// import ShoppingCart from '@mui/icons-material/LocalMallRounded';
import ArrowIcon from '@mui/icons-material/ArrowRightAltRounded';
import FacebookIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import { createTheme, ThemeProvider } from '@mui/system';

// import Button from '@mui/material/Button';


//

import styles from '../../STYLES/Landing.module.scss';
import breakPoints from '../../STYLES/BreakPoint.css'
import '../../App.css'


// import Navbar from './Navbar';
// import Login from '../../FORMS/Login';
// import Signup from '../../FORMS/Signup';
import Footer from './Footer';
import Main from './Main';
import Map from './Map';

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
/////////////////////////////////////////

  



function LandingPage() {

 
//  *********************************************** //




//Animations
    const headerAnm = useRef(null);

    // Animation
    const [header, setHeader] = useState(false)

    useEffect(() => {
      // IntersectionObserver callback function
      const callback = (entries) => {
          const [entry] = entries;
          setHeader(entry.isIntersecting);
      };
  
      // Create an IntersectionObserver instance
      const observer = new IntersectionObserver(callback);
  
      // Observe the section element
      if (headerAnm.current) {
          observer.observe(headerAnm.current);
      }
  
      // Cleanup function
      return () => {
          if (headerAnm.current instanceof Element) {
              observer.unobserve(headerAnm.current);
          }
      };
  }, []);
  

      //styles
      const headerAnmStyle = header ? 'hcontent' : '';

//////////////////

// function handleContactClick() {
//   const contactElement = document.getElementById('contact');
//   contactElement.scrollIntoView({ behavior: 'smooth' });
// }



  return (
    <div className={`${styles.landing} ${breakPoints.landing} `}>

        <header>
            <div className={styles.background}>
              {/* <Navbar /> */}
            {/*  *******  */}

            <div className={styles.headerContent}>

                <div className={styles.hdContent}>
                    <div className={`${headerAnmStyle} ${styles.hcontent}`} ref={headerAnm} >
    
                         <h1>Meet, Eat & &#9; <span> <br />  </span> Enjoy The true &#9; <span> <br />  </span> taste</h1>
                         
                         <Link to='/menu' className={styles.headerA}>
                             <span>Explore Menu</span>
                             <ThemeProvider theme={theme}>
                                {<ArrowIcon className={styles.arrowIcon}/>}
                             </ThemeProvider>
                         </Link>
                         
                         <section>
                            <ThemeProvider theme={theme}>
                              <a href='https://www.facebook.com/swahiliplate/' target='_blank' rel='noreferrer'>
                                {<FacebookIcon color='secondary' className={styles.socialIcons}/>}
                              </a>
                              <a href="https://www.instagram.com/swahiliplate/?hl=en" target='_blank' rel='noreferrer'>
                                {<InstagramIcon color='secondary' className={styles.socialIcons} />}
                              </a>
                            </ThemeProvider>
                         </section>
                    </div>

                     
                 </div>


            </div>
            </div>
        </header>
        {/* ############################# */}

        <main>
           <Main/>
        </main>


        {/* ############################# */}

        <footer className={`${styles.footer}`} id='contact'>

            <Footer/>
            <Map />
        </footer>

      
    </div>
  )
}

export default LandingPage;