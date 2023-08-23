import React, { useEffect, useState } from 'react'
import styles from './History.module.scss'
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';


const History = ({active, click}) => {
  const [orders, setOrders] = useState([]);

  const getActiveOrders = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get(`http://localhost:8000/api/orders/`, {
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
    getActiveOrders();
  }, []);
    
  return (
    <div className={styles.main}>
        <div className={styles.background} onClick={click}>
        </div>
        <section className={`${styles.history} ${active ? styles.active : ''}`}>
            <button className={styles.cancel} onClick={click}><CloseIcon className={styles.icon}/></button>
            <h1>History</h1>

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
                <p>Status: <span style={{ color: order.status === 'cancelled' ? 'red' : 'green' }}>{order.status}</span></p>
              </div>
            ))
          )}

        </section>
    </div>
  )
}

export default History;