import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar';

//
import styles from './Dashboard.module.scss'
import Footer from '../Landing/Footer';
import Order from './modals/Order';
import History from './modals/History';
import Discount from './modals/Discount';
import Account from './modals/Account';
import { useNavigate } from 'react-router-dom';
import FoodMenus from '../menus/FoodMenus';


function Dashboard() {
  const [orderActive, setOrderActive] = useState(false)
  const [historyActive, setHistoryActive] = useState(false)
  const [discountActive, setDiscountActive] = useState(false)
  const [accountActive, setAccountActive] = useState(false);


  const navigate = useNavigate()
  useEffect(() => {
    LogoutIfTokenExpired();
  });

  const LogoutIfTokenExpired = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
    }
  }
  const toggleOrderComponent = () => {
    setOrderActive(!orderActive)
  }

  const toggleHistoryComponent = () => {
    setHistoryActive(!historyActive)
  }

  const toggleDiscountComponent = () => {
    setDiscountActive(!discountActive)
  }

  const toggleAccountComponent = () => {
    setAccountActive(!accountActive)
  }

  return (
    <section id={styles.dash}>
      <aside>
        <Sidebar toggleOrderComponent={toggleOrderComponent} toggleHistoryComponent={toggleHistoryComponent} toggleDiscountComponent={toggleDiscountComponent} toggleAccountComponent={toggleAccountComponent}/>
      </aside>

     <div className={styles.dashboard}>
        <main className={styles.main}>
          <p id={styles.headerP}>Let's grab you some food . . .</p>
            <FoodMenus />
       
         {orderActive && <Order click={toggleOrderComponent}/>}
         {historyActive && <History click={toggleHistoryComponent}/>}
         {discountActive && <Discount click={toggleDiscountComponent}/>}
         {accountActive && <Account click={toggleAccountComponent}/>}
          
          <Footer />
        </main>

     </div>
   </section>
  )
}

export default Dashboard;