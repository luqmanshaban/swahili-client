import React, { useContext, useEffect, useState } from 'react'
import { MenuContext } from '../../../stores/MenuContext'
import styles from './Orders.module.scss'

const Orders = () => {
  const { activeOrders, getActiveOrders } = useContext(MenuContext)
  const [orderCheckboxes, setUserCheckboxes] = useState({});

  const handleCheckboxChange = (userId) => {
    setUserCheckboxes(prevState => ({
      ...prevState,
      [userId]: !prevState[userId] 
    }));
    console.log(orderCheckboxes);
  };

  useEffect(() => {
    getActiveOrders ()
  },[])

  return (
    <div className={styles.OrdersComponent}>
      <header></header>
      <main>
        <section>
        <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>User</th>
            <th>name</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Status</th>
            <th>Select</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {activeOrders !== null && activeOrders.map((order,index) => (
            <>
            <tr key={order.id}>
              <td style={{textAlign: 'center'}}>{index + 1}</td>
              <td>{order.user.firstname} {order.user.lastname}</td>
              <td>{order.name}</td>
              <td style={{display: 'flex', justifyContent: 'center'}}>
                <img src={order.img} alt={order.name} />
              </td>
              <td>{order.quantity}</td>
              <td>{order.total}</td>
              <td>{order.status}</td>
              <td style={{textAlign: 'center'}}>
                <input
                  type="checkbox"
                  checked={orderCheckboxes[order.id] || false}
                  onChange={() => handleCheckboxChange(order.id)}
                />
              </td>
            <td className={styles.btns}>
              <button className={styles.accept}>Accept</button>
              <button className={styles.reject}>Reject</button>
            </td>
            </tr>
             </>
          ))}
        </tbody>
      </table>
        </section>
      </main>
    </div>
  )
}

export default Orders