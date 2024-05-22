// import { useEffect, useState } from 'react';
import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Banner from '../component/Banner';
import CollapseImput from '../component/CollapseImput';

const About = () => {
  const srcPictureMontain = './asset/picture/picture_montain.png';
  const altPictureMontain = 'plage montagne';

  const [collapses, setCollapses] = useState([]);
  useEffect(() => {
    // vient recuperer les données du fichier json
    const fetchData = async () => {
      const reponse = await fetch('/fichier_json/collapse.json');
      if (!reponse.ok) {
        console.error('error');
        return;
      }
      // vient conserver les données recuperer du fichier json
      const data = await reponse.json();
      // met a jour l'etat (annonces) avec les donnée du fichier json lors du permier rendu du component
      setCollapses(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Header />
      <main>
        <Banner
          src={srcPictureMontain}
          alt={altPictureMontain}
          removeTagP={false}
        />
        {/* je vient crée 4 collapse en leur indiquant de recupérer les données du tableau qui est stocke dans const collapses */}
        {collapses.map((collapse, index) => (
          <CollapseImput
            key={index}
            title={collapse.title}
            description={collapse.description}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default About;
