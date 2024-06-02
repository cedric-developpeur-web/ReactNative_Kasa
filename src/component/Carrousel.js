import React, { useState } from 'react';
const Carrousel = ({ images }) => {
  const arrowRight = '../../asset/picture/arrow_right.png';
  const arrowLeft = '../../asset/picture/arrow_left.png';

  const [currentPicture, setCurrentPicture] = useState(0);

  if (!images || images.length === 0) {
    return <div>Annonce non trouvée</div>;
  }
  // let index = 0;

  const nextPicture = () => {
    setCurrentPicture((index) => (index === images.length - 1 ? 0 : index + 1));
  };

  const prevPicture = () => {
    setCurrentPicture((index) => (index === 0 ? images.length - 1 : index - 1));
  };

  return (
    <>
      <div className="carrousel">
        {images.length > 1 && (
          <img
            className="arrow_right"
            src={arrowRight}
            alt="arrow next"
            onClick={nextPicture}
          ></img>
        )}
        <img
          className="picture"
          src={images[currentPicture]}
          alt={`logement $[currentPicture]`}
        ></img>
        {images.length > 1 && (
          <img
            className="arrow_left"
            src={arrowLeft}
            alt="arrow previous"
            onClick={prevPicture}
          ></img>
        )}
      </div>
      {images.length > 1 && (
        <span className="number_of_number">
          {currentPicture + 1}/{images.length}
        </span>
      )}
    </>
  );
};

export default Carrousel;
