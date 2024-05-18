import React from 'react';

const BannerBeach = () => {
  const pictureBeach = './asset/picture/picture_beach.png';
  return (
    <div>
      <img
        className="banner_beach"
        src={pictureBeach}
        alt="montre un bord de plage"
      />
      <p>Chez vous, partout et ailleurs</p>
    </div>
  );
};

export default BannerBeach;
