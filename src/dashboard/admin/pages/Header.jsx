import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../../stores/Admin';
import styles from './Header.module.scss'
import { Link } from 'react-router-dom';

const Header = () => {
  const {adminDetails, getAdminDetails} = useContext(AdminContext)
  
  

  useEffect(() => {
    getAdminDetails();
  },[])
  return (
    <div className={styles.dashboardHeader}>
        <Link to='/admin'>
          <h1>Dashboard</h1>
        </Link>
        <section>
            <h1>{adminDetails.firstname} </h1>
        </section>
    </div>
  )
}

export default Header