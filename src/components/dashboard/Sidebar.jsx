import React, { useState } from 'react'
import styles from './Sidebar.module.scss'
import userImage from '../../assets/avatar.jpeg'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Sidebar = ({toggleOrderComponent, toggleHistoryComponent, toggleDiscountComponent, toggleAccountComponent}) => {

  const [active, setActive] = useState(false)

  const navigate = useNavigate()

  const Logout = async () => {
    const token = localStorage.getItem('authToken');
  
    try {
      await axios.post('http://127.0.0.1:8000/api/logout', null, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      console.log('User Logged Out');
      localStorage.removeItem('authToken');
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };
  

  const toggleActive = () => {
    setActive(!active)
  }

  const unToggleActive = () => {
    setActive(false)
  }

  return (
    <aside className={styles.aside}>
      <ul className={`${styles.hamburger} ${active ? styles.active : ''}`} onClick={toggleActive}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </ul>
      <h1>Swahili Plate</h1>
      <nav className={`${active ? styles.active : ''}`}>
        <h6>Swahili Plate</h6>
        <ul className={styles.navMenu}>
          <li onClick={unToggleActive}>
            <button onClick={toggleOrderComponent} className={styles.btn}>ORDERS</button>
          </li>
          <li onClick={unToggleActive}>
            <button onClick={toggleHistoryComponent} className={styles.btn}>HISTORY</button>
          </li>
          <li onClick={unToggleActive}>
            <button onClick={toggleDiscountComponent} className={styles.btn}>DISCOUNT</button>
          </li>
          <li onClick={unToggleActive}>
            <button onClick={toggleAccountComponent} className={styles.btn}>ACCOUNT</button>
          </li>
          <li onClick={unToggleActive}>
            <button onClick={toggleAccountComponent} id={styles.accImg}>
              <img src={userImage} alt="img" height={50} />
            </button>
          </li>
        </ul>
        <button onClick={Logout} id={styles.logout}>LOGOUT</button>
      </nav>
         
    </aside>
  )
}

export default Sidebar