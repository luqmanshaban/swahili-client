import React, { useEffect } from 'react';
import styles from './STYLES/App.scss';
import BreakPoint from './STYLES/BreakPoint.css';
import Landing from './components/Landing/Landing';
import LandingPage from './components/Landing/LandingPage';
import { Route, Routes } from 'react-router-dom';
import Login from './FORMS/Login';
import Signup from './FORMS/Signup';
import Contact from './components/Landing/Contact';

import Analytics from './Analytics';
import Dashboard from './components/dashboard/Dashboard';
import AdminDashboard from './components/dashboard/admin/AdminDashboard';
import Protected from './components/LoggedIn';
import Menus from './components/menus/FoodMenus';
import Drinks from './components/menus/Drinks';

function App() {

  /////// ANALYTICS ////////////
  useEffect(() => {
    Analytics('G-GV3EMF5W6T');
    window.gtag('config', 'G-GV3EMF5W6T', {
      page_path: window.location.pathname,
    });

  }, []);
  ///////////////////

  return (
    
    <div className={`${styles.App} ${BreakPoint.App} `}>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<LandingPage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/menu/*' element={<Menus />} />
        <Route path='/drinks' element={<Drinks />}  />
        <Route path='/dashboard/*' element={<Protected><Dashboard /></Protected>} />
        <Route path='/admin' element={<Protected><AdminDashboard /></Protected>} />
        <Route path='/' element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
