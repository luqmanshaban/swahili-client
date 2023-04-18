import React from 'react'

//
import styles from '../../STYLES/Main.module.scss'

function Main() {
  return (
    <section style={styles}>
      <article>
        <h4>Meals</h4>
        <span className={styles.food}></span>
      </article>
      <article>
        <h4>Drinks</h4>
        <span className={styles.food}></span>
      </article>
      <article>
        <h4>Desserts</h4>
        <span className={styles.food}></span>
      </article>
    </section>
  )
}

export default Main