import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Carousel from '../component/Carousel';
import CollapseImput from '../component/CollapseImput';

const Housing = () => {
  const [collapsesLog, setCollapsesLog] = useState([]);
  useEffect(() => {
    // vient recuperer les données du fichier json
    const fetchData = async () => {
      const reponse = await fetch('/fichier_json/collapse_logement.json');
      if (!reponse.ok) {
        console.error('error');
        return;
      }
      // vient conserver les données recuperer du fichier json
      const data = await reponse.json();
      // met a jour l'etat (annonces) avec les donnée du fichier json lors du permier rendu du component
      setCollapsesLog(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <main>
        <Carousel />
        {collapsesLog.map((collapselog, index) => (
          <CollapseImput
            key={index}
            title={collapselog.title}
            description={collapselog.description}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Housing;
