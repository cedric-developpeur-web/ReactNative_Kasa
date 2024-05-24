import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Collapse = ({ title, description }) => {
  return (
    <section id="menu">
      <div className="collapse_imput">
        <FontAwesomeIcon className="cheveron_up" icon={faChevronUp} />
        <h4>{title}</h4>
      </div>
      <p>{description}</p>
    </section>
  );
};

export default Collapse;
