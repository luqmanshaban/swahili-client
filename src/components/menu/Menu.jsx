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
import Filter from '@mui/icons-material/Tune';
import Recomended from './Recomended';
import Breakfast from './Breakfast'
import Meals from './Meals';
import Snacks from './Snacks';
import Shawarma from './Shawarma';
import Drink from './Drinks'

//Mui
const theme = createTheme({
  palette: {
    primary: {
      main: '#e78d26',
    },
    secondary: {
      main: '#000',
    },
  },
});

function Menu() {
  const [active, setActive] = useState([true, false, false, false, false, false]);
  const [activeClass, setActiveClass] = useState(false);
  const [food, setFood] = useState(null)

  const handleClick = (index) => {
    setActive(active.map((value, i) => i === index));
    setActiveClass(!activeClass)
  };

  //Toggle the active class
  const toggleActive = () => {
    setActiveClass(!activeClass)
  }
  //remove the active class
  

  const handleSearch = e => {
    e.preventDefault()
  }
  const handleChange = (e) => {
    setFood(prev => ({
      prev,
      [e.target.name]: e.target.value,
    }))
  }
  console.log(food);

  return (
    <div className={styles.menu}>
      <header>
        <section>
          <h2>Welcome swahili Plate Menu!</h2>
          <p>Let's get you served!!</p>
        </section>
        <form onSubmit={handleSearch}>
          <input type="search" name='food' placeholder="search for food ..." onChange={handleChange}/>
          <button>
            <Search className={styles.btn}/>
          </button>
        </form>
        <button className={styles.cart}>
          <ThemeProvider theme={theme}>
            <Cart color="primary" sx={{ fontSize: "35px" }} />
          </ThemeProvider>
        </button>
      </header>

      <main>
        <span className={`${styles.filter} `} onClick={toggleActive}>
          <span>Filter</span>
          <ThemeProvider theme={theme}>
            <Filter color='primary' />
          </ThemeProvider>
        </span>
        <ul className={`${styles.navMenu} ${activeClass ? styles.active : ''}`}>
          <ThemeProvider theme={theme}>
          <li onClick={() => handleClick(0)} className={`${active[0] ? styles.active : ""}`}>
            <button className={`${active[0] ? styles.active : ""} ${styles.btn}`}>
              Recommended
            </button>
          </li>
          <li onClick={() => handleClick(1)} className={`${active[1] ? styles.active : ""}`}>
            <BreakFast color="primary" className={styles.icons}/>
            <button className={`${active[1] ? styles.active : ""} ${styles.btn}`}>Breakfast</button>
          </li>
          <li onClick={() => handleClick(2)} className={`${active[2] ? styles.active : ""}`}>
            <Lunch color="primary" className={styles.icons}/>
            <button className={`${active[2] ? styles.active : ""} ${styles.btn}`}>Meals</button>
          </li>
          <li onClick={() => handleClick(3)} className={`${active[3] ? styles.active : ""}`}>
            <Dinner color="primary" className={styles.icons}/>
            <button className={`${active[3] ? styles.active : ""} ${styles.btn}`}>Snacks</button>
          </li>
          <li onClick={() => handleClick(4)} className={`${active[4] ? styles.active : ""}`}>
            <Dessert color="primary" className={styles.icons}/>
            <button className={`${active[4] ? styles.active : ""} ${styles.btn}`}>Shawarma</button>
          </li>
          <li onClick={() => handleClick(5)} className={`${active[5] ? styles.active : ""}`}>
            <Drinks color="primary" className={styles.icons}/>
            <button className={`${active[5] ? styles.active : ""} ${styles.btn}`}>Drinks</button>
          </li>
          </ThemeProvider>
        </ul>

      </main>

      {active[0] && <Recomended search={food}/>}
      {active[1] && <Breakfast />}
      {active[2] && <Meals />}
      {active[3] && <Snacks />}
      {active[4] && <Shawarma />}
      {active[5] && <Drink />}
    </div>
  );
}


export default Menu;




  // const handleClick = (index) => {
  //   setActive(active.map((value, i) => i === index ? true : false));
  // };
