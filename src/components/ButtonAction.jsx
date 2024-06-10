// src/components/LargeButton.jsx
import React from 'react';
import PropTypes from 'prop-types';
import '../style/ButtonAction.css';

const ButtonAction = ({ text, onClick }) => {
  return (
    <button className="action-button" onClick={onClick}>
      {text}
    </button>
  );
};

ButtonAction.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonAction;
