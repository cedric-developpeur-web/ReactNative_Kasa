import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Collapse = ({ title, description }) => {
  const [opening, setopening] = useState(false);

  const toggleDescription = () => {
    setopening(!opening);
  };
  const iconClick = () => {
    toggleDescription();
  };

  return (
    <section id="menu">
      <div className="collapse_imput" onClick={iconClick}>
        <FontAwesomeIcon
          className={`chevron_up ${opening ? 'open' : ''}`}
          icon={faChevronUp}
        />
        <h4>{title}</h4>
      </div>
      <p className={`descriptif ${opening ? 'open' : ''}`}>{description}</p>
    </section>
  );
};

export default Collapse;
