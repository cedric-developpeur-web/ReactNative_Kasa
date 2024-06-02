import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const logoHeader = '../../asset/picture/logo_header.png';

  const navBar = ({ isActive }) => ({
    textDecoration: isActive ? 'underline' : 'none',
  });

  return (
    // pour déclarer une class css en react nous utilison className
    <div className="navigation">
      <img src={logoHeader} alt="logo kasa"></img>
      <nav>
        {/* navlink en react correspond a la balise (a) en html pour les liens 
        nous utilison to="/" pour lui attributer la page ou sera rediriger le lien */}
        <NavLink className="acceuil" to="/" style={navBar}>
          ACCUEIL
        </NavLink>
        <NavLink className="propos" to="/about" style={navBar}>
          A PROPOS
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
