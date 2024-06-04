import React from 'react';
import { Link } from 'react-router-dom';
import AnnoncesData from '../datas/AnnoncesData';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Banner from '../component/Banner';
const Home = () => {
  const srcPictureBeach = './asset/picture/picture_beach.png';
  const altPictureBeach = 'montre un bord de plage';
  const annonces = AnnoncesData();
  // const navigate = useNavigate();
  // const click = (id) => {
  //   navigate(`/housing/${id}`);
  // };

  return (
    <div>
      <Header />
      <main>
        <Banner src={srcPictureBeach} alt={altPictureBeach} removeTagP />
        {annonces.map((annonce) => (
          // la balise parent qui récuperer les id de chaque images
          <Link to={`/housing/${annonce.id}`} key={annonce.id}>
            <div className="rental">
              {/*je vient récuperer url de mes images grâce a cover dans src*/}
              <img src={annonce.cover} alt={annonce.description} />
              <p>{annonce.title}</p>
            </div>
          </Link>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
