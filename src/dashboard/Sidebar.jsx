import React, { useState } from 'react'
import styles from './Sidebar.module.scss'
import userImage from '../assets/avatar.jpeg'
import Logout from './Logout'
import { Link } from 'react-router-dom'

const Sidebar = ({toggleComponent}) => {

  const [active, setActive] = useState(false)

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
      <Link to='/dashboard'>
        <h1>Swahili Plate</h1>
      </Link>
      <nav className={`${active ? styles.active : ''}`}>
        <h6>Swahili Plate</h6>
        <ul className={styles.navMenu}>
          <li onClick={unToggleActive}>
            <button onClick={() => toggleComponent(0)} className={styles.btn}>ORDERS</button>
          </li>
          <li onClick={unToggleActive}>
            <button onClick={() => toggleComponent(1)} className={styles.btn}>HISTORY</button>
          </li>
          <li onClick={unToggleActive}>
            <button onClick={() => toggleComponent(2)} className={styles.btn}>DISCOUNT</button>
          </li>
          {/* <li onClick={unToggleActive}>
            <button onClick={() => toggleComponent(3)} className={styles.btn}>ACCOUNT</button>
          </li> */}
          <li onClick={unToggleActive}>
            <button onClick={() => toggleComponent(3)} id={styles.accImg}>
              <img src={userImage} alt="img" height={50} />
            </button>
          </li>
        </ul>
        <ul id={styles.logout}>
          <Logout />
        </ul>
      </nav>
         
    </aside>
  )
}

export default Sidebar