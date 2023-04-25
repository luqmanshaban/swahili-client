import React,{useEffect, useState} from 'react';

import styles from './STYLES/App.scss';
import BreakPoint from './STYLES/BreakPoint.css'
import Landing from './components/Landing/Landing';
import Navbar from './components/Landing/Navbar';
import {Navigate, Route, Routes } from 'react-router-dom';
import Login from './FORMS/Login';
import Signup from './FORMS/Signup';
import Contact from './components/Landing/Contact';
import Menu from './components/menu/Menu';

import Analytics from './Analytics'
import Dashboard from './components/./dashboard/Dashboard';

function App() {
  const isDashboard = window.location.pathname === '/dashboard';
  const [logged, setLogged] = useState(!isDashboard)

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
      {logged ? !isDashboard && <Navbar /> : setLogged(isDashboard)}
      

      <Routes>
        <Route exact path='/login' Component={Login } />
        <Route exact path='/signup' Component={Signup } />
        <Route path='/swahili-client' Component={Landing} />
        <Route path='/contact' Component={Contact} />
        <Route path='/menu' Component={Menu} />
        <Route path='/dashboard/*' Component={Dashboard} />
        <Route path='/' element={<Navigate to='/swahili-client'></Navigate>}/>
      </Routes>

    </div>
  );
}

export default App;
