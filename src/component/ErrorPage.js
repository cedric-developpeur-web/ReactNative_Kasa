import React from 'react';

const ErrorPage = () => {
  const logoError = './asset/picture/404.png';
  return (
    <section>
      <div className="error_logo">
        <img src={logoError} alt="logo erreur 404" />
      </div>
      <p id="message_error">
        Oups! La page que <span>vous demandez n'existe pas.</span>
      </p>
      <p id="return_page">Retourner sur la page d’accueil</p>
    </section>
  );
};

export default ErrorPage;
