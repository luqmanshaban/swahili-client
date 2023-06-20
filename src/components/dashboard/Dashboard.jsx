import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

//
import styles from './Dashboard.module.scss'
import Menu from '../menu/Menu';
import Footer from '../Landing/Footer';
import Order from './modals/Order';
import History from './modals/History';
import Discount from './modals/Discount';
import Account from './modals/Account';

function Dashboard() {
  const [orderActive, setOrderActive] = useState(false)
  const [historyActive, setHistoryActive] = useState(false)
  const [discountActive, setDiscountActive] = useState(false)
  const [accountActive, setAccountActive] = useState(false)

  //Automatically logout after session token has expired
  const navigate = useNavigate();
  const Logout = () => {
    const token = localStorage.getItem('authToken');

    if (!token) {
      navigate("/login")
    }
  }

  Logout();

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
          <Menu />
       
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