/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// MUI
import { createTheme, ThemeProvider } from '@mui/system';
import ArrowIcon from '@mui/icons-material/ArrowRightAltRounded';

//
import styles from '../../STYLES/Landing.module.scss';
import featured from '../../assets/images/featured.png';
////
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


//animation
const animationVariations = {
  hidden: {opacity: 0, y: 200},
  visible: {opacity: 1, y: 0, transition: {duration:0.5}}
}


// Mui
const theme = createTheme({
  palette: {
    primary: {
      main: '#e78d26',
    },
    secondary: {
      main: '#fbf8f2',
    },
    tertiary: {
      main: '#563b13',
    },
  },
});
/////////////////////////////////////////

function Main() {
    //Animation
    const controls = useAnimation()
    const [ref, inView] = useInView({triggerOnce: true})

    useEffect( () => {
      if(inView){
        controls.start('visible')
      }
    },[controls, inView])

  return (
    <>
      <motion.div className={styles.featured} ref={ref} initial='hidden' animate={controls} variants={animationVariations}>
        <section className={styles.featuredImg}>
          <img className={styles.fImg} src={featured} alt="" />
        </section>

        <section className={styles.featuredContent} >
          <h2>Indulge in Authentic Swahili Cuisine </h2>
          <p>
          Swahili Plate is a restaurant that offers an authentic taste of Swahili cuisine. <span id={styles.sp}> With a menu full of flavorful dishes, Swahili Plate takes pride in serving traditional dishes from the coastal region of East Africa.</span> From aromatic biryanis and pilafs to succulent grilled meats and seafood, each dish is prepared with the perfect blend of spices and ingredients to tantalize your taste buds. Whether you are a fan of spicy curries or prefer mild flavors, Swahili Plate has something for everyone. <span id={styles.sp}> Visit us today and experience the best of Swahili cuisine in a warm and welcoming atmosphere.</span>
          </p>

          <Link to="/signup" className={styles.featuredA}>
            <span>Discover Menu!</span>
            <ThemeProvider theme={theme}>
              {<ArrowIcon className={styles.arrowIcon} />}
            </ThemeProvider>
          </Link>
        </section>
      </motion.div>
    </>
  );
}

export default Main;
