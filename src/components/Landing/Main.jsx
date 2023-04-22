import React from 'react'
import { Link } from 'react-router-dom';
// import Reservation from '../../FORMS/Reservation';

//MUI
import TickIcon from '@mui/icons-material/CheckCircle';
import { createTheme, ThemeProvider } from '@mui/system';
import ArrowIcon from '@mui/icons-material/ArrowRightAltRounded';


//
import styles from '../../STYLES/Landing.module.scss';
import apple from '../../assets/images/apple.png';
import pot from '../../assets/images/pot.png';
import drinks from '../../assets/images/drinks.png';
import featured from '../../assets/images/featured.png';
import coffee from '../../assets/images/coffe.png'
////

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

function Main() {
  return (
    <>
     <h3 >We offer all kinds of swahili dishes&#9; <span><br />from healthy food to snacks and desserts</span></h3>

<div className={styles.food}>

   <div className={styles.foodC}>
   <section>
      <article className={styles.article1}>
          <img id='img1' src={apple} alt="" />
      </article>
      <ThemeProvider theme={theme}>
          {<TickIcon className={styles.tickIcon} color='tertiary' sx={{fontSize: '30px'}}/>}
       </ThemeProvider>

       <p >Healthy Food</p>
    </section>
    
   <section>
     <article className={styles.article2}>
         <img id='img2' src={pot}  alt="" />
      </article>
      <ThemeProvider theme={theme}>
          {<TickIcon className={styles.tickIcon} color='tertiary' sx={{fontSize: '30px'}}/>}
       </ThemeProvider>

       <p>Tasty Meals</p>
   </section>

    <section>
       <article className={styles.article3}>
          <img id='img3' src={drinks}  alt="" />
       </article>
       <ThemeProvider theme={theme}>
           {<TickIcon className={styles.tickIcon} color='tertiary' sx={{fontSize: '30px'}}/>}
        </ThemeProvider>

        <p>Drinks & Desserts</p>
    </section>

    <section>
       <article className={styles.article3}>
          <img id='img4' src={coffee} height={100} alt="" />
       </article>
       <ThemeProvider theme={theme}>
           {<TickIcon className={styles.tickIcon} color='tertiary' sx={{fontSize: '30px'}}/>}
        </ThemeProvider>

        <p>Coffee & Tea</p>
    </section>
   </div>

</div>

{/* //////////////////////// */}

{/* ################### */}


<div className={styles.featured}>
    <div className={`${styles.featuredImg}`} >
        <img className={styles.fImg} src={featured} alt=""/>
    </div>

    <div className={`${styles.featuredContent}`} >
        <h2>Living Well begins with eating well.</h2>
        <p>Swahili Plate serves healthy, high-quality food using locally sourced ingredients. Our chefs skillfully combine traditional and contemporary techniques to create delicious and nutritious meals that nourish both the body and soul.</p>

        <Link  to='/menu' className={styles.featuredA}>
            <span>Explore Menu</span>
            <ThemeProvider theme={theme}>
               {<ArrowIcon className={styles.arrowIcon}/>}
            </ThemeProvider>
        </Link>
    </div>
</div>

{/* #######  */}

{/* <div className={`${styles.reservation}`} >
    <div className={styles.rcontent}>
       <h1 style={{textAlign: 'center', textDecoration: 'underline', textDecorationColor: '#e78d26'}}>Reserve a Table</h1>

       <Reservation />
    </div>
</div> */}
    </>
  )
}

export default Main;