import React from 'react';
// useParams est un hook qui vient acceder au parametre de l'url on peut extraire une valeur comme un id depuis notre url
import { useParams } from 'react-router-dom';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Collapses from '../component/Collapses';
import AnnoncesData from '../datas/AnnoncesData';
import Carrousel from '../component/Carrousel';
import ErrorPage from '../component/ErrorPage';

const Housing = () => {
  // je vient récuperer l'id dans url pour chaque carte logement
  const { id } = useParams();
  const annonces = AnnoncesData();
  const annonce = annonces.find((annonce) => annonce.id === id);

  if (!annonce) {
    return (
      <>
        <Header />
        <ErrorPage />
        <Footer />
      </>
    );
  }
  const renderStars = () => {
    const rating = annonce.rating;
    const stars = [];
    const fullStar = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="fa_star"
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
          clipRule="evenodd"
        />
      </svg>
    );
    const emptyStar = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="etoile"
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
          clipRule="evenodd"
        />
      </svg>
    );
    for (let i = 0; i < 5; i++) {
      stars.push(<span key={i}>{i < rating ? fullStar : emptyStar}</span>);
    }
    return stars;
  };

  return (
    <div>
      <Header />
      <main id="log">
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
          {renderStars()}
          <span className="conseiller">
            <h5>{annonce.host.name}</h5>
            <img src={annonce.host.picture} alt={annonce.host.name}></img>
          </span>
        </div>
        <section>
          <Collapses title={'Description'} description={annonce.description} />
          <Collapses
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
