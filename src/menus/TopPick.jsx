import React, { useContext } from 'react'
import Data from './Data'
import { MenuContext } from '../stores/MenuContext'
import styles from './Menu.module.scss';

const TopPick = () => {
    const TopPick = Data.topPick

    const { addToCart, handleAdd, handleMinus, itemCount } = useContext(MenuContext)
  return (
    <div>
        <h1 style={{margin: '10px', fontSize: '30px'}}>TopPick</h1>
        <section className={styles.menu}>
        {
            TopPick.map((food, id) => (
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

export default TopPick