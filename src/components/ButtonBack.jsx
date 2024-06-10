// src/components/ButtonBack.jsx
import React from 'react';
import PropTypes from 'prop-types';
import '../style/ButtonBack.css';

const ButtonBack = ({ onClick, icon }) => {
  return (
    <button className="button-back" onClick={onClick}>
      <img src={icon} alt="Back" />
    </button>
  );
};

ButtonBack.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ButtonBack;
