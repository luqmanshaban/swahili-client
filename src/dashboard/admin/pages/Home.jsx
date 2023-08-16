import React from 'react'
import styles from './Home.module.scss'
import MenuIcon from '@mui/icons-material/RestaurantMenu';
import BasketIcon from '@mui/icons-material/ShoppingBasket';
import AccountBoxIcon from '@mui/icons-material/AccountBox';


const Home = () => {
  return (
    <div className={styles.adminHome}>
      <div>
        
      </div>
      <section  id={styles.a1}>
        <article>
          <figure className={styles.content}>
            <p>
              37
            <span>Total Menus</span>
            </p>
            <h3>
              <MenuIcon style={{color: '#fff'}}/>
            </h3>
          </figure>
          <figure className={styles.hr}></figure>
        </article>
      </section>
      <section  id={styles.a2}>
        <article>
        <figure className={styles.content}>
            <p>
              9
            <span>Orders Today</span>
            </p>
            <h3>
              <BasketIcon style={{color: '#fff'}}/>
            </h3>
          </figure>
          <figure className={styles.hr}></figure>
        </article>
      </section>
      <section  id={styles.a3}>
      <article>
        <figure className={styles.content}>
            <p>
              8
            <span>Total clients</span>
            </p>
            <h3>
              <AccountBoxIcon style={{color: '#fff'}}/>
            </h3>
          </figure>
          <figure className={styles.hr}></figure>
        </article>
      </section>
      <section  id={styles.a4}>
        <article>
          <figure className={styles.content}>
            <p>
              10
            <span>Visits today</span>
            </p>
            <h3>
              <AccountBoxIcon style={{color: '#fff'}}/>
            </h3>
          </figure>
          <figure className={styles.hr}></figure>
        </article>
      </section>
    </div>
  )
}

export default Home