import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Collapse = ({ title, description }) => {
  // par defaut useState et a false
  const [opening, setopening] = useState();

  const toggleDescription = () => {
    setopening(!opening);
  };
  return (
    <>
      <div className="collapse_imput">
        <h4>{title}</h4>
        {/* si je clic sur l'icone du chevron je lui applique une rotation de -180deg avec une transition de 0.5 */}
        <FontAwesomeIcon
          className={'chevron'}
          style={{
            transform: opening ? 'rotate(-180deg)' : 'none',
            transition: 'transform 0.5s ease',
          }}
          icon={faChevronUp}
          onClick={toggleDescription}
        />
      </div>
      <div>
        {/* quand je clique sur le chevron si opening et false la classe close s'applique mais si opening et true la classe open s'applique */}
        <span className={opening ? 'open' : 'close'}>{description}</span>
      </div>
    </>
  );
};

export default Collapse;
