import React, { useState } from 'react';
import styles from './Recomended.module.scss';
import Data from './Data';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import TickIcon from '@mui/icons-material/CheckCircleOutline';

const Recomended = ({ addToCart }) => {
  const [cartItems, setCartItems] = useState(Array(Data.topPick.length).fill(0));
  const [addedItems, setAddedItems] = useState([]);

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

  const cartNumTotal = cartItems.reduce((total, num) => total + num, 0);
  const isCartEmpty = cartNumTotal === 0;

  return (
    <section className={styles.recomended}>
      {Data.topPick.map((food, index) => (
        <article key={index}>
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
            {addedItems[index] ? (
              <button id={styles.added}>
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
        </article>
      ))}
    </section>
  );
};

export default Recomended;