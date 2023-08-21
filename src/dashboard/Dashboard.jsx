import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar';

//
import styles from './Dashboard.module.scss'
import Footer from '../Landing/Footer';
import Order from './modals/Order';
import History from './modals/History';
import Account from './modals/Account';
import { useNavigate } from 'react-router-dom';
import FoodMenus from '../menus/FoodMenus';
import { CustomerProvider } from '../stores/Customer';
import Header from './modals/Header';
import Messages from './modals/Messages';


function Dashboard() {

  const [toggleComponent, setToggleComponent] = useState([false, false, false, false])


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

  const toggleClickedButtonComponent = index => {
    setToggleComponent(toggleComponent.map((value, i) => i === index))
  }


  return (
    <section id={styles.dash}>

      <CustomerProvider>
      <aside>
        <Sidebar toggleComponent={toggleClickedButtonComponent}/>
      </aside>
        <Header />
     <div className={styles.dashboard}>
        <main className={styles.main}>
          <p id={styles.headerP}>Let's grab you some food . . .</p>
            <FoodMenus />
       
         {toggleComponent[0] && <Order click={toggleClickedButtonComponent}/>}
         {toggleComponent[1] && <History click={toggleClickedButtonComponent}/>}
         {toggleComponent[2] && <Messages click={toggleClickedButtonComponent}/>}
         {toggleComponent[3] && <Account click={toggleClickedButtonComponent}/>}
          
          <Footer />
        </main>

     </div>
      </CustomerProvider>

   </section>
  )
}

export default Dashboard;