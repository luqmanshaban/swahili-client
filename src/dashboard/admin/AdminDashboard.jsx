import React, { useState } from 'react'
import Navbar from './Navbar'
import styles from './Admin.module.scss'
import Header from './pages/Header'
import Home from './pages/Home'
import Orders from './pages/Orders'
import History from './pages/History'
import Users from './pages/Users'
import Analytics from './pages/Analytics'
import Profile from './pages/Profile'
import Messages from './pages/Messages'

const AdminDashboard = () => {
  const [activeComponent, setActiveComponent] = useState([true, false, false, false, false, false, false])

  const toggleActiveComponent = index => setActiveComponent(activeComponent.map((value, i) => i === index))

  
  return (
    <section className={styles.admin}>
        <aside>
          <Navbar toggleComponent={toggleActiveComponent}/>
        </aside>
        <main>
          <Header />
          <section>
            {activeComponent[0] && <Home />}
            {activeComponent[1] && <Orders />}
            {activeComponent[2] && <History />}
            {activeComponent[3] && <Users />}
            {activeComponent[4] && <Analytics />}
            {activeComponent[5] && <Messages />}
            {activeComponent[6] && <Profile />}
          </section>
        </main>
    </section>
  )
}

export default AdminDashboard