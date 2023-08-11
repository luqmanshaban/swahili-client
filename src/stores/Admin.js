import axios from "axios";
import { createContext, useEffect, useState, useCallback } from "react";

export const AdminContext = createContext();

export function AdminProvider({ children }) {
  const [details, setDetails] = useState({});
  
  const memoizedGetAdminDetails = useCallback(() => {
    getAdminDetails();
  }, []); // Providing an empty dependency array

  useEffect(() => {
    memoizedGetAdminDetails();
  }, [memoizedGetAdminDetails]);

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

  const contextValue = {
    details,
    getAdminDetails
  };

  return (
    <AdminContext.Provider value={contextValue}>
      {children}
    </AdminContext.Provider>
  );
}
