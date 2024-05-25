import React from 'react';
import AnnoncesData from '../hook/AnnoncesData';

const Logement = () => {
  const annonces = AnnoncesData();

  return (
    <>
      {annonces.map((annonce) => (
        // la balise parent qui récuperer les id de chaque images
        <div className="rental" key={annonce.id}>
          {/*je vient récuperer url de mes images grâce a cover dans src*/}
          <img src={annonce.cover} alt={annonce.description} />
          <p>{annonce.title}</p>
        </div>
      ))}
    </>
  );
};

export default Logement;
