import React, { useContext } from 'react'
import Data from './Data'
import { MenuContext } from '../stores/MenuContext'
import styles from './Menu.module.scss';

const All = () => {
    const All = Data.all

    const { addToCart, handleAdd, handleMinus, itemCount } = useContext(MenuContext)
  return (
    <div>
        <h1 style={{margin: '10px', fontSize: '30px'}}>All</h1>
        <section className={styles.menu}>
        {
            All.map((food, id) => (
                <article key={id}>
                    <img src={food.img} alt={food.name} />
                    <h1>{food.name}</h1>
                    <p>ksh {food.price}</p>
                    <figure>
                        <button onClick={() => handleAdd(food.name)}>+</button>
                        <p>{itemCount[food.name] || 0}</p>
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

export default All