import React, { useState } from 'react';
import styles from './Menu.module.scss';
import Search from '@mui/icons-material/Search';
import Cart from '@mui/icons-material/ShoppingCart';
import BreakFast from '@mui/icons-material/FreeBreakfast';
import Lunch from '@mui/icons-material/LunchDining';
import Dinner from '@mui/icons-material/DinnerDining';
import Dessert from '@mui/icons-material/Icecream';
import Drinks from '@mui/icons-material/BrunchDining';
import { createTheme, ThemeProvider } from '@mui/system';
import Recomended from './Recomended';
import Meals from './Meals';
import Snacks from './Snacks';
import Shawarma from './Shawarma';

//Mui
const theme = createTheme({
  palette: {
    primary: {
      main: '#DB8A31',
    },
    secondary: {
      main: '#000',
    },
  },
});

function Menu() {
  
  //add the active class
  const [active, setActive] = useState([false, false, false, false, false, false])

  const handleClick = (index) => {
      setActive(active.map((value, i) => i === index))
  }

  return (
    <div className={styles.menu}>
      <header>
        <section>
          <h2>Welcome swahili Plate Menu!</h2>
          <p>Let's get you served!!</p>
        </section>
        <form>
          <input type="search" placeholder="search for food ..." />
          <button>
            <Search />
          </button>
        </form>
        <button className={styles.cart}>
          <ThemeProvider theme={theme}>
            <Cart color="primary" sx={{ fontSize: '35px' }} />
          </ThemeProvider>
        </button>
      </header>

      <main>
        <ul className={styles.navMenu}>
          <li onClick={() => handleClick(0)} className={`${active[0] ? styles.active: ''} `}>
            <button className={`${active[0] ? styles.active: ''} ${styles.btn}`}>Recommended</button>
          </li>
          <li onClick={() => handleClick(1)} className={`${active[1] ? styles.active: ''}`}>
            <BreakFast color="primary" />
            <button className={`${active[1] ? styles.active: ''} ${styles.btn}`}>Breakfast</button>
          </li>
          <li onClick={() => handleClick(2)} className={`${active[2] ? styles.active: ''}`}>
            <Lunch color="primary" />
            <button className={`${active[2] ? styles.active: ''} ${styles.btn}`}>Meals</button>
          </li>
          <li onClick={() => handleClick(3)} className={`${active[3] ? styles.active: ''}`}>
            <Dinner color="primary" />
            <button className={`${active[3] ? styles.active: ''} ${styles.btn}`}>Snacks</button>
          </li>
          <li onClick={() => handleClick(4)} className={`${active[4] ? styles.active: ''}`}>
            <Dessert color="primary" />
            <button className={`${active[4] ? styles.active: ''} ${styles.btn}`}>Shawarma</button>
          </li>
          <li onClick={() => handleClick(5)} className={`${active[5] ? styles.active: ''}`}>
            <Drinks color="primary" />
            <button className={`${active[5] ? styles.active: ''} ${styles.btn}`}>Drinks</button>
          </li>
        </ul>

      </main>

      {active[0] ? <Recomended /> : null}
      {active[1] ? <BreakFast /> : null}
      {active[2] ? <Meals /> : null}
      {active[3] ? <Snacks /> : null}
      {active[4] ? <Shawarma /> : null}
      {active[5] ? <Drinks /> : null}

    </div>
  );
}

export default Menu;




  // const handleClick = (index) => {
  //   setActive(active.map((value, i) => i === index ? true : false));
  // };
