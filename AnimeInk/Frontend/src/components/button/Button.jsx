import React from "react";
import "./Button.scss";

const Button = ({ children, onClick, type }) => {
  const determineClass = () => {
    switch (type) {
      case "secondary":
        return "secondary";
      case "tertiary":
        return "tertiary";
      default:
        return "primary";
    }
  };

  return (
    <button className={`btn ${determineClass()}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

/* EXEMPLE D'UTILISATION D'UN COMPOSANT BOUTTON DANS UN AUTRE COMPOSANT.

import React from 'react';
import Button from './Button';

const ExampleComponent = () => {
  const handleButtonClick = () => {
    // Logique de gestion du clic
    console.log('Bouton cliqué !');
  };

  return (
    <div>
      <Button type="primary" onClick={handleButtonClick}>Bouton Principal</Button>
      <Button type="secondary" onClick={handleButtonClick}>Bouton Secondaire</Button>
      <Button type="tertiary" onClick={handleButtonClick}>Bouton Tertiaire</Button>
    </div>
  );
};

export default ExampleComponent;
*/
