import React from 'react';
import ReactDOM from 'react-dom/client';
import Routeur from './Routeur';
import './styles/scss/import.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routeur />
  </React.StrictMode>
);
