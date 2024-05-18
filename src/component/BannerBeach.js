import React from 'react';

const BannerBeach = () => {
  const pictureBeach = './asset/picture/picture_beach.png';
  return (
    <div className="encadrement">
      <img
        className="banner_beach"
        src={pictureBeach}
        alt="montre un bord de plage"
      />
      <p>
        Chez vous,<span>partout et ailleurs</span>
      </p>
    </div>
  );
};

export default BannerBeach;
