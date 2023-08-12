import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Header = () => {
  const [details, setDetails] = useState({});
  
  const getAdminDetails = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:8000/api/admin-details', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setDetails(response.data.details);
    } catch (error) {
      console.error("Error fetching admin details:", error);
    }
  };

  useEffect(() => {
    getAdminDetails();
  },[])
  return (
    <div>
        <h1>Welcome back {details.firstname}</h1>
        
    </div>
  )
}

export default Header