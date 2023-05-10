import React from 'react';
import {Link}  from 'react-router-dom';
// MUI //
// import ShoppingCart from '@mui/icons-material/LocalMallRounded';
import ArrowIcon from '@mui/icons-material/ArrowRightAltRounded';
import FacebookIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import { createTheme, ThemeProvider } from '@mui/system';
//
import styles from '../../STYLES/Landing.module.scss';
import breakPoints from '../../STYLES/BreakPoint.css'
import '../../App.css'
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
///////////////////////




function LandingPage() {

  //update year automatically
    let date = new Date().getFullYear();

  return (
    <div className={`${styles.landing} ${breakPoints.landing} `}>
        
        {/* ############################# */}
        <header>
            <div className={styles.background}>
            {/*  *******  */}

            <div className={styles.headerContent}>

                <div className={styles.hdContent}>
                    <div className={`${styles.hcontent}`} >
    
                         <h1>Meet, Eat & &#9; <span> <br />  </span> Enjoy The true &#9; <span> <br />  </span> taste</h1>
                         
                         <Link to='/menu' className={styles.headerA}>
                             <span>Explore Menu</span>
                             <ThemeProvider theme={theme}>
                                {<ArrowIcon className={styles.arrowIcon}/>}
                             </ThemeProvider>
                         </Link>
                         
                         <section>
                            <ThemeProvider theme={theme}>
                              <a href='https://www.facebook.com/swahiliplate/' target='_blank' rel='noreferrer' id={styles.fb}>
                                {<FacebookIcon color='secondary' className={styles.socialIcons}/>}
                              </a>
                              <a href="https://www.instagram.com/swahiliplate/?hl=en" target='_blank' rel='noreferrer' id={styles.ig}>
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
        <footer id='contact'>

            <section className={`${styles.footer}`}>
            <Footer/>
            <Map />
            </section>
            <hr />

            <section>
              <p>swahili Plate | {date}</p>
              <p>&copy; all rights reserved</p>
            </section>

        </footer>
      
    </div>
  )
}

export default LandingPage;