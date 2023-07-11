/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
//mui
import { createTheme, ThemeProvider } from '@mui/system';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import FacebookIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
//


import styles from '../../STYLES/Contact.module.scss'
import Navbar from './Navbar';
//

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

const style = {
    display: 'flex',
    gap: '20px',
  }

//
function Contact() {
  

  return (
    <>
    <Navbar />
    <div style={{ display: 'flex', justifyContent: 'center', alignItems:'center'}}>
      <div className={styles.contact}>
         <div className={styles.sidebarImg}></div>
         {/* /////////////////// */}
          <div className={styles.content}>
              <div className={styles.contactInfo}>
                  <h4>Get in Touch</h4>
                 <div className={styles.call}>
                   <div style={{display: "flex", gap: '10px', marginTop: '10px'}} className={styles.callContent}>
                       {<AddIcCallIcon color='tertiary'/>}
                       <p><a href="tel:0772435765">Call Us | Town</a></p>
                    </div>
                    <div style={{display: "flex", gap: '10px'}} className={styles.callContent}>
                       {<AddIcCallIcon color='tertiary'/>}
                       <p><a href="tel:0773497954">Call Us | Westlands</a></p>
                    </div>
                 </div>
              </div>
              <div className={styles.socials}>
                  <h4>Our Social</h4>
                 <section>
                 <ThemeProvider theme={theme}>
                   <a href='https://www.facebook.com/swahiliplate/' target='_blank' rel='noreferrer' >
                     {<FacebookIcon className={styles.socialIcons}/>}
                   </a>
                   <a href="https://www.instagram.com/swahiliplate/?hl=en" target='_blank' rel='noreferrer'>
                     {<InstagramIcon className={styles.socialIcons} />}
                   </a>
                      
                  </ThemeProvider>
                 </section>
                  <hr />
              </div>
              <div className={styles.location}>
                  <h4 style={{ margin: '20px 0'}}>Visit Us Today</h4>
                  <div className="locationLink">
                    <ul style={{listStyle: 'outside'}}>
                      <li>
                        <a href="https://goo.gl/maps/ewCKjhW536QFsQ6N9">Muindi Mbingu Street | Town</a>
                      </li>
                      <li>
                        <a href="https://goo.gl/maps/q7AiycVRXSNkokmS7">Sarit Center | WESTLANDS</a>
                      </li>
                    </ul>
                  </div>
                  <div style={style} className={styles.map}>
                      
                    <section>
                      <h5 style={{textAlign:'center', marginBottom: '10px'}}>TOWN</h5>
                       <iframe title='Swahili Plate Muindi Mbingu street location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63821.102702281845!2d36.784501388420594!3d-1.2824490605347323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d38b6dd997%3A0x8d7b3af566656f59!2sSwahili%20Plate!5e0!3m2!1sen!2ske!4v1681304761139!5m2!1sen!2ske" width="200" height="150" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </section>
                     
                  <section>
                     <h5 style={{textAlign:'center', marginBottom: '10px'}}>WESTLANDS</h5>
                     <iframe title='Swahili Plate Sarit Center location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63821.62759811124!2d36.76915148841481!3d-1.2612239644954077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17022dd1eb45%3A0xfad6cb90e90adfc9!2sSwahili%20Plate%20-%20Sarit%20Center!5e0!3m2!1sen!2ske!4v1681283466110!5m2!1sen!2ske" width="200" height="150" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                  </section>
                </div>
                
              </div>
          </div>

    </div>
    </div>
    </>
  )
}

export default Contact;