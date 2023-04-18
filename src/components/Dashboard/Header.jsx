import React from 'react'

//
import styles from '../../STYLES/Header.module.scss'

function Header() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.search}>
        <input type="" placeholder='search for food . . .' className={styles.searchInput}/>
        <button>Search</button>
      </div>
      <button>Track Order</button>
      <span>Cart</span>
      <section>Profile</section>
    </nav>
  )
}

export default Header;