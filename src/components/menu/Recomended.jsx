import React, { useEffect, useState } from 'react';
import styles from './Recomended.module.scss';
import Data from './Data';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import TickIcon from '@mui/icons-material/CheckCircleOutline';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const animationVariations = {
  hidden: {opacity: 0, y: 200},
  visible: {opacity: 1, y: 0, transition: {duration:0.5}}
}

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

  const cartNumTotal = cartItems.reduce((total, num) => total + num, 0);
  const isCartEmpty = cartNumTotal === 0;

  // /animation 
  useEffect( () => {
    if(inView){
      controls.start('visible')
    }
  },[controls, inView])

  return (
    <section className={styles.recomended}>
      {Data.topPick.map((food, index) => (
        <motion.article key={index} ref={ref} initial='hidden' animate={controls} variants={animationVariations}>
          <img src={food.img} alt={food.name} height={100} />
          <figure className={styles.foodInfo}>
            <h1>{food.name}</h1>
            <h3>Price: KES {food.price}</h3>
            <span className={styles.buttons}>
              <button onClick={() => add(index)}>
                <AddIcon />
              </button>
              <span>{cartItems[index]}</span>
              <button onClick={() => remove(index)}>
                <RemoveIcon />
              </button>
            </span>
            {/* ... */}
          {addedItems[index] ? (
            <button id={styles.added} onClick={() => removeFromCartClicked(index)}>
              <TickIcon />
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
      ))}
    </section>
  );
};

export default Recomended;
