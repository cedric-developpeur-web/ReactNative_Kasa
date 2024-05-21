import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Banner from '../component/Banner';
import CollapseImput from '../component/CollapseImput';

const About = () => {
  const srcPictureMontain = './asset/picture/picture_montain.png';
  const altPictureMontain = 'plage montagne';
  return (
    <div>
      <Header />
      <main>
        <Banner
          src={srcPictureMontain}
          alt={altPictureMontain}
          removeTagP={false}
        />
        <CollapseImput />
        <CollapseImput />
        <CollapseImput />
        <CollapseImput />
      </main>
      <Footer />
    </div>
  );
};

export default About;
