import React, { useEffect, useState } from 'react'
import styles from './Home.module.scss'
import MenuIcon from '@mui/icons-material/RestaurantMenu';
import BasketIcon from '@mui/icons-material/ShoppingBasket';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import axios from 'axios';


const Home = () => {
  const [ orderList, setOrderList ] = useState([])

  const getOrders = async() => {
    const token = localStorage.getItem('token')
    try {
      const response = await axios.get('http://localhost:8000/api/previous-orders', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(response);
      setOrderList(response.data.orders)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getOrders()
  },[])
  return (
    <div className={styles.adminHome}>

      <div className={styles.header}>
      <section  id={styles.a1}>
        <article>
          <figure className={styles.content}>
            <p>
              37
            <span>Total Menus</span>
            </p>
            <h3>
              <MenuIcon style={{color: '#fff'}}/>
            </h3>
          </figure>
          <figure className={styles.hr}></figure>
        </article>
      </section>
      <section  id={styles.a2}>
        <article>
        <figure className={styles.content}>
            <p>
              9
            <span>Orders Today</span>
            </p>
            <h3>
              <BasketIcon style={{color: '#fff'}}/>
            </h3>
          </figure>
          <figure className={styles.hr}></figure>
        </article>
      </section>
      <section  id={styles.a3}>
      <article>
        <figure className={styles.content}>
            <p>
              8
            <span>Total clients</span>
            </p>
            <h3>
              <AccountBoxIcon style={{color: '#fff'}}/>
            </h3>
          </figure>
          <figure className={styles.hr}></figure>
        </article>
      </section>
      <section  id={styles.a4}>
        <article>
          <figure className={styles.content}>
            <p>
              10
            <span>Visits today</span>
            </p>
            <h3>
              <AccountBoxIcon style={{color: '#fff'}}/>
            </h3>
          </figure>
          <figure className={styles.hr}></figure>
        </article>
      </section>
      </div>

      <div className={styles.orderList}>
        <section>
          <h1>Order List</h1>
          <div className={styles.hr}></div>
        </section>
        
        <section className={styles.orders}>
          <div>
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>ID</th>
                  <th>Date</th>
                  <th>Customer</th>
                  {/* <th>Location</th> */}
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {
                orderList.map((order, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{order.id}</td>
                    <td>{order.created_at.slice(0,10)}</td>
                    <td>{order.user.firstname}</td>
                    {/* <td>{order.location}</td> */}
                    <td>ksh {order.total}</td>
                    <td><span style={{ color: order.status === 'cancelled' ? 'red' : 'green' }}>{order.status}</span></td>
                  </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home