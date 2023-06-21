import React, { useState, useEffect } from 'react';
import styles from './Order.module.scss';
import axios from 'axios';

const Order = ({ active, click }) => {
  const [orders, setOrders] = useState([]);

  // user's customerId
  const custId = localStorage.getItem('customerId');

  const getAllOrders = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/v1/orders/customer/${custId}`);
      setOrders(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(orders);
  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.background} onClick={click}>
      <section className={`${styles.orders} ${active ? styles.active : ''}`}>
        <h1>Orders</h1>
        
        {orders && orders.length === 0 ? (
          <h2>No Active orders</h2>
        ) : (
          orders.map((order) => (
            <div key={order.orderId} className={styles.order}>
              <img src={order.foodImage} alt="" height={50} />
              <h1>{order.foodName}</h1>
              <p>price: {order.foodPrice}</p>
              <p>quantity: {order.orderQuantity}</p>
              <p>Total: {order.totalPrice}</p>
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
