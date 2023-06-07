import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/style.css'
import UserContext from './contexts/UserContext';

// document.documentElement.style.setProperty('--primary-100', '#5928DC');



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContext>
      <App />
    </UserContext>
  </React.StrictMode>
);
