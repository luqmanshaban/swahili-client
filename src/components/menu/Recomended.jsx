import React, { useState, useEffect } from 'react';
import styles from './Recomended.module.scss';
import Data from './Data';
import AddIcon from '@mui/icons-material/Add';
import { ImageList } from '@material-ui/core';
import {  createTheme,ThemeProvider } from '@mui/system';
import ImageListItem from '@material-ui/core/ImageListItem';
import RemoveIcon from '@mui/icons-material/Remove';
import TickIcon from '@mui/icons-material/CheckCircleOutline';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// import { Recommend } from '@mui/icons-material';


const animationVariations = {
  hidden: {opacity: 0, y: 200},
  visible: {opacity: 1, y: 0, transition: {duration:0.5}}
}

//adjust on small screens
function getGridCols() {
  return window.innerWidth >= 800 ? 4 : 1.2;
}
function cellHeight() {
  return window.innerWidth >= 800 ? 400 : 320;
}


//Mui
const theme = createTheme( {
  palette: {
      primary: {
          main: '#573B07'
      },
      secondary: {
          main: '#fbf8f2'
      },
      tertiary: {
          main: '#563b13'
      }
  }
})

const Recomended = ({ addToCart }) => {
  const [cartItems, setCartItems] = useState(Array(Data.topPick.length).fill(0));
  const [addedItems, setAddedItems] = useState([]);
  //Animation
  const controls = useAnimation()
  const [ref, inView] = useInView({triggerOnce: true})

  const add = (index) => {
    const newCartItems = [...cartItems];
    newCartItems[index] += 1;
    setCartItems(newCartItems);
  };

  const remove = (index) => {
    const newCartItems = [...cartItems];
    newCartItems[index] = Math.max(newCartItems[index] - 1, 0);
    setCartItems(newCartItems);
  };

  const addToCartClicked = (index) => {
    const newAddedItems = [...addedItems];
    newAddedItems[index] = true;
    setAddedItems(newAddedItems);
    addToCart(
      Data.topPick[index].img,
      Data.topPick[index].name,
      Data.topPick[index].price,
      Data.topPick[index].price * cartItems[index],
      cartItems[index]
    );
  };
  const removeFromCartClicked = (index) => {
    const newAddedItems = [...addedItems];
    newAddedItems[index] = false;
    setAddedItems(newAddedItems);
  };

  // /animation 
  useEffect( () => {
    if(inView){
      controls.start('visible')
    }
  },[controls, inView])

  const cartNumTotal = cartItems.reduce((total, num) => total + num, 0);
  const isCartEmpty = cartNumTotal === 0;

  return (
    <motion.section className={styles.Recomended}  ref={ref} initial='hidden' animate={controls} variants={animationVariations}>
      <h1>Recomended</h1>
      <ImageList cols={getGridCols()} rowHeight={cellHeight()} style={{ flexWrap: 'nowrap', }} id={styles.grid}>
      {Data.topPick.map((food, index) => (
         <ImageListItem key={index} className={styles.artc}>
        <motion.article>
          <img src={food.img} alt={food.name} height={100} />
          <figure className={styles.foodInfo}>
            <h1>{food.name}</h1>
            <h3>Price: KES {food.price}</h3>
            <span className={styles.buttons}>
              <button onClick={() => add(index)}>
                <ThemeProvider theme={theme}>
                <AddIcon color='primary'/>
                </ThemeProvider>
              </button>
              <span>{cartItems[index]}</span>
              <button onClick={() => remove(index)}>
                <ThemeProvider theme={theme}>
                <RemoveIcon color='primary'/>
                </ThemeProvider>
              </button>
            </span>
            {addedItems[index] ? (
            <button id={styles.added} onClick={() => removeFromCartClicked(index)}>
              <ThemeProvider theme={theme} >
              <TickIcon id={styles.icon} color='primary'/>
              </ThemeProvider>
            </button>
          ) : (
            <button
              id={styles.addToCart}
              onClick={() => addToCartClicked(index)}
              disabled={isCartEmpty}
            >
              Add to Cart
            </button>
          )}
          </figure>
        </motion.article>
        </ImageListItem>
      ))}
      </ImageList>
    </motion.section>
  );
};

export default Recomended;
