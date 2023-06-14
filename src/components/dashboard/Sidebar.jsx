import React from 'react'
import styles from './Sidebar.module.scss'
import userImage from '../../assets/avatar.jpeg'
import { useNavigate } from 'react-router-dom'

const Sidebar = ({toggleOrderComponent, toggleHistoryComponent, toggleDiscountComponent, toggleAccountComponent}) => {

  const navigate = useNavigate()
  const Logout = () => {
    localStorage.removeItem('authToken');
    navigate('/login')
  }

  return (
    <aside className={styles.aside}>
      <h1>Swahili Plate</h1>
      <nav>
        <h6>Swahili Plate</h6>
        <ul>
          <li>
            <button onClick={toggleOrderComponent} className={styles.btn}>ORDERS</button>
          </li>
          <li>
            <button onClick={toggleHistoryComponent} className={styles.btn}>HISTORY</button>
          </li>
          <li>
            <button onClick={toggleDiscountComponent} className={styles.btn}>DISCOUNT</button>
          </li>
          <li>
            <button onClick={toggleAccountComponent} className={styles.btn}>ACCOUNT</button>
          </li>
          <li>
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