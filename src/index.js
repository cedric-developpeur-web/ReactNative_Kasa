import React from 'react';
import ReactDOM from 'react-dom/client';
import Routeur from './Routeur';
import './styles/scss/import.scss';
// importation de fontawesome pour utiliser les icones
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
// importation de fontawesome (utilisation d'autre icones comme les icones de marques)
import { fab } from '@fortawesome/free-brands-svg-icons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routeur />
  </React.StrictMode>
);

library.add(fas);
library.add(fab);
