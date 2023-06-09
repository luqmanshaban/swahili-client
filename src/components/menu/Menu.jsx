import React, { useState } from 'react';
import axios from 'axios';
import styles from './Menu.module.scss';
import Search from '@mui/icons-material/Search';
import CartIcon from '@mui/icons-material/ShoppingCart';
import BreakFast from '@mui/icons-material/FreeBreakfast';
import Lunch from '@mui/icons-material/LunchDining';
import Dessert from '@mui/icons-material/Icecream';
import RecommendIcon from '@mui/icons-material/Recommend';
import Drinks from '@mui/icons-material/BrunchDining';
import { createTheme, ThemeProvider } from '@mui/system';
import Filter from '@mui/icons-material/Tune';
import Recomended from './Recomended';
import Snacks from './Snacks'
import Meals from './Meals';
import Shawarma from './Shawarma';
import Drink from './Drinks'
import Cart from './Cart';

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
  //Track state of the different components
  const [active, setActive] = useState([true, false, false, false, false, false]);
  //
  const [activeClass, setActiveClass] = useState(false);
  const [numOfCartItems, setNumOfCartItems] = useState(0);
  const [cartItems, setCartItems] = useState([])
  const [toggleCart, setToggleCart] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0);
  const [loggedIn] = useState(localStorage.getItem('authToken') !== null);

  //Toggle Cart
  const cart = () => {
    setToggleCart(!toggleCart)
  }
  //Untoggle Cart
  const unToggle = () => {
    setToggleCart(!toggleCart)
  }

  const addToCart = (img, name, price, total, numOfItems) => {
    setNumOfCartItems(prev => prev + 1)
    const newCartItems = {
      image: img,
      name: name,
      price: price,
      total: total,
      totalItem: numOfItems
    }
    setCartItems(prev => [...prev, newCartItems])
    setTotalPrice((prevTotal) => prevTotal + total); // Update the total price
  }
  const removeFromCart = (index) => {
    setNumOfCartItems(prev => prev - 1)
    setTotalPrice(prevTotal => prevTotal - cartItems[index].total); // Subtract the price of the removed item from the total
    setCartItems(prev => {
      const updatedCart = [...prev];
      updatedCart.splice(index, 1);
      return updatedCart;
    });
  };

  const email = localStorage.getItem('email');  
  //Handle Order
  const handleOrderSubmit = async () => {
    
    try {
      const response = await axios.post('http://192.168.0.21:4000/api/v1/customer', email);
      const customerId = response.data.customerId;
      localStorage.setItem('customerId', customerId)
  
      const order = {
        custId: customerId,
        foodName: cartItems.map(item => item.name).join(", "), // Concatenate food names
        foodImage: cartItems.map(item => item.image).join(", "), // Concatenate food image
        foodPrice: cartItems.map(item => item.price.toString()).join(", "), // Concatenate food price
        orderQuantity: numOfCartItems,
        totalPrice: totalPrice
      };
  
  
      await axios.post('http://192.168.0.21:4000/api/v1/orders', order).then(response => {
        if (response.status === 201) {
          alert('Order created');
        }
        
        setNumOfCartItems(0)
        setCartItems([])
      });
    } catch (error) {
      console.error(error);
    }
  };
  
  //handle the slider that renders different food components
  const handleClick = (index) => {
    setActive(active.map((value, i) => i === index));
    setActiveClass(!activeClass)
  };
  //Toggle the active class
  const toggleActive = () => {
    setActiveClass(!activeClass)
  }
 
  return (
    <div className={styles.menu}>
      <header>
        <section>
          <h2>Welcome swahili Plate Menu!</h2>
          <p>Let's get you served!!</p>
        </section>
        <form>
          <input type="search" name='food' placeholder="search for food ..." />
          <button>
            <Search className={styles.btn}/>
          </button>
        </form>
        <button className={`${styles.cart} ${loggedIn ? styles.active : ''}`}>
          <ThemeProvider theme={theme}>
            <CartIcon color="primary" sx={{ fontSize: "35px" }} onClick={cart} className={`${loggedIn ? styles.active : ''} ${styles.cartIcon}`}/>
            <span>{numOfCartItems}</span>
          </ThemeProvider>
        </button>
        
        {toggleCart  && (
          <Cart
            numOfCartItems={numOfCartItems}
            cartItems={cartItems}
            totalPrice={totalPrice}
            removeFromCart={removeFromCart}
            unToggle={unToggle}
            handleOrderSubmit={handleOrderSubmit}
          />
        )}

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
            <RecommendIcon color="primary" className={styles.icons}/>
            <button className={`${active[0] ? styles.active : ""} ${styles.btn}`}>
              Top
            </button>
          </li>
          <li onClick={() => handleClick(1)} className={`${active[1] ? styles.active : ""}`}>
            <BreakFast color="primary" className={styles.icons}/>
            <button className={`${active[1] ? styles.active : ""} ${styles.btn}`}>Snacks</button>
          </li>
          <li onClick={() => handleClick(2)} className={`${active[2] ? styles.active : ""}`}>
            <Lunch color="primary" className={styles.icons}/>
            <button className={`${active[2] ? styles.active : ""} ${styles.btn}`}>Meals</button>
          </li>
          <li onClick={() => handleClick(3)} className={`${active[3] ? styles.active : ""}`}>
            <Dessert color="primary" className={styles.icons}/>
            <button className={`${active[3] ? styles.active : ""} ${styles.btn}`}>Shawarma</button>
          </li>
          <li onClick={() => handleClick(4)} className={`${active[4] ? styles.active : ""}`}>
            <Drinks color="primary" className={styles.icons}/>
            <button className={`${active[4] ? styles.active : ""} ${styles.btn}`}>Drinks</button>
          </li>
          </ThemeProvider>
        </ul>

      </main>

      <section className={styles.foodMenu}>
      {active[0] && <Recomended addToCart={addToCart} />}
      {active[1] && <Snacks addToCart={addToCart} />}
      {active[2] && <Meals addToCart={addToCart} />}
      {active[3] && <Shawarma addToCart={addToCart} />}
      {active[4] && <Drink addToCart={addToCart} />}
      </section>

      
    </div>
  );
}


export default Menu;
