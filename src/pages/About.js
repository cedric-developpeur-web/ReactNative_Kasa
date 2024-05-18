import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import BannerBeach from '../component/BannerBeach';
import Imput from '../component/Imput';

const About = () => {
  const srcPictureMontain = './asset/picture/picture_montain.png';
  const altPictureMontain = 'plage montagne';
  return (
    <div>
      <Header />
      <main>
        <BannerBeach
          src={srcPictureMontain}
          alt={altPictureMontain}
          removeTagP={false}
        />
        <Imput />
      </main>
      <Footer />
    </div>
  );
};

export default About;
