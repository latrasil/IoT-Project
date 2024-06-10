// src/pages/ButtonGridPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonAction from '../components/ButtonAction';
import NavBar from '../components/NavBar';
import '../style/ButtonGridPage.css';
import pageTitles from '../pageTitles.js';

function ButtonGridPage() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Esto navega una página hacia atrás
  };

  const handleClick = (buttonId) => {
    console.log(`Botón ${buttonId} clicado`);
  };

  return (
    <div className="button-grid-page">
      <NavBar 
        title={pageTitles.buttonGrid} 
        onButtonClick={handleBackClick} 
      />
      <div className="button-grid-container">
        <ButtonAction text="Botón 1" onClick={() => handleClick(1)} />
        <ButtonAction text="Botón 2" onClick={() => handleClick(2)} />
        <ButtonAction text="Botón 3" onClick={() => handleClick(3)} />
        <ButtonAction text="Botón 4" onClick={() => handleClick(4)} />
        <ButtonAction text="Botón 5" onClick={() => handleClick(5)} />
        <ButtonAction text="Botón 6" onClick={() => handleClick(6)} />
      </div>
    </div>
  );
}

export default ButtonGridPage;
