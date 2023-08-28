import React, { useContext } from 'react'
import Data from './Data'
import { MenuContext } from '../stores/MenuContext'
import styles from './Menu.module.scss';

const Snacks = () => {
    const snacks = Data.snacks

    const { addToCart, handleAdd, handleMinus, itemCount } = useContext(MenuContext)
  return (
    <div>
        <h1 style={{margin: '10px', fontSize: '30px'}}>Snacks</h1>
        <section className={styles.menu}>
        {
            snacks.map((food, id) => (
                <article key={id}>
                    <img src={food.img} alt={food.name} />
                    <h1>{food.name}</h1>
                    <p>ksh {food.price}</p>
                    <figure>
                        <button onClick={() => handleAdd(food.name)}>+</button>
                        <p>ksh {itemCount[food.name] || 0}</p>
                        <button onClick={() => handleMinus(food.name)} disabled={(itemCount[food.name] || 0 ) === 0}>-</button>
                    </figure>
                    <button onClick={() => addToCart(food.name, food.price, food.img)}>Add To Cart</button>
                </article>
            ))
        }
        </section>
    </div>
  )
}

export default Snacks