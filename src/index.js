import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';
import App from './App';

//GOOGLE ANALYTICS
import ReactGA from 'react-ga4'
ReactGA.initialize("G-GV3EMF5W6T");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

