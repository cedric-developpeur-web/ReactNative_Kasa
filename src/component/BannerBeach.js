import React from 'react';

const BannerBeach = ({ src, alt, removeTagP }) => {
  return (
    <div className="card_banner">
      <img className="banner_beach" src={src} alt={alt} />
      {removeTagP && (
        <p>
          Chez vous,<span>partout et ailleurs</span>
        </p>
      )}
    </div>
  );
};

export default BannerBeach;
