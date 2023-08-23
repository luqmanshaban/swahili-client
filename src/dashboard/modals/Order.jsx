import React, { useState, useEffect } from 'react';
import styles from './Order.module.scss';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';


const Order = ({ active, click }) => {
  const [orders, setOrders] = useState([]);

  const getActiveOrders = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get(`http://localhost:8000/api/orders/active`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setOrders(response.data.orders);
    } catch (error) {
      console.error(error);
    }
  };

  const cancelOrder = async (id) => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.put(
        `http://localhost:8000/api/cancel-order/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  

  useEffect(() => {
    getActiveOrders();
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.background} onClick={click}>
      </div>
        <section className={`${styles.orders} ${active ? styles.active : ''}`}>
          <button className={styles.cancel} onClick={click}><CloseIcon className={styles.icon}/></button>
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
                <p>Status: <span style={{color: 'green'}}>{order.status}</span></p>
                <button onClick={() => cancelOrder(order.id)}>cancel</button>
              </div>
            ))
          )}

          <div className={styles.status}></div>
        </section>
    </div>
  );
};

export default Order;
