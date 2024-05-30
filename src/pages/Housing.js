import React, { useState } from 'react';
// useParams est un hook qui vient acceder au parametre de l'url on peut extraire une valeur comme un id depuis notre url
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Header from '../component/Header';
import Footer from '../component/Footer';
import CollapseImput from '../component/CollapseImput';
import DataCollapseLog from '../datas/DataCollapseLog';
import AnnoncesData from '../datas/AnnoncesData';

const Housing = () => {
  const arrowRight = '../../asset/picture/arrow_right.png';
  const arrowLeft = '../../asset/picture/arrow_left.png';
  const imput = DataCollapseLog();

  // je vient récuperer l'id dans url pour chaque carte logement
  const { id } = useParams();
  const annonces = AnnoncesData();
  const annonce = annonces.find((annonce) => annonce.id === id);
  const [currentPicture, setCurrentPicture] = useState(0);

  if (!annonce) {
    return <div>Annonce non trouvée</div>;
  }

  const nextPicture = () => {
    setCurrentPicture((index) =>
      index === annonce.pictures.length - 1 ? 0 : index + 1
    );
  };

  const prevPicture = () => {
    setCurrentPicture((index) =>
      index === 0 ? annonce.pictures.length - 1 : index - 1
    );
  };

  return (
    <div>
      <Header />
      <main>
        <div className="carrousel">
          <img
            className="arrow_right"
            src={arrowRight}
            alt="arrow next"
            onClick={nextPicture}
          ></img>
          <img
            className="picture"
            src={annonce.pictures[currentPicture]}
            alt={`logement $[currentPicture]`}
          ></img>
          <img
            className="arrow_left"
            src={arrowLeft}
            alt="arrow previous"
            onClick={prevPicture}
          ></img>
          <div className="number_of_number"></div>
        </div>
        <div className="btn_logements">
          {annonce.tags.map((tag, index) => (
            <button id="tags" key={index}>
              {tag}
            </button>
          ))}
        </div>
        <div className="iconeStars">
          {[...Array(5)].map((_, index) => (
            <FontAwesomeIcon key={index} className="stars" icon={faStar} />
          ))}
        </div>
        <section>
          {imput.map((collapselog, index) => (
            <CollapseImput
              key={index}
              title={collapselog.title}
              description={collapselog.description}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Housing;
