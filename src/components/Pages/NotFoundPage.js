import React from 'react';
import LinkButton from '../../components/Button/LinkButton';

const NotFoundPage = () => {
    return (
      <div style={{marginTop: '100px'}}>
        <h1>404 error</h1>
        <h2>Página no encontrada</h2>
        <p>La página que está buscando no existe</p>
        <LinkButton path="/" label="VOLVER AL INICIO" />
      </div>
    );
  };

export default NotFoundPage;