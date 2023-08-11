import React, { useContext } from 'react'
import Data from './Data'
import { MenuContext } from '../stores/MenuContext'
import styles from './Menu.module.scss';

const Lunch = () => {
    const Lunch = Data.meals

    const { addToCart, handleAdd, handleMinus, itemCount } = useContext(MenuContext)
  return (
    <div>
        <h1 style={{margin: '10px', fontSize: '30px'}}>Lunch</h1>
        <section className={styles.menu}>
        {
            Lunch.map((food, id) => (
                <article key={id}>
                    <img src={food.img} alt={food.name} />
                    <h1>{food.name}</h1>
                    <p>{food.price}</p>
                    <figure>
                        <button onClick={() => handleAdd(food.name)}>+</button>
                        <p>{itemCount[food.name] || 0}</p>
                        <button onClick={() => handleMinus(food.name)}>-</button>
                    </figure>
                    <button onClick={() => addToCart(food.name, food.price, food.img)}>Add To Cart</button>
                </article>
            ))
        }
        </section>
    </div>
  )
}

export default Lunch