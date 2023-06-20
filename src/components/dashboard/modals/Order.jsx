import React, { useState, useEffect } from 'react';
import styles from './Order.module.scss';
import axios from 'axios';

const Order = ({ active, click }) => {
  const [orders, setOrders] = useState([]);

  // user's customerId
  const custId = localStorage.getItem('customerId');

  const getAllOrders = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/v1/orders/${custId}`);
      setOrders([response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllOrders();
  }, []); // Run once on component mount

  return (
    <div className={styles.main}>
      <div className={styles.background} onClick={click}>
        <section className={`${styles.orders} ${active ? styles.active : ''}`}>
          <h1>Orders</h1>
          {
            orders.map(order => (
              <div key={order.orderId}>
                <img src={order.foodImage} alt="" height={50}/>
                <h1>{order.foodName}</h1>
                <p>{order.foodPrice}</p>
                <p>{order.orderQuantity}</p>
                <p>{order.totalPrice}</p>
              </div>
            ))
          }
        </section>
      </div>
    </div>
  );
};

export default Order;
