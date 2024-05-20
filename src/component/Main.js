import React from 'react';
import BannerBeach from './BannerBeach';
import AnnoncesData from './AnnoncesData';

const Main = () => {
  const srcPictureBeach = './asset/picture/picture_beach.png';
  const altPictureBeach = 'montre un bord de plage';
  return (
    <main>
      <BannerBeach
        src={srcPictureBeach}
        alt={altPictureBeach}
        removeTagP={true}
      />
      <AnnoncesData />
    </main>
  );
};

export default Main;
