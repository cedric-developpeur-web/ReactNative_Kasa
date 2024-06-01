import React from 'react';
// useParams est un hook qui vient acceder au parametre de l'url on peut extraire une valeur comme un id depuis notre url
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Header from '../component/Header';
import Footer from '../component/Footer';
import CollapseImput from '../component/CollapseImput';
import AnnoncesData from '../datas/AnnoncesData';
import Carrousel from '../component/Carrousel';

const Housing = () => {
  // je vient récuperer l'id dans url pour chaque carte logement
  const { id } = useParams();
  const annonces = AnnoncesData();
  const annonce = annonces.find((annonce) => annonce.id === id);

  if (!annonce) {
    return <div>Annonce non trouvée</div>;
  }

  return (
    <div>
      <Header />
      <main>
        <Carrousel images={annonce.pictures} />
        <h1>{annonce.title}</h1>
        <h3>{annonce.location}</h3>
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
          <span className="conseiller">
            <h5>{annonce.host.name}</h5>
            <img src={annonce.host.picture} alt={annonce.host.name}></img>
          </span>
        </div>
        <section>
          <CollapseImput
            title={'Description'}
            description={annonce.description}
          />
          <CollapseImput
            title={'Équipements'}
            description={
              <ul>
                {annonce.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            }
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Housing;
