// src/components/NavBar.jsx
import React from 'react';
import PropTypes from 'prop-types';
import ButtonBack from './ButtonBack';
import '../style/NavBar.css'; // Asegúrate de que la ruta sea correcta
import backIcon from '../assets/arrow.png'; // Asegúrate de tener un icono de back en la carpeta assets

const NavBar = ({ title, onButtonClick }) => {
  return (
    <div className="navbar">
      <ButtonBack onClick={onButtonClick} icon={backIcon} />
      <div className="nav-title">
        {title}
      </div>
    </div>
  );
};

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default NavBar;
