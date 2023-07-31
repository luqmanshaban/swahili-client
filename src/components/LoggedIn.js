// Protected.js
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ children }) => {
  const token = localStorage.getItem("token");
  const [loggedIn] = useState(!!token);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
      navigate("/login");
    }
  }, [loggedIn, navigate]);

  // Show a loading indicator or null while checking the token initially
  if (loggedIn === null) {
    return null; // or a loading indicator
  }

  return loggedIn ? children : null;
};

export default Protected;
