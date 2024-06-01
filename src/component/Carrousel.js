import React, { useState } from 'react';
const Carrousel = ({ images }) => {
  const arrowRight = '../../asset/picture/arrow_right.png';
  const arrowLeft = '../../asset/picture/arrow_left.png';

  const [currentPicture, setCurrentPicture] = useState(0);

  if (!images) {
    return <div>Annonce non trouvée</div>;
  }
  let index = 0;

  const nextPicture = () => {
    setCurrentPicture((index) => (index === images.length - 1 ? 0 : index + 1));
  };

  const prevPicture = () => {
    setCurrentPicture((index) => (index === 0 ? images.length - 1 : index - 1));
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
          src={images[currentPicture]}
          alt={`logement $[currentPicture]`}
        ></img>
        <img
          className="arrow_left"
          src={arrowLeft}
          alt="arrow previous"
          onClick={prevPicture}
        ></img>
      </div>
      <span className="number_of_number">
        {index + 1}/{currentPicture}
      </span>
    </>
  );
};

export default Carrousel;
