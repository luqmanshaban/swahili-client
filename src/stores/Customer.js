import axios from "axios";
import { createContext, useState } from "react";

export const CustomerContext = createContext();

export function CustomerProvider({ children }) {
  const [customerDetails, setDetails] = useState({});
  const [profilePic, setProfilePic] = useState(null);
  

  const getCustomerDetails = async () => {
    try {
      const token = localStorage.getItem('token');
      
      const response = await axios.get('http://localhost:8000/api/customer-details', {
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
      const response = await axios.get('http://localhost:8000/api/customer-profile-pictures', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setProfilePic(response.data.profilePic);
    } catch (error) {
      console.error('Error fetching profile picture:', error);
    }
  };




  const contextValue = {
    customerDetails,
    profilePic,
    getCustomerDetails,
    getProfilePicture,
  };

  return (
    <CustomerContext.Provider value={contextValue}>
      {children}
    </CustomerContext.Provider>
  );
}
