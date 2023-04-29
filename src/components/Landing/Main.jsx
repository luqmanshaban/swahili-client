/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// MUI
import { createTheme, ThemeProvider } from '@mui/system';
import ArrowIcon from '@mui/icons-material/ArrowRightAltRounded';

//
import styles from '../../STYLES/Landing.module.scss';
import featured from '../../assets/images/featured.png';
////

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
  const [inView, setInView] = useState(false);

  const contentRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    // IntersectionObserver callback function
    const callback = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(entry.target); // Stop observing once the element is in view
      }
    };

    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver(callback);

    // Observe the section element
    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    // Cleanup function
    return () => {
      observer.disconnect(contentRef.current);
    };
  }, []);

  // image
  useEffect(() => {
    // IntersectionObserver callback function
    const callback = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(entry.target); // Stop observing once the element is in view
      }
    };

    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver(callback);

    // Observe the section element
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    // Cleanup function
    return () => {
      observer.disconnect(imgRef.current);
    };
  }, []);

  // styles
  const content = inView ? styles.featuredContent : '';
  const img = inView ? styles.featuredImg : '';

  return (
    <>
      <div className={styles.featured}>
        <section className={img}>
          <img className={styles.fImg} src={featured} alt="" />
        </section>

        <section className={content} ref={contentRef}>
          <h2>Indulge in Authentic Swahili Cuisine </h2>
          <p>
          Swahili Plate is a restaurant that offers an authentic taste of Swahili cuisine. With a menu full of flavorful dishes, Swahili Plate takes pride in serving traditional dishes from the coastal region of East Africa. From aromatic biryanis and pilafs to succulent grilled meats and seafood, each dish is prepared with the perfect blend of spices and ingredients to tantalize your taste buds. Whether you are a fan of spicy curries or prefer mild flavors, Swahili Plate has something for everyone. Visit us today and experience the best of Swahili cuisine in a warm and welcoming atmosphere.
          </p>

          <Link to="/menu" className={styles.featuredA}>
            <span>Discover Menu!</span>
            <ThemeProvider theme={theme}>
              {<ArrowIcon className={styles.arrowIcon} />}
            </ThemeProvider>
          </Link>
        </section>
      </div>
    </>
  );
}

export default Main;
