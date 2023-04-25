import React from 'react'
import Sidebar from './Sidebar';

//
import styles from './Dashboard.module.scss'
import Menu from '../menu/Menu';

function Dashboard() {
  return (
     <div className={styles.dashboard}>

      

      <aside>
        <Sidebar />
      </aside>

      <main>
        <Menu />
      </main>

    

     </div>
  )
}

export default Dashboard;