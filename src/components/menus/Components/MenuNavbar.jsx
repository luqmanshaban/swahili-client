import React, { useContext } from 'react'
import styles from './MenuNavbar.module.scss'
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import DrinksIcon from '@mui/icons-material/FreeBreakfast';
import Lunch from '@mui/icons-material/LunchDining';
import Dessert from '@mui/icons-material/Icecream';
import ShawarmaIcon from '@mui/icons-material/LocalPizza';
import SnacksIcon from '@mui/icons-material/DinnerDining';
import SearchBar from '../../../layouts/Search';
import CartIcon from '@mui/icons-material/ShoppingCart';
import { MenuContext } from '../../../stores/MenuContext';
import Cart from '../Cart';

const Navbar = ({activeBtn, handleBtnClick}) => {
  const { count, toggleCartComponent, toggleCart } = useContext(MenuContext)
  return (
    <nav className={styles.menuNavbar}>
        <ul className={styles.navMenu}>
          <li onClick={() => handleBtnClick(0)} className={`${activeBtn[0] ? styles.active : ""}`}>
            <button className={`${activeBtn[0] ? styles.active : ""}`}>
              <span>All</span>
              <span><AllInclusiveIcon /></span>
            </button>
          </li>
          <li onClick={() => handleBtnClick(1)} className={`${activeBtn[1] ? styles.active : ""}`}>
            <button className={`${activeBtn[1] ? styles.active : ""}`}>
              <span>Snacks</span>
              <span><Lunch /></span>
            </button>
          </li>
          <li onClick={() => handleBtnClick(2)} className={`${activeBtn[2] ? styles.active : ""}`}>
            <button className={`${activeBtn[2] ? styles.active : ""}`}>
              <span>Lunch</span>
              <span><SnacksIcon /></span>
            </button>
          </li>
          <li onClick={() => handleBtnClick(3)} className={`${activeBtn[3] ? styles.active : ""}`}>
            <button className={`${activeBtn[3] ? styles.active : ""}`}>
              <span>Shawarma</span>
              <span><ShawarmaIcon /></span>
            </button>
          </li>
          <li onClick={() => handleBtnClick(4)} className={`${activeBtn[4] ? styles.active : ""}`}>
            <button className={`${activeBtn[4] ? styles.active : ""}`}>
              <span>Drinks</span>
              <span><DrinksIcon /></span>
            </button>
          </li>
          <li onClick={() => handleBtnClick(5)} className={`${activeBtn[5] ? styles.active : ""}`}>
            <button className={`${activeBtn[5] ? styles.active : ""}`}>
              <span>Top Pick</span>
              <span><Dessert /></span>
            </button>
          </li>
        </ul>
        
        <ul className={styles.rightNav}>
          <li className={styles.search}>
           <SearchBar id={styles.search}/>
          </li>
          <li className={styles.cart} onClick={toggleCartComponent}>
            <span style={{position: 'relative', top: '-25px', right: '-30px', font: 'sans-serif'}}>{count}</span>
            <CartIcon sx={{color: 'orange', fontSize: '30px', cursor: 'pointer'}}/>
          </li>
        </ul>
        <ul>
        <article className='cart'>
          {toggleCart && <Cart />}
        </article>
        </ul>
    </nav>
  )
}

export default Navbar