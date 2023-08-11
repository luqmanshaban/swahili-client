import React, { useContext } from 'react'
import { MenuContext } from '../stores/MenuContext'
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import styles from './Cart.module.scss'

const Cart = () => {
    const { items, itemCount, total, removeFromCart, unToggleCartComponent, checkOut } = useContext(MenuContext);

    return (
        <div className={styles.cart}>
            <section style={{display: 'flex',justifyContent: 'space-between', alignItems: 'center'}}>
               <h1>Cart</h1>
               <p onClick={unToggleCartComponent} style={{cursor: 'pointer'}}><CloseIcon /></p>
            </section>
            {
                items.length === 0 ? (<p id={styles.empty}>Cart Is Empty</p>) : (

                    <section className={styles.cartItem}>
                        {items.map((item, index) => (
                            <article key={index}>
                                <figure>
                                    <img src={item.img} alt={item.name} />
                                    <h1>{item.name}</h1>
                                    <p style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5}}>{item.price}
                                       <span>x</span>
                                       <span>{itemCount[item.name] || 0}</span>
                                    </p>
                                    <p style={{cursor: 'pointer'}} onClick={() => removeFromCart(item.name)}>
                                      <DeleteIcon id={styles.icon} />
                                    </p>
                                </figure>
                                <hr />
                            </article>
                        ))}
                        <article className={styles.totalCheck}>
                            <button className={styles.checkout} onClick={checkOut}>Checkout</button>
                            <p>Total : <span>{total}</span></p>
                        </article>
                    </section>

                )
            }
        </div>
    )
}

export default Cart;
