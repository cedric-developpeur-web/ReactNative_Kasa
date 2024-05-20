// importation des hooks (useEffect gére les effets secondaire) (useState défini l'état)
import React, { useEffect, useState } from 'react';

const AnnoncesData = () => {
  // declare un etat local (annonces) setAnnonces est la fonction qui sert a mettre a jour useState vient initialiser annonces avec un tableau vide
  const [annonces, setAnnonces] = useState([]);

  useEffect(() => {
    // vient recuperer les données du fichier json
    const fetchData = async () => {
      const reponse = await fetch('/fichier_json/annonces.json');
      if (!reponse.ok) {
        console.error('error');
        return;
      }
      // vient conserver les données recuperer du fichier json
      const data = await reponse.json();
      // met a jour l'etat (annonces) avec les donnée du fichier json lors du permier rendu du component
      setAnnonces(data);
    };
    fetchData();
  }, []);
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

export default AnnoncesData;
