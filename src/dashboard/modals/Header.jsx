import React, { useContext, useEffect } from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom';
import userImg from '../../assets/avatar.jpeg'
import NotificationsIcon from '@mui/icons-material/Notifications';
import { CustomerContext } from '../../stores/Customer';

const Header = ({ toggleProfile }) => {
  const {customerDetails, getCustomerDetails, profilePic, getProfilePicture} = useContext(CustomerContext)
   

  useEffect(() => {
    getCustomerDetails();
    getProfilePicture();
  },[])
  return (
    <div className={styles.customerDashboardHeader}>
        <Link to='/admin'>
          <h1 id={styles.h1} style={{color: "#000"}}>Dashboard</h1>
        </Link>
        <section>
            <img  onClick={toggleProfile} src={profilePic || userImg} height={30} alt="profile" />
            <h1>{customerDetails.firstname} {customerDetails.lastname}</h1>
            <button><NotificationsIcon id={styles.icon}/></button>
        </section>
    </div>
  )
}

export default Header