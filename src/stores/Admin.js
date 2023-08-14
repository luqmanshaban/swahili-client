import axios from "axios";
import { createContext, useState } from "react";

export const AdminContext = createContext();

export function AdminProvider({ children }) {
  const [adminDetails, setDetails] = useState({});
  const [profilePic, setProfilePic] = useState(null);
  const [users, setUsers] = useState([])
  

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

  const getProfilePicture = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:8000/api/profiles', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setProfilePic(response.data.profilePic);
    } catch (error) {
      console.error('Error fetching profile picture:', error);
    }
  };

  const getUsers = async () => {
    const token = localStorage.getItem('token');
    
    await axios.get('http://localhost:8000/api/users', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      setUsers(response.data.users);
    }).catch(error => {
      console.error("Error fetching users:", error);
    });
  }


  const contextValue = {
    adminDetails,
    profilePic,
    users,
    getAdminDetails,
    getProfilePicture,
    getUsers
  };

  return (
    <AdminContext.Provider value={contextValue}>
      {children}
    </AdminContext.Provider>
  );
}
