import React from 'react'
import Sidebar from './Sidebar';
import Header from './Header'
import Main from './Main'

//
import styles from '../../STYLES/Dashboard.module.scss'

function Dashboard() {
  return (
    <div className={styles.dashboard}>
    <header>
      <Header />
      <hr />
    </header>
    <aside>
      <Sidebar/>
    </aside>
    <main>
      <Main />
    </main>
    </div>
  )
}

export default Dashboard;