import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import AnnoncesData from '../datas/AnnoncesData';
const Carrousel = () => {
  const arrowRight = '../../asset/picture/arrow_right.png';
  const arrowLeft = '../../asset/picture/arrow_left.png';

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
    <>
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
    </>
  );
};

export default Carrousel;
