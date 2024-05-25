import React from 'react';
import Banner from './Banner';
import Logement from './Logements';

const Main = () => {
  const srcPictureBeach = './asset/picture/picture_beach.png';
  const altPictureBeach = 'montre un bord de plage';
  return (
    <main>
      <Banner src={srcPictureBeach} alt={altPictureBeach} removeTagP />
      <Logement />
    </main>
  );
};

export default Main;
