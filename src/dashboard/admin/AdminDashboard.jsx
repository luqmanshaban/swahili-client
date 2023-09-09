import React, { useState } from 'react'
import Navbar from './Navbar'
import styles from './Admin.module.scss'
import Header from './pages/Header'
import Home from './pages/Home'
import Orders from './pages/Orders'
import History from './pages/History'
import Users from './pages/Users'
import Profile from './pages/Profile'
import Messages from './pages/Messages'
import Menu from './pages/Menu'

const AdminDashboard = () => {
  const [activeComponent, setActiveComponent] = useState([true, false, false, false, false, false, false])
  const [active, setActive] = useState(false)

  const toggleActiveComponent = index => {
    setActiveComponent(activeComponent.map((value, i) => i === index))
    setActive(false)
  }

  const toggleProfile = () => {
    setActive(true)
    setActiveComponent([false,false, false, false, false, false])
  }

  
  return (
    <section className={styles.admin}>
        <header>
          <Navbar toggleComponent={toggleActiveComponent}/>
        </header>
        <main>
          <Header toggleProfile={toggleProfile}/>
          <section>
            {activeComponent[0] && <Home />}
            {activeComponent[1] && <Orders />}
            {activeComponent[2] && <History />}
            {activeComponent[3] && <Users />}  
            {activeComponent[4] && <Menu />}  
            {activeComponent[5] && <Messages />}
            {activeComponent[6] && <Profile />}
            {active && <Profile />}
          </section>
        </main>
    </section>
  )
}

export default AdminDashboard