import React from 'react';

const Collapse = ({ title, description }) => {
  return (
    <section id="menu">
      <div className="collapse_imput">
        <h4>{title}</h4>
      </div>
      <p>{description}</p>
    </section>
  );
};

export default Collapse;
