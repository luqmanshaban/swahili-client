import React, { useEffect, useState } from 'react'
import styles from './Messages.module.scss'
import axios from 'axios';

const Messages = () => {
  const [activeMessages, setActiveMessages] = useState([])

  const getActiveMessages = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get(`http://localhost:8000/api/admin/messages/`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setActiveMessages(response.data.message);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getActiveMessages();
  }, []);

  return (
    <div className={styles.messages}>
      <section className={styles.message}>
          <div>
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>ID</th>
                  <th>Date</th>
                  <th>Customer</th>
                  <th>Topic</th>
                  <th>Message</th>
                  <th>Status</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {
                activeMessages.map((message, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{message.id}</td>
                    <td>{message.created_at.slice(0,10)}</td>
                    <td>{message.user.firstname} {message.user.lastname}</td>
                    <td>{message.topic}</td>
                    <td>{message.message}</td>
                    <td><span style={{ color: message.status === 'cancelled' ? 'red' : 'green' }}>{message.status}</span></td>
                    <td><a href={`mailto:${message.email}`} target='_blank' rel='noreferrer'>reply</a></td>
                  </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </section>
    </div>
  )
}

export default Messages