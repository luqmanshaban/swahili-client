import React, { useContext, useEffect, useState } from 'react'
import { MenuContext } from '../../../stores/MenuContext'
import styles from './History.module.scss'

const History = () => {
  const { completedOrders, getCompletedOrders } = useContext(MenuContext)
  const [orderCheckboxes, setUserCheckboxes] = useState({});

  const handleCheckboxChange = (userId) => {
    setUserCheckboxes(prevState => ({
      ...prevState,
      [userId]: !prevState[userId] 
    }));
    console.log(orderCheckboxes);
  };

  useEffect(() => getCompletedOrders(),[])
  return (
    <div className={styles.HistoryComponent}>
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
          </tr>
        </thead>
        <tbody>
          {completedOrders !== null && completedOrders.map((order,index) => (
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
              <td style={{color: 'green', fontWeight: 'bold'}}>{order.status}</td>
              <td style={{textAlign: 'center'}}>
                <input
                  type="checkbox"
                  checked={orderCheckboxes[order.id] || false}
                  onChange={() => handleCheckboxChange(order.id)}
                />
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

export default History