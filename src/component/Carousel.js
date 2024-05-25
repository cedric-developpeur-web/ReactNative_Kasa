import React from 'react';

const Carousel = () => {
  const arrowLeft = 'asset/picture/arrow_left.png';
  const arrowRight = 'asset/picture/arrow_right.png';
  return (
    <div className="carrousel">
      <img className="arrow_right" src={arrowRight} alt="arrow next"></img>
      <img className="picture" src="" alt=""></img>
      <img className="arrow_left" src={arrowLeft} alt="arrow previous"></img>
    </div>
  );
};

export default Carousel;
