import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../../stores/Admin';
import styles from './Header.module.scss'
import { Link } from 'react-router-dom';
import userImg from '../../../assets/avatar.jpeg'
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = ({ toggleProfile }) => {
  const {adminDetails, getAdminDetails, profilePic, getProfilePicture} = useContext(AdminContext)
   

  useEffect(() => {
    getAdminDetails();
    getProfilePicture();
  },[])
  return (
    <div className={styles.dashboardHeader}>
        <Link to='/admin'>
          <h1>Dashboard</h1>
        </Link>
        <section>
            <img  onClick={toggleProfile} src={profilePic || userImg} height={30} alt="profile" />
            <h1>{adminDetails.firstname} {adminDetails.lastname}</h1>
            <button><NotificationsIcon id={styles.icon}/></button>
        </section>
    </div>
  )
}

export default Header