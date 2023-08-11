import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';
import App from './App';
import { UserProvider } from './stores/AuthUser';
//GOOGLE ANALYTICS
import ReactGA from 'react-ga4'
import { MenuProvider } from './stores/MenuContext';
import { AdminProvider } from './stores/Admin';
ReactGA.initialize("G-GV3EMF5W6T");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
      <MenuProvider>
        <AdminProvider>
          <App />
        </AdminProvider>
      </MenuProvider>
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

