import React from 'react'
import Sidebar from './Sidebar';

//
import styles from './Dashboard.module.scss'
import Menu from '../menu/Menu';
import Footer from '../Landing/Footer';

function Dashboard() {
  return (
    <>
     <div className={styles.dashboard}>

      <aside>
        <Sidebar />
      </aside>

      <main className={styles.main}>
        <Menu />
      </main>


    <footer>
      <Footer />
    </footer>
     </div>
     </>
  )
}

export default Dashboard;