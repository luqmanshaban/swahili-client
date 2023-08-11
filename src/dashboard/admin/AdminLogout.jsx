import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const style = {
    textAlign: 'center',
    backgroundColor: 'red',
    border: '1px solid red',
    borderRadius: '10px',
    padding: '10px 15px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff',
    transition: '0.3s ease-in-out',
    cursor: 'pointer',

}

const AdminLogout = () => {
    const navigate = useNavigate()
    const Logout = async () => {
        const token = localStorage.getItem('token');
        try {
           await axios.post(
            'http://localhost:8000/api/admin/logout',
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
            );
          localStorage.removeItem('token')
          navigate('/')
        } catch (error) {
          console.log(error);
        }
      };
  return (
    <button onClick={Logout} style={style}>Logout</button>
  )
}

export default AdminLogout