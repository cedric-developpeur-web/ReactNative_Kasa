import { useEffect, useState } from 'react';

const DataCollapseAbout = () => {
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
  return collapses;
};

export default DataCollapseAbout;
