import React, { useState, useEffect } from 'react';
import styles from './Order.module.scss';
import axios from 'axios';

const Order = ({ active, click }) => {
  const [orders, setOrders] = useState([]);

  const getAllOrders = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get(`http://localhost:8000/api/orders`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setOrders(response.data.orders);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.background} onClick={click}>
        <section className={`${styles.orders} ${active ? styles.active : ''}`}>
          <h1>Orders</h1>

          {orders.length === 0 ? (
            <h2>No Active orders</h2>
          ) : (
            orders.map((order) => (
              <div key={order.id} className={styles.order}>
                <img src={order.img} alt="" height={50} />
                <h1>{order.name}</h1>
                <p>price: {order.total}</p>
                <p>quantity: {order.quantity}</p>
                <p>Total: {order.total}</p>
              </div>
            ))
          )}

          <div className={styles.status}></div>
        </section>
      </div>
    </div>
  );
};

export default Order;
