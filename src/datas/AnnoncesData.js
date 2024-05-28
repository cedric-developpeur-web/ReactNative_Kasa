// importation des hooks (useEffect gére les effets secondaire) (useState défini l'état)
import { useEffect, useState } from 'react';

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
  return annonces;
};

export default AnnoncesData;
