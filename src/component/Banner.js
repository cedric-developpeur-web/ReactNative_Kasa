import React from 'react';

const Banner = ({ src, alt, removeTagP }) => {
  return (
    <div className="card_banner">
      <img className="banner_beach" src={src} alt={alt} />
      {removeTagP && (
        <p>
          Chez vous,&nbsp;<span>partout et ailleurs</span>
        </p>
      )}
    </div>
  );
};

export default Banner;
