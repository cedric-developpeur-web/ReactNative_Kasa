import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Housing from './pages/Housing';
import Logements from './component/Logements';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* me permet de declare toutes les pages de mon site */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* redirection de logement vers la page housing qui affiche toutes les imformation */}
        <Route exact path="/logements" element={<Logements />} />
        <Route path="/housing" element={<Housing />} />
        {/* path="*" me permet de faire une redirection si ça correspond a aucune page */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
