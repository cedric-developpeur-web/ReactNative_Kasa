import React from 'react';
import { useNavigate } from 'react-router-dom';
import AnnoncesData from '../datas/AnnoncesData';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Banner from '../component/Banner';
const Home = () => {
  const srcPictureBeach = './asset/picture/picture_beach.png';
  const altPictureBeach = 'montre un bord de plage';
  const annonces = AnnoncesData();
  const navigate = useNavigate();
  const click = (id) => {
    navigate(`/Housing/${id}`);
  };

  return (
    <div>
      <Header />
      <main>
        <Banner src={srcPictureBeach} alt={altPictureBeach} removeTagP />
        {annonces.map((annonce) => (
          // la balise parent qui récuperer les id de chaque images
          <div
            className="rental"
            key={annonce.id}
            onClick={() => click(annonce.id)}
          >
            {/*je vient récuperer url de mes images grâce a cover dans src*/}
            <img src={annonce.cover} alt={annonce.description} />
            <p>{annonce.title}</p>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
