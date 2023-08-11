import React, { useContext, useEffect } from 'react'
import Navbar from './Navbar'
import styles from './Admin.module.scss'
import { AdminContext } from '../../stores/Admin'
import Home from './pages/Home'

const AdminDashboard = () => {
  const { getAdminDetails } = useContext(AdminContext)

  useEffect(() => {
    getAdminDetails()
  },[getAdminDetails])
  return (
    <section className={styles.admin}>
        <aside>
          <Navbar />
        </aside>
        <main>
          <Home />
        </main>
    </section>
  )
}

export default AdminDashboard