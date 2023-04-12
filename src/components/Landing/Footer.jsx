import React from 'react'
import { Link } from 'react-router-dom';

//mui
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
// import EmailIcon from '@mui/icons-material/Email';
import { createTheme, ThemeProvider } from '@mui/system';
import { TextField } from '@material-ui/core';


//

import logo from '../../assets/Screenshot from 2023-03-29 11-27-15.png';
import styles from '../../STYLES/Landing.module.scss';

import FacebookIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
// import Map from './Map';

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

function Footer() {
  return (
    <>
    <div className={styles.swahili}>
               <Link to='/' className={styles.logo}>
                  <img src={logo} height={30} alt="logo" className={styles.swahililogo}/>
                  <p style={{ fontWeight: 'bold',fontSize: '20px'}}>Swahili Plate</p>
              </Link>

              <ul>
                <li>Nairobi, Town -  Muindi Mbingu St, Nairobi</li>
                <li>Nairobi, Westlands - Sarite Centre</li>
              </ul>
              <section>
                   <ThemeProvider theme={theme}>
                     <a href='https://www.facebook.com/swahiliplate/' target='_blank' rel='noreferrer'>
                       {<FacebookIcon className={styles.socialIcons}/>}
                     </a>
                     <a href="https://www.instagram.com/swahiliplate/?hl=en" target='_blank' rel='noreferrer'>
                       {<InstagramIcon className={styles.socialIcons} />}
                     </a>
                        
                    </ThemeProvider>
                    <hr />
              </section>
            </div>
            
            
            <div className={styles.subscription}>
            <h5 style={{ fontSize: '20px'}}>Stay Connected</h5>
                <div className={styles.email}>
                <TextField 
                 label='Email Address'
                />{<ArrowForwardIosIcon sx={{backgroundColor: 'black', color: 'white', cursor: 'pointer'}}/>}
                </div>
                <div className={styles.call}>
                   {<AddIcCallIcon color='tertiary'/>}
                   <p><a href="tel:0772435765">Call Us</a></p>
                </div>
                <div className={styles.call}>
                   {<AddIcCallIcon color='tertiary'/>}
                   <p><a href="tel:0773497954">Call Us</a></p>
                </div>
                {/* <div className={styles.emailUs}>
                    {<EmailIcon color='tertiary' />}
                    <p>Send Us an Email</p>
                </div> */}
                

                
            </div>
            {/* <Map/> */}
            
    </>
  )
}

export default Footer