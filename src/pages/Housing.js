import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import CollapseImput from '../component/CollapseImput';
import DataCollapseLog from '../datas/DataCollapseLog';

const Housing = () => {
  const arrowRight = 'asset/picture/arrow_right.png';
  const arrowLeft = 'asset/picture/arrow_left.png';
  const imput = DataCollapseLog();

  return (
    <div>
      <Header />
      <main>
        <div className="carrousel">
          <img className="arrow_right" src={arrowRight} alt="arrow next"></img>
          <img className="picture" src="" alt=""></img>
          <img
            className="arrow_left"
            src={arrowLeft}
            alt="arrow previous"
          ></img>
          <div className="number_of_number"></div>
        </div>
        <section>
          {imput.map((collapselog, index) => (
            <CollapseImput
              key={index}
              title={collapselog.title}
              description={collapselog.description}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Housing;
