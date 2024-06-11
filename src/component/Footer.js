import React from 'react';

const Footer = () => {
  const logoFooter = '../../asset/picture/logo_footer.png';
  return (
    <footer>
      <img src={logoFooter} alt="logo kasa"></img>
      <p>
        © 2020 Kasa. All&nbsp;<span>rights reserved</span>
      </p>
    </footer>
  );
};

export default Footer;
