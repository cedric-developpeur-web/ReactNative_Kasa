import React from 'react';
import BannerBeach from './BannerBeach';
import CardLogements from './CardLogements';

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
      <CardLogements />
      <CardLogements />
      <CardLogements />
      <CardLogements />
      <CardLogements />
      <CardLogements />
      <CardLogements />
      <CardLogements />
      <CardLogements />
      <CardLogements />
      <CardLogements />
      <CardLogements />
      <CardLogements />
      <CardLogements />
      <CardLogements />
      <CardLogements />
      <CardLogements />
      <CardLogements />
      <CardLogements />
      <CardLogements />
    </main>
  );
};

export default Main;
