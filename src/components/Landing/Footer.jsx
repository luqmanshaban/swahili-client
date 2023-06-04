import React, { useEffect } from 'react'
import styles from '../../STYLES/Footer.module.scss'
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer'

const footerVariations = {
    hidden: {opacity: 0},
    visible: {opacity: 1, transition: {duration: 0.5}}
}
const fbVariations = {
    hidden: {opacity: 0, y: 100, x: -150},
    visible: {opacity: 1, y: 0, x: 0, transition: {duration: 0.5}},
    transition: {type: 'spring', stiffeness: 60, }
  }
  
  const igVariations = {
      hidden: {opacity: 0, y: 100, x: 150},
      visible: {opacity: 1, y: 0, x: 0, transition: {duration: 0.5}},
      transition: {type: 'spring', stiffeness: 60, }
  }

const Footer = () => {
    const date = new Date().getFullYear()
    const footerControls = useAnimation()
    const [footerRef, footerInView] = useInView({triggerOnce: true})

    useEffect(() => {
        if(footerInView){
            footerControls.start('visible')
        }
    },[footerControls, footerInView])

  return (
    <motion.div id={styles.footer} ref={footerRef} initial='hidden' animate={footerControls} variants={footerVariations}>
        <motion.section className={styles.footer} >
            <article className={styles.art1}>
                <h1>Swahili Plate</h1>
                <p style={{textAlign: 'start'}}>A restaurant that offers an authentic taste of Swahili cuisine.With a menu full of flavorful dishes.</p>
            </article>
            <article className={styles.art2}>
                <h1>Address</h1>
                <ul>
                    <li><a href="https://goo.gl/maps/ewCKjhW536QFsQ6N9" target='_blank' rel="noreferrer">Muindi Mbingu Street CBD - Town</a></li>
                    <li><a href="https://goo.gl/maps/q7AiycVRXSNkokmS7" target='_blank' rel="noreferrer">Sarit Center - WestLands</a></li>
                </ul>
            </article>
            <article className={styles.art3}>
                <h1>Get In Touch</h1>
                <figure className={styles.call}>
                    {<AddIcCallIcon id={styles.icons} color='tertiary'/>}
                    <p><a href="tel:0772435765">Town</a></p>
                </figure>
                <figure className={styles.call}>
                   {<AddIcCallIcon id={styles.icons} color='tertiary'/>}
                   <p><a href="tel:0773497954">WestLands</a></p>
                </figure>
            </article>
            <article className={styles.art4}>
                <h1 style={{color : '#cc8400'}}>Our Socials</h1>
                <figure>
                <motion.a href='https://www.facebook.com/swahiliplate/' target='_blank' rel='noreferrer'
                     initial='hidden' animate='visible' variants={fbVariations}
                 ><FacebookIcon id={styles.icons}/></motion.a>
                <motion.a href='https://www.instagram.com/swahiliplate/?hl=en' target='_blank' rel='noreferrer'
                    initial='hidden' animate='visible' variants={igVariations}
                ><InstagramIcon id={styles.icons}/></motion.a>
                </figure>
            </article>
        </motion.section>
            <hr />
          <p id={styles.p} style={{textAlign: 'center'}}>&copy; All rights reserved | swahili Plate <span>{date}</span></p>
    </motion.div>
  )
}

export default Footer