import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
//
import styles from './Menu.module.scss'
import Search from '@mui/icons-material/Search';
import Cart from '@mui/icons-material/ShoppingCart';
import BreakFast from '@mui/icons-material/FreeBreakfast';
import Lunch from '@mui/icons-material/LunchDining';
import Dinner from '@mui/icons-material/DinnerDining';
import Dessert from '@mui/icons-material/Icecream';
import Drinks from '@mui/icons-material/BrunchDining';
import {  createTheme,ThemeProvider } from '@mui/system';
import Recomended from './Recomended';


//Mui
const theme = createTheme( {
  palette: {
      primary: {
          main: '#DB8A31'
      },
      secondary: {
        main: '#000'
      }
  }
})
///

function Menu() {
  return (
    <div className={styles.menu}>

      <header>
        <section>
          <h2>Welcome user.username!</h2>
          <p>Let's get you served!!</p>
        </section>
        <form>
          <input type="search" placeholder='search for food ...'  />
          <button><Search /></button>
        </form>
        <button>
          <ThemeProvider theme={theme}>
            <Cart color='primary' sx={{fontSize: '35px'}}/>
          </ThemeProvider>
        </button>
      </header>

      <main>

        <ul className={styles.navMenu}>
          <ThemeProvider theme={theme}>
          <li>
            <Link to='/recomended'>Recomended</Link>
          </li>
          <li>
            <BreakFast color='primary'/>
            <Link to='/breakfast'>Breakfast</Link>
          </li>
          <li>
            <Lunch color='primary'/>
            <Link to='/lunch'>Lunch</Link>
          </li>
          <li>
            <Dinner color='primary'/>
            <Link to='/dinner'>Dinner</Link>
          </li>
          <li>
            <Dessert color='primary'/>
            <Link to='/dessert'>Desserts</Link>
          </li>
          <li>
            <Drinks color='primary'/>
            <Link to='/drinks'>Drinks</Link>
          </li>
          </ThemeProvider>
        </ul>

        <Recomended />

      </main>


      {/* //Routes// */}
      <Routes>
        <Route path='/recomended' Component={Menu} />
      </Routes>

    </div>
  )
}

export default Menu;