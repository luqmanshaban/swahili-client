import React from 'react';
import styles from './Cart.module.scss';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Cart = ({ cartItems, removeFromCart }) => {


  
  return (
    <section className={styles.cartItems}>
      <h1>Cart</h1>
      <hr />
      {
        cartItems.length > 0 ? (
          cartItems.map((food, index) => (
            <article className={styles.artc} key={index}>
            <figure id={styles.food}>
              <img src={food.image} alt={food.name} />
              <h1>{food.name}</h1>
              <h3>{food.price}</h3>
              <br />
              <span>x {food.itemNo}</span>
            </figure>
            <figure>
              <DeleteForeverIcon onClick={removeFromCart}/>
            </figure>
          </article>
          ))
        ): (
          <h5 id={styles.empty}>Cart is Empty</h5>
        )
      }
    </section>
  );
};

export default Cart;
