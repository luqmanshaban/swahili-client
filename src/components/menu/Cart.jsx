import React from 'react';
import styles from './Cart.module.scss';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CloseIcon from '@mui/icons-material/Close';

const Cart = ({ cartItems, removeFromCart, totalPrice, unToggle, handleOrderSubmit }) => {
  
  return (
    <section className={styles.cartItems}>
      <h1>Cart</h1>
      <button id={styles.cancel} onClick={unToggle}><CloseIcon id={styles.icon}/></button>
      <hr />
      {cartItems.length > 0 ? (
        cartItems.map((food, index) => (
          <article className={styles.artc} key={index}>
            <figure id={styles.food}>
              <img src={food.image} alt={food.name} />
              <h1>{food.name}</h1>
              <h3>{food.price}</h3>
              <br />
              <span>x {food.totalItem}</span>
            </figure>
            <figure>
              <DeleteForeverIcon onClick={() => removeFromCart(index)} /> {/* Pass index to removeFromCart */}
            </figure>
          </article>
        ))
      ) : (
        <h5 id={styles.empty}>Cart is Empty</h5>
      )}

      {cartItems.length > 0 && (
        <>
          <span className={styles.total}>Total: KES {totalPrice}</span>
          <button onClick={handleOrderSubmit} className={styles.checkout}>Checkout</button>
        </>
      )}
    </section>
  );
};

export default Cart;
