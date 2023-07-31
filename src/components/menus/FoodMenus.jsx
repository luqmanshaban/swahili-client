import React from 'react'
import Menus from './Menus'
import styles from './FoodMenus.module.scss'


const FoodMenus = () => {
  return (
    <div className={styles.foodMenu}>
      <Menus />
    </div>
  )
}

export default FoodMenus