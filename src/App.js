import React,{useEffect, useState} from 'react';
import styles from './STYLES/App.scss';
import BreakPoint from './STYLES/BreakPoint.css'
import Landing from './components/Landing/Landing'
import LandingPage from './components/Landing/LandingPage'
import {Navigate, Route, Routes } from 'react-router-dom';
import Login from './FORMS/Login';
import Signup from './FORMS/Signup';
import Contact from './components/Landing/Contact';

import Analytics from './Analytics'
import Dashboard from './components/./dashboard/Dashboard';
import MenuLanding from './components/menu/MenuLanding';

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
        <Route exact path='/login' Component={Login } />
        <Route exact path='/signup' Component={Signup } />
        <Route path='/home' Component={LandingPage} />
        <Route path='/contact' Component={Contact} />
        <Route path='/menu/*' Component={MenuLanding} />
        <Route path='/dashboard' Component={Dashboard} />
        <Route path='/' element={<Landing />}/>
      </Routes>

    </div>
  );
}

export default App;
