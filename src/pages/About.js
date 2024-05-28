// import { useEffect, useState } from 'react';
import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Banner from '../component/Banner';
import CollapseImput from '../component/CollapseImput';
import DataCollapseAbout from '../datas/DataCollapseAbout';

const About = () => {
  const srcPictureMontain = './asset/picture/picture_montain.png';
  const altPictureMontain = 'plage montagne';
  const input = DataCollapseAbout();
  return (
    <div>
      <Header />
      <main>
        <Banner src={srcPictureMontain} alt={altPictureMontain} />
        {/* je vient crée 4 collapse en leur indiquant de recupérer les données du tableau qui est stocke dans const collapses */}
        <section>
          {input.map((collapse, index) => (
            <CollapseImput
              key={index}
              title={collapse.title}
              description={collapse.description}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
