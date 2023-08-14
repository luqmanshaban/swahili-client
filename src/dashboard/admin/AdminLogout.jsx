import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';


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
    <button style={{backgroundColor: '#1B1515'}} onClick={Logout}><LogoutIcon style={{color: '#fff', fontSize: '40px'}}/></button>
  )
}

export default AdminLogout