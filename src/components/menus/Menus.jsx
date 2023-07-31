import React, { useState } from 'react'
import Navbar from './Components/MenuNavbar'
import styles from './Menu.module.scss'
import Drinks from './Drinks'
import All from './All'
import Snacks from './Snacks'
import Lunch from './Lunch'
import Shawarma from './Shawarma'
import TopPick from './TopPick'

const Menus = () => {
  const [activeBtn, setActiveBtn] = useState([true, false, false, false, false, false])

  const handleBtnClick = (index) => {
    setActiveBtn(activeBtn.map((value, i) => i === index));
  };

  return (
    <section>
        <header>
            <Navbar activeBtn={activeBtn} handleBtnClick={handleBtnClick}/>
        </header>
        <main>
          <section className={styles.menusItems}>
            <ul>
              <li>
                {activeBtn[0] && <All />}
              </li>
              <li>
              {activeBtn[1] && <Snacks />}
              </li>
              <li>
                {activeBtn[2] && <Lunch />}
              </li>
              <li>
                {activeBtn[3] && <Shawarma />}
              </li>
              <li>
              {activeBtn[4] && <Drinks />}
              </li>
              <li>
                {activeBtn[5] && <TopPick />}
              </li>
            </ul>
          </section>
        </main>
    </section>
  )
}

export default Menus