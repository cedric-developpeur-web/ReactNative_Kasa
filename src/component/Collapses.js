import React, { useState } from 'react';

const Collapse = ({ title, description }) => {
  // par defaut useState et a false
  const [opening, setopening] = useState();

  const toggleDescription = () => {
    setopening(!opening);
  };
  return (
    <>
      <div className="collapses">
        <h4>{title}</h4>
        {/* si je clic sur l'icone du chevron je lui applique une rotation de -180deg avec une transition de 0.5 */}
        <i
          className={`fa-solid fa-chevron-up`}
          style={{
            transform: opening ? 'rotate(-180deg)' : 'none',
            transition: 'transform 0.5s ease',
          }}
          onClick={toggleDescription}
        ></i>
      </div>
      <div>
        {/* quand je clique sur le chevron si opening et false la classe close s'applique mais si opening et true la classe open s'applique */}
        <span className={opening ? 'open' : 'close'}>{description}</span>
      </div>
    </>
  );
};

export default Collapse;
