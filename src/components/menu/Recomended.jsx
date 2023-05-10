import React, { useEffect, useState } from 'react'
import axios from 'axios'

//
import styles from './Recomended.module.scss'

function Recomended({search}) {
   const [recomended, setRecomended] = useState(null)
   
   //MEALS
   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.edamam.com/api/food-database/v2/parser', {
          params: {
            ingr: search,
            app_id: '9a3765cf',
            app_key: '8530b85b5ed16e6f12603385ed108a15'
          }
        });
        setRecomended(response.data);
      } catch (error) {
        console.error('Error fetching food data:', error);
      }
    };

    fetchData();
  }, [search]);

 

  //generating random price for each food
    // Extract the foods with images from the retrieved foodData
  const meals = recomended && recomended.hints.filter(hint => hint.food.image && hint.food.image !== '')
  .slice(7, 12)
  .map(hint => ({ ...hint.food, price: Math.floor(Math.random() * (1500 - 200 + 1)) + 200 }));


  return (
    <div className={styles.recomended}>
        <ul>

          <li>
          {meals ? (
          <ul className={styles.meals}>
            <h2 style={{marginBottom: '20px'}}>Special Offer</h2>

          <article>
            {meals.map(food => (
              <li key={food.foodId}>

                <img src={food.image} alt="meal" height={50}/>

                <h4>{food.knownAs}</h4>

                <span className={styles.info}>
                  <span>
                    <p>{food.price}.00/ksh</p>
                    <p className={styles.pricewas}>{food.price}.00/ksh</p>
                  </span>
                  <button>Order</button>
                </span>

              </li>
            ))}
          </article>
        </ul>
      ) 
      :
       (
        <section className={styles.load}>
            <article className={styles.food}></article>
            <article className={styles.food}></article>
            <article className={styles.food}></article>
            <article className={styles.food}></article>
            <article className={styles.food}></article>
            <article className={styles.food}></article>
            <article className={styles.food}></article>
            <article className={styles.food}></article>
        </section>
      )}
          </li>

        </ul>
    </div>
  )
}

export default Recomended;

